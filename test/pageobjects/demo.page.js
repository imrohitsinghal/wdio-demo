import Page from './page'

class DemoPage extends Page {
  get firstName() {
    return $('input#first-name')
  }

  get lastName() {
    return $('input#last-name')
  }

  open(path) {
    super.open(path)
  }

  async load() {
    super.open(`demo/?nav=header`)
    await browser.pause(2000)
  }

  async validateElements() {
     this.firstName.click()
     this.lastName.click()
  }
}

export default new DemoPage()
