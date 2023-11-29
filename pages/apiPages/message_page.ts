import { APIRequestContext, expect, request } from '@playwright/test'
import { Headers } from '../../utils/headers'

export class ApiMessage3003Page {
    apiContext: APIRequestContext

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async createMessage(url: string, userToken: string, userId: string, messageText: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = {
            text: `${messageText}`,
            toUserId: `${userId}`,
        }
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3003/message`, {
            data,
            headers: headers,
        })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const text = response.text
        const chatId = response.chatId
        const toUserId = response.toUserId
        const status = response.status
        const lastMessageId = response._id
        expect(text).toEqual(messageText)
        expect(toUserId).toEqual(userId)
        expect(status).toEqual('Sent')
        expect(lastMessageId).toEqual(lastMessageId)
        return { chatId, text, lastMessageId }
    }

    async messageList(url: string, userToken: string, chatId: string, messageText: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = {
            chatId: `${chatId}`,
            itemsPerPage: 100,
            skip: 0,
        }
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}:3003/message/list`, {
            data,
            headers: headers,
        })
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
    async doIcanChatting(url: string, userToken: string, userId: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = {
            toUserId: `${userId}`,
        }
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}:3003/doIcanChatting`, {
            data,
            headers: headers,
        })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const chatId = response.chatId
        const doICanChatting = response.doICanChatting
        const blockedBySender = response.blockedBySender
        expect(chatId).toEqual(chatId)
        expect(doICanChatting).toEqual(true)
        expect(blockedBySender).toEqual(false)
        return { blockedBySender, doICanChatting, chatId }
    }

    async chatUnbloc(url: string, userToken: string, userId: string, user2: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = {
            userId: `${userId}`,
        }
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}:3003/chat/unblock`, {
            data,
            headers: headers,
        })
        // expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const responsetext = await apiRequest.text()
        expect(responsetext).toContain(userId)
        expect(responsetext).toContain(user2)
        const chatId = response._id
        const type = response.type
        expect(chatId).toEqual(chatId)
        expect(type).toEqual('private')
        console.log(response)
        return { chatId, type }
    }

    async chatUsersList(url: string, userToken: string, user2: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = {
            itemsPerPage: 20,
        }
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}:3003/chat/users/list`, {
            data,
            headers: headers,
        })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const responsetext = await apiRequest.text()
        const status = response.documents[0].status
        const user2name = response.documents[0].name
        expect(status).toEqual('Active')
        expect(user2name).toEqual(user2name)
        expect(responsetext).toContain(user2)
        console.log(`User with id: ${user2} and name : ${user2name} finded in list with status : ${status} `)
        return { user2name, status }
    }

    async chatUsersListEmpty(url: string, userToken: string, monthTop1User : string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = {
            itemsPerPage: 20,
        }
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}:3003/chat/users/list`, {
            data,
            headers: headers,
        })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        expect(response).toEqual(response)
        const top1ChatUser = response.documents[0]._id
        expect(top1ChatUser).toContain(monthTop1User)
        console.log(`Users from leaderboard shows into ChatList, top1 User : ${monthTop1User}`)
    }

    async myList ( url: string, userToken: string, lastMessageId: string ) {
        const apiContext = await request.newContext({ignoreHTTPSErrors:true})
        const data = {
            "limit" : 10
        }
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}:3003/my/list`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const privateType = response.documents[0].type
        const systemType = response.documents[1].type
        const privateMessageId = response.documents[0].lastMessageId
        expect(privateType).toEqual('private')
        expect(systemType).toEqual('system')
        expect(privateMessageId).toEqual(lastMessageId)
    }
}
