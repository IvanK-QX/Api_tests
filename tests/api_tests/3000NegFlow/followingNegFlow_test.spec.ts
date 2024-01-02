import { request, test } from "@playwright/test";
import { apiUrl } from "../../../utils/apiUrl";
import { Api } from "../../../pages/Api";
import { updateValueInPayload, updateValueInTestCase } from "../../../pages/apiPagesNegFlow/negativeFlowTemplate_page";
import { doIFollowTestCases, followCountersTestCases, followMultipleTestCases, followTestCases, getFollowingListTestCases, unFollowTestCases } from "../../../pages/apiPagesNegFlow/followingNegFlow_payload";


let user, otherUser

test.describe('Following Negative Flow', async () => {
    test.beforeAll(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        otherUser = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)

        
        //Add Token to Payloads 
        updateValueInTestCase(doIFollowTestCases, 'token', 'token', user.userToken);
        updateValueInTestCase(followTestCases, 'token', 'token', user.userToken);
        updateValueInTestCase(unFollowTestCases, 'token', 'token', user.userToken);
        updateValueInTestCase(followMultipleTestCases, 'token', 'token', user.userToken);
        updateValueInTestCase(getFollowingListTestCases, 'token', 'token', user.userToken);
        updateValueInPayload(getFollowingListTestCases, 'userId', 'defaultUserId', otherUser.id)
        updateValueInTestCase(followCountersTestCases, 'token', 'token', user.userToken);
    })

    test.afterAll(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, otherUser.userToken)
    })

    //Do I Follow Negative Flow
    for (const testCase of doIFollowTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }

    //Follow Negative Flow
    for (const testCase of followTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }

    //Unfollow Negative Flow
    for (const testCase of unFollowTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }

    //Follow Multiple Negative Flow
    for (const testCase of followMultipleTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }

    //Following List Negative Flow
    for (const testCase of getFollowingListTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }

    //Follow Counters Negative Flow
    for (const testCase of followCountersTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }

})