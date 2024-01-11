import { apiUrl } from '../../utils/apiUrl'

const streamsListUrl = `${apiUrl.qaEnvUrl}:3000/streams/list`
const streamsCreateUrl = `${apiUrl.qaEnvUrl}:3000/streams/my/create`
const streamsGetUrl = `${apiUrl.qaEnvUrl}:3000/streams/get`
const streamsSendInviteUrl = `${apiUrl.qaEnvUrl}:3000/streams/my/sendInvite`
const streamsUpdateUrl = `${apiUrl.qaEnvUrl}:3000/streams/my/update`
const streamsStopUrl = `${apiUrl.qaEnvUrl}:3000/streams/my/stop`
const streamsWatchersUrl = `${apiUrl.qaEnvUrl}:3000/stream/watchers`
const streamsRankUrl = `${apiUrl.qaEnvUrl}:3000/streams/rank`
const streamsDesiredGiftUrl = `${apiUrl.qaEnvUrl}:3000/streams/my/desiredGift`
const streamsDesiredGiftDeleteUrl = `${apiUrl.qaEnvUrl}:3000/streams/my/desiredGift/delete`
const streamsStatusUpdateUrl = `${apiUrl.qaEnvUrl}:3000/streams/my/statusUpdate`
const streamsGetByStreamerUrl = `${apiUrl.qaEnvUrl}:3000/streams/getByStreamer`
const streamsReferalEarningsUrl = `${apiUrl.qaEnvUrl}:3000/referalEarnings`

export const streamsListTestCases = [
    {
        url: streamsListUrl,
        token: 'token',
        payload: {
            "filter": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams List',
        case: 'wrongFilter'
    },
]

export const stremsCreateTestCases = [
    {
        url: streamsCreateUrl,
        token: 'token',
        payload: {
            "type": "public"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Create',
        case: 'missedTitle'
    },
    {
        url: streamsCreateUrl,
        token: 'token',
        payload: {
            "title": "Come and Watch My Live Broadcast",
            "type": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Create',
        case: 'wrongType'
    },
    {
        url: streamsCreateUrl,
        token: 'token',
        payload: {
            "title": "Come and Watch My Live Broadcast"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Create',
        case: 'missedType'
    }
]

export const stremsGetTestCases = [
    {
        url: streamsGetUrl,
        token: 'token',
        payload: {
            "streamId": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Get',
        case: 'wrongStreamId',
    },
    {
        url: streamsGetUrl,
        token: 'token',
        payload: {},
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Get',
        case: 'missedStreamId',
    }
]

export const stremsSendInviteTestCases = [
    {
        url: streamsSendInviteUrl,
        token: 'token',
        payload: {
            "streamId": "_",
            "userIds": [
              "648b24260642b2b48c2295da"
            ]
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Send Invite',
        case: 'wrongStreamId'
    },
    {
        url: streamsSendInviteUrl,
        token: 'token',
        payload: {
            "userIds": [
              "648b24260642b2b48c2295da"
            ]
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Send Invite',
        case: 'missedStreamId'
    },
    {
        url: streamsSendInviteUrl,
        token: 'token',
        payload: {
            "streamId": "defaultStreamId",
            "userIds": [
              "_"
            ]
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Send Invite',
        case: 'wrongUserIds'
    },
    {
        url: streamsSendInviteUrl,
        token: 'token',
        payload: {
            "streamId": "defaultUserId"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Send Invite',
        case: 'missedUserIds'
    }
]

export const stremsUpdateTestCases = [
    {
        url: streamsUpdateUrl,
        token: 'token',
        payload: {
            "streamId": "_",
            "userIds": [
              "648b24260642b2b48c2295da"
            ]
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Update',
        case: 'wrongStreamId'
    },
    {
        url: streamsUpdateUrl,
        token: 'token',
        payload: {
            "userIds": [
              "648b24260642b2b48c2295da"
            ]
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Update',
        case: 'missedStreamId'
    },
    {
        url: streamsUpdateUrl,
        token: 'token',
        payload: {
            "streamId": "defaultStreamId",
            "userIds": [
              "_"
            ]
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Update',
        case: 'wrongUserIds'
    },
    {
        url: streamsUpdateUrl,
        token: 'token',
        payload: {
            "streamId": "defaultStreamId",
            "userIds": [
              "648b24260642b2b48c2295da"
            ]
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Update',
        case: 'missedUserIds'
    }  
]

export const stremsStopTestCases = [
    {
        url: streamsStopUrl,
        token: 'token',
        payload: {
            "streamId": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Stop',
        case: 'wrongStreamId'
    },
    {
        url: streamsStopUrl,
        token: 'token',
        payload: {},
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Stop',
        case: 'missedStreamId'
    }
]

export const stremsWatchersTestCases = [
    {
        url: streamsWatchersUrl,
        token: 'token',
        payload: {
            "streamId": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Watchers',
        case: 'wrongStreamId'
    },
    {
        url: streamsWatchersUrl,
        token: 'token',
        payload: {},
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Watchers',
        case: 'missedStreamId'
    }
]

export const stremsRankTestCases = [
    {
        url: streamsRankUrl,
        token: 'token',
        payload: {
            "streamId": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Rank',
        case: 'wrongStreamId'
    },
    {
        url: streamsWatchersUrl,
        token: 'token',
        payload: {},
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Rank',
        case: 'missedStreamId'
    }
]

export const streamsDesiredGiftTestCases = [
    {
        url: streamsDesiredGiftUrl,
        token: 'token',
        payload: {
            "giftId": "_",
            "streamId": "defaultStreamId",
            "title": "I want this"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Add Desired Gift',
        case: 'wrongGiftId'
    },
    {
        url: streamsDesiredGiftUrl,
        token: 'token',
        payload: {
            "streamId": "defaultStreamId",
            "title": "I want this"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Add Desired Gift',
        case: 'missedGiftId'
    },
    {
        url: streamsDesiredGiftUrl,
        token: 'token',
        payload: {
            "giftId": "defaultGiftId",
            "streamId": "_",
            "title": "I want this"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Add Desired Gift',
        case: 'wrongStreamId'
    },
    {
        url: streamsDesiredGiftUrl,
        token: 'token',
        payload: {
            "giftId": "defaultGiftId",
            "title": "I want this"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Add Desired Gift',
        case: 'missedStreamId'
    },
    {
        url: streamsDesiredGiftUrl,
        token: 'token',
        payload: {
            "giftId": "defaultGiftId",
            "streamId": "defaultStreamId"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Add Desired Gift',
        case: 'missedTitle'
    }
]

export const streamsDesiredGiftDeleteTestCases = [
    {
        url: streamsDesiredGiftDeleteUrl,
        token: 'token',
        payload: {
            "streamId": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Add Desired Gift Delete',
        case: 'wrongStreamId'
    },
    {
        url: streamsDesiredGiftDeleteUrl,
        token: 'token',
        payload: {},
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Add Desired Gift Delete',
        case: 'missedStreamId'
    }
]

export const streamsStatusUpdateTestCases = [
    {
        url: streamsStatusUpdateUrl,
        token: 'token',
        payload: {
            "status": "Active",
            "streamId": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Status Update',
        case: 'wrongStreamId'
    },
    {
        url: streamsStatusUpdateUrl,
        token: 'token',
        payload: {
            "status": "Active"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Status Update',
        case: 'missedStreamId'
    },
    {
        url: streamsStatusUpdateUrl,
        token: 'token',
        payload: {
            "status": "_",
            "streamId": "defaultStreamId"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Status Update',
        case: 'wrongStatus'
    },
    {
        url: streamsStatusUpdateUrl,
        token: 'token',
        payload: {
            "streamId": "defaultStreamId"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Status Update',
        case: 'missedStatus'
    }
]

export const streamsGetByStreamerTestCases = [
    {
        url: streamsGetByStreamerUrl,
        token: 'token',
        payload: {
            "streamerId": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Get By Streamer',
        case: 'wrongStreamId'
    },
    {
        url: streamsGetByStreamerUrl,
        token: 'token',
        payload: {},
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Get By Streamer',
        case: 'missedStreamId'
    }
]

export const streamsReferalEarningsTestCases = [
    {
        url: streamsReferalEarningsUrl,
        token: 'token',
        payload: {
            "period": "_"
          },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Streams Get By Streamer',
        case: 'wrongPeriod'
    }
]