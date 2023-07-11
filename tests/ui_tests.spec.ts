import { request, test } from "@playwright/test";
import { Api } from "../pages/Api";
import { apiUrl } from "../utils/apiUrl";
import { App } from "../pages/App";
let user 

test.describe('API test with new user', async () => {
    test.beforeEach(async ({page}) => {
        const app = new App(page)
        user = await app.loginPage.apiLogin(apiUrl.qaEnvUrl)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
    })

    test.skip('api login',async ({page}) => {
      console.log('api login done ')
        

    })
})


