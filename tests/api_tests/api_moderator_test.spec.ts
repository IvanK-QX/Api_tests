import { request, test } from "@playwright/test";
import { apiUrl } from "../../utils/apiUrl";
import { Api } from "../../pages/Api";
import { apiDataSet } from "../../utils/dataSet";

let newAdmin, user, referralUser, newStream

test.describe('API test ',async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const guestUser = await api.loginPage.login(`${apiUrl.qaEnvUrl}:3000/login`)
        const admin = await api.loginPage.loginWithAdminUser(apiUrl.qaEnvUrl)
        const  createdNewAdmin = await api.moderatorPage.createNewModerator(apiUrl.qaEnvUrl, admin.adminToken, apiDataSet.randomEmail)
        newAdmin = await api.moderatorPage.moderatorLogin(apiUrl.qaEnvUrl, guestUser.token, createdNewAdmin.email, apiDataSet.deviceUUID)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        referralUser = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        newStream = await api.streamsPage.createStream(apiUrl.qaEnvUrl, referralUser.userToken, "public", apiDataSet.streamTitle )
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, referralUser.userToken)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, newAdmin.newAdminToken)
    })

    test('Admin Refferal Earnings',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.referalPage.setReferal(apiUrl.qaEnvUrl, user.userToken, user.id, referralUser.id)
        await api.moderatorPage.getAdminReferralEarnings(apiUrl.qaEnvUrl, user.userToken, user.id, apiDataSet.isoDate, apiDataSet.isoDate)
    }) 
    
    test('Admin Profile Get/Update',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const currentStatus = await api.moderatorPage.getAdminProfile(apiUrl.qaEnvUrl, newAdmin.newAdminToken, user.id)
        await api.moderatorPage.setAdminProfileStatus(apiUrl.qaEnvUrl, newAdmin.newAdminToken, referralUser.id, currentStatus.userStatus, "Blocked")
        await api.moderatorPage.getAdminProfileList(apiUrl.qaEnvUrl, newAdmin.newAdminToken)
        await api.moderatorPage.getAgentProfile(apiUrl.qaEnvUrl, newAdmin.newAdminToken, referralUser.id)
        await api.moderatorPage.adminProfileUpdate(apiUrl.qaEnvUrl, newAdmin.newAdminToken, referralUser.id, "updateFields", apiDataSet.randomName, apiDataSet.randomEmail)
        await api.moderatorPage.adminSetPayoutEmail(apiUrl.qaEnvUrl, newAdmin.newAdminToken, referralUser.id, "test@test2222.com")
    }) 

    // test('Admin Avatar Approve/Decline',async () => {
    //     const apiContext = await request.newContext()
    //     const api = new Api(apiContext)
    //     await api.moderatorPage.getAdminApprovalQueueCount(apiUrl.qaEnvUrl, newAdmin.newAdminToken)
    //     await api.moderatorPage.getAdminAvatarsApprovalQueue(apiUrl.qaEnvUrl, newAdmin.newAdminToken)
    //     // await api.moderatorPage.adminApproveAvatar(apiUrl.qaEnvUrl, newAdmin.newAdminToken, pendingAvatarId.avatarId)
    //     // pendingAvatarId = await api.moderatorPage.getAdminAvatarsApprovalQueue(apiUrl.qaEnvUrl, newAdmin.newAdminToken)
    //     // await api.moderatorPage.adminDeclineAvatar(apiUrl.qaEnvUrl, newAdmin.newAdminToken, pendingAvatarId.avatarId)
        
    // }) 

    test('Admin Moderator Actions',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const streamAction = await api.moderatorPage.adminModeratorAction(apiUrl.qaEnvUrl, newAdmin.newAdminToken, newStream.myStreamId, "warning", "closedCamera/emptyRoom")
        await api.moderatorPage.getAdminActionList(apiUrl.qaEnvUrl, newAdmin.newAdminToken, newStream.myStreamId)
        await api.moderatorPage.adminTimerStop(apiUrl.qaEnvUrl, newAdmin.newAdminToken, streamAction.returnedActionId) 
        
    }) 

})