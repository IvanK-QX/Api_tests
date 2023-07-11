import { request, test } from "@playwright/test";
import { Api } from "../pages/Api";
import { apiUrl } from "../utils/apiUrl";
import { apiDataSet } from "../utils/dataSet";

let user, admin

test.describe('API test with new user',async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        admin = await api.loginPage.createNewAdminUser(apiUrl.qaEnvUrl)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
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

    test('Upload File and Change Avatar ',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const createFileUpload = await api.profilePage.createFileuplaod(`${apiUrl.qaEnvUrl}/createFileUpload`, user.userToken)
        // api.profilePage.uploadToS3(createFileUpload.uploadUrl, createFileUpload.uploadKey, createFileUpload.xAmzTagging, createFileUpload.bucket, createFileUpload.xAmzAlgorithm, createFileUpload.xAmzCredential, createFileUpload.xAmzDate, createFileUpload.policy, createFileUpload.xAmzSignature)
        // api.profilePage.updateProfileCover(`${apiUrl.qaEnvUrl}/profileAvatar`, user.userToken, createFileUpload.uploadID)
    })

    test('Invite to stream CRUD',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.profilePage.inviteToSteram(`${apiUrl.qaEnvUrl}/profile/setAllowedInviteToStream`, user.userToken, true)
        await api.profilePage.inviteToSteram(`${apiUrl.qaEnvUrl}/profile/setAllowedInviteToStream`, user.userToken, false)   
    })

    test('Allow to start premium CRUD',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        console.log(admin.adminToken)
        await api.profilePage.allowedToStartPremium(`${apiUrl.qaEnvUrl}/admin/profile/allowedToStartPremium`, admin.adminToken, user.id, true)
        await api.profilePage.allowedToStartPremium(`${apiUrl.qaEnvUrl}/admin/profile/allowedToStartPremium`, admin.adminToken, user.id ,false)   
    })

    test('Add Diamonds',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        console.log(admin.adminToken)
        await api.profilePage.addDiamonds(`${apiUrl.qaEnvUrl}/profile/balance/diamonds`, admin.adminToken, user.id)
    })
    


})

