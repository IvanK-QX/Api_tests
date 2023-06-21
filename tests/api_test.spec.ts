import { request, test } from "@playwright/test";
import { Api } from "../pages/Api";
import { apiUrl } from "../utils/apiUrl";
import { apiDataSet } from "../utils/dataSet";
import { App } from "../pages/App";
let user

test.describe('API test with new user',async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const login = await api.loginPage.login(`${apiUrl.qaEnvUrl}/login`)
        user = await api.loginPage.addEmail(`${apiUrl.qaEnvUrl}/login`, login.token, apiDataSet.deviceUUID)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(`${apiUrl.qaEnvUrl}/delete`, user.userToken)
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

    test('Show Week Leaders',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.leadersPage.getLeders(`${apiUrl.qaEnvUrl}/streams/leaderboard`, user.userToken, 'week')
        await api.leadersPage.getLeders(`${apiUrl.qaEnvUrl}/streams/leaderboard`, user.userToken, 'day')
        await api.leadersPage.getLeders(`${apiUrl.qaEnvUrl}/streams/leaderboard`, user.userToken, "month")
    })

    test('Search and Preview Other Profile',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const otherUser = await api.profilePage.search(`${apiUrl.qaEnvUrl}/find`, user.userToken, apiDataSet.searchText)
        await api.profilePage.otherUserProfile(`${apiUrl.qaEnvUrl}/otherUserProfile`, user.userToken, otherUser.id)
    })

    test.only('Upload File and Change Avatar ',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const createFileUpload = await api.profilePage.createFileuplaod(`${apiUrl.qaEnvUrl}/createFileUpload`, user.userToken)
        api.profilePage.uploadToS3(createFileUpload.uploadUrl, createFileUpload.uploadKey, createFileUpload.xAmzTagging, createFileUpload.bucket, createFileUpload.xAmzAlgorithm, createFileUpload.xAmzCredential, createFileUpload.xAmzDate, createFileUpload.policy, createFileUpload.xAmzSignature)
    })


})

