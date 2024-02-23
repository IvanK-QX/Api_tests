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
        const toId = response.toUserId
        const fromId = response.fromUserId
        const status = response.status
        const lastMessageId = response._id
        expect(text).toEqual(messageText)
        expect(toId).toEqual(userId)
        expect(status).toEqual('Sent')
        expect(lastMessageId).toEqual(lastMessageId)
        return { chatId, text, lastMessageId , toId, fromId }
        
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
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const responsetext = await apiRequest.text()
        expect(responsetext).toContain(userId)
        expect(responsetext).toContain(user2)
        const chatId = response._id
        const type = response.type
        expect(chatId).toEqual(chatId)
        expect(type).toEqual('private')
        return { chatId, type }
    }

    async chatUsersList(url: string, userToken: string, user2: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = {
            itemsPerPage: 20
        }
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}:3003/chat/users/list`, { data, headers: headers })
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
        const top1ChatUser = response.documents[0]._id
        expect(top1ChatUser).toContain(monthTop1User)
        console.log(`Users from leaderboard shows into ChatList, top1 User : ${top1ChatUser}`)
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


    async myGet ( url: string, userToken: string, chatId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "chatId" : `${chatId}`
        }
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}:3003/my/get`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const receivedChatId = response._id
        expect(receivedChatId).toEqual(chatId)
        console.log(`Received ChatId : ${chatId}`)
        return { chatId }
    }

    async messageDelete (url: string, userToken: string, messageId : string, toId: string, fromId: string ) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "messageId" : `${messageId}`
        }
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}:3003/message/delete`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const status = response.success
        const messageFromUserId = response.fromUserId
        const messageToUserId = response.toUserId
        expect(status).toEqual(true)
        expect(messageFromUserId).toEqual(fromId)
        expect(messageToUserId).toEqual(toId)
        console.log(`Message successfully deleted`)
    }

    async markRead ( url: string, userToken: string, chatId: string ) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "chatId" : `${chatId}`
        }
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}:3003/mark-read`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const status = response.success
        expect(status).toEqual(true)

    }

    async messageCount ( url: string, userToken: string ) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.get(`${url}:3003/message/count`, {headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const counter = response.count
        expect(counter).toEqual(2)
        console.log(`Message counter received successufully its equal : ${counter}`)
    }

    async chatUsersOnline ( url:string, userToken:string, userId: string ) {
        const apiContext = await request.newContext({ignoreHTTPSErrors : true })
        const data = {
            "userIds" : [`${userId}`]
        }
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}:3003/chat/users/online`, { data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
    }

    async subscribeStreamChat (url : string, userToken:string, myChatId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "chatId" : `${myChatId}`
        }
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}:3003/subscribe`, { data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const status = response.success
        expect(status).toEqual(true)
    }

    async leaveStreamChat (url : string, userToken: string, myChatId: string ) { 
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "chatId" : `${myChatId}`
        }
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}:3003/leave`, { data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const status = response.success
        expect(status).toEqual(true)
    }

    async createFileuplaodPng(url: string, userToken: string, chatId:string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = {
            "chatId" : `${chatId}`,
            extension: 'png',
            flow: 'editProfile',
            purpose: 'avatar',
            type: 'photo',
        }
        const apiRequest = await apiContext.post(`${url}:3000/createFileUpload`, {
            data,
            headers: Headers.userHeader(userToken),
        })
     
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const uploadID_png = response.tempUploadId
        const uploadUrl = response.url
        const uploadKey = (response.fields)[0]
        const xAmzTagging = Object.values(response.fields)[1]
        const bucket = Object.values(response.fields)[2]
        const xAmzAlgorithm = Object.values(response.fields)[3]
        const xAmzCredential = Object.values(response.fields)[4]
        const xAmzDate = Object.values(response.fields)[5]
        const policy = Object.values(response.fields)[6]
        const xAmzSignature = Object.values(response.fields)[7]
        console.log(`URL for upload : ${uploadUrl} is generated`)
        console.log(response)
        return {
            
            uploadID_png,
            uploadUrl,
            uploadKey,
            xAmzTagging,
            bucket,
            xAmzAlgorithm,
            xAmzCredential,
            xAmzDate,
            policy,
            xAmzSignature,
        }
    }

    
    async createFileuplaodJpg(url: string, userToken: string, chatId:string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = {
            "chatId" : `${chatId}`,
            extension: 'jpg',
            flow: 'editProfile',
            purpose: 'avatar',
            type: 'photo',
        }
        const apiRequest = await apiContext.post(`${url}:3000/createFileUpload`, {
            data,
            headers: Headers.userHeader(userToken),
        })
     
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const uploadID_jpg = response.tempUploadId
        const uploadUrl = response.url
        const uploadKey = Object.values(response.fields)[0]
        const xAmzTagging = Object.values(response.fields)[1]
        const bucket = Object.values(response.fields)[2]
        const xAmzAlgorithm = Object.values(response.fields)[3]
        const xAmzCredential = Object.values(response.fields)[4]
        const xAmzDate = Object.values(response.fields)[5]
        const policy = Object.values(response.fields)[6]
        const xAmzSignature = Object.values(response.fields)[7]
        console.log(`URL for upload : ${uploadUrl} is generated`)
        return {
            uploadID_jpg,
            uploadUrl,
            uploadKey,
            xAmzTagging,
            bucket,
            xAmzAlgorithm,
            xAmzCredential,
            xAmzDate,
            policy,
            xAmzSignature,
        }
    }
}

