import { apiUrl } from '../../utils/apiUrl'

const notificationsContentCreateUrl = `${apiUrl.qaEnvUrl}/core/admin/notificationsContent/create`
const notificationsContentUpdateUrl = `${apiUrl.qaEnvUrl}/core/admin/notificationsContent/update`
const notificationsContentDeleteUrl = `${apiUrl.qaEnvUrl}/core/admin/notificationsContent/delete`

export const notificationContentCreateTestCases  = [
    {
        url: notificationsContentCreateUrl,
        token: 'token',
        payload: {
            "type": "_",
            "title": "Test Title",
            "text": "Test Text"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Notification Content Create',
        case: 'wrongType'
    },
    {
        url: notificationsContentCreateUrl,
        token: 'token',
        payload: {
            "title": "Test Title",
            "text": "Test Text"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Notification Content Create',
        case: 'missedType'
    },
    {
        url: notificationsContentCreateUrl,
        token: 'token',
        payload: {
            "type": "giftReceived",
            "text": "Test Text"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Notification Content Create',
        case: 'missedTitle'
    },
    {
        url: notificationsContentCreateUrl,
        token: 'token',
        payload: {
            "type": "giftReceived",
            "title": "Test Title"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Notification Content Create',
        case: 'missedText'
    }
]

export const notificationContentUpdateTestCases  = [
    {
        url: notificationsContentUpdateUrl,
        token: 'token',
        payload: {
            "id": "_",
            "type": "giftReceived",
            "title": "Updated Test Title",
            "text": "Updated Test Text"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Notification Content Update',
        case: 'wrongId'
    },
    {
        url: notificationsContentUpdateUrl,
        token: 'token',
        payload: {
            "type": "giftReceived",
            "title": "Updated Test Title",
            "text": "Updated Test Text"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Notification Content Update',
        case: 'missedId'
    },
    {
        url: notificationsContentUpdateUrl,
        token: 'token',
        payload: {
            "id": "notificationId",
            "type": "_",
            "title": "Updated Test Title",
            "text": "Updated Test Text"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Notification Content Update',
        case: 'wrongType'
    }
]

export const notificationContentDeleteTestCases  = [
    {
        url: notificationsContentDeleteUrl,
        token: 'token',
        payload: {
            "id": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Notification Content Delete',
        case: 'wrongId'
    },
    {
        url: notificationsContentDeleteUrl,
        token: 'token',
        payload: {},
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Notification Content Delete',
        case: 'missedId'
    }
]