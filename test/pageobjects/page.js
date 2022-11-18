/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    let baseUrl = 'https://customer.io/'
    return path ? browser.url(baseUrl + path) : browser.url(baseUrl)
  }

  async getUrl() {
    return browser.getUrl()
  }
}
