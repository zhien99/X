{
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