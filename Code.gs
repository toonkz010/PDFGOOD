function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('index')
    .setTitle('Scanner Studio - สแกนเอกสาร')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
