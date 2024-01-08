import { request, test } from "@playwright/test";
import { apiUrl } from "../../../utils/apiUrl";
import { Api } from "../../../pages/Api";
import { updateValueInPayload, updateValueInTestCase } from "../../../pages/apiPagesNegFlow/negativeFlowTemplate_page";
import { adminPayoutHistoryTestCases, adminPayoutRequestTestCases, payoutRequestTestCases, payoutsHistoryTestCases } from "../../../pages/apiPagesNegFlow/payoutsNegFlow_payload";

let user, admin

test.describe('Profile Negative Flow', async () => {
    test.beforeAll(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        admin = await api.loginPage.loginWithAdminUser(apiUrl.qaEnvUrl)
        
        //Add Token to Payloads 
        updateValueInTestCase(payoutRequestTestCases, 'token', 'token', user.userToken);  
        updateValueInTestCase(payoutsHistoryTestCases, 'token', 'token', user.userToken); 
        updateValueInTestCase(adminPayoutRequestTestCases, 'token', 'token', admin.adminToken); 
        updateValueInTestCase(adminPayoutHistoryTestCases, 'token', 'token', admin.adminToken); 
        updateValueInPayload(adminPayoutRequestTestCases, 'userId', 'defaultUserId', user.id  )   
    })

    test.afterAll(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
    })

    //Payout Request Negative Flow
    for (const testCase of payoutRequestTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }

    //Payouts History Negative Flow
    for (const testCase of payoutsHistoryTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }

    //Admin Payout Request Negative Flow
     for (const testCase of adminPayoutRequestTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }

    //Admin Payout History Negative Flow
    for (const testCase of adminPayoutHistoryTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }
})