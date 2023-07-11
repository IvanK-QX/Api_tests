import { request, test } from "@playwright/test";
import { Api } from "../pages/Api";
import { apiUrl } from "../utils/apiUrl";

let user, user2

test.describe('API test ',async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        user2 = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(`${apiUrl.qaEnvUrl}/delete`, user.userToken)
        await api.deleteAccountPage.deleteAccount(`${apiUrl.qaEnvUrl}/delete`, user2.userToken)
    })

    test('block user CRUD',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.blockedPage.blockUser(apiUrl.qaEnvUrl, user.userToken, user2.id)
        await api.blockedPage.getBlockedUsers(apiUrl.qaEnvUrl, user.userToken, user2.id)
        await api.blockedPage.unblockUser(apiUrl.qaEnvUrl, user.userToken, user2.id)
    })

    


})

