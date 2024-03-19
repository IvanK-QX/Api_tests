import { APIRequestContext, expect, request } from '@playwright/test'
import { Headers } from '../../utils/headers'

export class ApiClientSettingsPage {
    apiContext: APIRequestContext

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async getClientSettings(url: string, userToken: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.get(`${url}/core/clientSettings`, {
            headers: headers,
        })
        expect(apiRequest.ok()).toBeTruthy()
    }

    async addMediaSource(url: string, userToken: string, mediaSource: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = {
            mediaSource: `${mediaSource}`,
        }
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}/core/v2/addMediaSource`, {
            data,
            headers: headers,
        })
        expect(apiRequest.ok()).toBeTruthy()
    }
}
