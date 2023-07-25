import { request, test } from "@playwright/test";
import { Api } from "../../pages/Api";
import { apiUrl } from "../../utils/apiUrl";

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

    test('Add Media Source snapchat',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.clientSettingsPage.addMediaSource(apiUrl.qaEnvUrl, user.userToken, 'snapchat_int')
 
    })

    test('Add Media Source facebook',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.clientSettingsPage.addMediaSource(apiUrl.qaEnvUrl, user.userToken, 'facebook')
 
    })

    test('Client Setting',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.clientSettingsPage.getClientSettings(apiUrl.qaEnvUrl, user.userToken)
          
    })


})
