import { request, test } from "@playwright/test";
import { apiUrl } from "../../utils/apiUrl";
import { Api } from "../../pages/Api";

let user, referralUser

test.describe('API test ',async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        referralUser = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, referralUser.userToken)
    })

    test('Referral CRUD ',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.referalPage.setReferal(apiUrl.qaEnvUrl, user.userToken, user.id, referralUser.id)
        await api.referalPage.getReferalUsers(apiUrl.qaEnvUrl, user.userToken, referralUser.id)
        await api.referalPage.getReferalRulsList(apiUrl.qaEnvUrl, user.userToken)
        await api.referalPage.getReferralUsersStatistics(apiUrl.qaEnvUrl, user.userToken, "week")
        
    })

    


})