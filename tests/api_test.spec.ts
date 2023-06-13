import { request, test } from "@playwright/test";
import { Api } from "../pages/Api";
import { apiUrl } from "../utils/apiUrl";
import { apiDataSet } from "../utils/dataSet";
let user 

test.describe('API test with new user',async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const login = await api.loginPage.login(`${apiUrl.qaEnvUrl}/login`)
        user = await api.loginPage.addEmail(`${apiUrl.qaEnvUrl}/login`, login.token, apiDataSet.deviceUUID)
    })

    test('Login new user',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)

        await api.profilePage.editProfile(`${apiUrl.qaEnvUrl}/profile`, user.userToken, apiDataSet.randomName, apiDataSet.randomAbout)
    })
})

