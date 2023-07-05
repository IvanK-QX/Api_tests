import { request, test } from "@playwright/test";
import { Api } from "../pages/Api";
import { apiUrl } from "../utils/apiUrl";
import { apiDataSet } from "../utils/dataSet";

let user, user2

test.describe('API test with new user',async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        user2 = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(`${apiUrl.qaEnvUrl}/delete`, user.userToken)
        await api.deleteAccountPage.deleteAccount(`${apiUrl.qaEnvUrl}/delete`, user2.userToken)
    })

    // test('Get gift list',async () => {
    //     const apiContext = await request.newContext()
    //     const api = new Api(apiContext)
       
    // })

    


})

