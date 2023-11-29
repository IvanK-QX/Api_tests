import { request, test } from '@playwright/test'
import { apiUrl } from '../../../utils/apiUrl'
import { Api } from '../../../pages/Api'

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
})
