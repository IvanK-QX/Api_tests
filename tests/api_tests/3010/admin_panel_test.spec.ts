import { request, test } from "@playwright/test";
import { apiUrl } from "../../../utils/apiUrl";
import { Api } from "../../../pages/Api";
import { apiDataSet } from "../../../utils/dataSet";

let user, admin, stream

test.describe('Admin Panel API test',async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        // user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        admin = await api.loginPage.loginWithAdminUser(apiUrl.qaEnvUrl)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        // await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
    })

    test.only('Shift page', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.adminPanelPage.getModerators(apiUrl.qaEnvUrl, admin.adminToken)
        await api.adminPanelPage.getModeratorsOnShift(apiUrl.qaEnvUrl, admin.adminToken)
        await api.adminPanelPage.startShiftForModerator(apiUrl.qaEnvUrl, admin.adminToken, '63a58d87535ddee0148f8868', true)
    })

})