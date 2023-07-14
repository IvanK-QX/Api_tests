import { request, test } from "@playwright/test";
import { apiUrl } from "../utils/apiUrl";
import { Api } from "../pages/Api";
import { Analytics } from "../pages/Analytics";

let user

test.describe('User analytics test', async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
    })

    test('Create account success', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showCreateAccountSuccess(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showCreateAccountSuccess(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
        await analytics.uaPage.showCreateAccountSuccess(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })


    test('Pageview Follow Top', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewFollowTop(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.pageviewFollowTop(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
        await analytics.uaPage.pageviewFollowTop(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test.only('Click Follow Top', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickFollowTop(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickFollowTop(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
        await analytics.uaPage.clickFollowTop(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })
})






