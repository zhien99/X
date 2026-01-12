/******************************
 
脚本名称:蜻蜓

*******************************
%¥
[rewrite_local]
^https?:\/\/api\.beedbank\.com\/proxy\/user\/my\/info.*? url script-response-body https://raw.githubusercontent.com/zhien99/X/refs/heads/main/qingting.js


[mitm]
hostname = api.beedbank.com
%¥
*******************************/
// mock_vip.js
let obj = {
  code: 0,
  msg: "success",
  data: {
    vipValid: true,
    svipValid: true,
    vipType: "svip",
    vipEndTime: "2099-12-31 23:59",
    svipEndTime: "2099-12-31 23:59"
  }
};

$done({ body: JSON.stringify(obj) });
