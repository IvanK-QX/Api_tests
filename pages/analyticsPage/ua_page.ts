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
}
