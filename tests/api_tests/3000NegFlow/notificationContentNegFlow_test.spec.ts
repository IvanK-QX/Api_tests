import { request, test } from "@playwright/test";
import { apiUrl } from "../../../utils/apiUrl";
import { Api } from "../../../pages/Api";
import { updateValueInPayload, updateValueInTestCase } from "../../../pages/apiPagesNegFlow/negativeFlowTemplate_page";
import { notificationContentCreateTestCases, notificationContentDeleteTestCases, notificationContentUpdateTestCases } from "../../../pages/apiPagesNegFlow/notificationContentNegFlow_payload";
import { apiDataSet } from "../../../utils/dataSet";

let admin, newNotificationContent

test.describe('Profile Negative Flow', async () => {
    test.beforeAll(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        admin = await api.loginPage.loginWithAdminUser(apiUrl.qaEnvUrl)
        newNotificationContent = await api.notificationsContentPage.notificationsContentCreate(apiUrl.qaEnvUrl, admin.adminToken, apiDataSet.streamTitle, apiDataSet.randomAbout)
        
        //Add Token to Payloads 
        updateValueInTestCase(notificationContentCreateTestCases, 'token', 'token', admin.adminToken); 
        updateValueInTestCase(notificationContentUpdateTestCases, 'token', 'token', admin.adminToken); 
        updateValueInTestCase(notificationContentDeleteTestCases, 'token', 'token', admin.adminToken); 
        updateValueInPayload(notificationContentUpdateTestCases, 'id', 'notificationId', newNotificationContent.notificationContentId)
    })

    test.afterAll(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.notificationsContentPage.notificationsContentDelete(apiUrl.qaEnvUrl, admin.adminToken, newNotificationContent.notificationContentId)
    })

    //Notification Content Create Negative Flow
    for (const testCase of notificationContentCreateTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }

    //Notification Content Update Negative Flow
    for (const testCase of notificationContentUpdateTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }

    // //Notification Content Delete Negative Flow
    for (const testCase of notificationContentDeleteTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }
})