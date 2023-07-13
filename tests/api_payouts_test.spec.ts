import { request, test } from "@playwright/test";
import { Api } from "../pages/Api";
import { apiUrl } from "../utils/apiUrl";
import { apiDataSet } from "../utils/dataSet";

let user, admin
const email = apiDataSet.randomEmail

test.describe.only('API test ',async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        admin = await api.loginPage.createNewAdminUser(apiUrl.qaEnvUrl)
        await api.profilePage.addDiamonds(apiUrl.qaEnvUrl, admin.adminToken, user.id) 
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
    })

    test('Payouts Request/History',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        
        await api.payoutPage.payoutRequest(apiUrl.qaEnvUrl, user.userToken, email)
        await api.payoutPage.getPayoutsHistory(apiUrl.qaEnvUrl, user.userToken, user.id, email)
        await api.payoutPage.adminPayoutRequest(apiUrl.qaEnvUrl, admin.adminToken, user.id, email)
    
    })

    


})

