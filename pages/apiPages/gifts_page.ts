import { APIRequestContext, expect, request } from "@playwright/test"
import { Headers } from "../../utils/headers"
export class ApiGiftsPage {
    apiContext: any

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async getGifts(url: string, userToken: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.get(`${url}/gifts/list`, { headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const giftIdOne = response[0]._id
        const giftIdTwo = response[1]._id
        console.log(`List of gists is dispalyed`)
        return { giftIdOne, giftIdTwo }
    }

}