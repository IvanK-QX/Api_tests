import { request, test } from "@playwright/test";
import { apiUrl } from "../../utils/apiUrl";
import { Api } from "../../pages/Api";
import { Analytics } from "../../pages/Analytics";

let user

test.describe('User analytics test', async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
    })

    test('Show Registration Modal', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        console.log('test')

    })
   
})





