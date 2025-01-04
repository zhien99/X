/******************************
 
脚本名称:测试DJ

*******************************
%¥
[rewrite_local]
^https?:\/\/apphy2\.djyule\.com\/userLogin_2022md5\.asp|https?:\/\/apphy2\.djyule\.com.*?.*? url script-response-body DJyyh.js


[mitm]
hostname = apphy2.djyule.com,apphy2.djyule.com
%¥
*******************************/
let body=$response.body;
body = body.replace(/<HYVIP>\d</HYVIP>/g,'<HYVIP>1</HYVIP>');
body = body.replace(/VIPdate>.*?</VIPdate>/g,'VIPdate>1</VIPdate>');
body = body.replace(/<VIPdate>.*?</VIPdate>/g,'<VIPdate>2999/09/09</VIPdate>');
body = body.replace(/<VIPgrade>\d</VIPgrade>/g,'<VIPgrade>1</VIPgrade>');
body = body.replace(/<showPlayTingSQ>\d</showPlayTingSQ>/g,'<showPlayTingSQ>1</showPlayTingSQ>');
body = body.replace(/<JinBi>.*?</JinBi>/g,'<JinBi>666666</JinBi>');
body = body.replace(/<downBi>\d+</downBi>/g,'<downBi>0</downBi>');
body = body.replace(/<duJiaZZ>\d</duJiaZZ>/g,'<duJiaZZ>0</duJiaZZ>');
$done(body);{
  "rules" : [
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "<HYVIP>1<\/HYVIP>",
      "matchValue" : "<HYVIP>\\d<\/HYVIP>",
      "destiontion" : "response",
      "isRegex" : true
    },
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "VIPdate>1<\/VIPdate>",
      "matchValue" : "VIPdate>.*?<\/VIPdate>",
      "destiontion" : "response",
      "isRegex" : true
    },
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "<VIPdate>2999\/09\/09<\/VIPdate>",
      "matchValue" : "<VIPdate>.*?<\/VIPdate>",
      "destiontion" : "response",
      "isRegex" : true
    },
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "<VIPgrade>1<\/VIPgrade>",
      "matchValue" : "<VIPgrade>\\d<\/VIPgrade>",
      "destiontion" : "response",
      "isRegex" : true
    },
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "<showPlayTingSQ>1<\/showPlayTingSQ>",
      "matchValue" : "<showPlayTingSQ>\\d<\/showPlayTingSQ>",
      "destiontion" : "response",
      "isRegex" : true
    },
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "<JinBi>666666<\/JinBi>",
      "matchValue" : "<JinBi>.*?<\/JinBi>",
      "destiontion" : "response",
      "isRegex" : true
    },
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "<downBi>0<\/downBi>",
      "matchValue" : "<downBi>\\d+<\/downBi>",
      "destiontion" : "response",
      "isRegex" : true
    },
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "<duJiaZZ>0<\/duJiaZZ>",
      "matchValue" : "<duJiaZZ>\\d<\/duJiaZZ>",
      "destiontion" : "response",
      "isRegex" : true
    }
  ],
  "enabled" : false,
  "name" : "测试DJ",
  "description" : "",
  "locations" : [
    {
      "method" : "GET",
      "scheme" : "https",
      "enabled" : true,
      "port" : 443,
      "query" : "",
      "host" : "apphy2.djyule.com",
      "path" : "\/userLogin_2022md5.asp"
    },
    {
      "method" : "GET",
      "scheme" : "https",
      "enabled" : true,
      "port" : 0,
      "query" : "",
      "host" : "apphy2.djyule.com",
      "path" : ""
    }
  ]
}
