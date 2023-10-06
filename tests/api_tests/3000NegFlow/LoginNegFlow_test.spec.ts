import { request, test } from "@playwright/test";
import { apiUrl } from "../../../utils/apiUrl";
import { Api } from "../../../pages/Api";
import { loginAdminTestCases, loginGuestTestCases, loginUserTestCases } from "../../../pages/apiPagesNegFlow/loginNegFlow_testCases";

test.describe('Login Negative Flow',async () => {

    // //Login Guest Negative Flow 
    for (const testCase of loginGuestTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.loginPageNegFlow.loginNegFlow(`${apiUrl.qaEnvUrl}:3000/login`,testCase.payload,testCase.expectedStatus,testCase.errorMessage, testCase.testSuite, testCase.case)
        })
    }
    
    // Login User Negative Flow 
    for (const testCase of loginUserTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.loginPageNegFlow.loginNegFlow(`${apiUrl.qaEnvUrl}:3000/login`,testCase.payload,testCase.expectedStatus,testCase.errorMessage, testCase.testSuite, testCase.case)
        })
    }

    // //Login Admin Negative Flow 
    for (const testCase of loginAdminTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.loginPageNegFlow.loginNegFlow(`${apiUrl.qaEnvUrl}:3000/login`,testCase.payload,testCase.expectedStatus,testCase.errorMessage, testCase.testSuite, testCase.case)
        })
    }
})
    
