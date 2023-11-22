import { request, test } from '@playwright/test'
import { apiUrl } from '../../../utils/apiUrl'
import { Api } from '../../../pages/Api'
import { apiDataSet } from '../../../utils/dataSet'

let admin, user, refferalUser, newWord

test.describe('API test ', async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        admin = await api.loginPage.loginWithAdminUser(apiUrl.qaEnvUrl)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        refferalUser = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, refferalUser.userToken)
    })

    test('Forbidden Word CRUD', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        newWord = await api.moderationsPage.setForbiddenWord(apiUrl.qaEnvUrl, admin.adminToken, apiDataSet.randomWord)
        await api.moderationsPage.chekIfForbiddenWordIsAdded(apiUrl.qaEnvUrl, admin.adminToken, newWord.setForbiddenWord)
        await api.moderationsPage.forbiddenWordDelete(apiUrl.qaEnvUrl, admin.adminToken, newWord.forbiddenWordId)
        await api.moderationsPage.chekIfForbiddenWordIsDeleted(apiUrl.qaEnvUrl, admin.adminToken, newWord.setForbiddenWord)
    })

    test('Abusive Word CRUD', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        newWord = await api.moderationsPage.setAbusiveWord(apiUrl.qaEnvUrl, admin.adminToken, apiDataSet.randomWord)
        await api.moderationsPage.chekIfAbusiveWordIsAdded(apiUrl.qaEnvUrl, admin.adminToken, newWord.setAbusiveWord)
        await api.moderationsPage.abusiveWordDelete(apiUrl.qaEnvUrl, admin.adminToken, newWord.abusiveWordId)
        await api.moderationsPage.chekIfAbusiveWordIsDeleted(apiUrl.qaEnvUrl, admin.adminToken, newWord.setAbusiveWord)
    })

    test('Actions On Other User/Action CRUD', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.moderatorPage.setAdminProfileAgent(apiUrl.qaEnvUrl, admin.adminToken, user.id)
        await api.referalPage.setReferal(apiUrl.qaEnvUrl, user.userToken, user.id, refferalUser.id)
        const newStream = await api.streamsPage.createStream(apiUrl.qaEnvUrl, refferalUser.userToken, 'public', 'My Stream')
        const streamAction = await api.moderatorPage.adminModeratorAction(apiUrl.qaEnvUrl, admin.adminToken, newStream.myStreamId, 'warning', 'closedCamera/emptyRoom')
        await api.moderationsPage.actionsOnOtherUser(apiUrl.qaEnvUrl, user.userToken, refferalUser.id)
        await api.moderationsPage.suspendActionRemove(apiUrl.qaEnvUrl, admin.adminToken, streamAction.returnedActionId)
    })

    test('Updated Users List', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.profilePage.addDiamonds(apiUrl.qaEnvUrl, admin.adminToken, user.id)
        await api.moderationsPage.getUpdatedUsersList(apiUrl.qaEnvUrl, admin.adminToken, admin.adminHumanReadableId, user.humanReadableId)
    })
})
