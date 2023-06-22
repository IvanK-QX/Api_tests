import { APIRequestContext, expect, request } from "@playwright/test"

export class ApiLeadersPage {
    apiContext: any

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async getLeders(url: string, userToken: string, period: "week" | "day" | "month") {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            period: `${period}`,
            itemsPerPage: 100,
            skip: 0
        }
        const headers = {
            'authorization': `Bearer ${userToken}`,
            'packagename': 'com.plamfy',
            'content-type': 'application/json',
            'appversion': '1',
            'os': 'browser'
        }
        const apiRequest = await apiContext.post(url, {data, headers: headers})
        const response = await apiRequest.json()
        expect(apiRequest.ok()).toBeTruthy()
        console.log(`Leaders for period: ${period} is dispalyed`)
    }

}