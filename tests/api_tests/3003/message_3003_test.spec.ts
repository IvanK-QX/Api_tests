import { request, test } from '@playwright/test'
import { apiUrl } from '../../../utils/apiUrl'
import { Api } from '../../../pages/Api'
import { apiDataSet } from '../../../utils/dataSet'
import { stringify } from 'querystring'

let user, user2,createdInfo


test.describe('3003 API test ', async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        user2 = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        await api.followingPage.follow(apiUrl.qaEnvUrl, user.userToken, user2.id)
        await api.followingPage.follow(apiUrl.qaEnvUrl, user2.userToken, user.id)
        await api.slackPage.addCoins(user.humanReadableId)
        await api.slackPage.addCoins(user2.humanReadableId)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user2.userToken)
    })

    test('Message Api Test', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.messagePage.createMessage(apiUrl.qaEnvUrl, user.userToken, user2.id, apiDataSet.messageText)
    })

    test('MessageList Api Test', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const chat = await api.messagePage.createMessage(apiUrl.qaEnvUrl, user.userToken, user2.id, apiDataSet.messageText)
        await api.messagePage.messageList(apiUrl.qaEnvUrl, user.userToken, chat.chatId, chat.text)
    })

    test('DoICanChatting Api Test', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.messagePage.doIcanChatting(apiUrl.qaEnvUrl, user.userToken, user2.id)
    })

    test('Chat Unblock Api Test', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.messagePage.chatUnbloc(apiUrl.qaEnvUrl, user.userToken, user2.id, user.id)
    })

    test('Chat Users List', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.messagePage.chatUsersList(apiUrl.qaEnvUrl, user.userToken, user2.id)
    })

    test('My List', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const message = await api.messagePage.createMessage(apiUrl.qaEnvUrl, user.userToken, user2.id, apiDataSet.messageText)
        await api.messagePage.myList(apiUrl.qaEnvUrl, user.userToken, message.lastMessageId)
    })

    test('My Get', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const chatInfo = await api.messagePage.createMessage(apiUrl.qaEnvUrl, user.userToken, user2.id, apiDataSet.messageText)
        await api.messagePage.myGet(apiUrl.qaEnvUrl, user.userToken, chatInfo.chatId)

    })

    test('Message Delete', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const chatInfo = await api.messagePage.createMessage(apiUrl.qaEnvUrl, user.userToken, user2.id, apiDataSet.messageText)
        await api.messagePage.messageDelete(apiUrl.qaEnvUrl, user.userToken, chatInfo.lastMessageId, chatInfo.toId, chatInfo.fromId)
    })

    test('Mark Read', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const chatInfo = await api.messagePage.createMessage(apiUrl.qaEnvUrl, user.userToken, user2.id, apiDataSet.messageText)
        await api.messagePage.markRead(apiUrl.qaEnvUrl, user2.userToken, chatInfo.chatId)
    })

    test('Message Count', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.messagePage.createMessage(apiUrl.qaEnvUrl, user.userToken, user2.id, apiDataSet.messageText)
        await api.messagePage.messageCount( apiUrl.qaEnvUrl, user2.userToken )
    })

    test('Chat Users Online', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.messagePage.createMessage(apiUrl.qaEnvUrl, user.userToken, user2.id, apiDataSet.messageText)
        await api.messagePage.chatUsersOnline( apiUrl.qaEnvUrl, user.userToken, user2.id )
    })

    test('Subscribe Stream Chat',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const stream = await api.streamsPage.createStream(apiUrl.qaEnvUrl, user.userToken, 'public', apiDataSet.streamTitle)
        await api.messagePage.subscribeStreamChat( apiUrl.qaEnvUrl, user2.userToken, stream.myChatId)
    })

    test('Leave Stream Chat',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const stream = await api.streamsPage.createStream(apiUrl.qaEnvUrl, user.userToken, 'public', apiDataSet.streamTitle)
        await api.messagePage.leaveStreamChat( apiUrl.qaEnvUrl, user2.userToken, stream.myChatId)
    })
    
    test('Uoload Png', async () => {
    const apiContext = await request.newContext()
    const api = new Api(apiContext)
    const createdChatId = await api.messagePage.createMessage(apiUrl.qaEnvUrl, user.userToken, user2.id, apiDataSet.messageText)
    await api.messagePage.createFileuplaodPng(apiUrl.qaEnvUrl, user.userToken, createdChatId.chatId)
    }) 

    test('Uoload Jpg', async () => {
    const apiContext = await request.newContext()
    const api = new Api(apiContext)
    const receivedChatId = await api.messagePage.createMessage(apiUrl.qaEnvUrl, user.userToken, user2.id, apiDataSet.messageText)
    await api.messagePage.createFileuplaodJpg(apiUrl.qaEnvUrl, user.userToken, receivedChatId.chatId)
    })

})


test.describe('3003 API test ', async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        user2 = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        await api.slackPage.addCoins(user.humanReadableId)
        await api.slackPage.addCoins(user2.humanReadableId)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user2.userToken)
    })

    test('Chat Users List Empty', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const leaderboardMonth = await api.leadersPage.getLeders(apiUrl.qaEnvUrl, user.userToken, 'month')
        await api.messagePage.chatUsersListEmpty(apiUrl.qaEnvUrl, user.userToken, leaderboardMonth.Top1User)
    })   
})

test.describe('3003 API test ', async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        user2 = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        await api.followingPage.follow(apiUrl.qaEnvUrl, user.userToken, user2.id)
        await api.followingPage.follow(apiUrl.qaEnvUrl, user2.userToken, user.id)
        await api.slackPage.addCoins(user.humanReadableId)
        await api.slackPage.addCoins(user2.humanReadableId)
        createdInfo = await api.messagePage.createMessage(apiUrl.qaEnvUrl, user.userToken, user2.id, apiDataSet.messageText)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user2.userToken)
    })

    test('Upload Png', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.messagePage.createFileuplaodPng(apiUrl.qaEnvUrl, user.userToken, createdInfo.chatId)
        }) 
    
    test('Upload Jpg', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.messagePage.createFileuplaodJpg(apiUrl.qaEnvUrl, user.userToken, createdInfo.chatId)
        })

    test('MessageFile', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const createFileuplaodPng_png = await api.messagePage.createFileuplaodPng(apiUrl.qaEnvUrl, user.userToken, createdInfo.chatId)
        await api.messagePage.uploadPngToS3(createFileuplaodPng_png.uploadUrl,createFileuplaodPng_png.uploadKey_string,createFileuplaodPng_png.xAmzTagging_string, createFileuplaodPng_png.bucket_string, createFileuplaodPng_png.xAmzAlgorithm_string, createFileuplaodPng_png.xAmzCredential_string, createFileuplaodPng_png.xAmzDate_string, createFileuplaodPng_png.policy_string, createFileuplaodPng_png.xAmzSignature_string, apiDataSet.messageText)
        const createFileuplaodPng_jpg = await api.messagePage.createFileuplaodJpg(apiUrl.qaEnvUrl, user.userToken, createdInfo.chatId)
        await api.messagePage.uploadJpgToS3(createFileuplaodPng_jpg.uploadUrl, createFileuplaodPng_jpg.uploadKey_string,createFileuplaodPng_jpg.xAmzTagging_string, createFileuplaodPng_jpg.bucket_string, createFileuplaodPng_jpg.xAmzAlgorithm_string, createFileuplaodPng_jpg.xAmzCredential_string, createFileuplaodPng_jpg.xAmzDate_string, createFileuplaodPng_jpg.policy_string, createFileuplaodPng_jpg.xAmzSignature_string, apiDataSet.messageText)
        await api.messagePage.messageFile(apiUrl.qaEnvUrl, user.userToken, createdInfo.chatId, createdInfo.toId, createFileuplaodPng_png.uploadID_png, createFileuplaodPng_jpg.uploadID_jpg)
    })

})

