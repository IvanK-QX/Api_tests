export class DaPayloads {
    static payloadExample(userId: string, platform: string) {
        const query = [
            {
              "params" : "{\"context\":\"Start Stream\",\"os\":\"iOS 16.1\",\"userRole\":\"user\",\"userId\":\"11307\",\"deviceType\":\"iPhone XR\",\"anchor\":\"start_stream\",\"method\":\"google\"}",
              "deviceId" : "6817C448-897A-45ED-A889-4C249D0C1BF9",
              "brandId" : 1,
              "userId" : `${userId}`,
              "role" : "user",
              "event" : "show_create_account_success",
              "platform" : `${platform}`,
              "appName" : "plamfy",
              "eventTimeMs" : 1689150057862,
              "idfv" : "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10",
              "context" : "Start Stream"
            }
          ]
          return query
    }
}