import { request, test } from "@playwright/test";
import { apiUrl } from "../../utils/apiUrl";
import { Api } from "../../pages/Api";

let guestUser, admin, createdNewAdmin, newAdmin, user, referralUser, pendingAvatarId, newStream, streamAction

test.describe('API test ',async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        guestUser = await api.loginPage.login(`${apiUrl.qaEnvUrl}:3000/login`)
        admin = await api.loginPage.createNewAdminUser(apiUrl.qaEnvUrl)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        referralUser = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        newStream = await api.streamsPage.createStream(apiUrl.qaEnvUrl, referralUser.userToken, "public", "Test Title" )

    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, referralUser.userToken)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, newAdmin.newAdminToken)
    })

    test('Moderator CRUD',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        createdNewAdmin = await api.moderatorPage.createNewModerator(apiUrl.qaEnvUrl, admin.adminToken)
        newAdmin = await api.moderatorPage.moderatorLogin(apiUrl.qaEnvUrl, guestUser.token, createdNewAdmin.email )

        await api.referalPage.setReferal(apiUrl.qaEnvUrl, user.userToken, user.id, referralUser.id)
        await api.moderatorPage.getAdminReferralEarnings(apiUrl.qaEnvUrl, user.userToken, user.id)
        await api.moderatorPage.setAdminProfileStatus(apiUrl.qaEnvUrl, newAdmin.newAdminToken, referralUser.id)
        await api.moderatorPage.getAdminApprovalQueueCount(apiUrl.qaEnvUrl, newAdmin.newAdminToken)
        pendingAvatarId = await api.moderatorPage.getAdminAvatarsApprovalQueue(apiUrl.qaEnvUrl, newAdmin.newAdminToken)
        await api.moderatorPage.adminApproveAvatar(apiUrl.qaEnvUrl, newAdmin.newAdminToken, pendingAvatarId.avatarId)
        pendingAvatarId = await api.moderatorPage.getAdminAvatarsApprovalQueue(apiUrl.qaEnvUrl, newAdmin.newAdminToken)
        await api.moderatorPage.adminDeclineAvatar(apiUrl.qaEnvUrl, newAdmin.newAdminToken, pendingAvatarId.avatarId)
        await api.moderatorPage.getAdminProfileList(apiUrl.qaEnvUrl, admin.adminToken)
        await api.moderatorPage.getAdminProfile(apiUrl.qaEnvUrl, newAdmin.newAdminToken, user.id)
        await api.moderatorPage.getAgentProfile(apiUrl.qaEnvUrl, newAdmin.newAdminToken, referralUser.id)
        await api.moderatorPage.AdminProfileUpdate(apiUrl.qaEnvUrl, newAdmin.newAdminToken, referralUser.id, "updateFields" )
        await api.moderatorPage.adminSetPayoutEmail(apiUrl.qaEnvUrl, newAdmin.newAdminToken, referralUser.id, "test@test.com")
        streamAction = await api.moderatorPage.adminModeratorAction(apiUrl.qaEnvUrl, newAdmin.newAdminToken, newStream.myStreamId, "closedCamera/emptyRoom")
        await api.moderatorPage.getAdminActionList(apiUrl.qaEnvUrl, newAdmin.newAdminToken, newStream.myStreamId)
        await api.moderatorPage.adminTimerStop(apiUrl.qaEnvUrl, newAdmin.newAdminToken, streamAction.returnedActionId) 
    
    })



    


})