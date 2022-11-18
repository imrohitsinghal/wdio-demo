import DemoPage from '../pageobjects/demo.page';
import SignInPage from '../pageobjects/signin.page';
import HomePage from '../pageobjects/home.page'

describe('Search', () => {
  it('validate signin page', async () => {
      await HomePage.load()
      await HomePage.signIn()
      await SignInPage.validateElemnts()
  })
    
    it('validate demo page', async () => {
      await HomePage.load()
      await DemoPage.load()
      await DemoPage.validateElements()
    })
})
