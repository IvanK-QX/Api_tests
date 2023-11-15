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

    test('Shift page', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.api3011ShiftsPage.getModerators(apiUrl.qaEnvUrl, admin.adminToken)
        await api.api3011ShiftsPage.startSafeShiftForModerator(apiUrl.qaEnvUrl, admin.adminToken, createdNewAdmin.id)
        await api.api3011ShiftsPage.moderatorOnSafeShiftNotDisplayedInOtherShiftList(apiUrl.qaEnvUrl, admin.adminToken, createdNewAdmin.id)
        await api.api3011ShiftsPage.getModeratorsOnShift(apiUrl.qaEnvUrl, admin.adminToken, createdNewAdmin.id)
        await api.api3011ShiftsPage.startOtherShiftForModerator(apiUrl.qaEnvUrl, admin.adminToken, createdNewAdmin.id)
        await api.api3011ShiftsPage.getModeratorsOnOtherShift(apiUrl.qaEnvUrl, admin.adminToken, createdNewAdmin.id)
        await api.api3011ShiftsPage.endShiftForModerator(apiUrl.qaEnvUrl, admin.adminToken, createdNewAdmin.id)
    })

})