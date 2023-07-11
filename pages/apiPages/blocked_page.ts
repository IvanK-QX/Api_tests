import { APIRequestContext, expect, request } from "@playwright/test"
import { Headers } from "../../utils/headers"
export class ApiBlockedPage {
    apiContext: APIRequestContext

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async blockUser(url: string, userToken: string, blockedUserId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            userId: `${blockedUserId}`
        }
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}/block`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        console.log(`${blockedUserId} is blocked`)
    }

    async getBlockedUsers(url: string, userToken: string, blockedUserId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.get(`${url}/blocked`, {headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const returnedBlokedUserID = response.blocked[0].user._id
        expect(returnedBlokedUserID).toEqual(blockedUserId)
        console.log(`${blockedUserId} is displayed`)
    }

    async unblockUser(url: string, userToken: string, blockedUserId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            userId: `${blockedUserId}`
        }
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}/unblock`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        console.log(`${blockedUserId} is unblocked`)
    }
    

}