import { request, test } from "@playwright/test";
import { apiUrl } from "../../../utils/apiUrl";
import { Api } from "../../../pages/Api";
import { addDiamondsTestCases, addMediaSourceTestCases, allowedToStartPremiumTestCases, createFileUplaodTestCases, editProfileTestCases, leaderboardTestCases, otherUserProfileTestCases, searchTestCases } from "../../../pages/apiPagesNegFlow/profileNegFlow_payload";
import { updateValueInTestCase, updateValueInPayload } from "../../../pages/apiPagesNegFlow/negativeFlowTemplate_page";

let admin, user

test.describe('Profile Negative Flow', async () => {
    test.beforeAll(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        admin = await api.loginPage.loginWithAdminUser(apiUrl.qaEnvUrl)
        
        //Add Token to Payloads 
        updateValueInTestCase(editProfileTestCases, 'token', 'token', user.userToken);
        updateValueInTestCase(searchTestCases, 'token', 'token', user.userToken);
        updateValueInTestCase(addMediaSourceTestCases, 'token', 'token', user.userToken);
        updateValueInTestCase(otherUserProfileTestCases, 'token', 'token', user.userToken);
        updateValueInTestCase(createFileUplaodTestCases, 'token', 'token', user.userToken);
        updateValueInTestCase(allowedToStartPremiumTestCases, 'token', 'token', admin.adminToken);
        updateValueInPayload(allowedToStartPremiumTestCases, 'userId', 'defaultUserId', user.id )
        updateValueInTestCase(addDiamondsTestCases, 'token', 'token', admin.adminToken);
        updateValueInPayload(addDiamondsTestCases, 'userId', 'defaultUserId', user.id )
       
        
    })

    test.afterAll(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
    })

    //Add Media Source Negative Flow
    for (const testCase of addMediaSourceTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }

    //Edit Profile Negative Flow
    for (const testCase of editProfileTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }

    //Search Negative Flow
    for (const testCase of searchTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }

    //Other User Profile Negative Flow
    for (const testCase of otherUserProfileTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }

    //Create File Uplaod Negative Flow
    for (const testCase of createFileUplaodTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }

    //Allowed to Start Premium Negative Flow
    for (const testCase of allowedToStartPremiumTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }

    //Add Diamonds Negative Flow
    for (const testCase of addDiamondsTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }

    //Leaderboard Negative Flow
    for (const testCase of leaderboardTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }


})