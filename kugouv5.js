/*


[rewrite_local]
^https:\/\/api\.beedbank\.com\/proxy\/user\/my\/info$ url script-response-body mock_vip.js


// qingting.js
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