import { request, test } from '@playwright/test'
import { apiUrl } from '../../../utils/apiUrl'
import { Api } from '../../../pages/Api'
import { apiDataSet } from '../../../utils/dataSet'
import { TIMEOUT } from 'dns'

let admin

test.describe('Admin Panel API test', async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        admin = await api.loginPage.loginWithAdminUser(apiUrl.qaEnvUrl)
    })

    test('Shift page', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.api3011ShiftsPage.getModerators(apiUrl.qaEnvUrl, admin.adminToken)
        await api.api3011ShiftsPage.startSafeShiftForModerator(apiUrl.qaEnvUrl, admin.adminToken, admin.id)
        await api.api3011ShiftsPage.moderatorOnSafeShiftNotDisplayedInOtherShiftList(apiUrl.qaEnvUrl, admin.adminToken, admin.id)
        await api.api3011ShiftsPage.getModeratorsOnShift(apiUrl.qaEnvUrl, admin.adminToken, admin.id)
        await api.api3011ShiftsPage.startOtherShiftForModerator(apiUrl.qaEnvUrl, admin.adminToken, admin.id)
        await api.api3011ShiftsPage.getModeratorsOnOtherShift(apiUrl.qaEnvUrl, admin.adminToken, admin.id)
        await api.api3011ShiftsPage.endShiftForModerator(apiUrl.qaEnvUrl, admin.adminToken, admin.id)
    })

    test('Avatars page', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.api3011Page.getQueueCount(apiUrl.qaEnvUrl, admin.adminToken)
    })

    test('Actions page', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        const profile = await api.profilePage.getProfile(apiUrl.qaEnvUrl, user.userToken, user.email)
        const stream = await api.streamsPage.createStream(apiUrl.qaEnvUrl, user.userToken, 'public', apiDataSet.streamTitle)
        const streamAction = await api.moderatorPage.adminModeratorAction(apiUrl.qaEnvUrl, admin.adminToken, stream.myStreamId, 'warning', 'closedCamera/emptyRoom')
        await api.api3011Page.filterActionsList(apiUrl.qaEnvUrl, admin.adminToken, "type", "warning", "streamerId", profile.humanReadableId, stream.myStreamId)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
    })

    test('Users page', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        const profile = await api.profilePage.getProfile(apiUrl.qaEnvUrl, user.userToken, user.email)
        await api.api3011Page.filterUsersList(apiUrl.qaEnvUrl, admin.adminToken, "userId", profile.humanReadableId, profile._id)
        await api.api3011Page.filterUsersList(apiUrl.qaEnvUrl, admin.adminToken, "userName", profile.name, profile._id)
        // BUG await api.api3011Page.filterUsersList(apiUrl.qaEnvUrl, admin.adminToken, "email", profile.email, profile._id)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
    })

    test('Payouts page', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        await api.profilePage.addDiamonds(apiUrl.qaEnvUrl, admin.adminToken, user.id)
        // await api.payoutPage.addWalletToProfile(apiUrl.qaEnvUrl, user.userToken, apiDataSet.eWallet)
        const payoutWallet = await api.payoutPage.payoutRequest(apiUrl.qaEnvUrl, user.userToken, "usdtDepositAddress", apiDataSet.eWallet)
        const payoutPayoneer = await api.payoutPage.payoutRequest(apiUrl.qaEnvUrl, user.userToken, "payoneerEmail", apiDataSet.randomEmail)
        const profile = await api.profilePage.getProfile(apiUrl.qaEnvUrl, user.userToken, user.email)
        await api.api3011Page.filterPayoutsList(apiUrl.qaEnvUrl, admin.adminToken, "userId", profile.humanReadableId, profile._id)
        await api.api3011Page.filterPayoutsList(apiUrl.qaEnvUrl, admin.adminToken, "userName", profile.name, profile._id)
        // BUG await api.api3011Page.filterPayoutsList(apiUrl.qaEnvUrl, admin.adminToken, "eWallet", payoutWallet.value1, profile._id)
        // BUG await api.api3011Page.filterPayoutsList(apiUrl.qaEnvUrl, admin.adminToken, "payoneerEmail", payoutPayoneer.value1, profile._id)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
    })

    test('Reports page', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const user1 = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        const user2 = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        const profile1 = await api.profilePage.getProfile(apiUrl.qaEnvUrl, user1.userToken, user1.email)
        const profile2 = await api.profilePage.getProfile(apiUrl.qaEnvUrl, user2.userToken, user2.email)
        await api.reportPage.reportUser(apiUrl.qaEnvUrl, user1.userToken, 'spam', user2.id)
        await api.api3011Page.filterReportsList(apiUrl.qaEnvUrl, admin.adminToken, "reportedUserId", profile2.humanReadableId, profile2._id)
        await api.api3011Page.filterReportsList(apiUrl.qaEnvUrl, admin.adminToken, "reportingUserId", profile1.humanReadableId, profile2._id)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user1.userToken)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user2.userToken)
    })

    test('Streamers page', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        // const user1 = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        // const profile1 = await api.profilePage.getProfile(apiUrl.qaEnvUrl, user1.userToken, user1.email)
        // const stream = await api.streamsPage.createStream(apiUrl.qaEnvUrl, user1.userToken, 'public', apiDataSet.streamTitle)
        // await api.streamsPage.stopStream(apiUrl.qaEnvUrl, user1.userToken, stream.myStreamId)
        await api.api3011Page.filterStreamersList(apiUrl.qaEnvUrl, admin.adminToken, "humanReadableId", "95639", "2023-01-01", "2030-12-01", "6516dd395fc36151b18246af")
        await api.api3011Page.filterStreamersList(apiUrl.qaEnvUrl, admin.adminToken, "name", "Oleh Apple API test", "2023-01-01", "2030-12-01", "6516dd395fc36151b18246af")
        await api.api3011Page.filterStreamersList(apiUrl.qaEnvUrl, admin.adminToken, "email", "oleh.b.test11@gmail.com", "2023-01-01", "2030-12-01", "6516dd395fc36151b18246af")
        // await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user1.userToken)
    })

    test('Agents page', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const user1 = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        const profile1 = await api.profilePage.getProfile(apiUrl.qaEnvUrl, user1.userToken, user1.email)
        await api.moderatorPage.setAdminProfileAgent(apiUrl.qaEnvUrl, admin.adminToken, user1.id)
        await api.api3011Page.filterAgentsList(apiUrl.qaEnvUrl, admin.adminToken, "humanReadableId", profile1.humanReadableId, "2023-01-01", "2030-12-01", user1.id)
        await api.api3011Page.filterAgentsList(apiUrl.qaEnvUrl, admin.adminToken, "name", profile1.name, "2023-01-01", "2030-12-01", user1.id)
        // BUG await api.api3011Page.filterAgentsList(apiUrl.qaEnvUrl, admin.adminToken, "email", profile1.email, "2023-01-01", "2030-12-01", user1.id)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user1.userToken)
    })
})
