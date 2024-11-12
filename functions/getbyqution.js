export async function onRequest(context) {
    const {
       request,
       env,
       params,
       waitUntil,
       next,
       data,
   } = context;

request.headers.set("Host", "mp-ali.smartmidea.net");
request.headers.set("Connection", "keep-alive");
request.headers.set("accessToken", "T1ks1awnk000nywa");
request.headers.set("regionSign", "6f5aa8d966e00f46f513569cd41a3ace");
request.headers.set("random", "1713710078000");
request.headers.set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309092b) XWEB/9105");
request.headers.set("xweb_xhr", "1");
request.headers.set("iotAppId", "901");
request.headers.set("secretVersion", "1.0");
request.headers.set("sign", "d4cbae57b5bebab4025e9f1aea46189143296f9d4ffb26d43aca99c9a3077de9");
request.headers.set("version", "8.5");
request.headers.set("Accept", "*/*");
request.headers.set("Sec-Fetch-Site", "cross-site");
request.headers.set("Sec-Fetch-Mode", "cors");
request.headers.set("Sec-Fetch-Dest", "empty");
request.headers.set("Referer", "https://servicewechat.com/wxb12ff482a3185e46/228/page-frame.html");
request.headers.set("Accept-Language", "zh-CN,zh;q=0.9");
request.headers.set("Content-Type", "application/json");
request.headers.set("Cookie", "acw_tc=2f624a7b17137198326528264e7eda0b4aee62b3acbf83d40e644cadd2f969");


   // 非预检请求，则进行转发
   const response = await fetch("https://mp-ali.smartmidea.net/mas/v5/app/proxy?alias=/mjl/v1/device/lua/control", {
  method: 'POST',
  headers: request.headers,
  body: JSON.stringify({
  "reqId": "08d0731cfc17186ec523b8ee3cb97a86",
  "stamp": 1713710078000,
  "applianceCode": "210006723021912",
  "command": {
     "control": {
        "power": "on",
        "temperature": 25,
        "small_temperature": 0,
        "mode": "cool",
        "wind_speed": 102,
        "ptc": "off",
        "ptc_force": "off",
        "buzzer": "off",
        "wind_swing_lr": "off",
        "wind_swing_lr_under": "off",
        "wind_swing_ud": "off"
     },
     "status": {
        "screen_display_now": "on",
        "analysis_value": "power,mode,temperature,wind_speed,power_on_timer,smart_dry_value,power_off_timer,power_off_time_value,power_on_time_value,ptc,eco,dry,wind_swing_lr,wind_swing_lr_under,wind_swing_ud,kick_quilt,prevent_cold,small_temperature,purifier,dust_full_time,power_saving,fault_tag,indoor_temperature,comfort_power_save,fresh_filter_time_total,fresh_filter_time_use,fresh_filter_timeout",
        "wind_speed": 102,
        "small_temperature": 0,
        "dry": "off",
        "comfort_sleep": "off",
        "error_code": 0,
        "power_on_timer": "off",
        "prevent_cold": "off",
        "natural_wind": "off",
        "indoor_temperature": 24.1,
        "pmv": -3.5,
        "power_on_time_value": 0,
        "mode": "cool",
        "power_off_time_value": 0,
        "wind_swing_lr_under": "off",
        "wind_swing_ud": "off",
        "fresh_filter_timeout": 0,
        "eco": "off",
        "purifier": "off",
        "fault_tag": 0,
        "dust_full_time": 0,
        "ptc": "off",
        "power_saving": "off",
        "temperature": 25,
        "strong_wind": "off",
        "kick_quilt": "off",
        "fresh_filter_time_total": 0,
        "wind_swing_lr": "off",
        "power": "off",
        "power_off_timer": "off",
        "fresh_filter_time_use": 0,
        "comfort_power_save": "off",
        "version": 92
     }
  }
}),
  redirect: 'follow'
})

 // 设置允许跨域的域名
    return new Response( "good time"+request.data, {
           status: 200, // 空内容响应，表示已成功处理请求但无内容返回
           headers: {
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
               'Access-Control-Allow-Headers': '*', // 或者明确指定允许的请求头
           },
       });;
}