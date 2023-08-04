import { request, test } from "@playwright/test";
import { apiUrl } from "../../utils/apiUrl";
import { Api } from "../../pages/Api";
import { apiDataSet } from "../../utils/dataSet";

let admin

test.describe('API test ',async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        admin = await api.loginPage.loginWithAdminUser(apiUrl.qaEnvUrl)
    })

    test('Notifications Content CRUD',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const createdNotificationContent = await api.notificationsContentPage.notificationsContentCreate(apiUrl.qaEnvUrl, admin.adminToken, apiDataSet.streamTitle, apiDataSet.randomAbout)
        await api.notificationsContentPage.notificationsContentUpdate(apiUrl.qaEnvUrl, admin.adminToken, createdNotificationContent.notificationContentId, apiDataSet.updatedStreamTitle, apiDataSet.randomName)
        await api.notificationsContentPage.notificationsContentDelete(apiUrl.qaEnvUrl, admin.adminToken, createdNotificationContent.notificationContentId)
    }) 

})