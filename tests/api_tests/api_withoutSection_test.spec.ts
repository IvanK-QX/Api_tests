import { request, test } from "@playwright/test";
import { apiUrl } from "../../utils/apiUrl";
import { Api } from "../../pages/Api";

let user

test.describe('Other API test', async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
    })

    test('Get Ratios', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext) 
        await api.otherTestsPage.getRatios(apiUrl.qaEnvUrl, user.userToken)
    })

    test('Get Coins For Last 30 Days', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext) 
        await api.otherTestsPage.getCoinsBoughtLast30Days(apiUrl.qaEnvUrl, user.userToken)
    })

    test('Last Launch', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext) 
        await api.otherTestsPage.lastLaunch(apiUrl.qaEnvUrl, user.userToken)
    })

    test('Get Model Problem', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext) 
        await api.otherTestsPage.getModelProblem(apiUrl.qaEnvUrl, user.userToken)
    })

    test('Get Mounthly Bonus', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext) 
        await api.otherTestsPage.mounthlyBonus(apiUrl.qaEnvUrl, user.userToken)
    })

    test('Get Agent Mounthly Bonus', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext) 
        await api.otherTestsPage.agentBonus(apiUrl.qaEnvUrl, user.userToken)
    })

    test('Snap',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.otherTestsPage.snapAuth(apiUrl.qaEnvUrl, user.userToken)
        await api.otherTestsPage.snapInit(apiUrl.qaEnvUrl, user.userToken)
    })

    test('Get shop list',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.otherTestsPage.getShopList(apiUrl.qaEnvUrl, user.userToken)
    })

})