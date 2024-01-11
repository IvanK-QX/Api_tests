import { request, test } from "@playwright/test";
import { apiUrl } from "../../../utils/apiUrl";
import { Api } from "../../../pages/Api";
import { runAllTestCases, updateValueInPayload, updateValueInTestCase } from "../../../pages/apiPagesNegFlow/negativeFlowTemplate_page";
import { referralSetTestCases, referralStatisticsTestCases } from "../../../pages/apiPagesNegFlow/referralNegFlow_payload";

let user, referralUser

test.describe.only('Referral Negative Flow', async () => {
    test.beforeAll(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        referralUser = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        
        updateValueInTestCase(referralSetTestCases, 'token', 'token', user.userToken);
        updateValueInTestCase(referralStatisticsTestCases, 'token', 'token', user.userToken);
        
        updateValueInPayload(referralSetTestCases, 'userId', 'defaultUserId', user.id)
        updateValueInPayload(referralSetTestCases, 'referringUserId', 'defaultUserId', referralUser.id)
    
    })

    test.afterAll(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, referralUser.userToken)
    })

    //Referral Set Negative Flow
    runAllTestCases(referralSetTestCases)

    //Referral Statistics Negative Flow
    runAllTestCases(referralStatisticsTestCases)

})