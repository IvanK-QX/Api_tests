import { request, test } from '@playwright/test'
import { apiUrl } from '../../../utils/apiUrl'
import { Api } from '../../../pages/Api'
import { apiDataSet } from '../../../utils/dataSet'

let user, admin

test.describe('Profile API test', async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        admin = await api.loginPage.loginWithAdminUser(apiUrl.qaEnvUrl)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
    })

    test('Edit Profile', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.profilePage.editProfile(apiUrl.qaEnvUrl, user.userToken, apiDataSet.randomName, apiDataSet.randomAbout)
    })

    test('Get Profile', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.profilePage.getProfile(apiUrl.qaEnvUrl, user.userToken, user.email)
    })

    test('Show Week Leaders', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.leadersPage.getLeders(apiUrl.qaEnvUrl, user.userToken, 'week')
        await api.leadersPage.getLeders(apiUrl.qaEnvUrl, user.userToken, 'day')
        await api.leadersPage.getLeders(apiUrl.qaEnvUrl, user.userToken, 'month')
    })

    test('Show Month Leader Name', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.leadersPage.getMonthLeders(apiUrl.qaEnvUrl, user.userToken )
    })

    test('Search and Preview Other Profile', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const otherUser = await api.profilePage.search(apiUrl.qaEnvUrl, user.userToken, apiDataSet.searchText)
        await api.profilePage.otherUserProfile(apiUrl.qaEnvUrl, user.userToken, otherUser.id)
    })

    test('Upload File and Change Avatar ', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.profilePage.createFileuplaod(apiUrl.qaEnvUrl, user.userToken)
        // api.profilePage.uploadToS3(createFileUpload.uploadUrl, user.userToken, createFileUpload.uploadKey, createFileUpload.xAmzTagging, createFileUpload.bucket, createFileUpload.xAmzAlgorithm, createFileUpload.xAmzCredential, createFileUpload.xAmzDate, createFileUpload.policy, createFileUpload.xAmzSignature)
        // api.profilePage.updateProfileCover(apiUrl.qaEnvUrl, user.userToken, createFileUpload.uploadID)
    })

    test('Invite to stream CRUD', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.profilePage.inviteToSteram(apiUrl.qaEnvUrl, user.userToken, true)
        await api.profilePage.inviteToSteram(apiUrl.qaEnvUrl, user.userToken, false)
    })

    test('Allow to start premium CRUD', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        console.log(admin.adminToken)
        await api.profilePage.allowedToStartPremium(apiUrl.qaEnvUrl, admin.adminToken, user.id, true)
        await api.profilePage.allowedToStartPremium(apiUrl.qaEnvUrl, admin.adminToken, user.id, false)
    })

    test('Add Diamonds', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.profilePage.addDiamonds(apiUrl.qaEnvUrl, admin.adminToken, user.id)
    })

})
