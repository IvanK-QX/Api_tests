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

    async getGiftsAll(url: string, userToken: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.get(`${url}/gifts/all`, { headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.text()
        expect(response).toContain('popular')
        console.log(`List of gists is dispalyed`)
    }

    async sendGift(url: string, userToken: string, giftId: string, userId_2: string, myChatId_2: string, myStreamId_2: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "gift": `${giftId}`,
            "to": `${userId_2}`,
            "type": "other",
            "chatId": `${myChatId_2}`,
            "streamId": `${myStreamId_2}`
        }
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}/gifts/send`, {data, headers: headers})
        const response = await apiRequest.json()
        const responseGiftId = response.giftId
        expect(responseGiftId).toEqual(giftId)
        console.log(`Gift with Id: ${responseGiftId} has been sent`)
    }

    async myGiftListSend(url: string, userToken: string, giftId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.get(`${url}/gifts/my/listSent`, { headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const responseGiftId = response[0].gift._id
        expect(responseGiftId).toContain(giftId)
        console.log(`List of sended gifts is diaplayed`)
    }

    async myGiftListReceived(url: string, userToken: string, giftId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.get(`${url}/gifts/my/listReceived`, { headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const responseGiftId = response[0].gift._id
        expect(responseGiftId).toContain(giftId)
        console.log(`List of received gifts is diaplayed`)
    }

}