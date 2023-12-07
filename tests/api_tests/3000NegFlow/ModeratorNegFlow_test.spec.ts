import { request, test } from "@playwright/test";
import { apiUrl } from "../../../utils/apiUrl";
import { Api } from "../../../pages/Api";
import { adminModeratorActionListTestCases, adminModeratorActionTestCases, adminModeratorActionTimerStopTestCases, adminProfileAgentTestCases, adminProfileListTestCases, adminProfileStatusTestCases, adminProfileTestCases, adminProfileUpdateTestCases, adminSetPayoutEmailTestCases, agentProfileTestCases, moderatorProfileCreateTestCases, moderatorRefferalEarningsTestCases } from "../../../pages/apiPagesNegFlow/moderatorNegFlow_payload";
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
        newStream = await api.streamsPage.createStream(apiUrl.qaEnvUrl, referralUser.userToken, "public", apiDataSet.streamTitle )
        
        //Add Token to Payloads 
        updateValueInTestCase(moderatorProfileCreateTestCases, 'token', 'token', admin.adminToken);
        updateValueInTestCase(moderatorRefferalEarningsTestCases, 'token', 'token', admin.adminToken);
        updateValueInTestCase(adminProfileStatusTestCases, 'token', 'token', admin.adminToken);
        updateValueInTestCase(adminProfileAgentTestCases, 'token', 'token', admin.adminToken);
        updateValueInTestCase(adminProfileListTestCases, 'token', 'token', admin.adminToken);
        updateValueInTestCase(adminProfileTestCases, 'token', 'token', admin.adminToken);
        updateValueInTestCase(agentProfileTestCases, 'token', 'token', admin.adminToken);
        updateValueInTestCase(adminProfileUpdateTestCases, 'token', 'token', admin.adminToken);
        updateValueInTestCase(adminSetPayoutEmailTestCases, 'token', 'token', admin.adminToken);
        updateValueInTestCase(adminModeratorActionTestCases, 'token', 'token', admin.adminToken);
        updateValueInTestCase(adminModeratorActionListTestCases, 'token', 'token', admin.adminToken);
        updateValueInTestCase(adminModeratorActionTimerStopTestCases, 'token', 'token', admin.adminToken);
        


        //Update value in the Payloads
        updateValueInPayload(moderatorRefferalEarningsTestCases, 'userId', 'defaultUserId', user.id);
        updateValueInArray(adminProfileStatusTestCases, 'userIds', 'referralUserId', referralUser.id);
        updateValueInPayload(adminProfileAgentTestCases, 'userId', 'defaultUserId', user.id);
        updateValueInPayload(adminProfileUpdateTestCases, 'userId', 'defaultUserId', user.id);
        updateValueInArray(adminModeratorActionTestCases, 'streamIds', 'defaultStreamId', newStream.myStreamId);
        updateValueInArray(adminModeratorActionListTestCases, 'streamIds', 'defaultStreamId', newStream.myStreamId);

        
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

    //Admin Profile Agent Flow 
    for (const testCase of adminProfileAgentTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({
                url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token
            })  
        })
    }

    //Admin Profile List Flow 
    for (const testCase of adminProfileListTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({
                url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token
            })  
        })
    }

    //Admin Profile Flow 
    for (const testCase of adminProfileTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({
                url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token
            })  
        })
    }

    //Agent Profile Flow 
     for (const testCase of agentProfileTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({
                url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token
            })  
        })
    }

    //Admin Profile Update Flow 
    for (const testCase of adminProfileUpdateTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({
                url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token
            })  
        })
    }

    //Admin Set Payout Email Flow 
    for (const testCase of adminSetPayoutEmailTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({
                url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token
            })  
        })
    }

    //Admin Moderator Action Flow 
    for (const testCase of adminModeratorActionTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({
                url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token
            })  
        })
    }

    //Admin Moderator Action List Flow 
    for (const testCase of adminModeratorActionListTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({
                url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token
            })  
        })
    }

    //Admin Moderator Action Timer Stop Flow 
    for (const testCase of adminModeratorActionTimerStopTestCases) {
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

