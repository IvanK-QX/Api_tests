import { request, test } from "@playwright/test";
import { apiUrl } from "../utils/apiUrl";
import { Api } from "../pages/Api";
import { Analytics } from "../pages/Analytics";

let user

test.describe('Device analytics test', async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.login(`${apiUrl.qaEnvUrl}:3000/login`)
    })


    test('Show Registration Modal', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showRegModal(apiUrl.qaEnvUrl, user.token, user.id, "Android")
        await analytics.daPage.showRegModal(apiUrl.qaEnvUrl, user.token, user.id, "Web")
        await analytics.daPage.showRegModal(apiUrl.qaEnvUrl, user.token, user.id, 'iOS')

    })

    


})

