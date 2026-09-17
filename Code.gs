function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('index')
    .setTitle('PDF Studio - รวม PDF และสแกนเอกสาร')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
