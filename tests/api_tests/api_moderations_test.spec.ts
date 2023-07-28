import { request, test } from "@playwright/test";
import { apiUrl } from "../../utils/apiUrl";
import { Api } from "../../pages/Api";
import { apiDataSet } from "../../utils/dataSet";

let admin, user, newStream, newWord

test.describe('API test ',async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        admin = await api.loginPage.loginWithAdminUser(apiUrl.qaEnvUrl)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        newStream = await api.streamsPage.createStream(apiUrl.qaEnvUrl, user.userToken, "public", "My Stream" )

    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
    
    })

    test('Forbidden/Abusive CRUD',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.moderationsPage.getForbiidenWordsList(apiUrl.qaEnvUrl, admin.adminToken)
        await api.moderationsPage.getAbusiveWordsList(apiUrl.qaEnvUrl, admin.adminToken)
        newWord = await api.moderationsPage.setForbiddenWord(apiUrl.qaEnvUrl, admin.adminToken, apiDataSet.searchText)
        await api.moderationsPage.forbiddenWordDelete(apiUrl.qaEnvUrl, admin.adminToken, newWord.forbiddenWordId)
        newWord = await api.moderationsPage.setAbusiveWord(apiUrl.qaEnvUrl, admin.adminToken, apiDataSet.searchText)
        await api.moderationsPage.abusiveWordDelete(apiUrl.qaEnvUrl, admin.adminToken, newWord.abusiveWordId)

    }) 
    
    test('Updated Users List/Remove Suspend Action',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.moderationsPage.getUpdatedUsersList(apiUrl.qaEnvUrl, admin.adminToken)
        const streamAction = await api.moderatorPage.adminModeratorAction(apiUrl.qaEnvUrl, admin.adminToken, newStream.myStreamId, "adultContent")
        await api.moderationsPage.suspendActionRemove(apiUrl.qaEnvUrl, admin.adminToken, streamAction.returnedActionId)

    }) 

})