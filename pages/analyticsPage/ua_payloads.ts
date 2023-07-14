export class UaPayloads {

  static showCreateAccountSuccess(userId: string, platform: string) {
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
    return query
  }
  static clickFollow(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"context\":\"Splash\",\"receiverId\":\"8937\",\"role\":\"user\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"followType\":1,\"total_spend\":\"0\",\"anchor\":\"top_streamers\"}",
        "event": "click_follow",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Splash",
        "userId": `${userId}`,
        "platform": `${platform}`,
        "brandId": 1,
        "receiverId": "8937",
        "eventTimeMs": 1689080346335,
        "role": "user",
        "appName": "plamfy",
        "idfv": "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10"
      }
    ]
    return query
  }

  static pageviewStream(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"userId\":\"7421\",\"my_vip_status\":\"gold\",\"type\":\"public\",\"os\":\"iOS 16.1\",\"context\":\"Watcher's Stream\",\"userRole\":\"user\",\"anchor\":\"all_streams\",\"free_gift\":0,\"deviceType\":\"iPhone XR\",\"streamId\":\"64ad48f87712b882633e091b\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": `${userId}`,
        "role": "user",
        "event": "pageview_stream",
        "platform": `${platform}`,
        "appName": "plamfy",
        "eventTimeMs": 1689079455613,
        "idfv": "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10",
        "context": "Watcher's Stream"
      }
    ]
    return query
  }

  static clickSendGift(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"deviceType\":\"iPhone XR\",\"gift\":\"614d9a5f785de79b84c6a2ca\",\"os\":\"iOS 16.1\",\"premiumStatus\":0,\"anchor\":\"gift_shop\",\"userRole\":\"user\",\"coinBalance\":800,\"streamStatus\":0,\"receiverId\":\"7421\",\"context\":\"Watcher's Stream\"}",
        "event": "click_send_gift",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Watcher's Stream",
        "userId": `${userId}`,
        "platform": `${platform}`,
        "brandId": 1,
        "receiverId": "7421",
        "eventTimeMs": 1689079727457,
        "role": "user",
        "appName": "plamfy",
        "idfv": "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10"
      }
    ]
    return query
  }
  static showGiftSent(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"receiverId\":\"7421\",\"status\":\"ok\",\"my_vip_status\":\"gold\",\"os\":\"iOS 16.1\",\"free_gift\":\"0\",\"role\":\"user\",\"coins\":\"7\",\"userRole\":\"user\",\"context\":\"Watcher's Stream\",\"streamId\":\"64ad48f87712b882633e091b\",\"gift_type\":\"3d\",\"anchor\":\"gift_shop\",\"total_spend\":\"188153\",\"deviceType\":\"iPhone XR\",\"chatId\":\"64ad48f87712b882633e091a\",\"stream_type\":\"public\",\"giftId\":\"614d9a5f785de79b84c6a2ca\"}",
        "event": "show_gift_sent",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Watcher's Stream",
        "userId": `${userId}`,
        "platform": `${platform}`,
        "brandId": 1,
        "receiverId": "7421",
        "eventTimeMs": 1689079728237,
        "role": "user",
        "appName": "plamfy",
        "idfv": "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10"
      }
    ]

    return query
  }

  static clickGetCoins(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"context\":\"Watcher's Stream\",\"streamStatus\":0,\"os\":\"iOS 16.1\",\"premiumStatus\":0,\"anchor\":\"gift_shop\",\"userRole\":\"user\",\"chatId\":\"64ae6d5d4087c11234a99d90\",\"deviceType\":\"iPhone XR\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": `${userId}`,
        "event": "click_get_coins",
        "platform": `${platform}`,
        "appName": "plamfy",
        "eventTimeMs": 1689154056773,
        "idfv": "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10",
        "context": "Watcher's Stream"
      }
    ]
    return query
  }
}