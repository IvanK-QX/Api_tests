import { request, test } from "@playwright/test";
import { apiUrl } from "../../utils/apiUrl";
import { Api } from "../../pages/Api";
import { Analytics } from "../../pages/Analytics";
import { analyticsDataSet } from "../../utils/analyticsDataSet";

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






    

    // TODO > Example of the test,
    // add all variables to analyticsDataSet
    // all method should use one payload, please rename to defaultPayload, it should be fitted to all UA test 
    test.only('Click Follow', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickFollow1(apiUrl.qaEnvUrl, user.userToken, user.id, 'Android', analyticsDataSet.events.clickFollow, analyticsDataSet.context.spalsh)
        // await analytics.uaPage.clickFollow(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
        // await analytics.uaPage.clickFollow(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    //     

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

    test('Preview Coin Shop', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.previewCoinShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.previewCoinShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
        await analytics.uaPage.previewCoinShop(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Show Coin Shop', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showCoinShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showCoinShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
        await analytics.uaPage.showCoinShop(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Click Buy Pack', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickBuyPack(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickBuyPack(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
        await analytics.uaPage.clickBuyPack(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Page View Paying menu', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageViewPayingMenu(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.pageViewPayingMenu(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
        await analytics.uaPage.pageViewPayingMenu(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Click Close Paying Menu', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickClosePayingMenu(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickClosePayingMenu(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
        await analytics.uaPage.clickClosePayingMenu(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Show Paying Menu Success', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showPayingMenuSuccess(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showPayingMenuSuccess(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
        await analytics.uaPage.showPayingMenuSuccess(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Show Premium Join', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showPremiumJoin(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showPremiumJoin(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
        await analytics.uaPage.showPremiumJoin(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Click Premium Join', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickPremiumJoin(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickPremiumJoin(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
        await analytics.uaPage.clickPremiumJoin(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Show Room Join', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showRoomJoin(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showRoomJoin(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
        await analytics.uaPage.showRoomJoin(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Click Room Join', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickRoomJoin(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickRoomJoin(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
        await analytics.uaPage.clickRoomJoin(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Click Gift Shop', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickGiftShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickGiftShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
        await analytics.uaPage.clickGiftShop(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })
})






