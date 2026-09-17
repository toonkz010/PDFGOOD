function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('index')
    .setTitle('PDF Studio - รวม PDF')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
