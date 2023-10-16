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
    test('Show gift received', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showGiftReceived(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showGiftReceived(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.showGiftReceived(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Click gifts shop', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickGiftsShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickGiftsShop(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.clickGiftsShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Show gifts shop', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showGiftsShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showGiftsShop(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.showGiftsShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Click start stream', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickStartStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickStartStream(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.clickStartStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Click stream', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickStream(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.clickStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Click coins shop', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickCoinsShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickCoinsShop(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.clickCoinsShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Pageview coins shop', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewСoinsShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.pageviewСoinsShop(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.pageviewСoinsShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Pageview followings', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewFollowings(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.pageviewFollowings(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.pageviewFollowings(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Click followings', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickFollowings(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickFollowings(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.clickFollowings(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Pageview all streams', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewAllStreams(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.pageviewAllStreams(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.pageviewAllStreams(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Click leaderboard', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickLeaderboard(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickLeaderboard(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")

    })

    test('Click close shop', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickCloseShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickCloseShop(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")

    })

    test('Pageview no internet', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewNoInternet(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.pageviewNoInternet(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")

    })

    test('Show start premium gifts', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showStartPremiumGifts(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showStartPremiumGifts(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")

    })

    test('Click start premium Gifts', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickStartPremiumGifts(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickStartPremiumGifts(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")

    })

    test('Show invite top gifters', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showInviteTopGifters(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showInviteTopGifters(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.showInviteTopGifters(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Click invite top gifters', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showInviteTopGifters(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showInviteTopGifters(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.showInviteTopGifters(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Show invites sent', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showInvitesSent(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showInvitesSent(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.showInvitesSent(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Show popup end stream', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showPopupEndStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showPopupEndStream(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.showPopupEndStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Show popup end premium', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showPopupEndPremium(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showPopupEndPremium(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.showPopupEndPremium(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Click close stream', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickCloseStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickCloseStream(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.clickCloseStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Click preview stream', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickPreviewStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickPreviewStream(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")

    })

    test('Pageview preview stream', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewPreviewStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.pageviewPreviewStream(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")

    })

    test('Pageview go live', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewGoLive(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.pageviewGoLive(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")

    })

    test('Click go live', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickGoLive(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickGoLive(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")

    })

    test('Show inappropriate title', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showInappropriateTitle(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showInappropriateTitle(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")

    })

    test('Show set photo', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showSetPhoto(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showSetPhoto(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")

    })

    test('Click set photo', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickSetPhoto(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickSetPhoto(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")

    })

    test('Start beauty filter download', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.startBeautyFilterDownload(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.startBeautyFilterDownload(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")

    })

    test('Beauty filter download success', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.beautyFilterDownloadSuccess(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.beautyFilterDownloadSuccess(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")

    })

    test('Beauty filter download failed', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.beautyFilterDownloadFailed(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.beautyFilterDownloadFailed(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")

    })

    test('New stream started', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.newStreamStarted(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.newStreamStarted(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.newStreamStarted(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Click end stream', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickEndStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickEndStream(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.clickEndStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Сlick pause stream', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickPauseStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickPauseStream(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.clickPauseStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Stream shared', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.streamShared(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.streamShared(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.streamShared(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Click choose sticker', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickChooseSticker(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickChooseSticker(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.clickChooseSticker(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Show add sticker text', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showAddStickerText(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showAddStickerText(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.showAddStickerText(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Click add sticker text', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickAddStickerText(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickAddStickerText(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.clickAddStickerText(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Show inappropriate sticker text', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showInappropriateStickerText(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showInappropriateStickerText(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.showInappropriateStickerText(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Show add sticker', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showAddSticker(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showAddSticker(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.showAddSticker(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Show sticker added', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showStickerAdded(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showStickerAdded(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.showStickerAdded(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Click change sticker', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickChangeSticker(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickChangeSticker(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.clickChangeSticker(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Click delete desired gift', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickDeleteDesiredGift(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickDeleteDesiredGift(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.clickDeleteDesiredGift(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")

    })

    test('Click beauty filter', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickBeautyFilter(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickBeautyFilter(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")

    })

    test('Show edit beauty filter', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showEditBeautyFilter(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showEditBeautyFilter(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")

    })

    test('Show beauty filter added', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showBeautyFilterAdded(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showBeautyFilterAdded(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")

    })

    test('Beauty filter error', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.beautyFilterError(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.beautyFilterError(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")

    })

    test('Show end stream', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showEndStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showEndStream(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")

    })

    test('Beauty feedback', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.beautyFeedback(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.beautyFeedback(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")

    })

    test('Сlick end confirmation', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickEndConfirmation(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickEndConfirmation(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")

    })

    test('Show broadcast ended', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showBroadcastEnded(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.showBroadcastEnded(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")

    })

    test('Click change stream type', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickChangeStreamType(apiUrl.qaEnvUrl, user.userToken, user.id, "Android")
        await analytics.uaPage.clickChangeStreamType(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS")
        await analytics.uaPage.clickChangeStreamType(apiUrl.qaEnvUrl, user.userToken, user.id, "Web")
    })
})

