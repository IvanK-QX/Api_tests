import { request, test } from '@playwright/test'
import { apiUrl } from '../../../utils/apiUrl'
import { Api } from '../../../pages/Api'
import { apiDataSet } from '../../../utils/dataSet'
import { TIMEOUT } from 'dns'

let admin

test.describe('API test ', async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        admin = await api.loginPage.loginWithAdminUser(apiUrl.qaEnvUrl)
    })

    test('Notifications Content CRUD', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const createdNotificationContent = await api.notificationsContentPage.notificationsContentCreate(apiUrl.qaEnvUrl, admin.adminToken, apiDataSet.streamTitle, apiDataSet.randomAbout)
        await api.notificationsContentPage.notificationsContentUpdate(
            apiUrl.qaEnvUrl,
            admin.adminToken,
            createdNotificationContent.notificationContentId,
            apiDataSet.updatedStreamTitle,
            apiDataSet.randomName
        )
        await api.notificationsContentPage.notificationsContentDelete(apiUrl.qaEnvUrl, admin.adminToken, createdNotificationContent.notificationContentId)
    })

    test('Mass Notify', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const user1 = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        await api.notificationsContentPage.sendMassNotification(apiUrl.qaEnvUrl, admin.adminToken)
        await new Promise(resolve => setTimeout(resolve, 3000));
        const system = await api.messagePage.myListSystem(apiUrl.qaEnvUrl, user1.userToken)
        await api.messagePage.myGetLastMessageSystem(apiUrl.qaEnvUrl, user1.userToken, system.systemTypeId)
        await api.messagePage.myGetLastMessageCron(apiUrl.qaEnvUrl, user1.userToken, system.systemTypeId)
    })
})