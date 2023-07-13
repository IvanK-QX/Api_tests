import { request, test } from "@playwright/test";
import { Api } from "../pages/Api";
import { apiUrl } from "../utils/apiUrl";
import { apiDataSet } from "../utils/dataSet";

let user, admin
let randomPayoneerEmail = `${apiDataSet.randomEmail}`

test.describe('API test ',async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        admin = await api.loginPage.createNewAdminUser(apiUrl.qaEnvUrl)
        await api.profilePage.addDiamonds(`${apiUrl.qaEnvUrl}/profile/balance/diamonds`, admin.adminToken, user.id)
        
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(`${apiUrl.qaEnvUrl}/delete`, user.userToken)
    })

    test.only('Payouts Request/History',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.payoutPage.payoutRequest(apiUrl.qaEnvUrl, user.userToken, randomPayoneerEmail )
        await api.payoutPage.getPayoutsHistory(apiUrl.qaEnvUrl, user.userToken, user.id, randomPayoneerEmail)
        await api.payoutPage.adminPayoutRequest(apiUrl.qaEnvUrl, admin.adminToken, user.id, randomPayoneerEmail)
       
    })

    


})

