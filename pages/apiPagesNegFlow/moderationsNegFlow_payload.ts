import { apiUrl } from '../../utils/apiUrl'


const actionsOnOtherUserUrl = `${apiUrl.qaEnvUrl}/core/moderation/actionsOnOtherUser`
const moderationUserListUserUrl = `${apiUrl.qaEnvUrl}/core/moderation/updatedUser/list`
const moderationForbiddenWordsUrl = `${apiUrl.qaEnvUrl}/core/moderation/forbiidenWords`
const moderationForbiddenWordsDeleteUrl = `${apiUrl.qaEnvUrl}/core/moderation/forbiidenWords/delete`
const moderationAbusiveWordsUrl = `${apiUrl.qaEnvUrl}/core/moderation/abusiveWords`
const moderationAbusiveWordsDeleteUrl = `${apiUrl.qaEnvUrl}/core/moderation/abusiveWords/delete`
const moderationSuspendRemoveUrl = `${apiUrl.qaEnvUrl}/core/moderation/suspend-action/remove`

export const actionsOnOtherUserTestCases = [
    {
        url: actionsOnOtherUserUrl,
        token: 'token',
        payload: {
            "streamerId": "_",
            "itemsPerPage": 100
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Actions On Other User',
        case: 'wrongStreamerId',
    },
    {
        url: actionsOnOtherUserUrl,
        token: 'token',
        payload: {
            "itemsPerPage": 100
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Actions On Other User',
        case: 'missedStreamerId',
    },
    {
        url: actionsOnOtherUserUrl,
        token: 'token',
        payload: {
            "streamerId": "defaultUserId",
            "itemsPerPage": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Actions On Other User',
        case: 'wrongItemsPerPage',
    },
    {
        url: actionsOnOtherUserUrl,
        token: 'token',
        payload: {
            "streamerId": "defaultUserId"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Actions On Other User',
        case: 'missedItemsPerPage',
    }
]

export const moderationUserListTestCases = [
    {
        url: moderationUserListUserUrl,
        token: 'token',
        payload: {
            "itemsPerPage": "_",
            "skip": 0,
            "moderatorHumanReadableId": "adminHumanReadableId" ,
            "userHumanReadableId": "userHumanReadableId"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Moderation User List',
        case: 'wrongItemsPerPage',
    },
    {
        url: moderationUserListUserUrl,
        token: 'token',
        payload: {
            "skip": 0,
            "moderatorHumanReadableId": "adminHumanReadableId" ,
            "userHumanReadableId": "userHumanReadableId"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Moderation User List',
        case: 'missedItemsPerPage',
    },
    {
        url: moderationUserListUserUrl,
        token: 'token',
        payload: {
            "itemsPerPage": 100,
            "skip": "_",
            "moderatorHumanReadableId": "adminHumanReadableId" ,
            "userHumanReadableId": "userHumanReadableId"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Moderation User List',
        case: 'wrongSkip',
    },
    {
        url: moderationUserListUserUrl,
        token: 'token',
        payload: {
            "itemsPerPage": 100,
            "moderatorHumanReadableId": "adminHumanReadableId" ,
            "userHumanReadableId": "userHumanReadableId"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Moderation User List',
        case: 'missedSkip',
    },
    {
        url: moderationUserListUserUrl,
        token: 'token',
        payload: {
            "itemsPerPage": 100,
            "skip": 0,
            "moderatorHumanReadableId": "_" ,
            "userHumanReadableId": "userHumanReadableId"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Moderation User List',
        case: 'wrongModeratorHumanReadableId',
    },
    {
        url: moderationUserListUserUrl,
        token: 'token',
        payload: {
            "itemsPerPage": 100,
            "skip": 0,
            "moderatorHumanReadableId": "adminHumanReadableId" ,
            "userHumanReadableId": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Moderation User List',
        case: 'wrongUserHumanReadableId',
    }
]

export const moderationForbiddenWordsTestCases = [
    {
        url: moderationForbiddenWordsUrl,
        token: 'token',
        payload: {
            "words": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Moderation Forbidden Word',
        case: 'wrongWords',
    }
]

export const moderationForbiddenWordsDeleteTestCases = [
    {
        url: moderationForbiddenWordsDeleteUrl,
        token: 'token',
        payload: {
            "ids": [
              "_"
            ]
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Moderation Forbidden Word Delete',
        case: 'wrongIds'
    }
]

export const moderationAbusiveWordsTestCases = [
    {
        url: moderationAbusiveWordsUrl,
        token: 'token',
        payload: {
            "words": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Moderation Abusive Word',
        case: 'wrongWords'
    }
]

export const moderationAbusiveWordsDeleteTestCases = [
    {
        url: moderationAbusiveWordsDeleteUrl,
        token: 'token',
        payload: {
            "ids": [
              "_"
            ]
          },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Moderation Abusive Word Delete',
        case: 'wrongIds'
    }
]

export const moderationSuspendRemoveTestCases = [
    {
        url: moderationSuspendRemoveUrl,
        token: 'token',
        payload: {
            "actionId": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Moderation Suspend Remove',
        case: 'wrongIds'
    },
    {
        url: moderationSuspendRemoveUrl,
        token: 'token',
        payload: {},
        expectedStatus: 418,
        errorMessage: 'NTITY_NOT_FOUND',
        testSuite: 'Moderation Suspend Remove',
        case: 'missedActionId'
    }
]