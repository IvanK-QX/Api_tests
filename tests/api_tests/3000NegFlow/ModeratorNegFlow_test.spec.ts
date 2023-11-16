import { request, test } from "@playwright/test";
import { apiUrl } from "../../../utils/apiUrl";
import { Api } from "../../../pages/Api";
import { adminProfileStatusTestCases, moderatorProfileCreateTestCases, moderatorRefferalEarningsTestCases } from "../../../pages/apiPagesNegFlow/moderatorNegFlow_payload";
import { apiDataSet } from "../../../utils/dataSet";
import { updateValueInArray, updateValueInPayload, updateValueInTestCase } from "../../../pages/apiPagesNegFlow/negativeFlowTemplate_page";

let admin, user, referralUser, newStream

test.describe('Moderator Negative Flow',async () => {
    test.beforeAll(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        admin = await api.loginPage.loginWithAdminUser(apiUrl.qaEnvUrl)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        referralUser = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        //newStream = await api.streamsPage.createStream(apiUrl.qaEnvUrl, referralUser.userToken, "public", apiDataSet.streamTitle )
        updateValueInTestCase(moderatorProfileCreateTestCases, 'token', 'token', admin.adminToken);
        updateValueInTestCase(moderatorRefferalEarningsTestCases, 'token', 'token', admin.adminToken);
        updateValueInTestCase(adminProfileStatusTestCases, 'token', 'token', admin.adminToken);
        updateValueInPayload(moderatorRefferalEarningsTestCases, 'userId', 'defaultUserId', user.id);
        updateValueInArray(adminProfileStatusTestCases, 'userIds', 'referralUserId', referralUser.id);
        
    })

    test.afterAll(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, referralUser.userToken)
    })

    //Admin Profile Create Negative Flow 
    for (const testCase of moderatorProfileCreateTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({
                url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token
            })
        })
    }
    //Admin Referral Program Negative Flow 
    for (const testCase of moderatorRefferalEarningsTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({
                url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token
            })    
        })
    }

    //Admin Profile Status Flow 
    for (const testCase of adminProfileStatusTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({
                url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token
            })  
        })
    }
    
})

