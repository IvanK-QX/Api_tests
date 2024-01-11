import { request, test } from "@playwright/test";
import { apiUrl } from "../../../utils/apiUrl";
import { Api } from "../../../pages/Api";
import { runAllTestCases, updateValueInPayload, updateValueInTestCase } from "../../../pages/apiPagesNegFlow/negativeFlowTemplate_page";
import { actionsOnOtherUserTestCases, moderationAbusiveWordsDeleteTestCases, moderationAbusiveWordsTestCases, moderationForbiddenWordsDeleteTestCases, moderationForbiddenWordsTestCases, moderationSuspendRemoveTestCases, moderationUserListTestCases } from "../../../pages/apiPagesNegFlow/moderationsNegFlow_payload";

let user, admin

test.describe('Block/Unblock Negative Flow', async () => {
    test.beforeAll(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        admin = await api.loginPage.loginWithAdminUser(apiUrl.qaEnvUrl)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        
        //Add Token to Payloads 
        updateValueInTestCase(actionsOnOtherUserTestCases, 'token', 'token', admin.adminToken);
        updateValueInTestCase(moderationUserListTestCases, 'token', 'token', admin.adminToken);
        updateValueInTestCase(moderationForbiddenWordsTestCases, 'token', 'token', admin.adminToken);
        updateValueInTestCase(moderationForbiddenWordsDeleteTestCases, 'token', 'token', admin.adminToken);
        updateValueInTestCase(moderationAbusiveWordsTestCases, 'token', 'token', admin.adminToken);
        updateValueInTestCase(moderationAbusiveWordsDeleteTestCases, 'token', 'token', admin.adminToken);
        updateValueInTestCase(moderationSuspendRemoveTestCases, 'token', 'token', admin.adminToken);
        
        updateValueInPayload(actionsOnOtherUserTestCases, 'streamerId', 'defaultUserId', user.id)
        updateValueInPayload(moderationUserListTestCases, 'moderatorHumanReadableId', 'adminHumanReadableId', admin.userHumanReadableId)
        updateValueInPayload(moderationUserListTestCases, 'userHumanReadableId', 'userHumanReadableId', user.userHumanReadableId)
        
        
    })

    test.afterAll(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
    })

    //Moderations Actions On Other User Negative Flow
    runAllTestCases(actionsOnOtherUserTestCases)

    //Moderations User List Negative Flow
    runAllTestCases(moderationUserListTestCases)

    //Moderations Forbidden Words Negative Flow
    runAllTestCases(moderationForbiddenWordsTestCases)

    //Moderations Forbidden Words Negative Flow
    runAllTestCases(moderationForbiddenWordsDeleteTestCases)

    //Moderations Abusive Words Negative Flow
    runAllTestCases(moderationAbusiveWordsTestCases)

    //Moderations Abusive Words Delete Negative Flow
    runAllTestCases(moderationAbusiveWordsDeleteTestCases)

    //Moderations Suspend Remove Negative Flow
    runAllTestCases(moderationSuspendRemoveTestCases)
   
})