export async function onRequest() {
 
 var myHeaders = new Headers();
myHeaders.append("Host", "mp-ali.smartmidea.net");
myHeaders.append("Connection", "keep-alive");
myHeaders.append("accessToken", "T1ks1awnk000nywa");
myHeaders.append("regionSign", "6f5aa8d966e00f46f513569cd41a3ace");
myHeaders.append("random", "1713710078000");
myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309092b) XWEB/9105");
myHeaders.append("xweb_xhr", "1");
myHeaders.append("iotAppId", "901");
myHeaders.append("secretVersion", "1.0");
myHeaders.append("sign", "d4cbae57b5bebab4025e9f1aea46189143296f9d4ffb26d43aca99c9a3077de9");
myHeaders.append("version", "8.5");
myHeaders.append("Accept", "*/*");
myHeaders.append("Sec-Fetch-Site", "cross-site");
myHeaders.append("Sec-Fetch-Mode", "cors");
myHeaders.append("Sec-Fetch-Dest", "empty");
myHeaders.append("Referer", "https://servicewechat.com/wxb12ff482a3185e46/228/page-frame.html");
myHeaders.append("Accept-Language", "zh-CN,zh;q=0.9");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "acw_tc=2f624a7b17137198326528264e7eda0b4aee62b3acbf83d40e644cadd2f969");

var raw = JSON.stringify({
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
});

var requestOptions = {
   method: 'POST',
   headers: myHeaders,
   body: raw,
   redirect: 'follow'
};

fetch("https://mp-ali.smartmidea.net/mas/v5/app/proxy?alias=/mjl/v1/device/lua/control", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));

}
