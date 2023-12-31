import { request, test } from '@playwright/test'
import { Api } from '../../../pages/Api'
import { loginAdminTestCases, loginGuestTestCases, loginUserTestCases } from '../../../pages/apiPagesNegFlow/loginNegFlow_payload'

test.describe('Login Negative Flow', async () => {
    //Login Guest Negative Flow
    for (const testCase of loginGuestTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({
                url: testCase.url,
                payload: testCase.payload,
                ExpectedStatusCode: testCase.expectedStatus,
                ExpectedErrorMessage: testCase.errorMessage,
                testSuiteName: testCase.testSuite,
                testName: testCase.case,
            })
        })
    }

    // Login User Negative Flow
    for (const testCase of loginUserTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({
                url: testCase.url,
                payload: testCase.payload,
                ExpectedStatusCode: testCase.expectedStatus,
                ExpectedErrorMessage: testCase.errorMessage,
                testSuiteName: testCase.testSuite,
                testName: testCase.case,
            })
        })
    }

    //Login Admin Negative Flow
    for (const testCase of loginAdminTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({
                url: testCase.url,
                payload: testCase.payload,
                ExpectedStatusCode: testCase.expectedStatus,
                ExpectedErrorMessage: testCase.errorMessage,
                testSuiteName: testCase.testSuite,
                testName: testCase.case,
            })
        })
    }
})
