import { APIRequestContext, expect, request } from "@playwright/test"
import { Headers } from "../../utils/headers"
export class ApiOtherPage {
    apiContext: APIRequestContext

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }


    async getFeatureFlag(url: string, adminToken: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.get(`${url}:3000/featureFlag`, {headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.text()
        expect(response).toContain('offSpecialOfferAfter24h')
        console.log(`Feture flags are displayed`)
    }

    async snapAuth(url: string, userToken: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "additionalProp1": {}
        }
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3000/snap/auth`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        console.log(`Snap Auth passed`)
    }

    async snapInit(url: string, userToken: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "code": "any"
        }
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3000/snap/init`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        console.log(`Snap Init passed`)
    }

    async getShopList(url: string, userToken: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.get(`${url}:3000/shop`, {headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const title = response.title
        expect(title).toEqual('Shop title')
        console.log(`Shop is displayed`)
    }
    

}