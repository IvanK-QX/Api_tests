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

  static previewCoinShop(userId: string, platform: string) {
    const query = [
      {
        "appName": "plamfy",
        "brandId": 1,
        "category": "Buynow",
        "context": "Buynow",
        "deviceId": "ce84789c-5fa1-400b-8420-1eabfca7b13c",
        "event": "pageview_coins_shop",
        "eventTimeMs": 1689058615000,
        "params": "{\"shopType\":\"timer\",\"coinBalance\":33374,\"referrer\":\"coins_balance\",\"anchor\":\"coins_balance\",   \"ref\":\"648b24260642b2b48c2295da\"}",
        "platform": `${platform}`,
        "role": "user",
        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/   537.36",
        "userId": `${userId}`
        }
    ]
    return query
  }

  static showCoinShop(userId: string, platform: string) {
    const query = [
      {
        "params" : "{\"os\":\"iOS 16.1\",\"context\":\"Chat\",\"coinBalance\":9999,\"referrer\":\"gift_shop_stream\",\"anchor\":\"gift_shop\",\"shopType\":\"default\",\"role\":\"user\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\"}",
        "deviceId" : "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId" : 1,
        "userId" : `${userId}`,
        "role" : "user",
        "event" : "show_coins_shop",
        "platform" : "iOS",
        "appName" : `${platform}`,
        "eventTimeMs" : 1689080793263,
        "idfv" : "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10",
        "context" : "Chat"
      }
    ]
    return query
  }

  static clickBuyPack(userId: string, platform: string) {
    const query = [
      {
        "params" : "{\"isSpecial\":false,\"shopType\":\"default\",\"context\":\"Coins Shop\",\"referrer\":\"refill_coins\",\"os\":\"iOS 16.1\",\"cost\":4.9900000000000002,\"role\":\"user\",\"userRole\":\"user\",\"provider\":\"ApplePay\",\"packageType\":\"500_coins_ios\",\"coins\":9999,\"deviceType\":\"iPhone XR\"}",
        "deviceId" : "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId" : 1,
        "userId" : `${userId}`,
        "role" : "user",
        "event" : "click_buy_pack",
        "platform" : `${platform}`,
        "appName" : "plamfy",
        "eventTimeMs" : 1689080917573,
        "idfv" : "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10",
        "context" : "Coins Shop"
      }
    ]
    return query
  }

  static pageViewPayingMenu(userId: string, platform: string) {
    const query = [
      {
        "params" : "{\"shopType\":\"default\",\"provider\":\"ApplePay\",\"referrer\":\"refill_coins\",\"userRole\":\"user\",\"os\":\"iOS 16.1\",\"packageType\":\"500_coins_ios\",\"deviceType\":\"iPhone XR\",\"context\":\"Coins Shop\",\"role\":\"user\"}",
        "deviceId" : "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId" : 1,
        "userId" : `${userId}`,
        "role" : "user",
        "event" : "pageview_payingMenu",
        "platform" : `${platform}`,
        "appName" : "plamfy",
        "eventTimeMs" : 1689080917575,
        "idfv" : "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10",
        "context" : "Coins Shop"
      }
    ]
    return query
  }

  static clickClosePayingMenu(userId: string, platform: string) {
    const query = [
      {
        "params" : "{\"os\":\"iOS 16.1\",\"userRole\":\"user\",\"context\":\"Coins Shop\",\"referrer\":\"refill_coins\",\"role\":\"user\",\"shopType\":\"default\",\"provider\":\"ApplePay\",\"deviceType\":\"iPhone XR\",\"packageType\":\"500_coins_ios\"}",
        "deviceId" : "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId" : 1,
        "userId" : `${userId}`,
        "role" : "user",
        "event" : "click_payingMenu_close",
        "platform" : `${platform}`,
        "appName" : "plamfy",
        "eventTimeMs" : 1689080928556,
        "idfv" : "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10",
        "context" : "Coins Shop"
      }
    ]
    return query
  }

  static showPayingMenuSuccess(userId: string, platform: string) {
    const query = [
      {
        "params" : "{\"packageType\":\"500_coins_ios\",\"paymentId\":\"2000000366646285\",\"referrer\":\"refill_coins\",\"context\":\"Coins Shop\",\"provider\":\"ApplePay\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"role\":\"user\"}",
        "deviceId" : "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId" : 1,
        "userId" : `${userId}`,
        "role" : "user",
        "event" : "show_payingMenu_success",
        "platform" : `${platform}`,
        "appName" : "plamfy",
        "eventTimeMs" : 1689083098545,
        "idfv" : "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10",
        "context" : "Coins Shop"
      }
    ]
    return query
  }

  static showPremiumJoin(userId: string, platform: string) {
    const query = [
      {
        "params" : "{\"giftId\":\"614c4d1574faac3e988b2c79\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\",\"context\":\"Watcher's Stream\",\"streamerID\":\"639701ea6ecefc723c11a943\",\"anchor\":\"all_streams\",\"receiverId\":\"5708\",\"my_vip_status\":\"gold\",\"os\":\"iOS 16.1\",\"isfree\":0}",
        "event" : "show_premium_join",
        "deviceId" : "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context" : "Watcher's Stream",
        "userId" : `${userId}`,
        "platform" : `${platform}`,
        "brandId" : 1,
        "receiverId" : "5708",
        "eventTimeMs" : 1689152824553,
        "role" : "user",
        "appName" : "plamfy",
        "idfv" : "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10"
      }
    ]
    return query
  }

  static clickPremiumJoin(userId: string, platform: string) {
    const query = [
      {
        "params" : "{\"userRole\":\"user\",\"isfree\":0,\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"giftId\":\"614c4d1574faac3e988b2c79\",\"receiverId\":\"5708\",\"button\":\"close\",\"context\":\"Watcher's Stream\"}",
        "event" : "click_premium_join",
        "deviceId" : "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context" : "Watcher's Stream",
        "userId" : `${userId}`,
        "platform" : `${platform}`,
        "brandId" : 1,
        "receiverId" : "5708",
        "eventTimeMs" : 1689152829437,
        "role" : "user",
        "appName" : "plamfy",
        "idfv" : "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10"
      }
    ]
    return query
  }

  static showRoomJoin(userId: string, platform: string) {
    const query = [
      {
        "params" : "{\"context\":\"Watcher's Stream\",\"anchor\":\"all_streams\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"receiverId\":\"5708\"}",
        "event" : "show_room_join",
        "deviceId" : "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context" : "Watcher's Stream",
        "userId" : `${userId}`,
        "platform" : `${platform}`,
        "brandId" : 1,
        "receiverId" : "5708",
        "eventTimeMs" : 1689153428060,
        "role" : "user",
        "appName" : "plamfy",
        "idfv" : "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10"
      }
    ]
    return query
  }

  static clickRoomJoin(userId: string, platform: string) {
    const query = [
      {
        "params" : "{\"anchor\":\"all_streams\",\"receiverId\":\"5708\",\"userRole\":\"user\",\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\",\"context\":\"Watcher's Stream\"}",
        "event" : "click_room_join",
        "deviceId" : "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context" : "Watcher's Stream",
        "userId" : `${userId}`,
        "platform" : `${platform}`,
        "brandId" : 1,
        "receiverId" : "5708",
        "eventTimeMs" : 1689153429715,
        "role" : "user",
        "appName" : "plamfy",
        "idfv" : "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10"
      }
    ]
    return query
  }

  static clickGiftShop(userId: string, platform: string) {
    const query = [
      {
        "params" : "{\"deviceType\":\"iPhone XR\",\"premiumStatus\":0,\"userRole\":\"user\",\"streamStatus\":0,\"anchor\":\"gift_shop\",\"os\":\"iOS 16.1\",\"context\":\"Watcher's Stream\"}",
        "deviceId" : "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId" : 1,
        "userId" : `${userId}`,
        "role" : "user",
        "event" : "click_gifts_shop",
        "platform" : `${platform}`,
        "appName" : "plamfy",
        "eventTimeMs" : 1689154055514,
        "idfv" : "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10",
        "context" : "Watcher's Stream"
      }
    ]
    return query
  }
}