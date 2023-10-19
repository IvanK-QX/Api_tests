import { request, test } from "@playwright/test";
import { Api } from "../../pages/Api";
import { apiUrl } from "../../utils/apiUrl";
import { App } from "../../pages/App";
let user

test.describe('UI - Profile Tests', async () => {
    test.beforeEach(async ({page}) => {
        const app = new App(page)
        user = await app.loginPage.apiLogin(apiUrl.qaEnvUrl)
        await app.profilePage.open()
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
    })

    test('Profile - My Info',async ({page}) => {
        const app = new App(page)
        await app.profilePage.observeStartStreamButton()
        await app.profilePage.observeBuyCoinsButton()
        await app.profilePage.observePersonalInfo(user.name)
    })

    test('Profile - Buy Coins',async ({page}) => {
        const app = new App(page)
        await app.profilePage.clickBuyCoinsBtn()
    })

    test('Profile - Start Stream',async ({page}) => {
        const app = new App(page)
        await app.profilePage.clickStartStreamBtn()
    })

    test('Profile - Edit Profile',async ({page}) => {
        const app = new App(page)
        await app.profilePage.clickKebabMenuBtn()
        await app.profilePage.clickEditProfileBtn()
    })

    test('Profile - Redeem Cash',async ({page}) => {
        const app = new App(page)
        await app.profilePage.clickKebabMenuBtn()
        await app.profilePage.clickRedeemCashBtn()
    })
})
