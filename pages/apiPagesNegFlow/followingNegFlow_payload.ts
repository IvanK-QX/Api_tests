import { apiUrl } from '../../utils/apiUrl'

const doIFollowUrl = `${apiUrl.qaEnvUrl}:3000/doIFollow`
const followUrl = `${apiUrl.qaEnvUrl}:3000/follow`
const unFollowUrl = `${apiUrl.qaEnvUrl}:3000/unfollow`
const followMultipleUrl = `${apiUrl.qaEnvUrl}:3000/followMultiple`
const getFollowingListUrl = `${apiUrl.qaEnvUrl}:3000/followMultiple`
const followCounterstUrl = `${apiUrl.qaEnvUrl}:3000/followCounters`

export const doIFollowTestCases = [
    {
        url: doIFollowUrl,
        token: 'token',
        payload: {
            userId: '_',
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'do I Follow',
        case: 'wrongUserId',
    },
    {
        url: doIFollowUrl,
        token: 'token',
        payload: {},
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'do I Follow',
        case: 'missedUserId',
    }
]

export const followTestCases = [
    {
        url: followUrl,
        token: 'token',
        payload: {
            userId: '_',
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Follow',
        case: 'wrongUserId',
    },
    {
        url: followUrl,
        token: 'token',
        payload: {},
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Follow',
        case: 'missedUserId',
    }
   
]

export const unFollowTestCases = [
    {
        url: unFollowUrl,
        token: 'token',
        payload: {
            userId: '_',
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Unfollow',
        case: 'wrongUserId',
    },
    {
        url: unFollowUrl,
        token: 'token',
        payload: {},
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Unfollow',
        case: 'missedUserId',
    }
   
]

export const followMultipleTestCases = [
    {
        url: followMultipleUrl,
        token: 'token',
        payload: {
            "users": [
             "_"
            ]
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Follow Multiple',
        case: 'wrongUserId',
    },
    {
        url: followMultipleUrl,
        token: 'token',
        payload: {},
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Follow Multiple',
        case: 'missedUserIds',
    }
   
]

export const getFollowingListTestCases = [
    {
        url: getFollowingListUrl,
        token: 'token',
        payload: {
            "userId": "_",
            "itemsPerPage": 100
          },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Following List',
        case: 'wrongUserId',
    },
    {
        url: getFollowingListUrl,
        token: 'token',
        payload: {
            "itemsPerPage": 100
          },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Following List',
        case: 'missedUserId',
    },
    {
        url: getFollowingListUrl,
        token: 'token',
        payload: {
            "userId": "defaultUserId"
          },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Following List',
        case: 'missedItemsPerPage',
    }
   
]

export const followCountersTestCases = [
    {
        url: followCounterstUrl,
        token: 'token',
        payload: {
            "userId": "_"
          },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Follow Counters',
        case: 'wrongUserId',
    },
    {
        url: followMultipleUrl,
        token: 'token',
        payload: {},
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Follow Counters',
        case: 'missedUserIds',
    }
   
]