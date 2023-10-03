import { request, test } from "@playwright/test";
import { Api } from "../../../pages/Api";
import { apiUrl } from "../../../utils/apiUrl";

let user, following

test.describe('API following tests',async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        following = await api.followingPage.suggestedUsersToFollow(apiUrl.qaEnvUrl, user.userToken)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
    })

    test('Following CRUD',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.followingPage.follow(apiUrl.qaEnvUrl, user.userToken, following.followUserIdOne)
        await api.followingPage.doIFollow(apiUrl.qaEnvUrl, user.userToken, following.followUserIdOne, true)
        await api.followingPage.unFollow(apiUrl.qaEnvUrl, user.userToken, following.followUserIdOne)
        await api.followingPage.doIFollow(apiUrl.qaEnvUrl, user.userToken, following.followUserIdOne, false)
    })

    test('Follow Multiple',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.followingPage.followMultiple(apiUrl.qaEnvUrl, user.userToken, following.followUserIdOne, following.followUserIdTwo)
        await api.followingPage.getFollowingIds(apiUrl.qaEnvUrl, user.userToken, following.followUserIdOne, following.followUserIdTwo)
    })

    test('Get list of Following',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.followingPage.getFollowingList(apiUrl.qaEnvUrl, user.userToken, following.followUserIdOne)
    })

    test('Mutual Folow',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        const user2 = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        await api.followingPage.isMutualFollow(apiUrl.qaEnvUrl, user.userToken, user2.id, false)
        await api.followingPage.follow(apiUrl.qaEnvUrl, user2.userToken, user.id)
        await api.followingPage.isMutualFollow(apiUrl.qaEnvUrl, user.userToken, user2.id, true)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user2.userToken)
    })

    test('Following Counter',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.followingPage.followCounters(apiUrl.qaEnvUrl, user.userToken, user.id)
    })
    
})

