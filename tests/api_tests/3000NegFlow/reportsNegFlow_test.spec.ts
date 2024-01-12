import { request, test } from "@playwright/test";
import { apiUrl } from "../../../utils/apiUrl";
import { Api } from "../../../pages/Api";
import { runAllTestCases, updateValueInArray, updateValueInPayload, updateValueInTestCase } from "../../../pages/apiPagesNegFlow/negativeFlowTemplate_page";
import { adminReportStatusTestCases, adminReportTestCases, reportTestCases } from "../../../pages/apiPagesNegFlow/reportsNegFlow_payload";

let user, reportedUser, admin

test.describe('Report Negative Flow', async () => {
    test.beforeAll(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        reportedUser = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        admin = await api.loginPage.loginWithAdminUser(apiUrl.qaEnvUrl)
        
        updateValueInTestCase(reportTestCases, 'token', 'token', user.userToken);
        updateValueInTestCase(adminReportTestCases, 'token', 'token', admin.adminToken);
        updateValueInTestCase(adminReportStatusTestCases, 'token', 'token', admin.adminToken);
       
        
        updateValueInPayload(reportTestCases, 'reportedUserId', 'reportedUserId', reportedUser.id)
        updateValueInPayload(adminReportTestCases, 'reportedUserId', 'defaultUserId', reportedUser.id)
        updateValueInArray(adminReportStatusTestCases, 'reportIds', 'defaultUserId', reportedUser.id)
    })

    test.afterAll(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, reportedUser.userToken)
    })

    //Report Negative Flow
    runAllTestCases(reportTestCases)

    //Admin Report Negative Flow
    runAllTestCases(adminReportTestCases)

    //Admin Report Status Negative Flow
    runAllTestCases(adminReportStatusTestCases)
})