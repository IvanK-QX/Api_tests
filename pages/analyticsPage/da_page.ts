import { APIRequestContext, expect, request } from "@playwright/test"
import { Headers } from "../../utils/headers"
import { DaPayloads } from "./da_payloads"

export class AnalyticsDeviceActivityPage {
    apiContext: APIRequestContext

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async showRegModal(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android' ) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = DaPayloads.showRegModal(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, {data, headers: headers})
        expect(apiRequest.status()).toEqual(200)
        console.log(`example of the result`)
    }

}