import { request, test } from "@playwright/test";
import { apiUrl } from "../../../utils/apiUrl";
import { Api } from "../../../pages/Api";
import { updateValueInArray, updateValueInPayload, updateValueInTestCase } from "../../../pages/apiPagesNegFlow/negativeFlowTemplate_page";
import { botSalaryRulesCreateTestCases, botSalaryRulesUpdateTestCases, salaryRulesCreateTestCases, salaryRulesUpdateTestCases } from "../../../pages/apiPagesNegFlow/salaryRulesNegFlow_payload";

let admin, user, rule

test.describe('Moderator Negative Flow', async () => {
    test.beforeAll(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        admin = await api.loginPage.loginWithAdminUser(apiUrl.qaEnvUrl)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        rule = await api.selaryRulesPage.createRule(apiUrl.qaEnvUrl, admin.adminToken, user.id)
        
        //Add Token to Payloads 
        updateValueInTestCase(salaryRulesCreateTestCases, 'token', 'token', admin.adminToken);
        updateValueInTestCase(salaryRulesUpdateTestCases, 'token', 'token', admin.adminToken);
        updateValueInTestCase(botSalaryRulesCreateTestCases, 'token', 'token', admin.adminToken);
        updateValueInTestCase(botSalaryRulesUpdateTestCases, 'token', 'token', admin.adminToken);

        //Update value in the Payloads
        updateValueInArray(salaryRulesCreateTestCases, 'streamerIds', 'defaultUserId', user.id)
        updateValueInPayload(salaryRulesUpdateTestCases, '_id', 'defaultBotRuleId', rule.botRuleId)
        updateValueInArray(salaryRulesUpdateTestCases, 'streamerIds', 'defaultUserId', user.id)
        updateValueInArray(botSalaryRulesCreateTestCases, 'salaryRuleIds', 'defaultBotRuleId', rule.botRuleId)
        updateValueInPayload(botSalaryRulesUpdateTestCases, '_id', 'defaultBotRuleId', rule.botRuleId)
        updateValueInArray(botSalaryRulesUpdateTestCases, 'salaryRuleIds', 'defaultBotRuleId', rule.botRuleId)
    })

    test.afterAll(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
    })

    //Salary Rules Create Negative Flow
    for (const testCase of salaryRulesCreateTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url,  payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }

    //Salary Rules Update Negative Flow
    for (const testCase of salaryRulesUpdateTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url,  payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }

    //Bot Salary Rules Create Negative Flow
    for (const testCase of botSalaryRulesCreateTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url,  payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }

    //Bot Salary Rules Update Negative Flow
    for (const testCase of botSalaryRulesUpdateTestCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url,  payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }
})