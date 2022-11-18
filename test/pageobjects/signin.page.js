import Page from './page'

class SignInPage extends Page {
  get emailInput() {
    return $('div#ember5 > input')
  }

  get loginBtn() {
    return $('button.cio-login__submit')
  }

  open(path) {
    super.open(path)
  }

  async load() {
    super.open(`login?nav=header`)
    await browser.pause(2000)
  }

  async validateElemnts() {
    await this.emailInput.click()
  }
}

export default new SignInPage()
