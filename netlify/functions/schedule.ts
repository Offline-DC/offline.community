import { google } from 'googleapis';
import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

interface ScheduleColumn {
  title: string;
  items: Array<{
    type: 'li' | 'special-event';
    text: string;
  }>;
}

interface ScheduleData {
  columns: ScheduleColumn[];
}

async function fetchScheduleData(): Promise<ScheduleData> {
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const sheetId = process.env.SHEET_ID;

  if (!serviceAccountEmail || !privateKey || !sheetId) {
    throw new Error('Missing Google Sheets credentials in environment variables');
  }

  const auth = new google.auth.JWT({
    email: serviceAccountEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: 'Sheet1',
  });

  const rows = response.data.values;

  if (!rows || rows.length === 0) {
    return { columns: [] };
  }

  // First row is the header row with titles
  const headerRow = rows[0];
  const dataRows = rows.slice(1);

  // Build columns starting from index 1 (skip Column A which contains the type)
  const columns: ScheduleColumn[] = [];

  for (let colIndex = 1; colIndex < headerRow.length; colIndex++) {
    const title = headerRow[colIndex];
    const items: ScheduleColumn['items'] = [];

    for (const row of dataRows) {
      const type = row[0] as 'li' | 'special-event';
      const text = row[colIndex] || '';

      // Only add items that have text content
      if (text.trim()) {
        items.push({ type, text });
      }
    }

    columns.push({ title, items });
  }

  return { columns };
}

const handler: Handler = async (_event: HandlerEvent, _context: HandlerContext) => {
  try {
    const data = await fetchScheduleData();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=60',
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Error fetching schedule data:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-store',
      },
      body: JSON.stringify({ error: 'Failed to fetch schedule data' }),
    };
  }
};

export { handler };
