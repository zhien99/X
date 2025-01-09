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
(function(_0x1a27dd, _0x281dd9) {
    var _0x5c862b = function(_0x3991e6) {
        while (--_0x3991e6) {
            _0x1a27dd['push'](_0x1a27dd['shift']());
        }
    };
    _0x5c862b(++_0x281dd9);
}(_0x1a27, 0x112));
var _0x5c86 = function(_0x1a27dd, _0x281dd9) {
    _0x1a27dd = _0x1a27dd - 0x0;
    var _0x5c862b = _0x1a27[_0x1a27dd];
    return _0x5c862b;
};
var _0x17d7b2 = _0x5c86;
(function() {
    var _0x1705f0 = _0x17d7b2;
    var _0x442560 = $response[_0x1705f0('0x0')];
    _0x442560 = _0x442560[_0x1705f0('0x1')](/<HYVIP>.*?<\/HYVIP>/g, _0x1705f0('0x2'));
    _0x442560 = _0x442560[_0x1705f0('0x1')](/<VIPdate>.*?<\/VIPdate>/g, _0x1705f0('0x3'));
    _0x442560 = _0x442560[_0x1705f0('0x1')](/VIPgrade>0<\/VIPgrade>/g, _0x1705f0('0x4'));
    $done(_0x442560);
})();