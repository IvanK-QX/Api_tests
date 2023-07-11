import { request, test } from "@playwright/test";
import { Api } from "../pages/Api";
import { apiUrl } from "../utils/apiUrl";
import { apiDataSet } from "../utils/dataSet";

let user, user2, stream

test.describe('API test with new user',async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        user2 = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user2.userToken)
    })

    test('Stream List',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.streamsPage.streamList(apiUrl.qaEnvUrl, user.userToken, 'near')
        await api.streamsPage.streamList(apiUrl.qaEnvUrl, user.userToken, 'public')
        await api.streamsPage.streamList(apiUrl.qaEnvUrl, user.userToken, 'streamersIfollow')
    })

    test('Get Internal List',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.streamsPage.getIntrenalList(apiUrl.qaEnvUrl, user.userToken)
    })

    test('Create Stream',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        stream = await api.streamsPage.createStream(apiUrl.qaEnvUrl, user.userToken, 'public', apiDataSet.streamTitle)
    })

    test('Get Stream',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        stream = await api.streamsPage.createStream(apiUrl.qaEnvUrl, user.userToken, 'public', apiDataSet.streamTitle)
        await api.streamsPage.getStream(apiUrl.qaEnvUrl, user.userToken, stream.myStreamId)
    })

    test('Send Invite To Stream',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        stream = await api.streamsPage.createStream(apiUrl.qaEnvUrl, user.userToken, 'public', apiDataSet.streamTitle)
        await api.streamsPage.sendInvite(apiUrl.qaEnvUrl, user.userToken, stream.myStreamId)
    })

    test('Update Stream',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        stream = await api.streamsPage.createStream(apiUrl.qaEnvUrl, user.userToken, 'public', apiDataSet.streamTitle)
        await api.streamsPage.updateStream(apiUrl.qaEnvUrl, user.userToken, stream.myStreamId, apiDataSet.updatedStreamTitle)
    })

    test('End Stream',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        stream = await api.streamsPage.createStream(apiUrl.qaEnvUrl, user.userToken, 'public', apiDataSet.streamTitle)
        await api.streamsPage.stopStream(apiUrl.qaEnvUrl, user.userToken, stream.myStreamId)
    })

    test('Get list of my Streams',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        stream = await api.streamsPage.createStream(apiUrl.qaEnvUrl, user.userToken, 'public', apiDataSet.streamTitle)
        await api.streamsPage.getMyStream(apiUrl.qaEnvUrl, user.userToken)
    })

    test('Stream Rank',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        stream = await api.streamsPage.createStream(apiUrl.qaEnvUrl, user.userToken, 'public', apiDataSet.streamTitle)
        await api.streamsPage.streamRank(apiUrl.qaEnvUrl, user.userToken, stream.myStreamId)
    })

    test('Stream Gifts CRUD',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        stream = await api.streamsPage.createStream(apiUrl.qaEnvUrl, user.userToken, 'public', apiDataSet.streamTitle)
        const gift = await api.giftsPage.getGifts(apiUrl.qaEnvUrl, user.userToken)
        await api.streamsPage.addDesireGift(apiUrl.qaEnvUrl, user.userToken,  stream.myStreamId, gift.giftIdOne)
        await api.streamsPage.removeDesireGift(apiUrl.qaEnvUrl, user.userToken,  stream.myStreamId)
    })


    


})

