import { request, test } from "@playwright/test";
import { apiUrl } from "../../../utils/apiUrl";
import { Api } from "../../../pages/Api";
import { loginAdminTestCases, loginGuestTestCases, loginUserTestCases } from "../../../pages/apiPagesNegFlow/loginNegFlow_payload";
import { moderatorProfileCreateTestCases, moderatorRefferalEarningsTestCases } from "../../../pages/apiPagesNegFlow/moderatorNegFlow_payload";

let admin, user

function addValueToPayload(testCases: any[], inputValue: string, checkValue: any): void {
    testCases.forEach(testCase => {
        if (checkValue in testCase.payload && testCase.payload[checkValue] === null) {
            testCase.payload[checkValue] = inputValue;
        }
    });
}

function addTokenToTestCase(testCases: any[], inputValue: string, checkValue: any): void {
    testCases.forEach(testCase => {
        if (checkValue in testCase && testCase[checkValue] === null) {
            testCase[checkValue] = inputValue;
        }
    });
}

test.describe('Moderator Negative Flow',async () => {
    test.beforeAll(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        admin = await api.loginPage.loginWithAdminUser(apiUrl.qaEnvUrl)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        addValueToPayload(moderatorRefferalEarningsTestCases, user.id, 'userId');
        addTokenToTestCase(moderatorRefferalEarningsTestCases, admin.adminToken, 'token');
    
    })

    test.afterAll(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
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
    
})
    
