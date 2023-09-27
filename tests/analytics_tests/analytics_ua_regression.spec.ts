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

    test('Pageview user info', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewUserInfo(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.pageviewUserInfo(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Click save', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickSave(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickSave(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })


    test('Click skip profile set up', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickSkipProfileSetUp(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickSkipProfileSetUp(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Click logout', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickLogout(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickLogout(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.clickLogout(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
    })

    test('Click delete profile', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickDeleteProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickDeleteProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.clickDeleteProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
    })

    test('Show reason delete', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showReasonDelete(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showReasonDelete(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.showReasonDelete(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
    })

    test('Click confirm delete profile', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickConfirmDeleteProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickConfirmDeleteProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.clickConfirmDeleteProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
    })

    test('Profile deleted success', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.profileDeletedSuccess(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.profileDeletedSuccess(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.profileDeletedSuccess(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
    })

    test('Show confirm delete', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showConfirmDelete(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showConfirmDelete(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.showConfirmDelete(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
    })

    test('Click Profile', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.clickProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
    })

    test('Pageview edit profile', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewEditProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.pageviewEditProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.pageviewEditProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
    })

    test('Click photo edit', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickPhotoEdit(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickPhotoEdit(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })


    test('Click settings', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickSettings(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickSettings(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })


    test('Pageview settings', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewSettings(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.pageviewSettings(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Click followers', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickFollowers(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickFollowers(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Pageview followers', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewFollowers(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.pageviewFollowers(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Click my followings', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickMyFollowings(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickMyFollowings(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Click my followers', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickMyFollowings(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickMyFollowings(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Pageview my followings', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewMyFollowings(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.pageviewMyFollowings(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Click refferal program', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickRefferalProgram(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickRefferalProgram(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Pageview referral program', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewReferralProgram(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.pageviewReferralProgram(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Click redeem cash', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickRedeemCash(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickRedeemCash(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Pageview transactions history', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewTransactionsHistory(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.pageviewTransactionsHistory(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
    })

    test('Click top gifters', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickTopGifters(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickTopGifters(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.clickTopGifters(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Pageview top gifters', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewTopGifters(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.pageviewTopGifters(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.pageviewTopGifters(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Click my vip status', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickMyVipStatus(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickMyVipStatus(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.clickMyVipStatus(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Pageview my vip status', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewMyVipStatus(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.pageviewMyVipStatus(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.pageviewMyVipStatus(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })
})
