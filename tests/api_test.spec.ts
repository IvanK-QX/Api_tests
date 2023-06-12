import { request, test } from "@playwright/test";
import { Api } from "../pages/Api";
import { apiUrl } from "../utils/apiUrl";


test.describe('API test with new user',async () => {
    test('Login new user',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)

        await api.loginPage.login(`https://siq.azure-api.net/test/documents/api/upload/v2`)
    })
})