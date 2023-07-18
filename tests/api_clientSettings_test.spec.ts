import { request, test } from "@playwright/test";
import { Api } from "../pages/Api";
import { apiUrl } from "../utils/apiUrl";

let user

test.describe('API test ',async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
    })

    test('Client Setting/Add Media Source',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.clientSettings.getClientSettings(apiUrl.qaEnvUrl, user.userToken)
        await api.clientSettings.addMediaSource(apiUrl.qaEnvUrl, user.userToken, 'snapchat_int')

        
    })

    


})
