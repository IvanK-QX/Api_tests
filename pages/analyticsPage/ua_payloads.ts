/* eslint-disable no-useless-escape */
export class UaPayloads {

  // default payload, can be used ib all methods 
  // you should only send nessesary data from analyticsDataSet
  // please delete all other methods from this file 
  // you can use the same for DA, but you need to modify it according to DA requirements 
  static uaQueryParmeter(userId: string, event: string, context: string, platform: string) {
    const query = [
      {
        "params": `{\"context\":\"${context}\",\"receiverId\":\"8937\",\"role\":\"user\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"followType\":1,\"total_spend\":\"0\",\"anchor\":\"top_streamers\"}`,
        "event": `${event}`,
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": `${context}`,
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

// todo > delete all
  static defaultQueryParams = {
    "brandId": 1,
    "role": "user",
    "appName": "plamfy",
  };

  static showCreateAccountSuccess(userId: string, platform: string) {
    const query = [
      {
        ...this.defaultQueryParams,
        "params": "{\"context\":\"Start Stream\",\"os\":\"iOS 16.1\",\"userRole\":\"user\",\"userId\":\"11307\",\"deviceType\":\"iPhone XR\",\"anchor\":\"start_stream\",\"method\":\"google\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "userId": `${userId}`,
        "event": "show_create_account_success",
        "platform": `${platform}`,
        "eventTimeMs": 1689150057862,
        "idfv": "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10",
        "context": "Start Stream"
      }
    ]
    return query
  }

  static pageViewFollowTop(userId: string, platform: string) {
    const query = [
      {
        ...this.defaultQueryParams,
        "params": "{\"context\":\"Splash\",\"os\":\"iOS 16.1\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "userId": `${userId}`,
        "event": "pageview_follow_top",
        "platform": `${platform}`,
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
        "params": "{\"os\":\"iOS 16.1\",\"context\":\"Chat\",\"coinBalance\":9999,\"referrer\":\"gift_shop_stream\",\"anchor\":\"gift_shop\",\"shopType\":\"default\",\"role\":\"user\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": `${userId}`,
        "role": "user",
        "event": "show_coins_shop",
        "platform": "iOS",
        "appName": `${platform}`,
        "eventTimeMs": 1689080793263,
        "idfv": "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10",
        "context": "Chat"
      }
    ]
    return query
  }

  static clickBuyPack(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"isSpecial\":false,\"shopType\":\"default\",\"context\":\"Coins Shop\",\"referrer\":\"refill_coins\",\"os\":\"iOS 16.1\",\"cost\":4.9900000000000002,\"role\":\"user\",\"userRole\":\"user\",\"provider\":\"ApplePay\",\"packageType\":\"500_coins_ios\",\"coins\":9999,\"deviceType\":\"iPhone XR\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": `${userId}`,
        "role": "user",
        "event": "click_buy_pack",
        "platform": `${platform}`,
        "appName": "plamfy",
        "eventTimeMs": 1689080917573,
        "idfv": "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10",
        "context": "Coins Shop"
      }
    ]
    return query
  }

  static pageViewPayingMenu(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"shopType\":\"default\",\"provider\":\"ApplePay\",\"referrer\":\"refill_coins\",\"userRole\":\"user\",\"os\":\"iOS 16.1\",\"packageType\":\"500_coins_ios\",\"deviceType\":\"iPhone XR\",\"context\":\"Coins Shop\",\"role\":\"user\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": `${userId}`,
        "role": "user",
        "event": "pageview_payingMenu",
        "platform": `${platform}`,
        "appName": "plamfy",
        "eventTimeMs": 1689080917575,
        "idfv": "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10",
        "context": "Coins Shop"
      }
    ]
    return query
  }

  static clickClosePayingMenu(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"os\":\"iOS 16.1\",\"userRole\":\"user\",\"context\":\"Coins Shop\",\"referrer\":\"refill_coins\",\"role\":\"user\",\"shopType\":\"default\",\"provider\":\"ApplePay\",\"deviceType\":\"iPhone XR\",\"packageType\":\"500_coins_ios\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": `${userId}`,
        "role": "user",
        "event": "click_payingMenu_close",
        "platform": `${platform}`,
        "appName": "plamfy",
        "eventTimeMs": 1689080928556,
        "idfv": "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10",
        "context": "Coins Shop"
      }
    ]
    return query
  }

  static showPayingMenuSuccess(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"packageType\":\"500_coins_ios\",\"paymentId\":\"2000000366646285\",\"referrer\":\"refill_coins\",\"context\":\"Coins Shop\",\"provider\":\"ApplePay\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"role\":\"user\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": `${userId}`,
        "role": "user",
        "event": "show_payingMenu_success",
        "platform": `${platform}`,
        "appName": "plamfy",
        "eventTimeMs": 1689083098545,
        "idfv": "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10",
        "context": "Coins Shop"
      }
    ]
    return query
  }

  static showPremiumJoin(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"giftId\":\"614c4d1574faac3e988b2c79\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\",\"context\":\"Watcher's Stream\",\"streamerID\":\"639701ea6ecefc723c11a943\",\"anchor\":\"all_streams\",\"receiverId\":\"5708\",\"my_vip_status\":\"gold\",\"os\":\"iOS 16.1\",\"isfree\":0}",
        "event": "show_premium_join",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Watcher's Stream",
        "userId": `${userId}`,
        "platform": `${platform}`,
        "brandId": 1,
        "receiverId": "5708",
        "eventTimeMs": 1689152824553,
        "role": "user",
        "appName": "plamfy",
        "idfv": "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10"
      }
    ]
    return query
  }

  static clickPremiumJoin(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"userRole\":\"user\",\"isfree\":0,\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"giftId\":\"614c4d1574faac3e988b2c79\",\"receiverId\":\"5708\",\"button\":\"close\",\"context\":\"Watcher's Stream\"}",
        "event": "click_premium_join",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Watcher's Stream",
        "userId": `${userId}`,
        "platform": `${platform}`,
        "brandId": 1,
        "receiverId": "5708",
        "eventTimeMs": 1689152829437,
        "role": "user",
        "appName": "plamfy",
        "idfv": "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10"
      }
    ]
    return query
  }

  static showRoomJoin(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"context\":\"Watcher's Stream\",\"anchor\":\"all_streams\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"receiverId\":\"5708\"}",
        "event": "show_room_join",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Watcher's Stream",
        "userId": `${userId}`,
        "platform": `${platform}`,
        "brandId": 1,
        "receiverId": "5708",
        "eventTimeMs": 1689153428060,
        "role": "user",
        "appName": "plamfy",
        "idfv": "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10"
      }
    ]
    return query
  }

  static clickRoomJoin(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"anchor\":\"all_streams\",\"receiverId\":\"5708\",\"userRole\":\"user\",\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\",\"context\":\"Watcher's Stream\"}",
        "event": "click_room_join",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Watcher's Stream",
        "userId": `${userId}`,
        "platform": `${platform}`,
        "brandId": 1,
        "receiverId": "5708",
        "eventTimeMs": 1689153429715,
        "role": "user",
        "appName": "plamfy",
        "idfv": "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10"
      }
    ]
    return query
  }

  static clickGiftShop(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"deviceType\":\"iPhone XR\",\"premiumStatus\":0,\"userRole\":\"user\",\"streamStatus\":0,\"anchor\":\"gift_shop\",\"os\":\"iOS 16.1\",\"context\":\"Watcher's Stream\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": `${userId}`,
        "role": "user",
        "event": "click_gifts_shop",
        "platform": `${platform}`,
        "appName": "plamfy",
        "eventTimeMs": 1689154055514,
        "idfv": "BAC5C2CB-82E8-4BF0-822E-507A6F4D4F10",
        "context": "Watcher's Stream"
      }
    ]
    return query
  }

  static pageviewUserInfo(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"context\":\"Splash\",\"deviceType\":\"iPhone XR\",\"userRole\":\"user\",\"os\":\"iOS 16.1\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "64d4a3ff7f6aa4abe8fae8e4",
        "role": "user",
        "event": "pageview_user_info",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1692099691170,
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174",
        "context": "Splash"
      }
    ]
    return query
  }

  static clickSave(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"deviceType\":\"iPhone XR\",\"context\":\"Splash\",\"os\":\"iOS 16.1\",\"userRole\":\"user\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "64d4a3ff7f6aa4abe8fae8e4",
        "role": "user",
        "event": "click_save",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1692099731949,
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174",
        "context": "Splash"
      }
    ]
    return query
  }

  static clickSkipProfileSetUp(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"deviceType\":\"iPhone XR\",\"context\":\"Splash\",\"os\":\"iOS 16.1\",\"userRole\":\"user\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "64d4a3ff7f6aa4abe8fae8e4",
        "role": "user",
        "event": "click_skip_profile_set_up",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1692099731949,
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174",
        "context": "Splash"
      }
    ]
    return query
  }

  static clickLogout(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"context\":\"Account management\",\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\",\"userRole\":\"user\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_logout",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689929032339,
        "idfv": "4FEDD250-27EE-491A-99CB-928F3A036FA4",
        "context": "Account management"
      }
    ]
    return query
  }

  static clickDeleteProfile(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"userRole\":\"user\",\"deviceType\":\"iPhone XR\",\"context\":\"Account management\",\"os\":\"iOS 16.1\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "64ae6b7e9ee3901d925a7951",
        "role": "user",
        "event": "click_delete_profile",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689929594542,
        "idfv": "4FEDD250-27EE-491A-99CB-928F3A036FA4",
        "context": "Account management"
      }
    ]
    return query
  }

  static showReasonDelete(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"os\":\"iOS 16.1\",\"userRole\":\"user\",\"context\":\"Account management\",\"deviceType\":\"iPhone XR\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "64ae6b7e9ee3901d925a7951",
        "role": "user",
        "event": "show_reason_delete",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689929598867,
        "idfv": "4FEDD250-27EE-491A-99CB-928F3A036FA4",
        "context": "Account management"
      }
    ]
    return query
  }

  static clickConfirmDeleteProfile(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"context\":\"Account management\",\"reason\":\"other\",\"deviceType\":\"iPhone XR\",\"userRole\":\"user\",\"os\":\"iOS 16.1\",\"button\":\"confirm\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "64ae6b7e9ee3901d925a7951",
        "role": "user",
        "event": "click_confirm_delete_profile",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689929645292,
        "idfv": "4FEDD250-27EE-491A-99CB-928F3A036FA4",
        "context": "Account management"
      }
    ]
    return query
  }

  static profileDeletedSuccess(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"deviceType\":\"iPhone XR\",\"context\":\"Account management\",\"userRole\":\"user\",\"os\":\"iOS 16.1\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "64ae6b7e9ee3901d925a7951",
        "role": "user",
        "event": "profile_deleted_success",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689929646270,
        "idfv": "4FEDD250-27EE-491A-99CB-928F3A036FA4",
        "context": "Account management"
      }
    ]
    return query
  }

  static showConfirmDelete(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"userRole\":\"user\",\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\",\"context\":\"Account management\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "64ae6b7e9ee3901d925a7951",
        "role": "user",
        "event": "show_confirm_delete",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689929594543,
        "idfv": "4FEDD250-27EE-491A-99CB-928F3A036FA4",
        "context": "Account management"
      }
    ]
    return query
  }

  static clickProfile(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"anchor\":\"navbar\",\"streamStatus\":0,\"context\":\"Profile\",\"receiverId\":\"5347\",\"userRole\":\"user\",\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\"}",
        "event": "click_profile",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Profile",
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "platform": "iOS",
        "brandId": 1,
        "receiverId": "5347",
        "eventTimeMs": 1689947311824,
        "role": "user",
        "appName": "plamfy",
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED"
      }
    ]
    return query
  }

  static pageviewEditProfile(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"deviceType\":\"iPhone XR\",\"userRole\":\"user\",\"os\":\"iOS 16.1\",\"context\":\"Profile\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "pageview_edit_profile",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689953252131,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED",
        "context": "Profile"
      }
    ]
    return query
  }

  static clickPhotoEdit(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"userRole\":\"user\",\"context\":\"Profile\",\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_photo_edit",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689953253231,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED",
        "context": "Profile"
      }
    ]
    return query
  }

  static clickSaveProfile(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"bio\":null,\"context\":\"Profile\",\"deviceType\":\"iPhone XR\",\"birthday\":null,\"email\":\"Der88den@gmail.com\",\"user\":\"Derick Denver 🥸🤓☺️\",\"photo\":0,\"gender\":\"male\",\"os\":\"iOS 16.1\",\"userRole\":\"user\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_save_profile",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689952904350,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED",
        "context": "Profile"
      }
    ]
    return query
  }

  static clickSettings(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"os\":\"iOS 16.1\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\",\"button\":\"about\",\"context\":\"Profile\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_settings",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689953043239,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED",
        "context": "Profile"
      }
    ]
    return query
  }

  static pageviewSettings(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"userRole\":\"user\",\"os\":\"iOS 16.1\",\"context\":\"Profile\",\"deviceType\":\"iPhone XR\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "pageview_settings",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689954279840,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED",
        "context": "Profile"
      }
    ]
    return query
  }

  static clickFollowers(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"userRole\":\"user\",\"context\":\"Profile\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_followers",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689953603132,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED",
        "context": "Profile"
      }
    ]
    return query
  }

  static pageviewFollowers(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"userRole\":\"user\",\"context\":\"My Followers\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"type\":1}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "pageview_followers",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689953605276,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED",
        "context": "My Followers"
      }
    ]
    return query
  }

  static clickMyFollowings(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"deviceType\":\"iPhone XR\",\"userRole\":\"user\",\"os\":\"iOS 16.1\",\"context\":\"Profile\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_my_followings",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689954051299,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED",
        "context": "Profile"
      }
    ]
    return query
  }

  static pageviewMyFollowings(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"state\":\"1\",\"os\":\"iOS 16.1\",\"context\":\"My Followings\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "pageview_my_followings",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689954052130,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED",
        "context": "My Followings"
      }
    ]
    return query
  }

  static clickRefferalProgram(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\",\"userRole\":\"user\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_refferal_program",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689953597972,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED"
      }
    ]
    return query
  }

  static pageviewReferralProgram(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"userRole\":\"user\",\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "pageview_referral_program",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689953598036,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED"
      }
    ]
    return query
  }

  static clickRedeemCash(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"userRole\":\"user\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"context\":\"Profile\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_redeem_cash",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689953585060,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED",
        "context": "Profile"
      }
    ]
    return query
  }

  static pageviewTransactionsHistory(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"anchor\":\"redeem_cash\",\"userRole\":\"user\",\"os\":\"iOS 16.1\",\"context\":\"Profile\",\"deviceType\":\"iPhone XR\",\"type\":1}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "pageview_transactions_history",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689954229337,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED",
        "context": "Profile"
      }
    ]
    return query
  }

  static clickTopGifters(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"deviceType\":\"iPhone XR\",\"userRole\":\"user\",\"os\":\"iOS 16.1\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_top_gifters",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689954235306,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED"
      }
    ]
    return query
  }

  static pageviewTopGifters(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"context\":\"Streamer's Stream\",\"os\":\"iOS 16.1\",\"userRole\":\"user\",\"type\":\"0\",\"deviceType\":\"iPhone XR\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "pageview_top_gifters",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689954236167,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static clickMyVipStatus(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"userRole\":\"user\",\"context\":\"Profile\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_my_vip_status",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689954670660,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED",
        "context": "Profile"
      }
    ]
    return query
  }

  static pageviewMyVipStatus(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"userRole\":\"user\",\"context\":\"Profile\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "pageview_my_vip_status",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689954670705,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED",
        "context": "Profile"
      }
    ]
    return query
  }

  static showGiftReceived(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"premiumStatus\":0,\"giftId\":\"64ba86415a559609e7b72ec2\",\"deviceType\":\"iPhone XR\",\"streamStatus\":0,\"os\":\"iOS 16.1\",\"context\":\"Streamer's Stream\",\"isfree\":\"false\",\"streamId\":\"64ba863328f16b0019e08215\",\"receiverId\":\"64b5349252add82001513a15\",\"userRole\":\"user\"}",
        "event": "show_gift_received",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Streamer's Stream",
        "userId": "63ff390d9c3118d3d2eca849",
        "platform": "iOS",
        "brandId": 1,
        "receiverId": "64b5349252add82001513a15",
        "eventTimeMs": 1689945665490,
        "role": "user",
        "appName": "plamfy",
        "idfv": "59EF82CE-C901-41C6-9795-8C0C8394D72A"
      }
    ]
    return query
  }

  static clickGiftsShop(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"userRole\":\"user\",\"anchor\":\"chat\",\"os\":\"iOS 16.1\",\"context\":\"Chat\",\"deviceType\":\"iPhone XR\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_gifts_shop",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689946934191,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED",
        "context": "Chat"
      }
    ]
    return query
  }

  static showGiftsShop(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"userRole\":\"user\",\"coinBalance\":526,\"deviceType\":\"iPhone XR\",\"streamStatus\":0,\"premiumStatus\":0,\"anchor\":\"personal_chat\",\"os\":\"iOS 16.1\",\"context\":\"Chat\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "show_gifts_shop",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689946934261,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED",
        "context": "Chat"
      }
    ]
    return query
  }

  static clickStartStream(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"userRole\":\"user\",\"context\":\"All streams\",\"anchor\":\"all_streams\",\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_start_stream",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689947458424,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED",
        "context": "All streams"
      }
    ]
    return query
  }

  static clickStream(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"context\":\"All streams\",\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\",\"receiverId\":\"14196\",\"userRole\":\"user\"}",
        "event": "click_stream",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "All streams",
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "platform": "iOS",
        "brandId": 1,
        "receiverId": "14196",
        "eventTimeMs": 1689947819889,
        "role": "user",
        "appName": "plamfy",
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED"
      }
    ]
    return query
  }

  static clickCoinsShop(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"context\":\"Coins Shop\",\"referrer\":\"refill_coins\",\"shopType\":\"default\",\"deviceType\":\"iPhone XR\",\"coinBalance\":526,\"userRole\":\"user\",\"os\":\"iOS 16.1\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_coins_shop",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689948010774,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED",
        "context": "Coins Shop"
      }
    ]
    return query
  }

  static pageviewСoinsShop(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"userRole\":\"user\",\"context\":\"Coins Shop\",\"coinBalance\":526,\"shopType\":\"default\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "pageview_coins_shop",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689948010799,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED",
        "context": "Coins Shop"
      }
    ]
    return query
  }

  static pageviewFollowings(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"os\":\"iOS 16.1\",\"userRole\":\"user\",\"cs\":true,\"deviceType\":\"iPhone XR\",\"followings\":0,\"ps\":\"1\",\"state\":\"empty\",\"context\":\"Followings\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "pageview_followings",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689948989367,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED",
        "context": "Followings"
      }
    ]
    return query
  }

  static clickFollowings(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"os\":\"iOS 16.1\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\",\"context\":\"Followings\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_followings",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689948998786,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED",
        "context": "Followings"
      }
    ]
    return query
  }

  static pageviewAllStreams(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"ps\":\"1\",\"context\":\"All streams\",\"deviceType\":\"iPhone XR\",\"cs\":true,\"coinBalance\":\"526\",\"os\":\"iOS 16.1\",\"userRole\":\"user\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "pageview_all_streams",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689949302854,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED",
        "context": "All streams"
      }
    ]
    return query
  }

  static clickLeaderboard(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\",\"context\":\"All streams\",\"userRole\":\"user\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_leaderboard",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689949320954,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED",
        "context": "All streams"
      }
    ]
    return query
  }

  static clickCloseShop(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"role\":\"user\",\"shopType\":\"default\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\",\"context\":\"Chat\",\"referrer\":\"gift_shop_stream\",\"os\":\"iOS 16.1\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_close_shop",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689949647190,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED",
        "context": "Chat"
      }
    ]
    return query
  }

  static pageviewNoInternet(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"os\":\"iOS 16.1\",\"context\":\"No internet\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "pageview_no_internet",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1689949725210,
        "idfv": "054DAF5A-9623-4EA1-91C7-268995BF94ED",
        "context": "No internet"
      }
    ]
    return query
  }

  static showStartPremiumGifts(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"streamStatus\":0,\"receiverId\":\"5347\",\"context\":\"Start Stream\",\"deviceType\":\"iPhone XR\",\"userRole\":\"user\",\"os\":\"iOS 16.1\",\"premiumStatus\":1}",
        "event": "show_start_premium_gifts",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Start Stream",
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "platform": "iOS",
        "brandId": 1,
        "receiverId": "5347",
        "eventTimeMs": 1691581121953,
        "role": "user",
        "appName": "plamfy",
        "idfv": "38592022-4545-4C79-A405-CE1859D16245"
      }
    ]
    return query
  }

  static clickStartPremiumGifts(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"receiverId\":\"5347\",\"context\":\"Start Stream\",\"button\":\"start\",\"gift_id\":\"614c4d1574faac3e988b2c79\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\"}",
        "event": "click_start_premium_gifts",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Start Stream",
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "platform": "iOS",
        "brandId": 1,
        "receiverId": "5347",
        "eventTimeMs": 1691581125860,
        "role": "user",
        "appName": "plamfy",
        "idfv": "38592022-4545-4C79-A405-CE1859D16245"
      }
    ]
    return query
  }

  static showInviteTopGifters(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"type\":\"room\",\"userRole\":\"user\",\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\",\"context\":\"Streamer's Stream\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "show_invite_top_gifters",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691583933418,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static clickInviteTopGifters(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"os\":\"iOS 16.1\",\"context\":\"Streamer's Stream\",\"streamId\":\"64d37ac68ac717f51edccd88\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\",\"type\":\"start_premium\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_invite_top_gifters",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691581142763,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static showInvitesSent(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"deviceType\":\"iPhone XR\",\"type\":\"start_premium\",\"streamId\":\"64d37ac68ac717f51edccd88\",\"os\":\"iOS 16.1\",\"context\":\"Streamer's Stream\",\"userRole\":\"user\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "show_invites_sent",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691581143598,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static showPopupEndStream(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"userRole\":\"user\",\"context\":\"Streamer's Stream\",\"deviceType\":\"iPhone XR\",\"verify_identity\":0,\"type\":\"end_stream\",\"os\":\"iOS 16.1\",\"reason\":\"streamerUnder18\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "show_popup_end_stream",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691584465297,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static showPopupEndPremium(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"os\":\"iOS 16.1\",\"streamId\":\"64d37ac68ac717f51edccd88\",\"context\":\"Streamer's Stream\",\"deviceType\":\"iPhone XR\",\"type\":\"5_min\",\"userRole\":\"user\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "show_popup_end_premium",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691581147540,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static clickCloseStream(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"streamStatus\":0,\"os\":\"iOS 16.1\",\"userRole\":\"user\",\"receiverId\":\"5347\",\"context\":\"Streamer's Stream\",\"premiumStatus\":1,\"deviceType\":\"iPhone XR\"}",
        "event": "click_close_stream",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Streamer's Stream",
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "platform": "iOS",
        "brandId": 1,
        "receiverId": "5347",
        "eventTimeMs": 1691581147511,
        "role": "user",
        "appName": "plamfy",
        "idfv": "38592022-4545-4C79-A405-CE1859D16245"
      }
    ]
    return query
  }

  static clickPreviewStream(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"userRole\":\"user\",\"os\":\"iOS 16.1\",\"context\":\"Start Stream\",\"receiverId\":\"5347\",\"deviceType\":\"iPhone XR\"}",
        "event": "click_preview_stream",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Start Stream",
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "platform": "iOS",
        "brandId": 1,
        "receiverId": "5347",
        "eventTimeMs": 1691582199027,
        "role": "user",
        "appName": "plamfy",
        "idfv": "38592022-4545-4C79-A405-CE1859D16245"
      }
    ]
    return query
  }

  static pageviewPreviewStream(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"os\":\"iOS 16.1\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\",\"context\":\"Start Stream\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "pageview_preview_stream",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691582196834,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "context": "Start Stream"
      }
    ]
    return query
  }

  static pageviewGoLive(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"context\":\"Start Stream\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"premiumStatus\":1,\"userRole\":\"user\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "pageview_go_live",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691582199029,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "context": "Start Stream"
      }
    ]
    return query
  }

  static clickGoLive(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"context\":\"Start Stream\",\"button\":\"public\",\"title_status\":\"1\",\"title\":\"Picked for you…fuck \",\"userRole\":\"user\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_go_live",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691582252017,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "context": "Start Stream"
      }
    ]
    return query
  }

  static showInappropriateTitle(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"deviceType\":\"iPhone XR\",\"userRole\":\"user\",\"context\":\"Start Stream\",\"os\":\"iOS 16.1\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "show_inappropriate_title",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691582196822,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "context": "Start Stream"
      }
    ]
    return query
  }

  static showSetPhoto(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"os\":\"iOS 16.1\",\"context\":\"Start Stream\",\"deviceType\":\"iPhone XR\",\"userRole\":\"user\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "show_set_photo",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691582199031,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "context": "Start Stream"
      }
    ]
    return query
  }

  static clickSetPhoto(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\",\"userRole\":\"user\",\"context\":\"Start Stream\",\"button\":\"edit\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_set_photo",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691582202642,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "context": "Start Stream"
      }
    ]
    return query
  }

  static startBeautyFilterDownload(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"userRole\":\"user\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "start_beauty_filter_download",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691583230883,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245"
      }
    ]
    return query
  }

  static beautyFilterDownloadSuccess(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\",\"duration_of_download\":3.3629429340362549,\"userRole\":\"user\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "beauty_filter_download_success",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691583234245,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245"
      }
    ]
    return query
  }

  static beautyFilterDownloadFailed(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\",\"duration_of_download\":3.3629429340362549,\"userRole\":\"user\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "beauty_filter_download_failed",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691583234245,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245"
      }
    ]
    return query
  }

  static newStreamStarted(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"deviceType\":\"iPhone XR\",\"context\":\"Streamer's Stream\",\"start_action\":\"public\",\"os\":\"iOS 16.1\",\"userRole\":\"user\",\"streamId\":\"64d3830723e7d54b8523194d\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "new_stream_started",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691583240060,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static clickEndStream(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"userRole\":\"user\",\"context\":\"Streamer's Stream\",\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\",\"streamStatus\":1,\"premiumStatus\":1}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_end_stream",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691583243759,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static clickPauseStream(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"context\":\"Streamer's Stream\",\"premiumStatus\":0,\"streamStatus\":0,\"os\":\"iOS 16.1\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\",\"action\":\"pause\",\"streamId\":\"64d385ab80cd91cda0139732\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_pause_stream",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691583921668,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static streamShared(userId: string, platform: string) {
    const query = [
      {
        "eventTimeMs": 1.692108004107E12,
        "idfv": "f1db37ee994aa1a1",
        "deviceId": "f1db37ee994aa1a1",
        "event": "stream_shared",
        "params": "{\"context\":\"Streamer's Stream\",\"streamId\":\"64db84ddaa1d11e51bb5ef88\",\"type\":\"copy_link\"}",
        "platform": "android",
        "appName": "plamfy",
        "context": "Streamer's Stream",
        "brandId": 1.0,
        "role": "user",
        "osVersion": "12",
        "deviceType": "Xiaomi M2003J15SC",
        "userId": "646dfefe4948f19596a0a27a"
      }
    ]
    return query
  }

  static clickChooseSticker(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"premiumStatus\":0,\"userRole\":\"user\",\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\",\"streamId\":\"64d387889f83cd781ba9d87c\",\"streamStatus\":0,\"coins\":\"7\",\"context\":\"Streamer's Stream\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_choose_sticker",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691584442357,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static showAddStickerText(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"os\":\"iOS 16.1\",\"streamStatus\":0,\"premiumStatus\":0,\"context\":\"Streamer's Stream\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\",\"streamId\":\"64d387889f83cd781ba9d87c\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "show_add_sticker_text",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691584442358,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static clickAddStickerText(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"streamId\":\"64d387889f83cd781ba9d87c\",\"context\":\"Streamer's Stream\",\"userRole\":\"user\",\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\",\"premiumStatus\":0,\"streamStatus\":0}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_add_sticker_text",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691584444272,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static showInappropriateStickerText(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"streamId\":\"64d387889f83cd781ba9d87c\",\"deviceType\":\"iPhone XR\",\"streamStatus\":0,\"userRole\":\"user\",\"premiumStatus\":0,\"os\":\"iOS 16.1\",\"context\":\"Streamer's Stream\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "show_inappropriate_sticker_text",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691584430739,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static showAddSticker(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"premiumStatus\":0,\"context\":\"Streamer's Stream\",\"streamId\":\"64d387889f83cd781ba9d87c\",\"userRole\":\"user\",\"streamStatus\":0,\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "show_add_sticker",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691584441676,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static showStickerAdded(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"userRole\":\"user\",\"streamStatus\":1,\"context\":\"Streamer's Stream\",\"premiumStatus\":1,\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\",\"coins\":\"7\",\"giftId\":\"614d9a5f785de79b84c6a2ca\",\"streamId\":\"64d387889f83cd781ba9d87c\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "show_sticker_added",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691584444950,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static clickChangeSticker(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"context\":\"Streamer's Stream\",\"userRole\":\"user\",\"streamId\":\"64d387889f83cd781ba9d87c\",\"os\":\"iOS 16.1\",\"premiumStatus\":1,\"deviceType\":\"iPhone XR\",\"streamStatus\":1}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_change_sticker",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691584437982,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static clickDeleteDesiredGift(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"coins\":\"69\",\"streamStatus\":1,\"premiumStatus\":1,\"userRole\":\"user\",\"context\":\"Streamer's Stream\",\"streamId\":\"64d387889f83cd781ba9d87c\",\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_delete_desired_gift",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691584439117,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static clickBeautyFilter(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"deviceType\":\"iPhone XR\",\"userRole\":\"user\",\"os\":\"iOS 16.1\",\"streamId\":\"64d38d5c3b3c63f5be695242\",\"stream_type\":\"public\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_beauty_filter",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691585940837,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245"
      }
    ]
    return query
  }

  static showEditBeautyFilter(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"os\":\"iOS 16.1\",\"streamId\":\"64d38d5c3b3c63f5be695242\",\"deviceType\":\"iPhone XR\",\"userRole\":\"user\",\"stream_type\":\"public\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "show_edit_beauty_filter",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691585892344,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245"
      }
    ]
    return query
  }

  static showBeautyFilterAdded(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"stream_type\":\"public\",\"userRole\":\"user\",\"os\":\"iOS 16.1\",\"streamId\":\"64d38d5c3b3c63f5be695242\",\"deviceType\":\"iPhone XR\",\"added_filters\":\"Whiten, Fine Smooth\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "show_beauty_filter_added",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691585933388,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245"
      }
    ]
    return query
  }

  static beautyFilterError(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"os\":\"iOS 16.1\",\"streamId\":\"64d38d5c3b3c63f5be695242\",\"deviceType\":\"iPhone XR\",\"userRole\":\"user\",\"stream_type\":\"public\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "beauty_filter_error",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691585892344,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245"
      }
    ]
    return query
  }

  static showEndStream(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"userRole\":\"user\",\"streamStatus\":1,\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\",\"premiumStatus\":1,\"context\":\"Streamer's Stream\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "show_end_stream",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691583243758,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static beautyFeedback(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"os\":\"iOS 16.1\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\",\"feedback\":\"Super \",\"rate\":5}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "beauty_feedback",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691586038388,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245"
      }
    ]
    return query
  }

  static clickEndConfirmation(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"streamStatus\":1,\"button\":\"end\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"userRole\":\"user\",\"premiumStatus\":1,\"context\":\"Streamer's Stream\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "click_end_confirmation",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691583244765,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static showBroadcastEnded(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"os\":\"iOS 16.1\",\"context\":\"Streamer's Stream\",\"duration\":0,\"streamId\":\"64d3830723e7d54b8523194d\",\"followers\":0,\"deviceType\":\"iPhone XR\",\"duration_text\":\"00:00:04\",\"userRole\":\"user\",\"premiumStatus\":0,\"viewers\":0,\"diamonds\":0,\"leaderboard\":1}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "635fdb9c0d9fac6ccfc1c838",
        "role": "user",
        "event": "show_broadcast_ended",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1691583247535,
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static clickChangeStreamType(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"deviceType\":\"iPhone XR\",\"streamId\":\"64db87d66f4cc66801dcb3f8\",\"userRole\":\"user\",\"anchor\":\"public\",\"os\":\"iOS 16.1\",\"context\":\"Streamer's Stream\",\"type\":\"battle\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "63ff390d9c3118d3d2eca849",
        "role": "user",
        "event": "click_change_stream_type",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1692108780376,
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static showInviteStreamer(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"type\":\"battle\",\"deviceType\":\"iPhone XR\",\"streamId\":\"64db87d66f4cc66801dcb3f8\",\"os\":\"iOS 16.1\",\"state\":\"not_empty\",\"userRole\":\"user\",\"context\":\"Streamer's Stream\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "63ff390d9c3118d3d2eca849",
        "role": "user",
        "event": "show_invite_streamer",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1692108780946,
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static showStreamerInvited(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"context\":\"Streamer's Stream\",\"type\":\"battle\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"streamId\":\"64db87e6aa1d11e51bb5ef91\",\"userRole\":\"user\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "63ff390d9c3118d3d2eca849",
        "role": "user",
        "event": "show_streamer_invited",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1692108784860,
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static clickInviteStreamerAnswer(userId: string, platform: string) {
    const query = [
      {
        "eventTimeMs": 1.692108789726E12,
        "idfv": "f1db37ee994aa1a1",
        "deviceId": "f1db37ee994aa1a1",
        "event": "click_invite_streamer_answer",
        "params": "{\"context\":\"Streamer's Stream\",\"type\":\"battle\",\"button\":\"cancel\",\"streamId\":\"64db87e6aa1d11e51bb5ef91\"}",
        "platform": "android",
        "appName": "plamfy",
        "context": "Streamer's Stream",
        "brandId": 1.0,
        "role": "user",
        "osVersion": "12",
        "deviceType": "Xiaomi M2003J15SC",
        "receiverId": "63ff390d9c3118d3d2eca849",
        "userId": "646dfefe4948f19596a0a27a"
      }
    ]
    return query
  }

  static showInviteStreamerRequest(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"context\":\"Streamer's Stream\",\"streamId\":\"64db897daa1d11e51bb5ef93\",\"type\":\"battle\",\"userRole\":\"user\",\"receiverId\":\"7455\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\"}",
        "event": "show_invite_streamer_request",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Streamer's Stream",
        "userId": "63ff390d9c3118d3d2eca849",
        "platform": "iOS",
        "brandId": 1,
        "receiverId": "7455",
        "eventTimeMs": 1692109185509,
        "role": "user",
        "appName": "plamfy",
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174"
      }
    ]
    return query
  }

  static showInviteStreamerAccepted(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"type\":\"battle\",\"deviceType\":\"iPhone XR\",\"receiverId\":\"7455\",\"context\":\"Streamer's Stream\",\"streamId\":\"64db87e6aa1d11e51bb5ef91\",\"os\":\"iOS 16.1\",\"userRole\":\"user\"}",
        "event": "show_invite_streamer_accepted",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Streamer's Stream",
        "userId": "63ff390d9c3118d3d2eca849",
        "platform": "iOS",
        "brandId": 1,
        "receiverId": "7455",
        "eventTimeMs": 1692108789713,
        "role": "user",
        "appName": "plamfy",
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174"
      }
    ]
    return query
  }

  static showInviteStreamerRejected(userId: string, platform: string) {
    const query = [
      {
        "eventTimeMs": 1.69210918923E12,
        "idfv": "f1db37ee994aa1a1",
        "deviceId": "f1db37ee994aa1a1",
        "event": "show_invite_streamer_rejected",
        "params": "{\"context\":\"Streamer's Stream\",\"type\":\"battle\",\"streamId\":\"64db89766f4cc66801dcb3fa\"}",
        "platform": "android",
        "appName": "plamfy",
        "context": "Streamer's Stream",
        "brandId": 1.0,
        "role": "user",
        "osVersion": "12",
        "deviceType": "Xiaomi M2003J15SC",
        "receiverId": "63ff390d9c3118d3d2eca849",
        "userId": "646dfefe4948f19596a0a27a"
      }
    ]
    return query
  }

  static showBattleResults(userId: string, platform: string) {
    const query = [
      {
        "eventTimeMs": 1.69210938651E12,
        "idfv": "f1db37ee994aa1a1",
        "deviceId": "f1db37ee994aa1a1",
        "event": "show_battle_results",
        "params": "{\"context\":\"Streamer's Stream\",\"results\":\"draw\",\"guestStreamId\":\"64db897daa1d11e51bb5ef93\",\"streamId\":\"64db89766f4cc66801dcb3fa\"}",
        "platform": "android",
        "appName": "plamfy",
        "context": "Streamer's Stream",
        "brandId": 1.0,
        "role": "user",
        "osVersion": "12",
        "deviceType": "Xiaomi M2003J15SC",
        "receiverId": "646dfefe4948f19596a0a27a",
        "userId": "646dfefe4948f19596a0a27a"
      }
    ]
    return query
  }

  static swipeTutorial(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"premiumStatus\":0,\"deviceType\":\"iPhone XR\",\"userRole\":\"user\",\"hideUI\":\"true\",\"context\":\"Watcher's Stream\",\"streamId\":\"64db67f96f4cc66801dcb3c7\",\"os\":\"iOS 16.1\",\"streamStatus\":1}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "64d4a3ff7f6aa4abe8fae8e4",
        "role": "user",
        "event": "swipe_tutorial",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1692100665394,
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174",
        "context": "Watcher's Stream"
      }
    ]
    return query
  }

  static swipeUi(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"premiumStatus\":0,\"deviceType\":\"iPhone XR\",\"userRole\":\"user\",\"hideUI\":\"true\",\"context\":\"Watcher's Stream\",\"streamId\":\"64db67f96f4cc66801dcb3c7\",\"os\":\"iOS 16.1\",\"streamStatus\":1}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "64d4a3ff7f6aa4abe8fae8e4",
        "role": "user",
        "event": "swipe_ui",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1692100665394,
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174",
        "context": "Watcher's Stream"
      }
    ]
    return query
  }

  static streamSwipe(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"receiverId\":\"6509\",\"userRole\":\"user\",\"context\":\"Watcher's Stream\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\"}",
        "event": "stream_swipe",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Watcher's Stream",
        "userId": "63ff390d9c3118d3d2eca849",
        "platform": "iOS",
        "brandId": 1,
        "receiverId": "6509",
        "eventTimeMs": 1692110566364,
        "role": "user",
        "appName": "plamfy",
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174"
      }
    ]
    return query
  }

  static showStreamPaused(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"context\":\"Watcher's Stream\",\"premiumStatus\":0,\"streamStatus\":1,\"userRole\":\"user\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"userId\":\"7455\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "64d4a3ff7f6aa4abe8fae8e4",
        "role": "user",
        "event": "show_stream_paused",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1692100643827,
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174",
        "context": "Watcher's Stream"
      }
    ]
    return query
  }

  static showPopupFollow(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\",\"userRole\":\"user\",\"context\":\"Streamer's Stream\",\"streamId\":\"64db67f96f4cc66801dcb3c7\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "64d4a3ff7f6aa4abe8fae8e4",
        "role": "user",
        "event": "show_popup_follow",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1692100652964,
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static clickMessage(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"streamStatus\":0,\"context\":\"Watcher's Stream\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\",\"premiumStatus\":0,\"receiverId\":\"7455\",\"os\":\"iOS 16.1\"}",
        "event": "click_message",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Watcher's Stream",
        "userId": "64d4a3ff7f6aa4abe8fae8e4",
        "platform": "iOS",
        "brandId": 1,
        "receiverId": "7455",
        "eventTimeMs": 1692107327733,
        "role": "user",
        "appName": "plamfy",
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174"
      }
    ]
    return query
  }

  static clickShare(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"os\":\"iOS 16.1\",\"context\":\"Watcher's Stream\",\"userRole\":\"user\",\"deviceType\":\"iPhone XR\",\"premiumStatus\":0,\"receiverId\":\"7455\",\"streamStatus\":0}",
        "event": "click_share",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Watcher's Stream",
        "userId": "64d4a3ff7f6aa4abe8fae8e4",
        "platform": "iOS",
        "brandId": 1,
        "receiverId": "7455",
        "eventTimeMs": 1692107333065,
        "role": "user",
        "appName": "plamfy",
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174"
      }
    ]
    return query
  }

  static showProfilePreview(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"userRole\":\"user\",\"premiumStatus\":0,\"context\":\"Watcher's Stream\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"anchor\":\"stream\",\"streamStatus\":1,\"receiverId\":\"7455\"}",
        "event": "show_profile_preview",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Watcher's Stream",
        "userId": "64d4a3ff7f6aa4abe8fae8e4",
        "platform": "iOS",
        "brandId": 1,
        "receiverId": "7455",
        "eventTimeMs": 1692100687716,
        "role": "user",
        "appName": "plamfy",
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174"
      }
    ]
    return query
  }

  static clickBlock(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"receiverId\":\"7455\",\"anchor\":\"profile_preview\",\"deviceType\":\"iPhone XR\",\"context\":\"Watcher's Stream\",\"streamStatus\":1,\"userRole\":\"user\",\"os\":\"iOS 16.1\",\"premiumStatus\":0}",
        "event": "click_block",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Watcher's Stream",
        "userId": "64d4a3ff7f6aa4abe8fae8e4",
        "platform": "iOS",
        "brandId": 1,
        "receiverId": "7455",
        "eventTimeMs": 1692100690934,
        "role": "user",
        "appName": "plamfy",
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174"
      }
    ]
    return query
  }

  static userBlocked(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"receiverId\":\"7455\",\"anchor\":\"profile_preview\",\"context\":\"Watcher's Stream\",\"deviceType\":\"iPhone XR\",\"userRole\":\"user\",\"os\":\"iOS 16.1\"}",
        "event": "user_blocked",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Watcher's Stream",
        "userId": "64d4a3ff7f6aa4abe8fae8e4",
        "platform": "iOS",
        "brandId": 1,
        "receiverId": "7455",
        "eventTimeMs": 1692100691594,
        "role": "user",
        "appName": "plamfy",
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174"
      }
    ]
    return query
  }

  static clickReport(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"deviceType\":\"iPhone XR\",\"streamStatus\":1,\"context\":\"Watcher's Stream\",\"receiverId\":\"7455\",\"anchor\":\"profile_preview\",\"os\":\"iOS 16.1\",\"premiumStatus\":0,\"userRole\":\"user\"}",
        "event": "click_report",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Watcher's Stream",
        "userId": "64d4a3ff7f6aa4abe8fae8e4",
        "platform": "iOS",
        "brandId": 1,
        "receiverId": "7455",
        "eventTimeMs": 1692100676124,
        "role": "user",
        "appName": "plamfy",
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174"
      }
    ]
    return query
  }

  static reportSend(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"context\":\"Watcher's Stream\",\"userRole\":\"user\",\"reason\":\"displayOfCriminalActivitiesOrWeapon\",\"receiverId\":\"646dfefe4948f19596a0a27a\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\"}",
        "event": "report_send",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Watcher's Stream",
        "userId": "64d4a3ff7f6aa4abe8fae8e4",
        "platform": "iOS",
        "brandId": 1,
        "receiverId": "646dfefe4948f19596a0a27a",
        "eventTimeMs": 1692100677728,
        "role": "user",
        "appName": "plamfy",
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174"
      }
    ]
    return query
  }

  static showPushInviteToPremium(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"userRole\":\"user\",\"streamId\":\"64db87226f4cc66801dcb3f4\",\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\",\"context\":\"Streamer's Stream\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "63ff390d9c3118d3d2eca849",
        "role": "user",
        "event": "show_push_invite_to_premium",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1692108610157,
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static showPushInviteToRoom(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"streamId\":\"64db874faa1d11e51bb5ef8f\",\"deviceType\":\"iPhone XR\",\"context\":\"Streamer's Stream\",\"userRole\":\"user\",\"os\":\"iOS 16.1\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "63ff390d9c3118d3d2eca849",
        "role": "user",
        "event": "show_push_invite_to_room",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1692108624082,
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174",
        "context": "Streamer's Stream"
      }
    ]
    return query
  }

  static clickTranslate(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"receiverId\":\"6509\",\"context\":\"Streamer's Stream\",\"premiumStatus\":0,\"streamStatus\":0,\"userRole\":\"user\",\"streamId\":\"64db8ca96f4cc66801dcb3fd\",\"type\":\"user_message\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\"}",
        "event": "click_translate",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Streamer's Stream",
        "userId": "63ff390d9c3118d3d2eca849",
        "platform": "iOS",
        "brandId": 1,
        "receiverId": "6509",
        "eventTimeMs": 1692110005182,
        "role": "user",
        "appName": "plamfy",
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174"
      }
    ]
    return query
  }

  static giftShopSwipe(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"userRole\":\"user\",\"context\":\"Watcher's Stream\",\"receiverId\":\"27719\",\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\"}",
        "event": "gift_shop_swipe",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Watcher's Stream",
        "userId": "63ff390d9c3118d3d2eca849",
        "platform": "iOS",
        "brandId": 1,
        "receiverId": "27719",
        "eventTimeMs": 1692110352384,
        "role": "user",
        "appName": "plamfy",
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174"
      }
    ]
    return query
  }

  static clickChatMessages(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"deviceType\":\"iPhone XR\",\"receiverId\":\"5735\",\"button\":\"name\",\"os\":\"iOS 16.1\",\"context\":\"Streamer's Stream\",\"userRole\":\"user\"}",
        "event": "click_chat_messages",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "context": "Streamer's Stream",
        "userId": "63ff390d9c3118d3d2eca849",
        "platform": "iOS",
        "brandId": 1,
        "receiverId": "5735",
        "eventTimeMs": 1692110034711,
        "role": "user",
        "appName": "plamfy",
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174"
      }
    ]
    return query
  }

  static pageviewStreamEnded(userId: string, platform: string) {
    const query = [
      {
        "params": "{\"userRole\":\"user\",\"deviceType\":\"iPhone XR\",\"context\":\"Watcher's Stream\",\"os\":\"iOS 16.1\"}",
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "brandId": 1,
        "userId": "64d4a3ff7f6aa4abe8fae8e4",
        "role": "user",
        "event": "pageview_stream_ended",
        "platform": "iOS",
        "appName": "plamfy",
        "eventTimeMs": 1692100652963,
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174",
        "context": "Watcher's Stream"
      }
    ]
    return query
  }
}