import { APIRequestContext, expect, request, test } from "@playwright/test";
import { Headers } from "../../utils/headers";

export class ApiMessage3003Page {
    apiContext: APIRequestContext

    constructor(apiContext:APIRequestContext){
        this.apiContext=apiContext
    }

    async createMessage (url: string, userToken: string, userId: string, messageText: string){
        const apiContext = await request.newContext({ignoreHTTPSErrors:true})
        const data = {
            "text": `${messageText}`,
            "toUserId": `${userId}`
        }
        const headers = Headers.userHeader(userToken)
       
        const apiRequest = await apiContext.post(`${url}:3003/message`,{data, headers: headers }) 
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const text = response.text
        const chatId = response.chatId
        const toUserId = response.toUserId
        const status = response.status
        expect(text).toEqual(messageText)
        expect(toUserId).toEqual(userId)
        expect(status).toEqual('Sent')
        return { chatId, text }
    }

    async messageList (url:string, userToken: string, chatId: string, messageText: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors:true})
        const data = {
            "chatId" : `${chatId}`, 
            "itemsPerPage" : 100,
            "skip" : 0
        }
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}:3003/message/list`,{data,headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const fromUserId = response.documents[0].fromUserId
        const toUserId = response.documents[0].toUserId
        const status = response.documents[0].status
        const text = response.documents[0].text
        expect(chatId).toEqual(chatId)
        expect(text).toEqual(messageText)
        expect(status).toEqual('Sent')
        return { chatId, status, fromUserId, toUserId }
        
    }

   
}