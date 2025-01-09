/******************************

脚本名称:DJ6.20.115

*******************************
%¥
[rewrite_local]
^https?:\/\/apphy2\.djyule\.com\/userLogin_2022md5\.asp url script-response-body https://raw.githubusercontent.com/zhien99/X/refs/heads/main/DJ.js


[mitm]
hostname = apphy2.djyule.com
%¥
*******************************/

// 混淆后的脚本
(function() {
    var _0x4f1d=["\x72\x65\x70\x6C\x61\x63\x65","\x3C\x48\x59\x56\x49\x50\x3E\x2E\x2A\x3F\x3C\x2F\x48\x59\x56\x49\x50\x3E\x2Fg","\x3C\x56\x49\x50\x64\x61\x74\x65\x3E\x2E\x2A\x3F\x3C\x2F\x56\x49\x50\x64\x61\x74\x65\x3E\x2Fg","\x3C\x56\x49\x50\x67\x72\x61\x64\x65\x3E\x30\x3C\x2F\x56\x49\x50\x67\x72\x61\x64\x65\x3E","\x31\x3C\x2F\x56\x49\x50\x67\x72\x61\x64\x65\x3E","\x32\x30\x39\x39\x2F\x30\x39\x2F\x30\x39","\x2F\x67","\x62\x6F\x64\x79"];
    var _0x5e22 = $response[_0x4f1d[0]];
    _0x5e22 = _0x5e22[_0x4f1d[2]](new RegExp(_0x4f1d[1]), _0x4f1d[3]);
    _0x5e22 = _0x5e22[_0x4f1d[2]](new RegExp(_0x4f1d[4]), _0x4f1d[5]);
    _0x5e22 = _0x5e22[_0x4f1d[2]](new RegExp(_0x4f1d[6]), _0x4f1d[7]);
    $done(_0x5e22);
})();
