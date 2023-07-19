import { request, test } from "@playwright/test";
import { apiUrl } from "../../utils/apiUrl";
import { Api } from "../../pages/Api";

let user, admin

test.describe('Sallary Rules API Test ',async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        admin = await api.loginPage.createNewAdminUser(apiUrl.qaEnvUrl)
        
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
    })

    test('Sallary Rules CRUD',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const rule = await api.selaryRulesPage.createRule(apiUrl.qaEnvUrl, admin.adminToken, user.id)
        await api.selaryRulesPage.updateRule(apiUrl.qaEnvUrl, admin.adminToken, user.id, rule.botRuleId)
        await api.selaryRulesPage.getRulesList(apiUrl.qaEnvUrl, admin.adminToken, rule.botRuleId)
        const botRule = await api.selaryRulesPage.createBotRule(apiUrl.qaEnvUrl, admin.adminToken, rule.botRuleId)
        await api.selaryRulesPage.updateBotRule(apiUrl.qaEnvUrl, admin.adminToken, botRule.secondBotRuleId, rule.botRuleId)
        await api.selaryRulesPage.getBoteRulesList(apiUrl.qaEnvUrl, admin.adminToken, botRule.secondBotRuleId)
        await api.selaryRulesPage.getRulesByUser(apiUrl.qaEnvUrl, user.userToken)
    })

    


})

