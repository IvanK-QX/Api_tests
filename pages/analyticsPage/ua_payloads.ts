export class UaPayloads {
  static payloadExample(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"context\":\"Start Stream\",\"os\":\"iOS 16.1\",\"userRole\":\"user\",\"userId\":\"11307\",\"deviceType\":\"iPhone XR\",\"anchor\":\"start_stream\",\"method\":\"google\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": `${userId}`,
        "role": "user",
        "event": "show_create_account_success",
        "platform": `${platform}`,
        "appName": "plamfy",
        "eventTimeMs": 1689150057862,
        "idfv": "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10",
        "context": "Start Stream"
      }

    ]
    return query
  }

  static showCreateAccountSuccess(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"anchor\":\"start_stream\",\"userRole\":\"user\",\"os\":\"iOS 16.1\",\"method\":\"google\",\"userId\":\"11363\",\"context\":\"Start Stream\",\"deviceType\":\"iPhone XR\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": `${platform}`,
        "role": "user",
        "event": "show_create_account_success",
        "platform": `${platform}`,
        "appName": "plamfy",
        "eventTimeMs": 1689257223923,
        "idfv": "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10",
        "context": "Start Stream"
      }
    ]
    return query
  }

  static pageviewFollowTop(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"context\":\"Splash\",\"os\":\"iOS 16.1\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": `${userId}`,
        "role": "user",
        "event": "pageview_follow_top",
        "platform": `${platform}`,
        "appName": "plamfy",
        "eventTimeMs": 1689080342034,
        "idfv": "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10",
        "context": "Splash"
      }
    ]
    return query
  }

  static clickFollowTop(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"button\":\"follow\",\"context\":\"Splash\",\"os\":\"iOS 16.1\",\"userRole\":\"user\",\"checkbox\":\"false\",\"deviceType\":\"iPhone XR\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": `${userId}`,
        "role": "user",
        "event": "click_follow_top",
        "platform": `${platform}`,
        "appName": "plamfy",
        "eventTimeMs": 1689080345497,
        "idfv": "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10",
        "context": "Splash"
      }
    ]
  }
}