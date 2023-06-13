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

    test('Edit Profile',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)

        await api.profilePage.editProfile(`${apiUrl.qaEnvUrl}/profile`, user.userToken, apiDataSet.randomName, apiDataSet.randomAbout)
    })

    test('Get Profile',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.profilePage.getProfile(`${apiUrl.qaEnvUrl}/profile`, user.userToken, user.email)
    })

    test.only('Show Week Leaders',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.leadersPage.getLeders(`${apiUrl.qaEnvUrl}/streams/leaderboard`, user.userToken, 'week')
        await api.leadersPage.getLeders(`${apiUrl.qaEnvUrl}/streams/leaderboard`, user.userToken, 'day')
        await api.leadersPage.getLeders(`${apiUrl.qaEnvUrl}/streams/leaderboard`, user.userToken, "month")
    })
})

