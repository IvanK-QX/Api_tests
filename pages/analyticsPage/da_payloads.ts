export class DaPayloads {
    static showRegModal(userId: string, platform: string) {
        const query = [
          {
            "deviceId" : "6817C448-897A-45ED-A889-4C249D0C1BF9",
            "params" : "{\"deviceType\":\"iPhone XR\",\"userRole\":\"guest\",\"anchor\":\"chat\",\"os\":\"iOS 16.1\",\"context\":\"Chat\"}",
            "brandId" : 1,
            "appName" : "plamfy",
            "platform" : `${platform}`,
            "idfv" : "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10",
            "event" : "show_reg_modal",
            "guestUserId" : `${userId}`,
            "eventTimeMs" : 1689147541813,
            "context" : "Chat"
          }
        ]
          return query
    }
}