import { Headers } from "../../utils/headers"
import { APIRequestContext, expect, request } from "@playwright/test"

export class ApiStreamPage {
    apiContext: any

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async streamList(url: string, userToken: string, period: "near" | "streamersIfollow" | "public") {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            filter: `${period}`
        }
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}/streams/list`, {data, headers: headers})
        const response = await apiRequest.json()
        expect(apiRequest.ok()).toBeTruthy()
        console.log(`Stream List: ${period} is dispalyed`)
    }

    async getIntrenalList(url: string, userToken: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.get(`${url}/streams/listInternal`, { headers: headers })
        const response = await apiRequest.text()
        expect(apiRequest.ok()).toBeTruthy()
        expect(response).toContain('internals')
        console.log(`Internals list is dispalyed`)
    }

    async createStream(url: string, userToken: string, option: 'public') {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            title:"Come and Watch My Live Broadcast",
            type:`${option}`
        }
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}/streams/my/create`, {data, headers: headers})
        const response = await apiRequest.json()
        expect(apiRequest.ok()).toBeTruthy()
        const myStreamId = response._id
        const title = response.title
        const myStreamType = response.type
        const myStreamerId = response.streamerId
        const myChatId = response.chatId
        const myStreamLink = response.link
        expect(myStreamType).toEqual(option)
        console.log(`Stream with title: ${title} is dispalyed`)
        return {myStreamId, myStreamType, myStreamerId, myChatId, myStreamLink}
    }

    async getStream(url: string, userToken: string, streamId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            streamId: `${streamId}`
        }
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}/streams/get`, {data, headers: headers})
        const response = await apiRequest.json()
        expect(apiRequest.ok()).toBeTruthy()
        const streamID = response.stream._id
        expect(streamID).toEqual(streamId)
        console.log(`Stream with id: ${streamID} is dispalyed`)
    }

    async sendInvite(url: string, userToken: string, streamId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            streamId: `${streamId}`,
            //todo add userId as varible, need to find method that returns all users 
            // remove hardcoded variable 
            userIds: [
              "648b24260642b2b48c2295da"
            ]
        }
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}/streams/my/sendInvite`, {data, headers: headers})
        const response = await apiRequest.json()
        expect(apiRequest.ok()).toBeTruthy()
        const streamID = response[0].streamId
        expect(streamID).toEqual(streamId)
        console.log(`Stream with id: ${streamID} is dispalyed`)
    }

}