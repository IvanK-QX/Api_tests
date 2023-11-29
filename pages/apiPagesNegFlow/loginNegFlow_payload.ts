import { apiUrl } from '../../utils/apiUrl'
import { apiDataSet } from '../../utils/dataSet'

const loginUrl = `${apiUrl.qaEnvUrl}:3000/login`

export const loginGuestTestCases = [
    {
        url: loginUrl,
        token: null,
        payload: {
            deviceId: apiDataSet.deviceUUID,
            language: 'UK',
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'loginGuest',
        case: 'missedAuthProvider',
    },
    {
        url: loginUrl,
        payload: {
            deviceId: '123458077',
            language: 'UK',
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'loginGuest',
        case: 'missedDeviceId',
    },
    {
        url: loginUrl,
        payload: {
            authProvider: 'ownDeviceId',
            deviceId: apiDataSet.deviceUUID,
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'loginGuest',
        case: 'missedLanguage',
    },
    {
        url: loginUrl,
        payload: {
            authProvider: 'ownDeviceId',
            deviceId: '12345', //less than 6 characters
            language: 'UK',
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'loginGuest',
        case: 'deviceIdToShirt',
    },
    {
        url: loginUrl,
        payload: {
            authProvider: 'ownDeviceId',
            deviceId: '123456789012345678901234567890123456789012345678901', //more than 50 characters
            language: 'UK',
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'loginGuest',
        case: 'deviceIdToLong',
    },
    {
        url: loginUrl,
        payload: {
            authProvider: 'test', // shoud be ownDeviceId
            deviceId: '123456',
            language: 'UK',
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'loginGuest',
        case: 'wrongAuthProvider',
    },
]

export const loginUserTestCases = [
    {
        url: loginUrl,
        payload: {
            email: apiDataSet.randomEmail,
            password: apiDataSet.password,
            deviceId: apiDataSet.deviceUUID,
            language: 'UK',
            guestUserToken: apiDataSet.guestUserTokenNegativeFlow,
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'loginUser',
        case: 'missedAuthProvider',
    },
    {
        url: loginUrl,
        payload: {
            authProvider: 'ownEmail',
            password: apiDataSet.password,
            deviceId: apiDataSet.deviceUUID,
            language: 'UK',
            guestUserToken: apiDataSet.guestUserTokenNegativeFlow,
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'loginUser',
        case: 'missedEmail',
    },
    {
        url: loginUrl,
        payload: {
            authProvider: 'ownEmail',
            email: apiDataSet.randomEmail,
            deviceId: apiDataSet.deviceUUID,
            language: 'UK',
            guestUserToken: apiDataSet.guestUserTokenNegativeFlow,
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'loginUser',
        case: 'missedPassword',
    },
    {
        url: loginUrl,
        payload: {
            authProvider: 'ownEmail',
            email: apiDataSet.randomEmail,
            password: apiDataSet.password,
            language: 'UK',
            guestUserToken: apiDataSet.guestUserTokenNegativeFlow,
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'loginUser',
        case: 'missedDeviceId',
    },
    {
        url: loginUrl,
        payload: {
            authProvider: 'ownEmail',
            email: apiDataSet.randomEmail,
            password: apiDataSet.password,
            deviceId: apiDataSet.deviceUUID,
            guestUserToken: apiDataSet.guestUserTokenNegativeFlow,
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'loginUser',
        case: 'missedLanguage',
    },
    {
        url: loginUrl,
        payload: {
            authProvider: 'ownEmail',
            email: apiDataSet.randomEmail,
            password: apiDataSet.password,
            deviceId: apiDataSet.deviceUUID,
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'loginUser',
        case: 'missedGuestToken',
    },
    {
        url: loginUrl,
        payload: {
            authProvider: 'ownEmail',
            email: apiDataSet.randomEmail,
            password: apiDataSet.password,
            deviceId: apiDataSet.deviceUUID,
            language: 'string',
            guestUserToken: apiDataSet.guestUserTokenNegativeFlow + '1234',
        },
        expectedStatus: 500,
        errorMessage: 'wrong final block length',
        testSuite: 'loginUser',
        case: 'guestTokenToLong',
    },
    {
        url: loginUrl,
        payload: {
            authProvider: 'ownEmail',
            email: apiDataSet.randomEmail,
            password: apiDataSet.password,
            deviceId: apiDataSet.deviceUUID,
            language: 'string',
            guestUserToken: apiDataSet.guestUserTokenNegativeFlow + 'Test',
        },
        expectedStatus: 418,
        errorMessage: 'TOKEN_MALFORMED',
        testSuite: 'loginUser',
        case: 'guestTokenIncorrect',
    },
    {
        url: loginUrl,
        payload: {
            authProvider: 'phone',
            email: apiDataSet.randomEmail,
            password: apiDataSet.password,
            deviceId: apiDataSet.deviceUUID,
            guestUserToken: apiDataSet.guestUserTokenNegativeFlow + 'Test',
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'loginUser',
        case: 'wrongAuthProvider',
    },
]

export const loginAdminTestCases = [
    {
        url: loginUrl,
        payload: {
            email: apiDataSet.email + '@gmail.com',
            password: apiDataSet.password,
            deviceId: apiDataSet.deviceUUID,
            language: 'UK',
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'loginAdmin',
        case: 'missedAuthProvider',
    },
    {
        url: loginUrl,
        payload: {
            authProvider: 'ownEmail',
            password: apiDataSet.password,
            deviceId: apiDataSet.deviceUUID,
            language: 'UK',
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'loginAdmin',
        case: 'missedEmail',
    },
    {
        url: loginUrl,
        payload: {
            authProvider: 'ownEmail',
            email: apiDataSet.email + '@gmail.com',
            deviceId: apiDataSet.deviceUUID,
            language: 'UK',
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'loginAdmin',
        case: 'missedPassword',
    },
    {
        url: loginUrl,
        payload: {
            authProvider: 'ownEmail',
            email: apiDataSet.email + '@gmail.com',
            password: apiDataSet.password,
            language: 'UK',
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'loginAdmin',
        case: 'missedDeviceId',
    },
    {
        url: loginUrl,
        payload: {
            authProvider: 'ownEmail',
            email: apiDataSet.email + '@gmail.com',
            password: apiDataSet.password,
            deviceId: apiDataSet.deviceUUID,
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        case: 'missedLanguage',
    },
    {
        url: loginUrl,
        payload: {
            authProvider: 'phone',
            email: apiDataSet.email + '@gmail.com',
            password: apiDataSet.password,
            deviceId: apiDataSet.deviceUUID,
            language: 'UK',
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'loginAdmin',
        case: 'wrongAuthProvider',
    },
]
