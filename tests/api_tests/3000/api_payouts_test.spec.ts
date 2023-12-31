import { request, test } from '@playwright/test'
import { apiUrl } from '../../../utils/apiUrl'
import { Api } from '../../../pages/Api'
import { apiDataSet } from '../../../utils/dataSet'

let user, admin

test.describe('Payouts API test ', async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        admin = await api.loginPage.loginWithAdminUser(apiUrl.qaEnvUrl)
        await api.profilePage.addDiamonds(apiUrl.qaEnvUrl, admin.adminToken, user.id)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
    })

    test('Payouts Request/History/Status', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)

        const payoneerEmail = await api.payoutPage.payoutRequest(apiUrl.qaEnvUrl, user.userToken, "payoneerEmail", apiDataSet.randomEmail)
        await api.payoutPage.getPayoutsHistory(apiUrl.qaEnvUrl, user.userToken, user.id, payoneerEmail.value1)
        await api.payoutPage.adminPayoutRequest(apiUrl.qaEnvUrl, admin.adminToken, user.id, payoneerEmail.value1)
        const payoutRequestedId = await api.payoutPage.adminPayoutHistory(apiUrl.qaEnvUrl, admin.adminToken, user.humanReadableId, user.id, payoneerEmail.value1)
        await api.payoutPage.adminSetPayoutStatus(apiUrl.qaEnvUrl, admin.adminToken, payoutRequestedId.payoutRequestId, 'paid')
    })

    test('Streamer Type _Internal', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.internalPage.stremerType(apiUrl.qaEnvUrl, admin.adminToken, user.id)
    })

    test('Analytics Revcat _Internal', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.internalPage.analyticsRevcat(apiUrl.qaEnvUrl, admin.adminToken)
    })

    test('Webhook Revcat _Internal', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.internalPage.webhooksRevcat(apiUrl.qaEnvUrl, admin.adminToken)
    })
})
