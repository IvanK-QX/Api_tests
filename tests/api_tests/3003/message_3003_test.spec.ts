import { request, test } from '@playwright/test'
import { apiUrl } from '../../../utils/apiUrl'
import { Api } from '../../../pages/Api'
import { apiDataSet } from '../../../utils/dataSet'

let user, user2

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
