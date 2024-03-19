import { apiUrl } from '../../utils/apiUrl'
//mport { apiDataSet } from '../../utils/dataSet'

const editProfileUrl = `${apiUrl.qaEnvUrl}/core/profile`
const searchUrl = `${apiUrl.qaEnvUrl}/core/find`
const addMediaSourceUrl = `${apiUrl.qaEnvUrl}/core/v2/addMediaSource`
const otherUserProfileUrl = `${apiUrl.qaEnvUrl}/core/otherUserProfile`
const createFileUplaodUrl = `${apiUrl.qaEnvUrl}/core/createFileUpload`
const allowedToStartPremiumUrl = `${apiUrl.qaEnvUrl}/core/admin/profile/allowedToStartPremium`
const addDiamondsUrl = `${apiUrl.qaEnvUrl}/core/admin/profile/allowedToStartPremium`
const leaderboardsUrl = `${apiUrl.qaEnvUrl}/core/streams/leaderboard`


export const editProfileTestCases = [
    {
        url: editProfileUrl,
        token: 'token',
        payload: {
            name: '_',
            email: 'email',
            about: 'randomText',
            gender: 'iPreferNotToSay',
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Edit Profile',
        case: 'wrongUserName'
    },
    {
        url: editProfileUrl,
        token: 'token',
        payload: {
            name: 'userName',
            email: '_',
            about: 'randomText',
            gender: 'iPreferNotToSay',
        },
        expectedStatus: 418,
        errorMessage: 'WRONG_EMAIL_FORMAT',
        testSuite: 'Edit Profile',
        case: 'wrongEmail'
    },
    {
        url: editProfileUrl,
        token: 'token',
        payload: {
            name: 'userName',
            email: 'email',
            about: '_',
            gender: 'iPreferNotToSay',
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Edit Profile',
        case: 'wrongAbout'
    },
    {
        url: editProfileUrl,
        token: 'token',
        payload: {
            name: 'userName',
            email: 'email',
            about: 'randomText',
            gender: '_',
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Edit Profile',
        case: 'wrongGender'
    }

]

export const searchTestCases = [
    {
        url: searchUrl,
        token: 'token',
        payload: {
            text: ''
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Search',
        case: 'wrongText'
    },
    {
        url: searchUrl,
        token: 'token',
        payload: {},
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Search',
        case: 'missedText'
    }
]

export const addMediaSourceTestCases = [
    {
        url: addMediaSourceUrl,
        token: 'token',
        payload: {
            "mediaSource": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Aadd Media Source',
        case: 'wrongMediaSource'
    },
    {
        url: addMediaSourceUrl,
        token: 'token',
        payload: {},
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Aadd Media Source',
        case: 'missedMediaSource'
    }

]

export const otherUserProfileTestCases = [
    {
        url: otherUserProfileUrl,
        token: 'token',
        payload: {
            otherUserId: '_',
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Other User Profile',
        case: 'wrongOtherUserProfile'
    },
    {
        url: otherUserProfileUrl,
        token: 'token',
        payload: {},
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Other User Profile',
        case: 'missedOtherUserProfile'
    }
]

export const createFileUplaodTestCases = [
    {
        url: createFileUplaodUrl,
        token: 'token',
        payload: {
            "extension": "_",
            "flow": "editProfile",
            "purpose": "avatar",
            "type": "photo"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Create File Uplaod',
        case: 'wrongExtension'
    },
    {
        url: createFileUplaodUrl,
        token: 'token',
        payload: {
            "flow": "editProfile",
            "purpose": "avatar",
            "type": "photo"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Create File Uplaod',
        case: 'missedExtension'
    },
    {
        url: createFileUplaodUrl,
        token: 'token',
        payload: {
            "extension": "jpg",
            "flow": "_",
            "purpose": "avatar",
            "type": "photo"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Create File Uplaod',
        case: 'wrongFlow'
    },
    {
        url: createFileUplaodUrl,
        token: 'token',
        payload: {
            "extension": "jpg",
            "flow": "editProfile",
            "purpose": "_",
            "type": "photo"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Create File Uplaod',
        case: 'wrongPurpose'
    },
    {
        url: createFileUplaodUrl,
        token: 'token',
        payload: {
            "extension": "jpg",
            "flow": "editProfile",
            "type": "photo"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Create File Uplaod',
        case: 'missedPurpose'
    },
    {
        url: createFileUplaodUrl,
        token: 'token',
        payload: {
            "extension": "jpg",
            "flow": "editProfile",
            "purpose": "avatar",
            "type": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Create File Uplaod',
        case: 'wrongType'
    },
    {
        url: createFileUplaodUrl,
        token: 'token',
        payload: {
            "extension": "jpg",
            "flow": "editProfile",
            "purpose": "avatar",
            "type": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Create File Uplaod',
        case: 'missedType'
    }
]

export const allowedToStartPremiumTestCases = [
    {
        url: allowedToStartPremiumUrl,
        token: 'token',
        payload: {
            userId: '_',
            allowedToStartPremium: true
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Allowed to Start Premium',
        case: 'wrongUserId'
    },
    {
        url: allowedToStartPremiumUrl,
        token: 'token',
        payload: {
            userId: 'defaultUserId',
            allowedToStartPremium: '_'
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Allowed to Start Premium',
        case: 'wrongAllowedToStartPremium'
    },
    {
        url: allowedToStartPremiumUrl,
        token: 'token',
        payload: {
            allowedToStartPremium: true
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Allowed to Start Premium',
        case: 'missedUserId'
    },
    {
        url: allowedToStartPremiumUrl,
        token: 'token',
        payload: {
            userId: 'defaultUserId'
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Allowed to Start Premium',
        case: 'missedAllowedToStartPremium'
    }
]

export const addDiamondsTestCases = [
    {
        url: addDiamondsUrl,
        token: 'token',
        payload: {
            "userId": "_",
            "diamonds": 10000
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Add Diamonds',
        case: 'wrongUserId'
    },
    {
        url: addDiamondsUrl,
        token: 'token',
        payload: {
            "diamonds": 10000
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Add Diamonds',
        case: 'missedUserId'
    },
    {
        url: addDiamondsUrl,
        token: 'token',
        payload: {
            "userId": "defaultUserId",
            "diamonds": '_'
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Add Diamonds',
        case: 'wrongDiamonds'
    },
    {
        url: addDiamondsUrl,
        token: 'token',
        payload: {
            "userId": "defaultUserId"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Add Diamonds',
        case: 'missedDiamonds'
    }
]

export const leaderboardTestCases = [
    {
        url: leaderboardsUrl,
        token: null,
        payload: {
            "period": "_",
            "itemsPerPage":  50,
            "skip": 0
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Leaderboard',
        case: 'wrongPeriod'
    },
    {
        url: leaderboardsUrl,
        token: null,
        payload: {
            "itemsPerPage":  50,
            "skip": 0
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Leaderboard',
        case: 'missedPeriod'
    },
    {
        url: leaderboardsUrl,
        token: null,
        payload: {
            "period": "day",
            "itemsPerPage":  '_',
            "skip": 0
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Leaderboard',
        case: 'wrongItemsPerPage'
    },
    {
        url: leaderboardsUrl,
        token: null,
        payload: {
            "period": "day",
            "skip": 0
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Leaderboard',
        case: 'missedItemsPerPage'
    }
]