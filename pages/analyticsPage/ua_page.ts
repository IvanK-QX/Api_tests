import { APIRequestContext, expect, request } from "@playwright/test"
import { Headers } from "../../utils/headers"
import { UaPayloads } from "./ua_payloads"

export class AnalyticsUserActivityPage {
    apiContext: APIRequestContext

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async showCreateAccountSuccess(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.showCreateAccountSuccess(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`request for create new account ${platform}`)
    }

    async pageviewFollowTop(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.pageviewFollowTop(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`request for pageview follow top showed, platform ${platform}`)
    }

    async clickFollowTop(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.clickFollowTop(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`request for follow top send, platform ${platform}`)
    }

    async clickFollow(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.clickFollow(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`request for follow send, platform ${platform}`)
    }

    async pageviewStream(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.pageviewStream(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`request for stream list get, platform ${platform}`)
    }

    async clickSendGift(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.clickSendGift(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`request for send gift, platform ${platform}`)
    }

    async showGiftSent(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.showGiftSent(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`request for show gift sent, platform ${platform}`)
    }

    async clickGetCoins(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.clickGetCoins(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`request for open coin shop, platform ${platform}`)
    }

    async previewCoinShop(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.previewCoinShop(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Coin Shop Preview is displayed, platform ${platform}`)
    }

    async showCoinShop(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.showCoinShop(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Coin Shop is displayed, platform ${platform}`)
    }

    async clickBuyPack(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.clickBuyPack(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Buy pack is clicked, platform ${platform}`)
    }

    async pageViewPayingMenu(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.pageViewPayingMenu(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Paing Menu is Displayed, platform ${platform}`)
    }

    async clickClosePayingMenu(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.clickClosePayingMenu(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Paing Menu is closed, platform ${platform}`)
    }

    async showPayingMenuSuccess(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.showPayingMenuSuccess(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Paing Menu is showed successfully, platform ${platform}`)
    }

    async showPremiumJoin(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.showPremiumJoin(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Show Premium Join, platform ${platform}`)
    }

    async clickPremiumJoin(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.clickPremiumJoin(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Click Premium Join, platform ${platform}`)
    }

    async showRoomJoin(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.showRoomJoin(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Show Room Join, platform ${platform}`)
    }

    async clickRoomJoin(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.clickRoomJoin(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Click Room Join, platform ${platform}`)
    }

    async clickGiftShop(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.clickGiftShop(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Click Gift Shop, platform ${platform}`)
    }

    async pageviewUserInfo(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.pageviewUserInfo(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression / displaying the user info screen, platform ${platform}`)
    }

    async clickSave(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.clickSave(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ save profile information, platform ${platform}`)
    }

    async clickSkipProfileSetUp(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.clickSkipProfileSetUp(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ closed profile set up, platform ${platform}`)
    }

    async clickLogout(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.clickLogout(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ Logout from account, platform ${platform}`)
    }

    async clickDeleteProfile(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.clickDeleteProfile(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on button delete, platform ${platform}`)
    }

    async showReasonDelete(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.showReasonDelete(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ page with delete's reason, platform ${platform}`)
    }

    async clickConfirmDeleteProfile(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.clickConfirmDeleteProfile(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ chose reason and confirm, platform ${platform}`)
    }

    async profileDeletedSuccess(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.profileDeletedSuccess(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ profile delete success, platform ${platform}`)
    }

    async showConfirmDelete(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.showConfirmDelete(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ modal window that the account has been deleted, platform ${platform}`)
    }

    async clickProfile(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.clickProfile(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on button profile on navigation bar, platform ${platform}`)
    }

    async pageviewEditProfile(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.pageviewEditProfile(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ edit profile page, platform ${platform}`)
    }

    async clickPhotoEdit(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.clickPhotoEdit(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click to chose a photo for profile, platform ${platform}`)
    }


    async clickSettings(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.clickSettings(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click to settings, platform ${platform}`)
    }

    async pageviewSettings(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.pageviewSettings(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ settings page, platform ${platform}`)
    }

    async clickFollowers(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.clickFollowers(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on page followers, platform ${platform}`)
    }

    async pageviewFollowers(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.pageviewFollowers(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ followers page, platform ${platform}`)
    }

    async clickMyFollowings(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.clickMyFollowings(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on page followings, platform ${platform}`)
    }

    async pageviewMyFollowings(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.pageviewMyFollowings(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on page my followings, platform ${platform}`)
    }

    async clickRefferalProgram(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.clickRefferalProgram(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on page refferal program, platform ${platform}`)
    }

    async pageviewReferralProgram(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.pageviewReferralProgram(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ page referral program, platform ${platform}`)
    }

    async clickRedeemCash(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.clickRedeemCash(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on page redeem cash, platform ${platform}`)
    }

    async pageviewTransactionsHistory(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.pageviewTransactionsHistory(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ page transaction history, platform ${platform}`)
    }

    async clickTopGifters(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.clickTopGifters(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on page top gifters, platform ${platform}`)
    }

    async pageviewTopGifters(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.pageviewTopGifters(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ page top gifters, platform ${platform}`)
    }

    async clickMyVipStatus(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.clickMyVipStatus(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click page vip status, platform ${platform}`)
    }

    async pageviewMyVipStatus(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.pageviewMyVipStatus(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ page my vip status, platform ${platform}`)
    }

}
