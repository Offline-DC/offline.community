import './MonthOffline.css';

function MonthOffline() {
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
              <div className="schedule-card">
                <div className="schedule-card-header">
                  <span className="location-icon">🗽</span>
                  <h3>NYC - Brooklyn</h3>
                </div>
                <ul className="schedule-list">
                  <li><span className="star">✰</span> may 4th – 7pm, <em>orientation</em></li>
                  <li><span className="star">✰</span> may 11th – 7pm</li>
                  <li><span className="star">✰</span> may 18th – 7pm</li>
                  <li><span className="star">✰</span> may 25th – 7pm</li>
                  <li><span className="star">✰</span> june 1st – 7pm, <em>graduation</em></li>
                  <li className="special-event"><span className="star">✰</span> june 8th – gallery exhibit & graduation party. Check out <a href="https://art.dumb.co" target="_blank" rel="noopener noreferrer">art.dumb.co</a> for inspo</li>
                </ul>
              </div>
              
              <div className="schedule-card">
                <div className="schedule-card-header">
                  <span className="location-icon">🏛️</span>
                  <h3>DC</h3>
                </div>
                <ul className="schedule-list">
                  <li><span className="star">✰</span> may 7th – 7pm, <em>orientation</em></li>
                  <li><span className="star">✰</span> may 14th – 7pm</li>
                  <li><span className="star">✰</span> may 21st – 7pm</li>
                  <li><span className="star">✰</span> may 28th – 7pm</li>
                  <li><span className="star">✰</span> june 4th – 7pm, <em>graduation</em></li>
                  <li className="special-event"><span className="star">✰</span> june 11th – gallery exhibit & graduation party. Check out <a href="https://art.dumb.co" target="_blank" rel="noopener noreferrer">art.dumb.co</a> for inspo</li>
                </ul>
              </div>

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
