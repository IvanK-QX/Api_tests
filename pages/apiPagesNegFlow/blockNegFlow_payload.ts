import { apiUrl } from '../../utils/apiUrl'

const blockUrl = `${apiUrl.qaEnvUrl}:3000/block`
const unblockUrl = `${apiUrl.qaEnvUrl}:3000/unblock`

export const blockTestCases = [
    {
        url: blockUrl,
        token: 'token',
        payload: {
            "userId": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Block',
        case: 'wrongUserId',
    },
    {
        url: blockUrl,
        token: 'token',
        payload: {},
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Block',
        case: 'missedUserId',
    }
]

export const unblockTestCases = [
    {
        url: unblockUrl,
        token: 'token',
        payload: {
            "userId": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Ubblock',
        case: 'wrongUserId',
    }, 
    {
        url: unblockUrl,
        token: 'token',
        payload: {},
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Ubblock',
        case: 'missedUserId',
    }

]