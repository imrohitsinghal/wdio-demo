import Page from './page'

class HomePage extends Page {
  get signInBtn() {
    return $('a#app-sign-in')
  }

  open(path) {
    super.open(path)
  }

  async load(path) {
    this.open(path)
    await browser.pause(2000)
  }

  async signIn() {
    const elem = await this.signInBtn
    await elem.click()
  }
}

export default new HomePage()
