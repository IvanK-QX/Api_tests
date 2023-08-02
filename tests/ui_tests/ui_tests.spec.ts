import { request, test } from "@playwright/test";
import { Api } from "../../pages/Api";
import { apiUrl } from "../../utils/apiUrl";
import { App } from "../../pages/App";
let streamer, watcher, newPage

test.describe.skip('API test with new user', async () => {
    test.beforeEach(async ({page, browser}) => {
        const app = new App(page)
        streamer = await app.loginPage.apiLogin(apiUrl.qaEnvUrl)
        const contetext = await browser.newContext();
        newPage = await contetext.newPage()
        const watcherPage = new App(newPage)
        watcher = await watcherPage.loginPage.apiLogin(apiUrl.qaEnvUrl)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, streamer.userToken)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, watcher.userToken)
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
      await page.waitForTimeout(1000)
      await page.click('button span.ui-button__text')
      await page.waitForTimeout(2000)
      await page.waitForLoadState('networkidle')
      await page.locator('#stream-main-action').getByRole('button').click()

      await newPage.goto('/chat')
      await newPage.click('button.header-chat__button')
      await newPage.waitForTimeout(3000)


    })
})


