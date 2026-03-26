import { google } from 'googleapis';

export interface ScheduleColumn {
  title: string;
  items: Array<{
    type: 'li' | 'special-event';
    text: string;
  }>;
}

export interface ScheduleData {
  columns: ScheduleColumn[];
}

export async function fetchScheduleData(): Promise<ScheduleData> {
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
