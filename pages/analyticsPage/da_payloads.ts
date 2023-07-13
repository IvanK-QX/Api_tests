export class DaPayloads {

  static showRegModal(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"deviceType\":\"iPhone XR\",\"userRole\":\"guest\",\"anchor\":\"chat\",\"os\":\"iOS 16.1\",\"context\":\"Chat\"}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": `${platform}`,
        "idfv": "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10",
        "event": "show_reg_modal",
        "guestUserId": `${userId}`,
        "eventTimeMs": 1689147541813,
        "context": "Chat"
      }
    ]
    return query
  }

  static clickCloseReg(userId: string, platform: string) {
    const query =
      [
        {
          "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
          "params": "{\"deviceType\":\"iPhone XR\",\"userRole\":\"guest\",\"anchor\":\"chat\",\"os\":\"iOS 16.1\",\"context\":\"Chat\"}",
          "brandId": 1,
          "appName": "plamfy",
          "platform": `${platform}`,
          "idfv": "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10",
          "event": "click_close_reg",
          "guestUserId": `${userId}`,
          "eventTimeMs": 1689147543300,
          "context": "Chat"
        }
      ]
    return query
  }

  static clickStartReg(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"context\":\"Start Stream\",\"deviceType\":\"iPhone XR\",\"userRole\":\"guest\",\"button\":\"apple\",\"anchor\":\"start_stream\",\"os\":\"iOS 16.1\"}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": `${platform}`,
        "idfv": "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10",
        "event": "click_start_reg",
        "guestUserId": `${userId}`,
        "eventTimeMs": 1689147839992,
        "context": "Start Stream"
      }
    ]
    return query
  }
}