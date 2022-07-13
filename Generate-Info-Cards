function createNewGoogleDocs() {
  const googleDocTemplate = DriveApp.getFileById('<insert template doc id from the url');
  
  const destinationFolder = DriveApp.getFolderById('<insert folder id from url>')
  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName('Data')
  
  const rows = sheet.getDataRange().getValues();
  
  rows.forEach(function(row, index){
    if (index === 0) return;
    if (row[5]) return;
    const copy = googleDocTemplate.makeCopy(`${row[1]}, ${row[0]} Student Details` , destinationFolder)
    const doc = DocumentApp.openById(copy.getId())
    const body = doc.getBody();
    
    body.replaceText('{{First.Last}}', row[0]);
    body.replaceText('{{Email}}', row[1]);
    body.replaceText('{{Password}}', row[2]);
    body.replaceText('{{Password2}}', row[3]);
    
    doc.saveAndClose();
    const url = doc.getUrl();
    sheet.getRange(index + 1, 6).setValue(url)
  })
  
}
