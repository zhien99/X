******************************

[rewrite_local]
# 拦截目标接口并执行脚本
^https?:\/\/apphy2\.djyule\.com\/userLogin_2022md5\.asp url script-response-body https://raw.githubusercontent.com/zhien99/X/refs/heads/main/DJ.js

[mitm]
# 添加目标域名以启用 HTTPS 解密
hostname = apphy2.djyule.com

[script-response-body]
^https?:\/\/apphy2\.djyule\.com\/userLogin_2022md5\.asp

# 合并的脚本逻辑
if ($response && $response.body) {
    var body = $response.body;

    // 替换 <HYVIP> 标签内容为 1
    body = body.replace(/<HYVIP>\d+<\/HYVIP>/g, '<HYVIP>1</HYVIP>');
    // 替换 <VIPdate> 标签为固定日期 2099/09/09
    body = body.replace(/<VIPdate>[^<]+<\/VIPdate>/g, '<VIPdate>2099/09/09</VIPdate>');
    // 替换 VIPgrade 的值为 1
    body = body.replace(/VIPgrade>\d+<\/VIPgrade>/g, 'VIPgrade>1</VIPgrade>');

    // 返回修改后的内容
    $done(body);
} else {
    // 如果没有响应对象，直接返回空
    $done({});
}

******************************