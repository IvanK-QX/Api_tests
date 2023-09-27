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

  static showJoinModal(userId: string, platform: string) {
    const query = [
      {
        "eventTimeMs": 1689150326000,
        "category": "All Streams",
        "guestUserId": `${userId}`,
        "deviceId": "25bb6193-29d5-4946-ba07-fa64c3ff05aa",
        "brandId": 1,
        "event": "show_join_modal",
        "params": "{\"anchor\":\"all_streams\",\"q\":\"874\"}",
        "platform": `${platform}`,
        "appName": "plamfy",
        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        "context": "All Streams"
      }
    ]
    return query
  }
  static firstOpen(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"context\":\"Splash\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"userRole\":\"guest\"}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": "iOS",
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "event": "first_open",
        "context": "Splash",
        "eventTimeMs": 1690374631680
      }
    ]
    return query
  }

  static showSplash(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"deviceType\":\"iPhone XR\",\"userRole\":\"guest\",\"os\":\"iOS 16.1\",\"context\":\"Splash\"}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": "iOS",
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "event": "show_splash",
        "context": "Splash",
        "eventTimeMs": 1690374631679
      }
    ]
    return query
  }

  static showTerms(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"context\":\"Splash\",\"userRole\":\"guest\"}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": "iOS",
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "event": "show_terms",
        "context": "Splash",
        "eventTimeMs": 1690374631680
      }
    ]
    return query
  }

  static showIdfa(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"context\":\"Splash\",\"userRole\":\"guest\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\"}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": "iOS",
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "event": "show_idfa",
        "guestUserId": "64b10e2cf02c0b9507ca828e",
        "eventTimeMs": 1690374652186,
        "context": "Splash"
      }
    ]
    return query
  }

  static clickIdfa(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"deviceType\":\"iPhone XR\",\"userRole\":\"guest\",\"os\":\"iOS 16.1\",\"button\":\"accept\",\"context\":\"Splash\"}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": "iOS",
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "event": "click_idfa",
        "guestUserId": "64b10e2cf02c0b9507ca828e",
        "eventTimeMs": 1690374652951,
        "context": "Splash"
      }
    ]
    return query
  }

  static showPush(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"context\":\"Splash\",\"userRole\":\"guest\"}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": "iOS",
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "event": "show_push",
        "guestUserId": "64b10e2cf02c0b9507ca828e",
        "eventTimeMs": 1690374651671,
        "context": "Splash"
      }
    ]
    return query
  }

  static clickPush(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"userRole\":\"guest\",\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\",\"context\":\"Splash\",\"button\":\"accept\"}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": "iOS",
        "idfv": "38592022-4545-4C79-A405-CE1859D16245",
        "event": "click_push",
        "guestUserId": "64b10e2cf02c0b9507ca828e",
        "eventTimeMs": 1690374651673,
        "context": "Splash"
      }
    ]
    return query
  }

  static showEnterNumber(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"os\":\"iOS 16.1\",\"anchor\":\"start_stream\",\"deviceType\":\"iPhone XR\",\"context\":\"Start Stream\",\"userRole\":\"guest\"}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": "iOS",
        "idfv": "AC58A09E-CD4A-4684-9D39-933DE1699AB6",
        "event": "show_enter_number",
        "guestUserId": "64b10e2cf02c0b9507ca828e",
        "eventTimeMs": 1690373823284,
        "context": "Start Stream"
      }
    ]
    return query
  }

  static clickConfirmNumber(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"anchor\":\"start_stream\",\"userRole\":\"guest\",\"context\":\"Start Stream\",\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\"}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": "iOS",
        "idfv": "AC58A09E-CD4A-4684-9D39-933DE1699AB6",
        "event": "click_confirm_number",
        "guestUserId": "64b10e2cf02c0b9507ca828e",
        "eventTimeMs": 1690373854492,
        "context": "Start Stream"
      }
    ]
    return query
  }

  static showVerify(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"anchor\":\"start_stream\",\"userRole\":\"guest\",\"context\":\"Start Stream\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\"}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": "iOS",
        "idfv": "AC58A09E-CD4A-4684-9D39-933DE1699AB6",
        "event": "show_verify",
        "guestUserId": "64b10e2cf02c0b9507ca828e",
        "eventTimeMs": 1690373853140,
        "context": "Start Stream"
      }
    ]
    return query
  }

  static showInvalidCode(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"userRole\":\"guest\",\"context\":\"Start Stream\",\"anchor\":\"start_stream\"}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": "iOS",
        "idfv": "AC58A09E-CD4A-4684-9D39-933DE1699AB6",
        "event": "show_invalid_code",
        "guestUserId": "64b10e2cf02c0b9507ca828e",
        "eventTimeMs": 1690374434932,
        "context": "Start Stream"
      }
    ]
    return query
  }

  static clickСonfirmСode(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"userRole\":\"guest\",\"context\":\"Start Stream\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"anchor\":\"start_stream\"}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": "iOS",
        "idfv": "AC58A09E-CD4A-4684-9D39-933DE1699AB6",
        "event": "click_confirm_code",
        "guestUserId": "64b10e2cf02c0b9507ca828e",
        "eventTimeMs": 1690373884106,
        "context": "Start Stream"
      }
    ]
    return query
  }


  static showCamAccess(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"context\":\"Start Stream\",\"userRole\":\"guest\",\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\"}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": "iOS",
        "idfv": "348A1B41-0C44-4A22-B7B1-FBD2B0DB6852",
        "event": "show_cam_access",
        "guestUserId": "64d4a3ff7f6aa4abe8fae8e4",
        "eventTimeMs": 1692091306364,
        "context": "Start Stream"
      }
    ]
    return query
  }


  static clickCamAccess(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"userRole\":\"guest\",\"context\":\"Start Stream\",\"button\":\"yes\",\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\"}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": "iOS",
        "idfv": "348A1B41-0C44-4A22-B7B1-FBD2B0DB6852",
        "event": "click_cam_access",
        "guestUserId": "64d4a3ff7f6aa4abe8fae8e4",
        "eventTimeMs": 1692091306938,
        "context": "Start Stream"
      }
    ]
    return query
  }

  static startBeautyFilterDownload(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"os\":\"iOS 16.1\",\"userRole\":\"guest\",\"deviceType\":\"iPhone XR\"}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": "iOS",
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174",
        "event": "start_beauty_filter_download",
        "guestUserId": "64d4a3ff7f6aa4abe8fae8e4",
        "eventTimeMs": 1692098520642
      }
    ]
    return query
  }

  static beautyFilterDownloadSuccess(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"os\":\"iOS 16.1\",\"duration_of_download\":3.9132609367370605,\"userRole\":\"guest\",\"deviceType\":\"iPhone XR\"}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": "iOS",
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174",
        "event": "beauty_filter_download_success",
        "guestUserId": "64d4a3ff7f6aa4abe8fae8e4",
        "eventTimeMs": 1692098524555
      }
    ]
    return query
  }

  static beautyFilterDownloadFailed(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"os\":\"iOS 16.1\",\"duration_of_download\":3.9132609367370605,\"userRole\":\"guest\",\"deviceType\":\"iPhone XR\"}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": "iOS",
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174",
        "event": "beauty_filter_download_failed",
        "guestUserId": "64d4a3ff7f6aa4abe8fae8e4",
        "eventTimeMs": 1692098524555
      }
    ]
    return query
  }

  static socketChannelsCountSubscription(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\",\"count\":\"4\",\"userRole\":\"guest\"}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": "iOS",
        "idfv": "432E12FC-6C3C-4E8E-8C78-88EC2E037174",
        "event": "socket_channels_count_subscription",
        "guestUserId": "64d4a3ff7f6aa4abe8fae8e4",
        "eventTimeMs": 1692098524156
      }
    ]
    return query
  }


  static logoutSuccess(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"userRole\":\"guest\",\"context\":\"Account management\",\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\"}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": "iOS",
        "idfv": "4FEDD250-27EE-491A-99CB-928F3A036FA4",
        "event": "logout_success",
        "guestUserId": "64b10e2cf02c0b9507ca828e",
        "eventTimeMs": 1689929034429,
        "context": "Account management"
      }
    ]
    return query
  }

  static showMicAccess(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"os\":\"iOS 16.1\",\"context\":\"Start Stream\",\"userRole\":\"guest\",\"deviceType\":\"iPhone XR\"}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": "iOS",
        "idfv": "348A1B41-0C44-4A22-B7B1-FBD2B0DB6852",
        "event": "show_mic_access",
        "guestUserId": "64d4a3ff7f6aa4abe8fae8e4",
        "eventTimeMs": 1692091306978,
        "context": "Start Stream"
      }
    ]
    return query
  }

  static clickMicAccess(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"userRole\":\"guest\",\"button\":\"while_using_app\",\"context\":\"Start Stream\"}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": "iOS",
        "idfv": "348A1B41-0C44-4A22-B7B1-FBD2B0DB6852",
        "event": "click_mic_access",
        "guestUserId": "64d4a3ff7f6aa4abe8fae8e4",
        "eventTimeMs": 1692091307986,
        "context": "Start Stream"
      }
    ]
    return query
  }

  static startGiftAnimationDownload(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\",\"userRole\":\"guest\"}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": "iOS",
        "idfv": "2C0AA165-1C89-42A3-AA19-7C93C898AD2C",
        "event": "start_gift_animation_download",
        "guestUserId": "64db85ae4c2c9d211684a756",
        "eventTimeMs": 1693913557118
      }
    ]
    return query
  }

  static giftAnimationDownloadSuccess(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"deviceType\":\"iPhone XR\",\"os\":\"iOS 16.1\",\"userRole\":\"guest\",\"duration_of_download\":14.789468050003052}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": "iOS",
        "idfv": "2C0AA165-1C89-42A3-AA19-7C93C898AD2C",
        "event": "gift_animation_download_success",
        "guestUserId": "64db85ae4c2c9d211684a756",
        "eventTimeMs": 1693913571902
      }
    ]
    return query
  }

  static mediaSourceSuccess(userId: string, platform: string) {
    const query = [
      {
        "deviceId": "6817C448-897A-45ED-A889-4C249D0C1BF9",
        "params": "{\"os\":\"iOS 16.1\",\"deviceType\":\"iPhone XR\",\"media_source\":\"Organic\",\"time_received\":9.3086020946502686,\"userRole\":\"guest\"}",
        "brandId": 1,
        "appName": "plamfy",
        "platform": "iOS",
        "idfv": "2C0AA165-1C89-42A3-AA19-7C93C898AD2C",
        "event": "media_source_success",
        "guestUserId": "64db85ae4c2c9d211684a756",
        "eventTimeMs": 1693913553031
      }
    ]
    return query

  }
}