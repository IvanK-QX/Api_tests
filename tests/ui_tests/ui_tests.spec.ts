import { request, test } from "@playwright/test";
import { Api } from "../../pages/Api";
import { apiUrl } from "../../utils/apiUrl";
import { App } from "../../pages/App";
let user 

test.describe.skip('API test with new user', async () => {
    test.beforeEach(async ({page}) => {
        const app = new App(page)
        user = await app.loginPage.apiLogin(apiUrl.qaEnvUrl)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        console.log(user.userToken)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
    })

    test('api login',async ({page}) => {
      console.log('api login done ')
      await page.click('.sidebar__create-button')
      await page.locator('[placeholder="Stream title"]').fill('lets go')
      await page.click('.stream-main-action__button--public button')
      
      page.on('filechooser', async (filechooser) => {
        await filechooser.setFiles('./utils/unnamed.jpg')
      })
      await page.click('button.user-data-entris__button-upload')
      await page.click('button span.ui-button__text')
    })
})


