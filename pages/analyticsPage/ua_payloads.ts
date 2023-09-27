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
}