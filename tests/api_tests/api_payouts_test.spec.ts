import { request, test } from "@playwright/test";
import { apiUrl } from "../../utils/apiUrl";
import { Api } from "../../pages/Api";

let user, admin

test.describe('Payouts API test ',async () => {
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

    test('Payouts Request/History/Status',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        
        const payoneerEmail = await api.payoutPage.payoutRequest(apiUrl.qaEnvUrl, user.userToken)
        await api.payoutPage.getPayoutsHistory(apiUrl.qaEnvUrl, user.userToken, user.id, payoneerEmail.randomPayoneerEmail)
        await api.payoutPage.adminPayoutRequest(apiUrl.qaEnvUrl, admin.adminToken, user.id, payoneerEmail.randomPayoneerEmail)
        const payoutRequestedId = await api.payoutPage.adminPayoutHistory(apiUrl.qaEnvUrl, admin.adminToken, user.humanReadableId, user.id, payoneerEmail.randomPayoneerEmail)
        await api.payoutPage.adminSetPayoutStatus(apiUrl.qaEnvUrl, admin.adminToken, payoutRequestedId.payoutRequestId, "paid" )
    
    })

    


})

