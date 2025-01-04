/******************************
 
脚本名称: DJYule VIP 解锁

*******************************
%¥
[rewrite_local]
^https:\/\/apphy2\.djyule\.com\/userLogin_2022md5\.asp$ url script-response-body DJYule.js

[mitm]
hostname = apphy2.djyule.com
%¥
*******************************/
var body = $response.body;

// 修改 VIP 状态
body = body.replace(/<HYVIP>.*?<\/HYVIP>/g, '<HYVIP>1</HYVIP>');
body = body.replace(/<VIPdate>.*?<\/VIPdate>/g, '<VIPdate>2099/09/09</VIPdate>');
body = body.replace(/VIPgrade>0<\/VIPgrade>/g, 'VIPgrade>1</VIPgrade>');

$done(body);
