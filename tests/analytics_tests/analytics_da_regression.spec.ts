import { request, test } from "@playwright/test";
import { apiUrl } from "../../utils/apiUrl";
import { Api } from "../../pages/Api";
import { Analytics } from "../../pages/Analytics";

let user

test.describe('Device analytics test', async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.login(`${apiUrl.qaEnvUrl}:3000/login`)
    })
    test('First open', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.firstOpen(apiUrl.qaEnvUrl, user.token, user.id, "Android")
        await analytics.daPage.firstOpen(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
    })
    test('Show splash', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showSplash(apiUrl.qaEnvUrl, user.token, user.id, "Android")
        await analytics.daPage.showSplash(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
    })
    test('Show terms', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showTerms(apiUrl.qaEnvUrl, user.token, user.id, "Android")
        await analytics.daPage.showTerms(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
    })
    test('Show idfa', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showIdfa(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
    })

    test('Click idfa', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.clickIdfa(apiUrl.qaEnvUrl, user.token, user.id, "iOS")

    })

    test('Show push', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showPush(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
        await analytics.daPage.showPush(apiUrl.qaEnvUrl, user.token, user.id, "Android")
    })

    test('Click push', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.clickPush(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
        await analytics.daPage.clickPush(apiUrl.qaEnvUrl, user.token, user.id, "Android")
    })

    test('Show enter number', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showEnterNumber(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
        await analytics.daPage.clickPush(apiUrl.qaEnvUrl, user.token, user.id, "Android")
    })

    test('Click confirm number', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.clickConfirmNumber(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
        await analytics.daPage.clickConfirmNumber(apiUrl.qaEnvUrl, user.token, user.id, "Android")
    })

    test('Show verify', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showVerify(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
        await analytics.daPage.showVerify(apiUrl.qaEnvUrl, user.token, user.id, "Android")
    })

    test('Show invalid code', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showInvalidCode(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
        await analytics.daPage.showInvalidCode(apiUrl.qaEnvUrl, user.token, user.id, "Android")
        await analytics.daPage.showInvalidCode(apiUrl.qaEnvUrl, user.token, user.id, "Web")
    })

    test('Click confirm code', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.clickСonfirmСode(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
        await analytics.daPage.clickСonfirmСode(apiUrl.qaEnvUrl, user.token, user.id, "Android")
        await analytics.daPage.clickСonfirmСode(apiUrl.qaEnvUrl, user.token, user.id, "Web")
    })

    test('Show cam access', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showCamAccess(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
        await analytics.daPage.showCamAccess(apiUrl.qaEnvUrl, user.token, user.id, "Android")
    })

    test('Click cam access', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.clickCamAccess(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
        await analytics.daPage.clickCamAccess(apiUrl.qaEnvUrl, user.token, user.id, "Android")
    })

    test('Start beauty filter download', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.startBeautyFilterDownload(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
        await analytics.daPage.startBeautyFilterDownload(apiUrl.qaEnvUrl, user.token, user.id, "Android")
    })

    test('Beauty filter download success', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.beautyFilterDownloadSuccess(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
        await analytics.daPage.beautyFilterDownloadSuccess(apiUrl.qaEnvUrl, user.token, user.id, "Android")
    })

    test('Beauty filter download failed', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.beautyFilterDownloadFailed(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
        await analytics.daPage.beautyFilterDownloadFailed(apiUrl.qaEnvUrl, user.token, user.id, "Android")
    })

    test('Socket channels count subscription', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.socketChannelsCountSubscription(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
        await analytics.daPage.socketChannelsCountSubscription(apiUrl.qaEnvUrl, user.token, user.id, "Android")
    })


})
