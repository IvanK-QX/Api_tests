import { request, test } from "@playwright/test";
import { apiUrl } from "../../../utils/apiUrl";
import { Api } from "../../../pages/Api";
import { apiDataSet } from "../../../utils/dataSet";

let user, user2

test.describe('3003 API test ',async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        user2 = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        await api.followingPage.follow(apiUrl.qaEnvUrl, user.userToken, user2.id)
        await api.followingPage.follow(apiUrl.qaEnvUrl, user2.userToken, user.id)
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
        console.log(chat)
    })

    test('DoICanChatting Api Test', async () => { 
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.messagePage.doIcanChatting(apiUrl.qaEnvUrl, user.userToken, user2.id )
    })

    test('Chat Unblock Api Test', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.messagePage.chatUnbloc(apiUrl.qaEnvUrl, user.userToken, user2.id, user.id)


    })
    

})
