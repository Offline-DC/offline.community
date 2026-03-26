import { useState, useEffect, type ReactNode } from 'react';
import './MonthOffline.css';

interface ScheduleItem {
  type: 'li' | 'special-event';
  text: string;
}

interface ScheduleColumn {
  title: string;
  items: ScheduleItem[];
}

interface ScheduleData {
  columns: ScheduleColumn[];
}

// Parse markdown-style links [text](url) into React anchor elements
const parseMarkdownLinks = (text: string): ReactNode[] => {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <a key={match.index} href={match[2]} target="_blank" rel="noopener noreferrer">
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
};

// Location icons mapping based on title keywords
function getLocationIcon(title: string): string {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('nyc') || lowerTitle.includes('brooklyn') || lowerTitle.includes('new york')) {
    return '🗽';
  }
  if (lowerTitle.includes('dc') || lowerTitle.includes('washington')) {
    return '🏛️';
  }
  if (lowerTitle.includes('la') || lowerTitle.includes('los angeles')) {
    return '🌴';
  }
  if (lowerTitle.includes('sf') || lowerTitle.includes('san francisco')) {
    return '🌁';
  }
  return '📍';
}

function MonthOffline() {
  const [scheduleData, setScheduleData] = useState<ScheduleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSchedule() {
      try {
        const response = await fetch('/api/schedule');
        if (!response.ok) {
          throw new Error('Failed to fetch schedule');
        }
        const data = await response.json();
        setScheduleData(data);
      } catch (err) {
        console.error('Error fetching schedule:', err);
        setError('Unable to load schedule');
      } finally {
        setLoading(false);
      }
    }
    fetchSchedule();
  }, []);

  return (
    <div className="month-offline">
      <div className="month-offline-container">
        <div className="month-offline-title-bar">
          <h1>Month Offline Challenge</h1>
        </div>
        <div className="month-offline-content">
          <img
            src="/img/mo_logo.png"
            alt="Month Offline Logo"
            className="month-offline-logo"
          />

          <h2>Take the Challenge</h2>

          <p>
            try a dumb phone for 30 days and join a cohort of neighbors for weekly meet-ups, creative challenges, and mutual encouragement. If not now, when?
          </p>
          <p>part happy hour, part support group, part classroom</p>


          <div className="included-section">
            <h3 className="included-header">✦ whats included...</h3>
            
            <ul className="included-list">
                <li>a dumbphoneII by <a href="https://dumb.co" target="_blank" rel="noopener noreferrer">dumb.co</a>
                  <ul className="sub-list">
                    <li><span className="symbol">✧</span>dumbOS & Dumb Down app syncs ur dumb & smart phones -- calls, texts, & contacts</li>
                    <li><span className="symbol">𖤓</span>iMessage, WhatsApp, Uber, Maps, Microsoft Authenticator</li>
                    <li><span className="symbol">☼</span>1 month of unlimited calling & texting, 100 hours of emergency data</li>
                  </ul>
                </li>
                <li>5 facilitated meetups
                  <ul className="sub-list">
                    <li><span className="symbol">꩜</span>conversation prompts to reflect on the frictions & fruits of offline life</li>
                    <li><span className="symbol">⏾</span>weekly themes & activities to tap into each other's experiences</li>
                    <li><span className="symbol">☺︎</span>4 old-school tools for weekly creative exercises</li>
                  </ul>
                </li>
            </ul>
          </div>

          <div className="reservation-notice">
            <p className="deadline">⏰ Reservations 2 join close on <strong>May 1st</strong>.</p>
            <p className="discount-info">✰ email <a href="mailto:month@offline.community">month@offline.community</a> for a  code if u need financial support or if u wanna bring ur own dumbphone</p>
          </div>

          <div className="schedule-section">
            <h2 className="schedule-header">📍 May 2026 Locations</h2>
            
            <div className="schedule-grid">
              {loading && <p>Loading schedule...</p>}
              {error && <p className="error">{error}</p>}
              {scheduleData?.columns.map((column, index) => (
                <div className="schedule-card" key={index}>
                  <div className="schedule-card-header">
                    <span className="location-icon">{getLocationIcon(column.title)}</span>
                    <h3>{column.title}</h3>
                  </div>
                  <ul className="schedule-list">
                    {column.items.map((item, itemIndex) => (
                      <li key={itemIndex} className={item.type === 'special-event' ? 'special-event' : ''}>
                        <span className="star">✰</span> {parseMarkdownLinks(item.text)}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="month-offline-image-row">
            <img src="https://shop.offline.community/cdn/shop/files/IMG_7135.jpg?v=1769106219" alt="Month Offline Badge 1" />
            <img src="https://shop.offline.community/cdn/shop/files/IMG_0080.heic?v=1769106189&width=2200" alt="Month Offline Badge 2" />
            <img src="https://shop.offline.community/cdn/shop/files/IMG_7136.jpg?v=1769106219" alt="Month Offline Badge 3" />
          </div>

          <a
            href="https://buy.stripe.com/aFa5kw11meDwaTN2Sc8N20b"
            target="_blank"
            rel="noopener noreferrer"
            className="register-button"
          >
            Register Now
          </a>
          <p className="powered-by">powered by <a href="https://dumb.co" target="_blank" rel="noopener noreferrer">dumb.co</a></p>
        </div>
      </div>
    </div>
  );
}

export default MonthOffline;
