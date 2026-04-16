// =====================================================
// AI Adoption Survey — Google Apps Script
// Paste this entire file into your Apps Script editor
// then Deploy as Web App (see instructions below)
// =====================================================

const SHEET_ID = '1m5F55XaeR2hQz1VhrZlh3p-FWTGx82im2KUk9-DB0mw';

const HEADERS = [
  'Timestamp',
  'Name',
  'Email',
  'Department',
  'Role',
  'Frequency',
  'Tools',
  'AI Products (10 test)',
  'Tasks',
  'Task Example',
  'Time Saved',
  'AI Setup',
  'Techniques',
  'Sample Prompt',
  'Dev Tools',
  'Dev Usage',
  'Has CLAUDE.md / rules file',
  'Learning Habits',
  'Built Automation',
  'Barriers',
  'Champion',
  'Comments'
];

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();

    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date().toLocaleString('en-GB'),
      data.name        || '',
      data.email       || '',
      data.department  || '',
      data.role        || '',
      data.frequency   || '',
      arr(data.tools),
      data.aiProducts  || '',
      arr(data.tasks),
      data.taskExample || '',
      data.timeSaved   || '',
      arr(data.setup),
      arr(data.techniques),
      data.samplePrompt    || '',
      arr(data.devTools),
      arr(data.devUsage),
      data.claudeMd        || '',
      arr(data.learningHabits),
      data.builtAutomation || '',
      arr(data.barriers),
      data.champion    || '',
      data.comments    || ''
    ]);

    return response({ success: true });

  } catch (err) {
    return response({ success: false, error: err.toString() });
  }
}

function arr(val) {
  if (!val) return '';
  if (Array.isArray(val)) return val.join(', ');
  return val;
}

function response(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// doGet lets you test that the script is live
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'AI Adoption Survey script is live ✓' }))
    .setMimeType(ContentService.MimeType.JSON);
}
