import { request, test } from "@playwright/test";
import { Api } from "../pages/Api";
import { apiUrl } from "../utils/apiUrl";
import { apiDataSet } from "../utils/dataSet";
import { App } from "../pages/App";
let user 

test.describe('API test with new user',async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const login = await api.loginPage.login(`${apiUrl.qaEnvUrl}/login`)
        user = await api.loginPage.addEmail(`${apiUrl.qaEnvUrl}/login`, login.token, apiDataSet.deviceUUID)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(`${apiUrl.qaEnvUrl}/delete`, user.userToken)
    })

    // TODO
    test.skip('api login',async ({page}) => {
        
        const app = new App(page)
        page.addInitScript(value => {
            window.localStorage.setItem('token', value)
          }, `"${user.userToken}"`);
        page.addInitScript(value => {
          window.localStorage.setItem('isAuthorized', value)
        }, "true");
        page.addInitScript(value => {
            window.localStorage.setItem('Profile', value)
        }, '{"usersHaveSeenNewFeatureModal":[],"usersHaveClickedByNewFeatureModalMenu":[]}');

        page.addInitScript(value => {
          window.localStorage.setItem('sendTokenToServer', value)
        }, "0");
    
        //todo add incapsulation
        page.addInitScript(value => {
          window.localStorage.setItem('profile', value)
        }, `{"coins":9999,"diamonds":10000,"createdGuest":"${user.createdGuest}","allowedInviteToStream":true,"abTests": [${user.abTests}],"brandId":1,"lastLaunch":{"os":"browser"},"allowedToStartPremium":false,"diamondsAllTimeReal":0,"_id":"${user.id}","humanReadableId":${user.humanReadableId},"rolesGroup":"user","name":"${user.name}","diamondsAllTime":10000,"lastGeo":{"country":"${user.country}"},"gender":"iPreferNotToSay","status":"Active","referalLink":"${user.referalLink}","email":"${user.email}","createdUser":"${user.createdUser}","lt":0,"coinsSpentAllTime":0}`);

        await page.goto('https://webclient.streamsqa.com/')
        await page.waitForLoadState('networkidle')
        await page.pause()
        

    })
})

