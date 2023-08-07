import { request, test } from "@playwright/test";
import { apiUrl } from "../../utils/apiUrl";
import { Api } from "../../pages/Api";

let user, admin

test.describe('Other API test ',async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        admin = await api.loginPage.loginWithAdminUser(apiUrl.qaEnvUrl)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
    })

    test('Get fshop list',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.otherTestsPage.getShopList(apiUrl.qaEnvUrl, user.userToken)
    })

    test('Get feature flags',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.otherTestsPage.getFeatureFlag(apiUrl.qaEnvUrl, admin.adminToken)
    })
    
    test('Snap',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.otherTestsPage.snapAuth(apiUrl.qaEnvUrl, user.userToken)
        await api.otherTestsPage.snapInit(apiUrl.qaEnvUrl, user.userToken)
    })

})

