import { request, test } from "@playwright/test";
import { apiUrl } from "../../../utils/apiUrl";
import { Api } from "../../../pages/Api";
import { apiDataSet } from "../../../utils/dataSet";

let user, admin, stream

test.describe('Agora 3002 API test',async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        admin = await api.loginPage.loginWithAdminUser(apiUrl.qaEnvUrl)
        stream = await api.streamsPage.createStream(apiUrl.qaEnvUrl, user.userToken, 'public', apiDataSet.streamTitle)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
    })

    test('Get Agora Token For User', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.agora3002Page.getAgoraTokenForChannel(apiUrl.qaEnvUrl, user.userToken, stream.myStreamId)
    })

    test('Get Agora Token For Moderator', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.agora3002Page.getAgoraTokenForModerator(apiUrl.qaEnvUrl, admin.adminToken, stream.myStreamId)
    })

    test('Get Agora List Of Token For Moderator', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const user2 = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        const stream2 = await api.streamsPage.createStream(apiUrl.qaEnvUrl, user2.userToken, 'public', apiDataSet.streamTitle)
        await api.agora3002Page.getAgoraListofTokenForModerator(apiUrl.qaEnvUrl, admin.adminToken, stream.myStreamId, stream2.myStreamId)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user2.userToken)
    })

})