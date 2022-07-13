function onOpen() {
  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu('Highlight Old iPads');
  menu.addItem('2021', 'colorCellsTwentyOne');
  menu.addItem('2020', 'colorCellsTwenty');
  menu.addItem('2019', 'colorCellsNineteen');
  menu.addItem('2018', 'colorCellsEighteen');
  menu.addItem('2017', 'colorCellsSeventeen');
  menu.addItem('2016', 'colorCellsSixteen');

  menu.addToUi();
  
}
function colorCellsSixteen() {
  var oldSixteen = "/16 "
  var sheet = SpreadsheetApp.getActiveSheet(); 
  var dateFinder = sheet.createTextFinder(oldSixteen);
  var oldDateCells = dateFinder.findAll();
  
  oldDateCells.forEach(function(cell){
    cell.setBackground('#880808');
  });
};
function colorCellsSeventeen() {
  var oldSeventeen = "/17 "
  var sheet = SpreadsheetApp.getActiveSheet(); 
  var dateFinder = sheet.createTextFinder(oldSeventeen);
  var oldDateCells = dateFinder.findAll();
  
  oldDateCells.forEach(function(cell){
    cell.setBackground('#aa4a44');
  });
};
function colorCellsEighteen() {
  var oldTwentyOne = "/18 "
  var sheet = SpreadsheetApp.getActiveSheet(); 
  var dateFinder = sheet.createTextFinder(oldTwentyOne);
  var oldDateCells = dateFinder.findAll();
  
  oldDateCells.forEach(function(cell){
    cell.setBackground('#ee4b2b');
  });
};
function colorCellsNineteen() {
  var oldNineteen = "/19 "
  var sheet = SpreadsheetApp.getActiveSheet(); 
  var dateFinder = sheet.createTextFinder(oldNineteen);
  var oldDateCells = dateFinder.findAll();
  
  oldDateCells.forEach(function(cell){
    cell.setBackground('#ea4335');
  });
};

function colorCellsTwenty() {
  var oldTwenty = "/20 "
  var sheet = SpreadsheetApp.getActiveSheet(); 
  var dateFinder = sheet.createTextFinder(oldTwenty);
  var oldDateCells = dateFinder.findAll();
  
  oldDateCells.forEach(function(cell){
    cell.setBackground('#cc5500');
  });
};

function colorCellsTwentyOne() {
  var oldTwentyOne = "/21 "
  var sheet = SpreadsheetApp.getActiveSheet(); 
  var dateFinder = sheet.createTextFinder(oldTwentyOne);
  var oldDateCells = dateFinder.findAll();
  
  oldDateCells.forEach(function(cell){
    cell.setBackground('#e97451');
  });
};


