/******************************
 
脚本名称:蜻蜓

*******************************
%¥
[rewrite_local]
^https?:\/\/api\.beedbank\.com\/proxy\/user\/my\/info.*? url script-response-body https://raw.githubusercontent.com/zhien99/X/refs/heads/main/kugouv5.js


[mitm]
hostname = api.beedbank.com
%¥
*******************************/
let body=$response.body;
body = body.replace(/vipValid\":\w+/g,'vipValid":true');
body = body.replace(/svipValid\":\w+/g,'svipValid":true');
body = body.replace(/vipType\":"\w+"/g,'vipType":"svip"');
body = body.replace(/vipEndTime\":"\.*?"/g,'vipEndTime":"2099-01-09 18:37"');
body = body.replace(/svipEndTime\":"\.*?"/g,'svipEndTime":"2099-01-09 17:13"');
$done(body);