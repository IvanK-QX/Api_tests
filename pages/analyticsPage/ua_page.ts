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
}
