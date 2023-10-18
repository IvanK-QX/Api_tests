import { APIRequestContext, expect, request } from "@playwright/test"
import { Headers } from "../../../utils/headers"
import { UaPayloads } from "../ua_payloads"

export class AnalyticsUserActivityStreamPage {
    apiContext: APIRequestContext

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async clickStartStream(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.clickStartStream(userId, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers: headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click button start stream, platform ${platform}`)
    }
}
