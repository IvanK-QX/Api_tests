import { request, test } from "@playwright/test";
import { apiUrl } from "../../../utils/apiUrl";
import { Api } from "../../../pages/Api";
import { apiDataSet } from "../../../utils/dataSet";

let admin, newAdmin, createdNewAdmin

test.describe('Admin Panel API test',async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        admin = await api.loginPage.loginWithAdminUser(apiUrl.qaEnvUrl)
        const guestUser = await api.loginPage.login(`${apiUrl.qaEnvUrl}:3000/login`)
        createdNewAdmin = await api.moderatorPage.createNewModerator(apiUrl.qaEnvUrl, admin.adminToken, apiDataSet.randomEmail)
        newAdmin = await api.moderatorPage.moderatorLogin(apiUrl.qaEnvUrl, guestUser.token, createdNewAdmin.email, apiDataSet.deviceUUID)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, newAdmin.newAdminToken)
    })

    test.only('Shift page', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.adminPanelPage.getModerators(apiUrl.qaEnvUrl, admin.adminToken)
        await api.adminPanelPage.startSafeShiftForModerator(apiUrl.qaEnvUrl, admin.adminToken, createdNewAdmin.id)
        await api.adminPanelPage.moderatorOnSafeShiftNotDisplayedInOtherShiftList(apiUrl.qaEnvUrl, admin.adminToken, createdNewAdmin.id)
        await api.adminPanelPage.getModeratorsOnShift(apiUrl.qaEnvUrl, admin.adminToken, createdNewAdmin.id)
        await api.adminPanelPage.startOtherShiftForModerator(apiUrl.qaEnvUrl, admin.adminToken, createdNewAdmin.id)
        await api.adminPanelPage.getModeratorsOnOtherShift(apiUrl.qaEnvUrl, admin.adminToken, createdNewAdmin.id)
        await api.adminPanelPage.endShiftForModerator(apiUrl.qaEnvUrl, admin.adminToken, createdNewAdmin.id)
    })

})