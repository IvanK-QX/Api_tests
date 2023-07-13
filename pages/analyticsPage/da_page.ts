import { APIRequestContext, expect, request } from "@playwright/test"
import { Headers } from "../../utils/headers"
import { DaPayloads } from "./da_payloads"

export class AnalyticsDeviceActivityPage {
    apiContext: APIRequestContext

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async showRegModal(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.showRegModal(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`request for registration modal send, platform ${platform}`)
    }

    async clickCloseReg(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.clickCloseReg(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`request for registration modal closed, platform ${platform}`)
    }


    async clickStartReg(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.clickStartReg(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`request for start registration, platform ${platform}`)

    }

    async showJoinModal(url: string, userToken: string, userId: string, platform: 'Web') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.showJoinModal(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`request for registration modal show, platform`)

    }

}