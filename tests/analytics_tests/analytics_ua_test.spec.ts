import { request, test } from "@playwright/test";
import { apiUrl } from "../../utils/apiUrl";
import { Api } from "../../pages/Api";
import { Analytics } from "../../pages/Analytics";

let user

test.describe('User analytics test', async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
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

    test('Click Follow Top', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickFollowTop(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickFollowTop(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
        await analytics.uaPage.clickFollowTop(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Click Follow', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickFollow(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickFollow(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
        await analytics.uaPage.clickFollow(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Pageview stream', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.pageviewStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
        await analytics.uaPage.pageviewStream(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Click send gift', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickSendGift(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickSendGift(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
        await analytics.uaPage.clickSendGift(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Show Gift Sent', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showGiftSent(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showGiftSent(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
        await analytics.uaPage.showGiftSent(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Click Get Coins', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickGetCoins(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickGetCoins(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
        await analytics.uaPage.clickGetCoins(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })
})






