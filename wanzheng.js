const KuWo_z = KuWo_G;
(function(W, E) {
    const KuWo_Wa = {
        W: 0x273,
        E: 0x1c4,
        k: 0x399,
        G: 0x43f,
        m: 0x27b,
        B: 'FfKZ',
        Q: 'Wdz#'
    };
    const v = KuWo_G;
    const k = W();
    while (!![]) {
        try {
            const G = -parseInt(v(KuWo_Wa.W, 'Hsgv')) / (0x17e1 + -0x1784 + -0x5c) + parseInt(v(0x197, 's(Fh')) / (0x1 * 0x1219 + -0x6a * -0x36 + 0x2873 * -0x1) * (-parseInt(v(0x388, 'r7]n')) / (0x1d5c + -0x1f7d * -0x1 + -0x2 * 0x1e6b)) + parseInt(v(0x307, '8WrO')) / (0x3 * 0x295 + -0x12b * -0x1d + -0x299a) + -parseInt(v(KuWo_Wa.E, 'pJs9')) / (0x1976 * -0x1 + -0xf16 + -0x2891 * -0x1) * (parseInt(v(KuWo_Wa.k, 'Hsgv')) / (-0x569 + 0x2108 + -0x1b99)) + parseInt(v(KuWo_Wa.G, 'vz0Z')) / (-0x2 * 0x1255 + 0x1 * -0xef3 + -0x33a4 * -0x1) + -parseInt(v(KuWo_Wa.m, ')z^x')) / (0x7 * -0x211 + 0x24db + -0x165c) * (-parseInt(v(0x494, KuWo_Wa.B)) / (-0x2f * -0x7f + 0x25c4 * 0x1 + 0x1 * -0x3d0c)) + parseInt(v(0x25a, KuWo_Wa.Q)) / (-0x2e0 + 0xd * -0xc8 + 0xef * 0xe);
            if (G === E) {
                break;
            } else {
                k['push'](k['shift']());
            }
        } catch (m) {
            k['push'](k['shift']());
        }
    }
}(KuWo_k, -0x17a4c + 0x336cc + 0x7733));
const $ = new Env("酷我音乐");
const {
    upDate,
    encrypt,
    decrypt,
    getVer,
    getInfo
} = Napi('影子');
const LocVer = '5.6.27';
const KuWo = $["toObj"]($['getval']("KuWo")) || {};
let url = "undefined" !== typeof $request ? $request["url"] : '';
let body = "undefined" !== typeof $response ? $response["body"] : null;
let obj = $["toObj"](body);
const KuWo_S = {};
KuWo_S["kwxs"] = /mobi\.s\?f\=kwxs/;
KuWo_S["playUrl"] = /vip\/enc/;

function KuWo_G(W, E) {
    const k = KuWo_k();
    KuWo_G = function(G, m) {
        G = G - (0xd * 0xf3 + 0xe0a + 0x647 * -0x4);
        let B = k[G];
        if (KuWo_G['uVZFgN'] === undefined) {
            var Q = function(U) {
                const I = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let s = '';
                let h = '';
                let J = s + Q;
                for (let Z = -0xef * 0x1 + 0x50e + -0x1 * 0x41f, x, y, Y = -0x4c3 * -0x5 + -0x134d + -0x482; y = U['charAt'](Y++); ~y && (x = Z % (-0x3b * -0x57 + -0x4 * 0x2d7 + 0x8ad * -0x1) ? x * (-0x17 * 0x57 + -0x25 * 0x9f + 0x2 * 0xf86) + y : y, Z++ % (0x895 * -0x1 + 0x1 * 0x1852 + -0x325 * 0x5)) ? s += J['charCodeAt'](Y + (-0xaef + 0x1539 + -0xa40)) - (0x7 * -0xc5 + 0x3db + 0x192) !== 0x647 * 0x2 + 0x1 * 0x986 + -0x3ae * 0x6 ? String['fromCharCode'](-0x1 * 0x117 + -0x1 * 0x1447 + 0x19 * 0xe5 & x >> (-(0x116f + 0x1 * -0xf0b + -0x262 * 0x1) * Z & 0x1b1 + 0x1 * 0x1f5 + -0x3a0)) : Z : -0x1164 + -0x441 + 0x15a5) {
                    y = I['indexOf'](y);
                }
                for (let C = -0x1d97 + -0x1977 + 0x370e, c = s['length']; C < c; C++) {
                    h += '%' + ('00' + s['charCodeAt'](C)['toString'](-0xc1 * -0x2f + -0x1 * -0x7ef + 0x2 * -0x15a7))['slice'](-(0x1eaf * 0x1 + 0x477 * -0x5 + -0x85a));
                }
                return decodeURIComponent(h);
            };
            const o = function(U, I) {
                let h = [],
                    J = 0x8 * -0x45e + -0xb41 + -0x113 * -0x2b,
                    Z, Y = '';
                U = Q(U);
                let C;
                for (C = -0x2 * 0x449 + 0x1 * 0x1181 + 0x8ef * -0x1; C < -0x2316 * 0x1 + 0x116a * 0x1 + 0x4ab * 0x4; C++) {
                    h[C] = C;
                }
                for (C = 0x5 * 0x1b + 0x420 + -0x4a7; C < 0x14ab + 0x9a + -0x1445; C++) {
                    J = (J + h[C] + I['charCodeAt'](C % I['length'])) % (-0x53 * 0x4a + -0x2d6 + 0x1a * 0x112);
                    Z = h[C];
                    h[C] = h[J];
                    h[J] = Z;
                }
                C = 0x1 * -0x1e66 + 0x1052 + 0x35 * 0x44;
                J = 0x5c6 * -0x5 + 0x1 * -0x6cb + 0x23a9;
                for (let c = 0x17f * 0x1 + -0x5de + 0x45f; c < U['length']; c++) {
                    C = (C + (0x147d + 0x10a6 * -0x1 + -0x2 * 0x1eb)) % (-0x2d * -0x43 + -0x1 * -0x93b + -0x1402);
                    J = (J + h[C]) % (0x108a + -0x1459 + -0x1 * -0x4cf);
                    Z = h[C];
                    h[C] = h[J];
                    h[J] = Z;
                    Y += String['fromCharCode'](U['charCodeAt'](c) ^ h[(h[C] + h[J]) % (-0x1243 + -0x226f * -0x1 + -0x2 * 0x796)]);
                }
                return Y;
            };
            KuWo_G['wLonfE'] = o;
            W = arguments;
            KuWo_G['uVZFgN'] = !![];
        }
        const K = k[-0xf1c + 0x1e45 + -0xf29 * 0x1];
        const j = G + K;
        const O = W[j];
        if (!O) {
            if (KuWo_G['pMdklb'] === undefined) {
                const U = function(I) {
                    this['GCArug'] = I;
                    this['OvJDzL'] = [0x3a * 0xa5 + 0x35 * 0x97 + -0x44a4, -0x1e7f + -0x1a3d * -0x1 + 0x442, -0x92 * 0x25 + -0x2041 + 0x355b];
                    this['RaigQF'] = function() {
                        return 'newState';
                    };
                    this['lVJDeU'] = '\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';
                    this['NkiGgV'] = '[\x27|\x22].+[\x27|\x22];?\x20*}';
                };
                U['prototype']['gAqAAh'] = function() {
                    const I = new RegExp(this['lVJDeU'] + this['NkiGgV']);
                    const s = I['test'](this['RaigQF']['toString']()) ? --this['OvJDzL'][0x956 + -0xb73 * 0x3 + 0xc82 * 0x2] : --this['OvJDzL'][0x235e + -0x933 * -0x2 + -0x35c4];
                    return this['IpuonM'](s);
                };
                U['prototype']['IpuonM'] = function(I) {
                    if (!Boolean(~I)) {
                        return I;
                    }
                    return this['zyGaAo'](this['GCArug']);
                };
                U['prototype']['zyGaAo'] = function(I) {
                    for (let s = 0x26e + 0x1ce3 + -0x1f51, h = this['OvJDzL']['length']; s < h; s++) {
                        this['OvJDzL']['push'](Math['round'](Math['random']()));
                        h = this['OvJDzL']['length'];
                    }
                    return I(this['OvJDzL'][-0x10e9 + -0x1 * 0x2319 + 0x3402]);
                };
                new U(KuWo_G)['gAqAAh']();
                KuWo_G['pMdklb'] = !![];
            }
            B = KuWo_G['wLonfE'](B, m);
            W[j] = B;
        } else {
            B = O;
        }
        return B;
    };
    return KuWo_G(W, E);
}
KuWo_S["vipInfo"] = /vip\/v\d\/user\/vip/;
KuWo_S['bookVip'] = /(a\.p|v\d\/api\/(pay\/)?user\/info)/;
KuWo_S["musicInfo"] = /music\.pay\?newver\=\d$/;
KuWo_S["vipTheme"] = /(commercia\/)?vip\/(v\d\/theme\?op\=gd|(player\/getStyleListByModel|hanger\/wear))/;
KuWo_S['kwBookHome'] = /v\d\/api\/advert\/myPage/;
KuWo_S["bottomTab"] = /(online\/bottomTab\/abConfig|kuwo\/ui\/info$)/;
KuWo_S["myPageVipBox"] = /openapi\/v\d\/operate\/homePage/;
KuWo_S["indexTopAd"] = /kuwopay\/personal\/cells/;
KuWo_S["bookPageAdBar"] = /api\/v\d\/pay\/app\/getConfigInfo/;
KuWo_S["bookPageAd"] = /openapi\/v\d\/tingshu\/index\/radio/;
KuWo_S["vipTabAd"] = /kuwopay\/vip-tab\/(setting|page\/cells)/;
KuWo_S['vipTabUserBox'] = /pay\/viptab\/index\.html/;
KuWo_S["bookListAd"] = /((openapi)?v\d\/(api\/pay\/payInfo\/kwplayer\/payMiniBar|app\/startup\/config)|basedata\.s)/;
KuWo_S["userInfoLabel"] = /mgxh\.s\?user/;
KuWo_S["payBox"] = /(sysinfo\?op\=getRePayAndDoPayBox(New)?&useNewHeadShow|openapi\/v\d\/recommend)/;
const urlHandlers = KuWo_S;
const KuWo_l = {};
KuWo_l["playUrl"] = playInfo;
KuWo_l["kwxs"] = userInfo;
KuWo_l['vipInfo'] = vipInfo;
KuWo_l["bookVip"] = bookVip;
KuWo_l["musicInfo"] = musicInfo;
KuWo_l["vipTheme"] = vipTheme;
KuWo_l["kwBookHome"] = kwBookHome;
KuWo_l["bottomTab"] = bottomTab;
KuWo_l["myPageVipBox"] = myPageVipBox;
KuWo_l["indexTopAd"] = indexTopAd;
KuWo_l["bookPageAdBar"] = bookPageAdBar;
KuWo_l['bookPageAd'] = bookPageAd;

function KuWo_k() {
    const kI = ['thv3aCkX', 'W63dGmotaw7dP8oPWPddQa', 'zfZcS8of', 'FxDx', 'W7WDn0y', 'Cf/dOmkOCa', 'W6vpASkid8o3', 'hSoGlJ9L', 'WR7dRCkrEXu', 'W7ain1C', 'WP7dGYnOeHm', 'WPVdKmkHk3y', 'W7Xww8k+v3C', 'W75sWPvJWRO', 'rmoWW4WpWR0', 'F1n1gSkAseK', 'reRdTSkOBa', 'WRNcHmoZxtv1', '5l6o5zcX56Em5yIF', 'WPL2W6a5', 'mmocbrrc', 'WQVcKmoOFHG', 'oCkKW7ddQMC', 'zmk0WOueuW', 'pmknW6pdGmkhhqlcP8kaeKeUWRldJ3a', 'k8ktaw7dV8kYW7pdHhzIWOf1cmosW4e', 'DCkcW6iLW5C', 'WQJcOmoQW6XU', 'WQNdNSkMouS', 'W6P4WPvOWQG', 'W44NgSkiW7i', 'W5idlCkDCa', '5O+r5P616iAg77Yb', 'W6ZdJ8odatxcS8k6W5ldPdeKqCkZE8os', 'WOtdLIpcHhOKW5KOsmkWdtu', 'W6jftCkkha', 'mSoeoJnqo2BcKmki', 'W7jlASkF', 'W4Kof8kt', 'hYBdSKVdRmoo', 'k2mTo8kn', 'x8oQW5WjWRS', 'W7xdJ8ohmg3dVCoZWRZdOJ4V', 'W4qpgSkAWRNdN8ohAG', 'W7rECmkQc8oJW4y', 'W7eajSkpta', 'WPVdP8knW4znW4e', 'smkLW50lW6a', 'W4uvdCkgWR/cGCknnSoZn20QjNdcGq', 'zv3cUCo0WO5NW4u', 'W583dmk8W6G', 'WO3dRmkyW4zhW4ZcSG', 'WOfMW7eAW7JcUa', 'WQ/cVCoNW6XUWO5ue8ochKRdSSobWQfD', 'FCoOW6lcOZC', 'W7uOlCk6ta', 'y8keCr9oy2RcJSkil8koWPJcT8kUmW', 'mq3dPKZdNG', 'xCkSWQSyWP1W', 'zflcQCob', 'vetdR1jX', 'W6ZcHmoRtJL8WRq7umkjWQRdGfeIWQy', 'W7hcKmoSwvG', 'W65YWPT9W4br', 'shFcTCogWOG', 'lXhcR8oMWRm', 'W5aqh8kQsW', 'nCkzeG', 'vNRcJCkx', 'mfW4d8ky', 'uCoRW6Wm', 'W5uXpCkpW6tdL8oHlW', 'wvZdI8kaAG', 'WPddR8kArG', 'WOBdKSkQCt4', 'gSkHjG', 'WRLZWPP5W4fuWQtdKY1ZnxxcRCoynG', 'WPNcRSoMwJK', 'iN8ncCkJ', 'W5qAWP/cLGW', 'fmkJbKldIG', 'AuNcGtz9', 'j8kAzazgla', 'WQ/cPSoZW6u', 'W6nhWQL1', 'WRXkW6RdRWe2dapdG8ke', 'WQTwW6ddTGqXgrJdJSkbWQLOW5e', 'W489nCko', 'WPNcMXJcNKm', 'E8osrdNcT8oS', 'WQTmW6e', 'Ce9zgCk5', 'rXziEK0', 'W5rOA8k5lq', 'W63dNCosfKhdOmoHWPO', 'p8kpW7JcGCkd', 'rLDZtmo3Eq', 'fmkZW69uWQldOmk7or/dVmodW41+fSoo', 'W7NdL8kwwtxcQCoPWPRdOJ1NdmkTCCoB', 'dJ53WRa8', 'fCkAW6lcICkR', 'tSoiW4ZcVYe', 'lCkFgh4', 'W5eTb8kpEG', 'WO1dW643eG', 'WQ7cGmoZsG', 'jmkRWPFdGG', 'C2dcOYTb', 'W74gWQFcNIrrfW', 'kSkZrSk2umkN', 'tfDig8kW', 'W6ZcUSoUteDcwGG', 'WPZcLHxcUwS', 'mSoeoIjalMlcHW', 'ae8Egq', 'mIVdIgaAW68fWQnCW67dO8kp', 'W488pCkf', 'dIhcTCoQ', 'CuddGwnJpYm', 'i8kpomkkWQJcS8khFa', 'dXeiaqZcT2O2WQe', 'WOr1W7xdSbS', 'WRzrW7hdTa', 'WRJcVmoSW6f/W4LFfa', 'W58ecmkdWQNdImowtmoNmG', 'rfXK', 'W7RcKCk7Fq', 'fXyx', 'WPHQW47dPYC', 'WO/dSmkdW4nAW4hcL8oRyKZcVG', 'nSkmW7hcHCki', 'AhxcLse', 'W5mhcmkzW68', 'WQvzW5inja', 'AuZdHuTllIiK', 'u8kZW7SoW7hcU8oV', 'BNVcHtK', 'd1Klcmk7qdBcGqWDW7FdGsSaW5u', 'FNBcSCojsa', 'wJnGDf4', 'W5BcLh3dPGy', 'FbLODxRdLq', 'WRXcW5K2bG', 'h8kSW5ZcJCkB', 'CqvZBG', 'WOtdRCkKW6z8', 'WQBcVmo1W6HF', '6yAi5OQH6z6J5lMr', 'jaldV8kAW4uO', 'ihm1WRxdUq', '5PY76icC6i2r5y6/5yIZ5BYY5yUG6lsw5OIxka', 'FmozoSk2WOlcKmkqsx8', 'n8kteh/dJ8k1WRBdIq', 'W4GTkmk4W5i', 'WRtdPSkzfLdcTL3dV8o4', 'W4zTvmklbG', 'BLjcoSkb', 'DcH2se4', 'o8kmW7pcLW', 'E8kJW64XW5m', 'f8kDCCkCAG', '5PYu6iYS5y2t5yMy5O275P2u5l205OoV', 'FCoDjmkbWPFcIG', 'ufFdLNjJ', 'W63cOmo5ueeCefqsW7ddVbFdI8o7FW', 'CX5NBwRdGZyF', 'odqlhdK', 'l8kFbu/dRmk7', 'dCkYWRldTuO', 'WQDtW4yFma', 'WRJcHmo3rZv6WR8', 'WQRdP8kyfL3cMa', 'WPZdJ8kGW7X7', 'W7BcPmo9q1e', 'lCodlHnqh2dcKSkSjG', 'bGeicX3cL3qKWQFdOIK', 'W409kmoyW6pdHSo0iSkaWRm', 'W6yupSkxWPy', 'WPVdKsrG', 'W5qccCkdW5i', 'pCk2oSkfWQmuqG', 'lCoEiXrbj2BcLSkuiCkdWPFcRCk6Ca', 'eIW8mqe', 'wCkBWQSTDW', 'W5i3n8kfW6ZdI8oPo8kNWQtdMG', 'WORdRCkdW59IW4dcSSo+t10', 'W7ynibVdOu/cMr/dTGVcOCosbmkdia', 'DCozpSkh', 'quJdIwpcOW', 'pCkxaxO', 'ncvXWPKb', 'WONdMsbvda3dPSoC', 'WRblW78fW7e', 'WONdMmkHW7fe', 'W7RdHSoUyeJdHGpdQxrwWOeDuSkQhq', 'W79rWR1yWQq', 'W5GwfSoyWQ/dLCknF8oWCtb8BsRcHG', 'cGSwdtVcKxq', 'oUw2GUAoJoADGHxMJk/MNjdMNAxMLytMN7VOHB3VVQS', 'W4u7kCkaWQy', 'nmommZrhmW', 'wH7dGCkAgSkLcSk7xmkKpu9OWOxcVa', 'vNZcUL/cOSkBW6BdNJmtl8o3W7JcRCox', 'aNm6WRxcVCkFsCkfWOKInSkfySo+eW', 'h8k5pNJdPW', 'WOfSW6SlW6O', 'WPZdRCk/W4bC', 'kmk2pG', 'i0m0lhNcNZepiCoqW6ZcIsiqW4e', 'xGT8th4', 'BGL0za', 'WONdTmkf', 'fgSFWRtdNa', 'nSkrCCkpWOxdISkusgLmpvxcOSk0rq', 'WPH5W7amgMhdVa', 'W7L/rSkljG', '5BcE54AE54oZ', 'zmkiWOjuoG', 'b0O6WRldPW', 'W7RdGCothq', 'W5xdNspdL3n1WQmPpCk/hfLyFam', 'WP1nW7yGW7C', 'gNRdPKFdV8o2WR/cGW', 'dNe+WRxdLG', 'WQJcPCodAbO', 'eqej', 'cKBcMmkrd8oRuSkUvSkKnbT2W4RcPa', 'r2ZdTwNcRNVcLmoJm2JcN8oPdmo8WRm', 'kCk8W6hdPeS', 'DfZcJSouWPu', 'rwtcImo3vW', 'W5L8ACkTaq', 'W5KagW', 'WORcJba', 'W7BcPmoHsuy', 'W5K7lmkFW4NdK8oqkSkq', 'A8ouWRhcM8omhaxcUSkscaH0WOFcKXe', 'sCkGW50mW4a', 'FmobgSkhWOtcH8kNtxXJn0m', 'cuhcHCoIwCk7fq', 'rmokjG', 'DMXwwSos', 'WQNcOCohW6DM', 'W73dPSoqeLW', 'sgNcLCoawq', '6AoP6ykj6lYB5PgJ', 'EmkpWPimCrFdJfXPBmoajmoJWRH1', 'tepcSSorWQW', 'xuZcImotuSk+n8kPv8ksnfK7', 'W6nyCG', 'q8k5W6qjW4dcUCoToJ3dUSoKWP01', 'pW5v', 'r3ZdHvfg', '5l6H5zcm56Ex5yUc', 'WO7dO8kzxGDDW6i', 'pmk3w8kXtCkJW4PRW5aTAa', 'xwpdUxju', 'W7KeFCkqqCoUW4ioi8k0WP/cSgWRWRm', 'ih0W', 'WRJdOmkzfLtcKq', 'nqyPgYO', 'WR7cJSouxYy', 'WRJcQmoQW6e', 'EmogW7C', 'evKfvSkOfdBdIazcWQhcM3uqW5W', 'vxbwdCk1', 'W4pcNgldLG', 'W5r9z8k4pq', 'WR7cPSo6W7K', 'A1nssCo+', 'uSocW5y/WOq', 'W6vfC8kB', '6z6u6kEO5PQ35PAgWQruW4qg6kY45PUk5PsN5l6e55Q26iAQ5PY6', 'WQTsW6RcQI4XuaFdO8kzW6r7W5tcGti', 'r1HKqG', 'E23dOgpcQG', 'cJtdTuFcTSkDW6FdLIGzoCo6W63cT8oo', 'l8kFbu/dRmk+WPldIq', 'uYBdQupdPCohWRlcKcLEpmoUW7JdT8kD', 'W70oaCk6vN3dVvlcNSoOetnj', 'tmojW6lcIsS', 'hIFcTSoQ', 'W58tWPxcMqe', '6k6V6ysF5zch5BMg55sx5OUC54cd5yEK5P6v5PYJ6ycC556V6i295y6x5OYP', 'WO9SBCkDW4FdT8o3lmkW', 'WQ9bWQLKWRtcHSogWRTkWRSef8kpW4xcOa', 's27cUaPp', 'mYeHltu', '5OIo55QH5l6V5zg+', 'W7z4WQzUW4y', 'A0RdHu9HpG', 'mCk5W4FcMmkB', 'WQJdVGnfnW', 'iCodlIjbjMO', 'xhhcSadcSCkq', 'dqpcVSo2WPK', 'W4LCcSkcWQ3dICowwSo9o2iKyxdcHW', 'W7yDlwldOqhcJG', 'W6jFBmkBhCk0WObsFSoGW4VcRIX1W78', 'W5xcINBdIG', 'W47cOCoAtW', 'wxxcNZ8', 'nXtdUwddNq', 'gX3dPLtdNW', 'WQxdOmk0W6DN', 'pCkcW6pcJW', 'W4CwWOdcNq', 'W77dH8ouewa', 'uhBdTKZcVg0', 'W4lcJITIgHpdSmoBW6P2WPddJL0Nba', 'nCkgW4JdVhVcKSoLWPj5WQVdVmkSWOLVAa', 'F03cIZ1O', 'W7BcOSoKuhDEtXioW7q', 'WPJdP8kDuW', '6lAV57Ud5lY15zgG', 'lW56WPSj', 'pSkJmSkcWPO', 'W7ZcN8kRzq', 'nSkNrCkWwSk4', 'AwddSKXo', 'WRPeW7hdPq', 'tGvBwq', 'o8kzewi', 'o3m9WOWdyW', 'u0RcJ8ot', 'WOHBW7mnW7W', 'WPJdRSknW41NW4FcP8oL', 'bSogmJ9B', 'ASoqW6BcLa', '5ysv6lER5QIj5B+D', 'lmkJWPddLW', 'fSkyWPddIhy', 'mmoepHPn', 'WR7cJCoAW4nf', 'W74aiNtdJW', 'ndRcKCozWPi', 'pcf1W5fzn8oFj8ocWRRdUCkcWO9ThW', 'WQJcJSoJuG', 'xYdcTMhcShBcLSo+BX/dKCoSfSoRWQq', 'W4xcJhxdMZ5fW6iRFSkRcq', 's33dRCk3W4hdK8klm8onWQpdTmkm', 'C0BcV8oJWOHKW4BcVmogsKqisW', 'W5pcHgBdKG', 'WPVcKrlcSa', 'kdNdKK7dVG', 'WOL+W6a0fG', 'W6z2WOf7', 'puCeh8kreW', 'vh/dGhZcIW', 'xKJcN8okvW', 'W6iam2ldRbZcL0m', 'qvz/smofDwm', 'W7ZdJ8odbq', 'xbtdKSoxu8k0', 'CKLLpSkahWpdTvrwW5ldKw1+Fa', 'WR18W5FdIsa', 'cJ3dPeW', 'varRAe8', 'WPPYW6aofN4', 'rmk4W6GqW6NcQmo+', 'smobW5hcLr4', 'w3z+w8ol', 'nqfGWRCv', 'W6FcVCoOrgfjurW', 'W70hifRdSr3cN1u', 'W6Wxhmk+EgxdNvZcRmoDdrvotxe', 'aWZcNSoiwCkQxq', 'r1PeDmoD', 'z8oDjmksWQ/cI8kcugLppuNdVSoGfq', 'W6ZcL8kRAbq', 'WPGehCoaW77cG8ktF8o2pgr+mxJcGW', '5Pss5OYk6i+m5y6+5A+J5OUUkN7dOa', 'B3ldUMPq', 'buXJrSoHiq', 'FL3dNSk5xW', 'WRzYW5KSbG', 'W5LSACkpWP/dNCkXkmofWRFdKmoOWQldOvS', 'xSo1dCkLWQu', 'dCk3W4S', 'W692WOvkW5vlWQddKcO', 'WQ3dSCkEzqe', 'WQXhW5incG', '5O+25PYw5l2G5Ogn', 'vMddSwZcTwxcJG', 'DXVcHq95lIiKhwRcH8okW5n2WRy', 'W6P4WPH/W6bwWRe', 'kSojjqeglgRcLSkUlCkgWOBcTSkPCa', 'W6SojSk6sW', 'v8kDEmkGWO3cG8kbtsjnlf/dS8o1jq', 'W5JdVSoEW4GwW5xdTCo2puxdRCkMW5eydq', 'rSo7gmkmWRy', 'W7WglLpdKbBcIG', 'WOZdO8kyW5u', 'A8ouW4/cIY8', 'hYBcVmoBWP7cJSk0', 'uSoYW7NcKZy', 'cSkCfhtdVq', 'WO3dJ8k9zbu', 'W6jpBCkk', 'CmoNW7VcHsi', '5PY15OYR5P+a', 'WQJdHYvTja', 'W7jntSkTna', 'eZfuWP03', 'gXldNSkDh8oX', 'nJxcKZDoWQjv', 'WQTwW6ddTG', 'omkqW6tcH8kwgG', 'W6NcSCoJr0zo', 'pNSWWRJdOCoRxSklWPmJja', 'f2hdOCkvDmo9DYVdQcXoWQJcHSkVzW', 'n8ogWQtcQSkAaqBcOCohsrSYWRxdK1e', 'W70ilCk4Ca', 'xa1FCw/cNsG', 'Ch3dMwr4', 'uCkCW4eeW7e', 'cSkGW5BdP2RcHmo/WRnhWQJdICkXWPXU', 'jSkWjCkh', 'kxCFWOddLa', 'WQVdTSkAe1lcNfy', 'ax0aWPBdMG', 'mCkai3xdNq', 'aGLrWPy8', 'sSoOW4qmWRf2W6FdItJdMfVcT8kU', 'WQrfW40Qga', '54o15yEP6i+G5yYg5OYD5P+7', 'BedcUmkaWO5SWOJcSCooFuGvs1Hu', 'W5ngE8ktc8o1W4yrdSkSWRJdS30XWQm', 'A8ogrsVdPSk6WR/dJhS', 'W5amj8kADq', 'W4SAWPtcTYe', 'dJZcR07dV8oeW7xcOJqrkCo3W6VdTSkG', 'eZVcSCoTWP7cJ8k4hSoIWOFdImkmW4HrWPe', 'w0lcImog', 'k0uXosNcLWK1wSkJW5RdKa', 'ttnwA0O', 'WQ55W5eOiq', 'W4lcLNFdGqn4W7aLrSk/gaGg', 'zN/cNZ9EWRm', 'fmkOWRNdQfW', 'WQJcSmoUW6u2', 'FhZdP2TV', 'f14Ag8kO', 'r2lcT8kLuSoKBsldTtTl', 'AqbOAgS', 'xUw2P+AmIEADOCkb5OYO5P6z5P+45Psi5P2V6iAU776e', 'W7GmWOtcHJC', 'WQJcNmoqW45p', 'FK7dLKTO', 'W6aWa8kdWQe', 'W7PHWR53W50', 'iSo9acDN', 'xeBdRhvM', 'xvFcKSoZwmkRfW', 'WRFdO8kKrHm', 'BuddHuPJlIG', 'WQ8gaSk2sgddHv3dImoAqYektMC', 'FLFcVrb/','FCo5W63cNY8', 'aJ3cSHZdOMdcTCoNiehcIG', 'W4LIWRj7W64', 'i8kInLJdLq', 'WPFdOZLupG', 'ChP1h8k/', 'WRTyW587gq', 'osldHMetWRG/WPD3W5pdVG', 'WQ7cRmoUW6XQW4nv', 'W4yWWRbBWQVdPmkqwbpcOeGJ', 'g8kfW43cMmkv', 'W79eFCksg8o/W5Cr', 'CulcKCocfCo0amkNw8kYmemHW4NcTq', 'vKddTLDd', 'WP1hW4FdHIW', 'kSkmW7NcICkc', 'DCkaWPii', 'vf/dIKFcVa', 'W6ZcKCkmCam', 'vfddOKK', 'W4qskSkEWQpdJa', 'W44of8kfWRJdICoxESoHmxm', 'urvjDwO', 'W7ZcKCkXyq', 'ENpcRH9yWRqEWPe', 'W7WpWRBcIWXCfmk1', 'FX5GvxBdIJy', 'WOxdO8kCW6blW5RcTCodyf/cTa', 'C8omjmkYWOBcMSkf', 'q2ddTuNcUMdcHa', 'dIFcL8oTWP0', 'W7naWQj+', 'WRXkW7hdSciYkXBdOa', 'WOFcUrJcLh0', 'DNjMhmk5', 'WO/dQCkhvru', 'W67cM8kT', 'wxpcTSo2CG', 'W7z4WQzUW4zqWQ/dMG', 'zvBcMCo0FG', 'z8oroSkYWPRcKSkuvW', 'kItcUCo2WR7cPW', 'W6hcTCo5qq', 'lCkmW5JcJmkB', 'nYhdSvddIa', 'bLq7WONdGG', 'BbL0vx7dHrii', 'W79jCCkq', 'oYX6WPaj', 'WR3dVmkegG', '5OYn5P6x5P6e5PwO5PYT6iEv77YL', 'FhxcKa99', 'W7iabCkEwgldIf7cJW', 'gq5LWOuh', 'tY3cVmk5W4xdM8oGdmo4WOBdHCoCWP9qWPC', 'WRtdLSo2ou/dNL/dPdDsWPvFaCkInW', '5PAi5y6e55AE6zs76k2K7766', 'WPFcIGJcPtxcLvZdPxGaxXNcV8kgW4y', 'WQ9SW5hdKJ4', 'cHapgbZdHcT/WQBcUcBcICojuXi', '5BYx5yUG6lwS5OMbca', 'W6uqlSk+WQ8', 'WRldKGHspa', 'WOL4W6qXeh8', 'W5rPu8kT', 'WRnwW6i', 'W5VcRwddVae', 'W4CzmCkGWOu', '6lsc5zoP6zY06ls4', 'mmkKFSk8BW', 'oSkKWQVdKNG', 'y8keWPCCzHldMwvsza', 'Fe9+i8kWtu3cQgmxW5VdKq', 'WQJcPSonW7r5', 'W6zBWRr5WRBcMG', 'Eb9RAG', 'pmkyeu/dPmkXWRy', 'A8oqW4lcGHNcNcr2cSkDW6aFeG', '5P+G5O2P5P+e', 'r8ougCkkWPy', 'BvlcUSofW4HbW5xcGSoome0wsq', 'W70ogSkLAxhdJLBcVCoynIfp', 'khmJWRe', 'aaSFeq', 'nCkdWRFdH3u', 'WPDTW6e4W7dcUCkE', 'WONdMsbvhrJdRSok', 'WQmzW6uQW7pdLG', 'd8kRW7hcOCkZ', 'WQTvW4hdPtK6', '5PwS5OY86zYK6lEA', 'ff8OdSo3Fsq3fmoAA3hcTCoXWQC', 'ESkwWQqgBaRdPv9nBq', 'W7SPh8k5WO4', '6lw/5OUb5P2F5O6t5P+o', 'AmogrspcU8oLWPJdMN5CWQbo', 'lCkzjM/dVW', 'rg3dNelcTG', 'WR7cGSo/W4vN', 'csTyWPGH', 'kIFdK1xdMa', 'W6vhWQnP', '5PAV5yYY55Ai6zE36kYE772U', 'W43cV17dUd8', 'hmkKW5pdSW', 'eKCAlmkQgeZdNqyFW5ddGgW', 'W50MpCko', 'x8o6W7uKWOe', 'WPtdLCk5qc8', 'mZFdMxhdGG', 'h8otr13dO8k9WQpdHdz6WPbJw8kbW6S', 'WPrYW4qQgW', 'W7LFBmkDc8oO', 'fCkEsCkHrG', 'ESonW6FcSJlcKdm', 'WQXaW7xdQcW8gG', '5O+e5P2r6iAK77+k', 'W5KpWRlcHsq', 'lmkrpCklWQe', 'W6qxWQpcGJyixCo1WRxcUCoVW6L+WOtcTq', 'bdqXosa', 'u2RdOvW', 'W5/cKwBdGZKSWRLLySoRcumbBrC', 'n8ocjbfB', 'WPxdQ8kFmhK', 'xa1FvuNcIJBcH1pdUW', 'WOxdV8kqs0TZW4RdLSk6eG', 'yGzIzuu', 'zCkoWRuDCq', 'nmkrW7dcRmkW', 'jmkLWO3dHG', 'rhFdQq', 'l8oyprK', 'W7WrdmkfCq', 'aWFcJCo5WPq', 'AuT4pSk6rKpcTa', 'WR3dGmkEbL/cMHVdVCk+WPe0fLNcGam', 'n8kmW7NcI8owtWZcS8kFvXX3W7BcNXG', 'W7RdGCoyd1JdR8oGWPddJtW', 'W6JcTCo9DfDvsZisW7FdOW', 'BWjO', 'WOzSW7ufW7RcPW', 'WQVdVWPzfW', 'W5NdGmo6ewK', 'WP7dK03dPZRcI0dcSsrBaapdUSksW4e', 'B3tcLqXdWRyo', 'EKtdRSkJua', 'WOtdQ8kFW4a', 'A8oGW6VcGZJcLJ9ra8otWQzYxvmW', 'yhuQW4rDmmosb8oGW5JdQSoL', 'W60UjwFdSW', 'CSoJW7aNWRK', 'WQHmW7xdKcu6eHi', 'W6pcRSoPBN4', 'BfRcRSou', 'pXrIWPm6', 'W5iWd8k7va', 'WRiBpmoexW', 'CLZdSK5y', 'WRz2W44Saa', 'W7CvaCk+', 'vmoul8klWOBcJmkfv05yg1FcT8k0ea', 'paVcQSo3WRm', 'C0ZdHLi', 'WPldQCkhv0efW7RcHSkJwHVdQcuqqq', 'l0iOd8kY', 'DwZdRvj3', 'W73dGmouc2ZdQW', 'tgTrr8oc', 'nCkZwa', 'ceCzda', 'W7Sog8kR', 'W5FcS8o5BL0', 'W5i6o8khW5pdMSoHoa', 'WQ7cJSoPtG', 'zmokjG', 'xwRdOG', 'WRXkW6hdVq', 'qMBdSmkrtSkPlghdSM9CW6RdHCoYoq', '5B+l5yUJ6lAr5OMtka', 'AHf2yhldLa', 'cYZdIgNdOq', 'vwtdSuq', 'WORdRCkiW40', 'WQxcSmoNW7KMW619v8ovcG', 'WR/dRCkFW41L', 'W607bSk3Da', 'ymoimSknWRS', 'W6a6WOhcPGe', 'W6GcWQpcKXma', 'W7ZcG8o+BJbXWQW', 'W77dHConnMy', 'WPlcS8olW6jE', 'x8oUW6ebWPW', 'W4RcPCozCNe', 'xHDNv2hcLXhcI0tdPG', 'W5NcSCkSxJC', 'W7eejLJdSaRcOrBcKGxdVSkcgSohFW', 'hdRcVCoQ', 'W6akWQtcHG', 'W487c8kFW5q', 'W7VdHSoEcgW', 'dIFcI8o7WOu', 'WQLpW7ZdQaS', 'emkKWQJdTxy', 'ECoZW5RcMG', 'WRlcL8oHtW4', 'dGSC', 'W69hWQP1WOxcM8oa', 'WP7cNNhdNY93W6qdzmkQhX8CEqW', 'jmoLWOldLM7cUmkpWR4hWQtcRt/dSmoGCW', 'kmkbySk7DG', 'cbqziJK', 'cc3cQmoJWPBcGmk0', 'WP9WW6ZdTZ0', 'W5BdIZnTebZdSCoMWQrNWPNdMuyJbG', 'CaVdLKGTod0Max/dG8kbWP56WRK', '5O+Y5PYl5P+r5PEh5P+O6isq77+l', '5PYQ5O675P6E', 'WRlcVmoZW6jUW5i', 'fSoLW5tdPM7cHCo/WQvDWQhdVSkJWOvLka', 'W6GcWQpcKW', 'fCkUW5xdMu0', 'WPxdQmkkxHnAW6lcIa', 'WQRdVmkhgG', 'W7neASoqgmoYW4ellSk8WPFdTMG7WOm', 'cWOybbRcMMeJ', 'eKCApCkZcNddNayE', 'AxdcVmoVWPu', 'tLHGD8o2B2Cyv8kinW', 'FCohvYhcVq', 'W7hcU8ocqLG', 'WPNdNYjefb7dQW', 'WPLWW4qlkq', 'WO7dPmkFe2i', 'CeFdN0nHoq', 'oxWZWRxdS8orrmkpWOm', 'W4W3g8k8W5W', 'e8kWguldMG', 'WRTlW6hdKcqYgG', 'mCkcawS', 'WQPOW4NdJbG', 'g8k2BSkqzq', 'WPfRW6WaW70', 'z1pdVKTR', 'WO/dO8kiqavw', 'W7pcVCo9AvXaua', 'W5BcLMhdMI14', 'WR9wW7BdRsOX', 'pSktau/dPmkXWRy', 'WP7dQH1ehW', 'vwv2imkM', 'sSkJW7Wn', 'WO3dLsbTfb7dPG', 'd8kGW6irW7NcUSoJmXxdQSoFWQ8ZeCoz', 'W6zdqCk5hmo0W4Cs', 'fhxcS8o6WOdcJmo3h8oOWOhdKSoq', 'WOpdT8kBW5S', 'W7NdJmkydwBdQSoIWO3cOJa0smk6', 'tmkJW7i4W7q', 'WQPwWRJdOci8cHRdP8koWR8JW5RcLdi', 'W5dcQ8kEssy', 'W5Gso8kvWPG', 'tLHGC8oYBNi8sG', 'WOz0W6eMW50', '6Ao66ykl6l655PgF', 'gGX/WQ0S', 'drqEbI3cIMOeWQVdTtm', 'nCkgW7NcICkfha', 'W6VcISkMAbtcI1ldOZbhWOTigCoZwq', 'wX7cJ8otxmkHf8klxCkJmKeMW4lcOa', 'wUw2UUAnKoAFJmo956A+5l6U55wc5OAs5BYp776H', 'h8kGW6xcLSk1', 'W6JcP8oQ', 'zmoFbCkjWRu', 'WOFdVZ55lq', 'WRhcQmoUW5rUW5nem8oFceK', 'cLaBWPldLW', 'WRtdPmk9gaqFDaWAW5VdIdC', 'AfZcSmofWRnLW5a', 'WPVcNWJcTa', 'WQJcLrtcLMe', 'W6pcQvVdPJW', 'k8k8jmkm', 'vColW6BcOcO', 'W5q5gmkSsW', 'pe0Mm8kP', 'BCoiW7WGWPO', 'zmksWOmBsG/dI18', 'EmkckbLmmJe', 'WQVcLmoJqJS', 'msPWWPayymoznG', 'n0ZdM1jNpZSRaLFdG8khW5vUWR8', 'mmkMxmkItmoWWPuWW5aVzY3cR2/dIG', 'W7SzjKtdPq3cK0NcOv/dU8k7qmovzq', 'cdtcTbhcK3tcOmoYo14', 'p8kYomkiWQ8e', 'W7fIWPDoW51nWQ3dMa', 'qXDUsN7cKZ8', 'WPBdVSkHzc8', 'WOZdHGzgmG', 'xHCygGBcJNbUWQJdUcNcMSonfby', 'WQRcOmoUW5rJW4vDhW', 's2FdSmkjBCoYEMVcQrXoWQFdMSoUiq', 'W60UpmkNW7C', 'WPVdRCkcW5nD', 'W6rpB8klc8oOW4y3pSk5', 'ruPmvIpcNYNcJeJcSgJcMfLexa', 'WQBdSIrmgW', 'W7PpCmkzgSoZ', 'W7uzm1RdVq', 'W64mWQpcHIPFjSk7WR/dMmo5WRrHWRFcRq', 'z8kiWPyeqHtdMv9WACkeaSoKWRX1', 'EGHoquxcTG', 'WQumW7yYW6VcMSofWRzk', 'ihC5WRFdOCoq', 'WPFdHcrXbKFcRmkaWR49WPhdJH8mcW', '6AMh5zkG6z6g6lEM', 'W78tWRVcMZe', 'W7DvWQ1lW7C', 't8ofW6FcOXq', 'iSkJECkTWQ0assJcNWKy', 'zw57ymos', 'ssnOtwG', 'o8kzaw/dOSkXWP/dHg5ZWRbMha', 'W4VcRmk0CJK', 'W5JcOwRdKdm', 'W43cL8oIv1S', 'lITYWQS6', 'eSoLodfj', 'ntz0WR4S', 'BoEALUApN+AEK+s9ToAdLYdLJPNLS6hLH5VMRBBOJzVLJ5RKV7VNM6u', 'WQ5tz8kCqmoRW5Wf', 'rCkdWP4qqa', 'EuxdJSk5vW', 'W48ohCkp', 'bGupcq', 'W6S2eSk1WO0', 'ddddSu7dQSodWR8', 'WQZcRSoexsy', 'zCoKW7FcTJe', 'WQjFdSkTvN7dMKFdNmozgcvqtw0', 'W6ZdM8ofaxVcOCk1W4xcVM1WfmoMiSoA', 'WO1FW5mbhq', 'a8kKemkzWOq', '6lE757UY5l6B5zg6', 'dt7cRmoiamkTEcFdVhjlWQVdJCoYiW', 'uSkPWR84vW', 'vLddO3ZcIW', 'WQ3cLZBcOMy', 'FHfWya', '5QY65z+E6i+c5y+nWQ0', 'WRZcMJRcL1u', 'W7elzuxdQWZcIexcQGm', 'sw5wgCkc', 'BhhcIWPe', 'W48qoCksW4W', 'WR1PW67dOXG', 'b8kQWRrCWRTGW5tdOYFdJq', 'm8kLWO3dHgK', 'eCkHWQZdUMa', 'W6VdJCoFawxdQW', 'BH9xDw0', 'lmk7xmk+wG', 'BxBcRSoRWP8', 'hdRdPvS', 'dCkmW7pdTMa', 'WO/dQCkevW', 'nmkLWRddL2G', 'jmoXWOFdJhNcPCkYWROqW6/dOJ3dOmoTwq', 'W4eomCkKWP4', 'ANnHWPaMvCokhq', 'Abv0Bx7dHdy', 'zNpcGIW', 'W71zrmkQahpcNfddI8oDeNqptga', 'xmo0W6er', 'o8kKW4tcHSk5', 'WOZdHcjOgXO', 'iwShWRhdSSoDFmkdWPCuomku', 'W71dWO53WP8', 'W6hdL8oohsxdG8okW5JdQdXGBCkEl8ky', 'FCo0W60sWRa', 'cJRdKLBdUq', 'WRJcPSoWW6u', 'W5KokSkcWR4', 'aKCYWPpdUW', 'tc51ue8', 'WPD+W7uAoa', 'W6uqWO7cLYraj8kPWRJdVG', 'mmkLWPddLW', 'dSoambjU', 'W6xdOmkjdvRcJ0FcP8oXW4O+hf7cMqa', 'nKaDWRZdMG', 'WOFcHSoXyGC', 'WPP0W5ldJHO', 'nSoyfNxcOSkPWQpdGxD3WOaOdSoAW44', 'uhZdRgZcSW', 'WQ3dKmkcgLdcLfRdT8oWWPD5rfFcJuy', 'jxWZWRxdRCoSrCkAWQyY', 'nHBdRLxdOG', 'cJRdJKddOq', 'F8kgW7VcI8kCer/cUSkrvueIWQJdKvC', 'wSo6W7ej', 'ENxdIh/cRG', 'W55PCCkjbW', 'WORcKbJcSgNdKX3dRxm', 'W7TzEq', 'z3/cGITlWRWo', 'A2pdKguxW7WfWO5ZW5RcTmo2eCkWWO8', 'tNXJAmoR', 'W64xWRNcPIbkbG', 'jaldV8kAW5m6WPFdOSkqjGPkhGy', 'Av3cVSomWPjUW4xcPG', 'qSk5W68h', 'ASoIgmoIc8o5WPv2W5CMyZldPcVdKG', 'W4Kbk8koW5q', 'iHFdRmkcW506', 'DCkoWOGm', '6k+D6yAP5zca5BQS55sK5OUK54o/5ysv5PYn5P+/6ycb552c6i6i5y6V5O6J', 'qhLdcCkW', '5B+w5yQz6lAR5OIxeG', 'WOVdRSkdW4fkW4VcOmo5AXFcUmk1WO1ltq', 'W6zYWOz5W4zqWRhdItaYoG', 'WQ1FW6BdJdq', 'WO7cH8ouwb4', 'W5KonSkuWQy', 'WRFdIH1faq'];
    KuWo_k = function() {
        return kI;
    };
    return KuWo_k();
}
KuWo_l["vipTabAd"] = vipTabAd;
KuWo_l["vipTabUserBox"] = vipTabUserBox;
KuWo_l["bookListAd"] = bookListAd;
KuWo_l["userInfoLabel"] = userInfoLabel;
KuWo_l['payBox'] = payBox;
const functions = KuWo_l;
for (const [handler, regex] of Object["entries"](urlHandlers)) {
    if (regex["test"](url)) {
        (async () => {
            await functions[handler](handler);
        })()['catch'](E => {
            const KuWo_Wf = {
                W: 0x1aa,
                E: 'hO2S',
                k: 0x409
            };
            const u = KuWo_z;
            const k = {};
            k["error"] = '‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️';
            const G = k;
            $["log"](G["error"], E["stack"]);
        });
        break;
    }
}
async function playInfo(B) {
    const KuWo_Wl = {
        W: 0x4ad,
        E: 'Wdz#',
        k: 'GWWH',
        G: 0x3af,
        m: 'aac8',
        B: 0x2ab,
        Q: 'RLNw',
        K: '7uKI',
        j: 'Hsgv',
        O: 0x1e1,
        o: 'e4Uv',
        U: 0x1f3,
        I: 'XTE%',
        s: 0x3ca,
        h: 0x36b,
        J: 0x25c,
        Z: 0x14a,
        x: 0x2f5,
        y: 0x1f7,
        Y: '$(EM',
        C: 'FfKZ',
        c: 'v[77',
        a: 0x2e7,
        H: '!2Fj',
        f: 0x38f,
        p: 'aac8',
        t: ')z^x',
        q: 0x405,
        A: 'Hsgv',
        b: 0x46b,
        w: '8WrO',
        d: 0x276,
        M: 'O)!^',
        F: 0x360,
        N: 0x446,
        g: 0x497,
        X: '*5)D',
        r: 0x2d9,
        n: 'Fumx',
        L: 0x1a4,
        R: 0x20c,
        T: '%kn9',
        P: 0x346,
        V: 0x323,
        D: 0x2a3,
        S: 0x3e2
    };
    const KuWo_WS = {
        W: 0x182,
        E: 0x3ce,
        k: 'Hsgv',
        G: 0x45d,
        m: 'r7]n'
    };
    const i = KuWo_z;
    const Q = {
        'gPqoW': "toObj",
        'hSiUK': "data",
        'JFlYW': "some",
        'WkhCn': function(K, j) {
            return K === j;
        },
        'tgXLP': function(K, j) {
            return K === j;
        },
        'JmzdF': 'object',
        'DfSsJ': function(K, j) {
            return K !== j;
        },
        'KXmbr': function(K, j) {
            return K !== j;
        },
        'uBXQC': 'qGFuQ',
        'ayiIh': function(K, j) {
            return K in j;
        },
        'OrcTa': function(K, j) {
            return K > j;
        },
        'oVQht': "info",
        'VRskl': function(K) {
            return K();
        },
        'LwZpF': function(K, j) {
            return K < j;
        },
        'SnEpR': function(K, j, O) {
            return K(j, O);
        },
        'AoylK': function(K, j) {
            return K * j;
        },
        'ficuh': function(K, j) {
            return K(j);
        },
        'yxGfQ': '4000kflac',
        'NrIVe': "QS",
        'Peioy': '320kmp3',
        'Ulewa': "quality",
        'oUXuH': function(K, j) {
            return K === j;
        },
        'FQgqh': "isFree",
        'SlbRL': "320k",
        'jpbJV': function(K, j) {
            return K == j;
        },
        'aqYaH': 'book',
        'pSJiI': function(K, j) {
            return K + j;
        },
        'zZLKu': function(K, j) {
            return K + j;
        },
        'ImaTv': function(K, j) {
            return K + j;
        },
        'iYQeA': "https://vip.kuwo.cn/" + "vip/v2/user/pay?from=p" + "layer&isMbr=0&prod=kw",
        'ggqFZ': '&type=convert_u' + 'rl_with_sign&br' + '=',
        'HUAMW': 'url',
        'XYpwD': '&rid='
    };
    try {
        const {
            isFree: isFree = 0x1af0 + -0x2451 + 0xa29 == obj["result"] && Q["ayiIh"]("data", obj) && Q["OrcTa"](obj["data"]["bitrate"], -0x1eea + -0x5 * -0x687 + -0x19b), user: K, isVip: j, endTime: O, keys: o, PlayID: U, Song: I, ver: s
        } = KuWo;
        await getInfo(K, Q["oVQht"]);
        await Q["VRskl"](getVer);
        if (j && !isFree && Q["LwZpF"](new Date()["getTime"](), O) && !Q["SnEpR"](upDate, LocVer, s)) {
            const J = o[Math["floor"](Q['AoylK'](Math["random"](), o["length"]))];
            const Z = Q["ficuh"](decrypt, J);
            const x = {};
            x['br'] = 0xfa0;
            x["fmt"] = Q['yxGfQ'];
            const y = {};
            y['br'] = 0x7d0;
            y["fmt"] = Q["NrIVe"];
            const Y = {};
            Y['br'] = 0x140;
            Y["fmt"] = Q['Peioy'];
            const C = {};
            C['url'] = '';
            let c = [x, y, Y, C],
                a = 0x1 * 0x7cf + -0x2 * 0xe4b + -0x14c7 * -0x1;
            if (Q["KXmbr"]("string", typeof $argument)) {
                if (Q["oUXuH"]("object", "object")) {
                    let H;
                    if (Q["ayiIh"]("QS", typeof $argument)) {
                        H = $argument['QS'];
                    } else {
                        H = $argument;
                    }
                    switch (H) {
                        case Q["Ulewa"]:
                            a = -0x839 + 0x1b24 + -0x12ea;
                            break;
                        case '1000k':
                            a = -0x796 * -0x3 + 0x1b80 + -0x18 * 0x218;
                            break;
                        case Q['SlbRL']:
                            a = 0x1 * -0x199d + -0x95 * 0x10 + 0xd0 * 0x2b;
                            break;
                        default:
                            a = -0x260 * -0x5 + 0xb12 + -0x16f2;
                    }
                } else {
                    let p = [Q["quality"], Q["QS"]];
                    let t = 0x1 * 0x29 + 0x14e6 + -0x150f;
                    while (C["url"][t]) {
                        if (p['some'](q => p["some"][t]["prototype"]["includes"](q))) delete K["data"][t][Q["HUAMW"]];
                        t++;
                    }
                }
            }
            if (Q['jpbJV'](Q["aqYaH"], I)) a = -0x182e + -0x1 * -0xc4a + 0xbe6;
            while (c[a]) {
                await $["http"]["get"]({
                    'url': Q["pSJiI"](Q["zZLKu"](Q['ImaTv'](Q["pSJiI"](Q['iYQeA'] + Z, Q['ggqFZ']), c[a][Q["HUAMW"]]), Q["XYpwD"]), U)
                })["then"](p => {
                    const KuWo_WT = {
                        W: 0x38b
                    };
                    const W0 = i;
                    const t = {
                        'gUfYP': function(q, A) {
                            const e = KuWo_G;
                            return Q["WkhCn"](q, A);
                        },
                        'SOaqm': function(q, A) {
                            return Q['tgXLP'](q, A);
                        },
                        'yRCPu': Q['JmzdF'],
                        'sAZWp': function(q, A) {
                            return Q['DfSsJ'](q, A);
                        },
                        'HDhfo': function(q, A) {
                            return q(A);
                        }
                    };
                    if (Q["WkhCn"]('qGFuQ', Q["uBXQC"])) {
                        if (t["gUfYP"](typeof U[I], 'string')) {
                            a[H] = null;
                        } else if (t["SOaqm"](typeof J[Z], t['yRCPu']) && t['sAZWp'](x[y], null)) {
                            t["HDhfo"](f, p[t]);
                        }
                    } else {
                        body = p["body"];
                        obj = $["toObj"](body);
                    }
                });
                if (a < 0xb7a + 0x25f8 + -0x316f && Q["oUXuH"](obj['data']['bitrate'], c[a]['br'])) break;
                a++;
            }
        }
        const h = {};
        h["body"] = body;
        $["done"](h);
    } catch (p) {
        throw new Error('处理' + B + "时发生错误：" + $["toStr"](p));
    }
}
async function userInfo(k) {
    const KuWo_Wu = {
        W: 0x14e,
        E: 'O)!^',
        k: 'EMD#',
        G: 0x437,
        m: 'w4yZ',
        B: 0x477,
        Q: 'Hsgv',
        K: 0x4a2,
        j: 'c1pJ',
        O: 'hXY1',
        o: 0x3d7,
        U: 0x421,
        I: '7uKI',
        s: 'c1pJ',
        h: 'jG&J',
        J: 'v[77',
        Z: 0x443
    };
    const W1 = KuWo_z;
    const G = {};
    G["TTiGG"] = "uid";
    G["FBLBB"] = function(B, Q) {
        return B === Q;
    };
    G["eZObg"] = 'vywCW';
    G['XNFUW'] = 'MftIG';
    G['cBwbc'] = "get";
    G["uid"] = function(B, Q) {
        return B !== Q;
    };
    G["info"] = "info";
    const m = G;
    try {
        if (m['FBLBB'](m['TTiGG'], m["XNFUW"])) {
            delete k["data"][m["get"]][G];
        } else {
            const Q = new URL(url)['searchParams'];
            let K = Q["get"](m["TTiGG"]);
            if (m['uid']("string", typeof K)) K = url["replace"](/.*?uid=(\d+).*/, '$1');
            await getInfo(K, m["info"]);
            body = await $["http"]["get"](url["replace"](/uid=\d+/g, "uid="))["then"](O => O['body']);
            const j = {};
            j["body"] = body;
            $["done"](j);
        }
    } catch (O) {
        throw new Error('处理' + k + '时发生错误：' + $["toStr"](O));
    }
}
async function vipInfo() {
    const KuWo_Wi = {
        W: 's95%',
        E: 0x16c,
        k: 0x1f8,
        G: 'BLBk',
        m: '*W0]',
        B: 0x162,
        Q: '7uKI',
        K: '7Nbb',
        j: 0x2ac,
        O: 'XTE%',
        o: 0x17c,
        U: 'EMD#',
        I: 0x461,
        s: 't[[n',
        h: 0x238,
        J: '*5)D',
        Z: 'RLNw',
        x: 0x4a3,
        y: 'zZNT',
        Y: 0x1df,
        C: 'B1vy',
        c: 0x145,
        a: '!2Fj',
        H: 0x1d2,
        f: 'Fumx',
        p: 0x21a,
        t: 'aoOp',
        q: '8WrO',
        A: 0x14f,
        b: '!2Fj',
        w: 0x37d,
        d: 'O)!^',
        M: 0x350,
        F: 'jG&J',
        N: 0x361,
        g: 'ELcZ',
        X: ')z^x',
        r: 0x2e4,
        n: '*5)D',
        L: 0x18b,
        R: 'zqRo',
        T: 0x1e0,
        P: 0x3f6,
        V: 0x3aa,
        D: 'mhM!',
        S: 'aac8',
        l: 0x1ab,
        z: 'fS1Z',
        Wa: '!2Fj',
        WH: 0x160,
        Wf: 0x146
    };
    const W2 = KuWo_z;
    const G = {};
    G["nXrIQ"] = "https://image.kuw" + "o.cn/upload/pic" + "tures/20250107/" + "7f13b630e20d.png";
    G['uWzeB'] = 'https://image.k' + "uwo.cn/upload/pic" + "tures/20250107/" + "4f4544760a9f.png";
    G["icon"] = "超级会员";
    G["name"] = "音乐会员";
    G['mkrKB'] = '超级会员';
    G["desc"] = "豪华会员";
    const m = G;
    const B = {};
    B["bg"] = m['nXrIQ'];
    B["icon"] = m["uWzeB"];
    B["name"] = m["icon"];
    B['luxuryIcon'] = "https://image.kuw" + "o.cn/upload/pic" + "tures/20250107/" + "b34dfc4a2503.png";
    B["desc"] = m["name"];
    B["type"] = m["desc"];
    B["vipType"] = KuWo["isVip"] && m["mkrKB"] || m["desc"];
    B["expireTime"] = '' + KuWo["endTime"];
    B["vipStatus"] = KuWo["isVip"];
    B["startTime"] = '' + KuWo["startTime"];
    B["vipLuxury"] = '' + KuWo["isLuxuryVip"];
    B["isNewUser"] = '' + KuWo["isNew"];
    B["isRenew"] = '' + KuWo["isRenew"];
    B["renewType"] = '2';
    B["isBuy"] = '1';
    B["isTry"] = '1';
    B["isExperience"] = '1';
    const Q = B;
    Object["assign"](obj["data"], Q);
    delete obj["data"]["needBieds"];
    delete obj['data']['adActUrl'];
    body = $["toStr"](obj);
    const K = {};
    K["body"] = body;
    $['done'](K);
}
async function bookVip(k) {
    const KuWo_E2 = {
        W: 0x231,
        E: '*5)D',
        k: 'zqRo',
        G: 0x2f3,
        m: 'UFI5',
        B: 0x210,
        Q: 'brgE',
        K: 0x4ae,
        j: 0x285,
        O: 0x30f,
        o: '7Nbb',
        U: 0x275,
        I: 0x40d,
        s: 'vR@M',
        h: 0x35b,
        J: 'zqRo',
        Z: 0x401,
        x: 0x280,
        y: 'ELcZ',
        Y: '%kn9',
        C: 'RLNw',
        c: '8WrO',
        a: 'c1pJ',
        H: 0x1d5,
        f: 0x2bd,
        p: 'Wdz#',
        t: 0x423,
        q: 0x3e4,
        A: 0x3e6,
        b: 'Wdz#',
        w: 'aoOp',
        d: 0x489,
        M: 0x24b,
        F: 'ZuH&',
        N: 'e4Uv',
        g: '$(EM',
        X: 0x23a,
        r: '%kn9',
        n: 0x28e,
        L: 'FfKZ',
        R: 0x1fb,
        T: 0x202,
        P: 'JjWW',
        V: 'GWWH'
    };
    const W3 = KuWo_z;
    const G = {};
    G["YdGvV"] = function(B, Q) {
        return B in Q;
    };
    G["songs"] = 'songs';
    G["FGLYn"] = function(B, Q) {
        return B !== Q;
    };
    G["twLmt"] = 'yMuNK';
    G["HqWHc"] = "songs";
    G["byRhf"] = "\"playright\":1,\"downright\":1,\"type\":0,\"bought\":1,\"bought_vip\":1,\"limitfree\":1,\"vipType\":1";
    G["WvDga"] = "\"end\":9999999999,\"endtime\":9999999999,\"vipExpires\":9999999999,\"bought_vip_end\":9999999999";
    G["BvLwA"] = function(B, Q) {
        return B === Q;
    };
    G["policy"] = "\"policy\":1";
    const m = G;
    try {
        if (m["YdGvV"](m["songs"], obj)) {
            if (m["FGLYn"](m["twLmt"], m["twLmt"])) {
                delete k[G];
            } else {
                for (let K in obj["songs"]) {
                    const j = obj['songs'][K];
                    const {
                        id: id = body["replace"](/.*?\"id\":(\d+).*/, '$1')
                    } = j;
                    if ("string" == typeof id) {
                        KuWo["PlayID"] = id;
                        KuWo["Song"] = "book";
                        $["setval"]($["toStr"](KuWo), "KuWo");
                        break;
                    }
                }
            }
        }
        body = body["replace"](/(policy|policytype)\":\d/g, m["policy"])["replace"](/(playright|downright|type|bought|bought_vip|limitfree|vipType)\":\d/g, m['byRhf'])["replace"](/(end|endtime|vipExpires|bought_vip_end)\":\d+/g, m["WvDga"]);
        const B = {};
        B["body"] = body;
        $["done"](B);
    } catch (O) {
        if (m["BvLwA"](m["twLmt"], m["twLmt"])) {
            throw new Error('处理' + k + "时发生错误：" + $["toStr"](O));
        } else {
            const U = {};
            U["params"] = '';
            U["url"] = null;
            U["route"] = 0x1;
            U['requestUrlType'] = 0x1;
            const I = U;
            B["assign"](Q["data"]["list"]["ad"]["route"], I);
            K = j["toObj"](O);
        }
    }
}
async function musicInfo(G) {
    const KuWo_EW = {
        W: 0x475,
        E: 0x3ee,
        k: 'GWWH',
        G: 0x424,
        m: 'BLBk',
        B: 0x314,
        Q: '$(EM',
        K: 0x2c6,
        j: 0x19f,
        O: 'vR@M',
        o: 0x2b2,
        U: 0x23b,
        I: '8WrO',
        s: 0x42a,
        h: 'B1vy',
        J: 0x2b5,
        Z: 0x3a3,
        x: 0x263,
        y: 0x2ed,
        Y: 'BLBk',
        C: 0x3ab,
        c: 0x3f3,
        a: 0x175,
        H: 0x394,
        f: 't[[n',
        p: 0x286,
        t: 'aoOp',
        q: 'JjWW',
        A: 0x281,
        b: 0x295,
        w: 0x3b3,
        d: 'c1pJ',
        M: 'pJs9',
        F: 0x3f1,
        N: 0x233,
        g: 0x329
    };
    const KuWo_E9 = {
        W: 0x422,
        E: 's95%',
        k: 'UFI5',
        G: 0x49d,
        m: 0x3e0,
        B: 'fS1Z',
        Q: 0x39e,
        K: '(Xa]',
        j: 'ELcZ',
        O: 0x2ae,
        o: 'BLBk',
        U: 0x256,
        I: 0x2dd,
        s: 0x3fa,
        h: 0x159,
        J: 0x1d6,
        Z: '%kn9',
        x: 0x4ac,
        y: 0x488,
        Y: 0x456,
        C: '8X0X',
        c: 0x3a9,
        a: 0x223,
        H: 'JjWW',
        f: 0x2bc,
        p: 0x28d,
        t: '^Zar',
        q: 0x1a0,
        A: 0x2a6,
        b: 'aac8'
    };
    const KuWo_E7 = {
        W: 0x1c0
    };
    const W4 = KuWo_z;
    const m = {};
    m["PfdEO"] = "获取" + "m";
    m['jNmMN'] = function(Q, K) {
        return Q + K;
    };
    m['LpoqK'] = '320k';
    m["tHUnI"] = "获取酷我" + "授权信息…";
    m["LgVbN"] = '\x20已授权';
    m["msg"] = "KuWo";
    m['ENSOK'] = function(Q, K) {
        return Q !== K;
    };
    m['EUlFZ'] = 'EUlFZ';
    m['LpoqK'] = function(Q, K) {
        return Q === K;
    };
    m["LpoqK"] = "320k";
    m["IAxBV"] = function(Q, K) {
        return Q in K;
    };
    m["IAxBV"] = "st";
    m["qrgjo"] = 'qrgjo';
    m["dxXFY"] = 'dxXFY';
    m["fmt"] = "fmt";
    m['USeri'] = 'music';
    m['NUeCn'] = 'KuWo';
    m["USeri"] = "pay";
    m["EmFku"] = 'EmFku';
    const B = m;
    try {
        if ("songs" in obj && Array['isArray'](obj["songs"])) {
            const {
                id: id = body['replace'](/.*?\"id\":(\d+).*/, '$1')
            } = obj['songs'][0x12f4 + 0xd * 0x5f + 0x3 * -0x7ed];
            KuWo["PlayID"] = parseInt(id);
            KuWo['Song'] = B["msg"];
            $["setval"]($["toStr"](KuWo), "KuWo");
            obj["songs"][0x101e + -0x19e2 * 0x1 + 0x9c4]["formats"] = obj['songs'][0xd87 + 0x19b * -0x8 + -0xaf]["formats"]["filter"](j => {
                const W5 = W4;
                const O = {
                    'svVGG': B["PfdEO"],
                    'wjylF': function(o, U) {
                        const W6 = W5;
                        return B["jNmMN"](o, U);
                    },
                    'lHrOK': B['jNmMN'],
                    'GyCEd': function(o, U) {
                        return o + U;
                    },
                    'ZyYld': B["tHUnI"],
                    'aapLr': B['PfdEO'],
                    'zRJlO': B["msg"]
                };
                if (B["EUlFZ"]('EUlFZ', B["EUlFZ"])) {
                    let U = Q["time"](O["svVGG"], K['endTime']);
                    j["log"](O["wjylF"](O["wjylF"](O["wjylF"]("获取酷我授权信息…" + O, O["zRJlO"]), U));
                    o['msg'](O["GyCEd"](O['ZyYld'], U) + O["aapLr"], '', O["zRJlO"] + U);
                } else {
                    if (B['LpoqK'](j['fmt'], B['LpoqK'])) {
                        return ![];
                    }
                    if (B["IAxBV"](B["IAxBV"], j)) {
                        if (B["LpoqK"](B["qrgjo"], B["dxXFY"])) {
                            j['st'] = 0x50d * 0x3 + 0x1 * -0x1a3 + -0x6c2 * 0x2;
                        } else {
                            Q['assign'](K["data"]["list"]["ad"]["route"], j);
                            O["toObj"](o["http"]["post"]["searchParams"]["set"], U);
                        }
                    }
                    return !![];
                }
            });
        }
        const Q = {};
        Q["st"] = 0x0;
        if (B["IAxBV"](B['USeri'], obj["songs"][-0x1574 + 0x1 * -0x65 + 0x15d9])) obj["songs"][-0xf2 * -0xb + 0x13ef + -0x1e55]["pay"] = Q;
        body = $["toStr"](obj);
        const K = {};
        K['body'] = body;
        $["done"](K);
    } catch (j) {
        if (B["ENSOK"](B["EmFku"], B["EmFku"])) {
            throw new Error('处理' + G + '时发生错误：' + $['toStr'](j));
        } else {
            B = Q["body"];
            K = j["toObj"](O);
        }
    }
}
async function vipTheme() {
    const KuWo_Em = {
        W: 0x317,
        E: '*W0]',
        k: 0x338,
        G: '$(EM',
        m: 0x19c,
        B: 's(Fh',
        Q: 0x439,
        K: 0x44f,
        j: 0x4b1,
        O: 'vR@M',
        o: 'brgE',
        U: 0x3a0,
        I: 'hXY1',
        s: 'hO2S',
        h: 'gM)%',
        J: 'v[77',
        Z: 0x3dc,
        x: 'Wdz#',
        y: '8WrO',
        Y: 'pJs9',
        C: 0x164,
        c: 'Hsgv',
        a: 0x44f,
        H: 'aoOp',
        f: 0x1d1,
        p: '7uKI',
        t: 0x248,
        q: 'fS1Z',
        A: 0x36a,
        b: 'ELcZ',
        w: 0x458,
        d: 'GWWH',
        M: 0x3f2,
        F: 0x28f,
        N: 'Hsgv',
        g: 0x412,
        X: 'zZNT',
        r: 0x1d3,
        n: 'vz0Z'
    };
    const W7 = KuWo_z;
    const G = {};
    G["KlBwy"] = '\x22$1\x22:null';
    G['XJkYm'] = function(Q, K) {
        return Q in K;
    };
    G['zhkfP'] = '全部免费';
    G["vEGjL"] = function(Q, K) {
        return Q in K;
    };
    G["BkykF"] = function(Q, K) {
        return Q === K;
    };
    G["JvjLa"] = "needBieds";
    G['vEGjL'] = "hangerList";
    const m = G;
    if (m["XJkYm"]("vipTypes", obj["data"])) {
        obj["data"]["vipTypes"]["title"] = m['zhkfP'];
        delete obj["data"]['needBieds'];
        body = $["toStr"](obj);
    } else if (m["vEGjL"]("hangerList", obj["data"])) {
        if (m["BkykF"](m["JvjLa"], m["JvjLa"])) {
            const Q = {};
            Q["price"] = '';
            Q["rightId"] = null;
            Q['rightStatus'] = 0x1;
            Q['requestUrlType'] = 0x1;
            const K = Q;
            Object["assign"](obj["data"]["list"], K);
            body = $["toStr"](obj);
        } else {
            B = G["replace"](/\"(btnTipText|jumpUrl|tipText)\":\".*?\"/g, m['KlBwy']);
        }
    } else {
        body = body["replace"](/\"(paymentType)\":\d/g, "\"paymentType\":0")['replace'](/(umpUrl)\":\".*?\"/g, m["KlBwy"]);
    }
    const B = {};
    B["body"] = body;
    $["done"](B);
}
async function kwBookHome() {
    const KuWo_EB = {
        W: 'hO2S',
        E: 0x3dd,
        k: 'JjWW',
        G: '%kn9',
        m: 'vz0Z',
        B: 0x328,
        Q: 'hXY1'
    };
    const W8 = KuWo_z;
    const G = {};
    G["dzhFn"] = '畅听服务由影子提供';
    const m = G;
    const B = {};
    B["image"] = null;
    B["text"] = '酷我畅听';
    B['url'] = null;
    B["subtext"] = m["dzhFn"];
    const Q = B;
    Object["assign"](obj["data"], Q);
    body = $["toStr"](obj);
    const K = {};
    K["body"] = body;
    $["done"](K);
}
async function bottomTab() {
    const KuWo_EK = {
        W: 0x340,
        E: 'v[77',
        k: '*5)D',
        G: 0x447,
        m: 'GWWH',
        B: 'zZNT',
        Q: 'XTE%',
        K: 't[[n',
        j: 'UFI5',
        O: 0x386,
        o: 'hXY1',
        U: 0x4b4,
        I: 'FfKZ',
        s: 'vz0Z',
        h: 'zqRo',
        J: 0x2fd,
        Z: 'r7]n',
        x: 'aac8'
    };
    const W9 = KuWo_z;
    const G = {};
    G["HkQDG"] = function(j, O) {
        return j in O;
    };
    G["abConfig"] = "abConfig";
    const m = G;
    const B = {};
    B["isNew"] = '0';
    B["show"] = '0';
    const Q = B;
    if (m["HkQDG"](m["abConfig"], obj["data"])) {
        Object["assign"](obj["data"]["abConfig"]['bottomTabTestFo' + 'rUser']["group"], Q);
        Object["assign"](obj["data"]["abConfig"]["bottomTabTestForUser"]["group"], Q);
    } else {
        Object["assign"](obj["data"], Q);
    }
    body = $["toStr"](obj);
    const K = {};
    K['body'] = body;
    $['done'](K);
}
async function myPageVipBox() {
    const KuWo_EO = {
        W: 0x32d,
        E: 'FfKZ',
        k: 0x43d,
        G: 'GWWH',
        m: 0x2f0,
        B: 0x40b,
        Q: 0x3a2,
        K: 'pJs9',
        j: 0x3ae,
        O: '(Xa]',
        o: '7Nbb',
        U: 0x432,
        I: 0x418,
        s: 'JjWW',
        h: 0x391,
        J: 0x2d0,
        Z: '^Zar',
        x: 'r7]n',
        y: 'ELcZ',
        Y: 0x1ec,
        C: 0x1cd,
        c: 0x1e4,
        a: 'c1pJ',
        H: 0x492,
        f: '$(EM',
        p: 0x2be,
        t: 'Wdz#',
        q: 0x3de,
        A: 'FuBd',
        b: 0x315,
        w: 'zZNT',
        d: 'O)!^',
        M: 0x251,
        F: 'EMD#',
        N: 0x2da,
        g: 0x305,
        X: '^Zar',
        r: 'aac8',
        n: '7uKI',
        L: 0x31c,
        R: '*W0]',
        T: 0x39a,
        P: 0x212,
        V: 0x344,
        D: 'XTE%',
        S: 0x372,
        l: 0x23e,
        z: 0x1e8,
        Wa: 0x41d,
        WH: 'FfKZ'
    };
    const WW = KuWo_z;
    const k = {};
    k['juVqh'] = function(Q, K) {
        return Q > K;
    };
    k['VHfOB'] = 'title';
    k["SSyHi"] = "已过期";
    k['PGJuh'] = "看广告";
    k['Atpyi'] = 'route';
    k["subtext"] = "fmt";
    k["OmRTL"] = "https://image.kuw" + "o.cn/upload/pic";
    k["params"] = "tures/20250107/";
    k["time"] = "b34dfc4a2503.png";
    k['ugOoV'] = "影子";
    const G = k;
    const m = ("3|4|8|0|6|2|1|5|7")["split"]('|');
    let B = 0x4c7 * -0x8 + 0x902 + 0x1d36;
    while (!![]) {
        switch (m[B++]) {
            case '0':
                delete obj["data"]["list"][0x211f + -0x683 * 0x1 + -0x1a9c]['route'];
                continue;
            case '1':
                if (G['juVqh'](KuWo["endTime"], new Date()['getTime']())) {
                    obj['data']['list'][0x11e * 0x1d + -0x297 + -0x1dce][G['VHfOB']] = G["SSyHi"];
                    obj['data']['list'][-0x635 + 0xdb * 0x10 + -0x77a]['description'] = $["time"]("yyyy-MM-dd", KuWo["isVip"]);
                    obj['data']['list'][-0x24 * -0x6c + 0x2e9 + 0x3 * -0x608][G['Atpyi']]["params"][G["subtext"]] = G["OmRTL"];
                }
                continue;
            case '2':
                delete obj['data']['list'][-0x7a * -0x49 + -0x51e + -0x76b * 0x4][G["subtext"]];
                continue;
            case '3':
                obj["data"]["list"][0x3 * 0x15c + -0x26a2 + 0x3d7 * 0x9]["text"] = "YingZi";
                continue;
            case '4':
                obj["data"]["list"][-0x28 * -0x2b + -0x3 * 0x277 + 0x2 * 0x57][G["VHfOB"]] = G['SSyHi'];
                continue;
            case '5':
                body = $["toStr"](obj);
                continue;
            case '6':
                obj["data"]["list"][0x23dc + -0x14 * -0x32 + -0x15f * 0x1d][G['Atpyi']]["params"][G["subtext"]] = 'https://napi.lt' + "love.life/subscri" + "be?token=" + KuWo["token"];
                continue;
            case '7':
                const Q = {};
                Q["body"] = body;
                $["done"](Q);
                continue;
            case '8':
                obj["data"]['list'][0x17a2 + -0x1466 * 0x1 + -0x33c][G["VHfOB"]] = G["params"];
                continue;
        }
        break;
    }
}
async function indexTopAd() {
    const KuWo_EI = {
        W: 0x419,
        E: 'ELcZ',
        k: 0x297,
        G: 0x342,
        m: 0x3b4,
        B: '8X0X',
        Q: 'B1vy',
        K: 0x26b,
        j: 'BLBk',
        O: 'GWWH',
        o: 0x229,
        U: 0x438,
        I: 'hXY1',
        s: 0x1e9,
        h: 0x2ea,
        J: 0x222,
        Z: 0x3c3,
        x: 0x445,
        y: '*W0]'
    };
    const WE = KuWo_z;
    const k = {};
    k["szcHy"] = '看短剧';
    k['zXqnn'] = function(K, j) {
        return K in j;
    };
    k["homeTop"] = "homeTop";
    k["vQdOu"] = function(K, j) {
        return K === j;
    };
    k["uTtkA"] = "YingZi";
    const G = k;
    let m = ['发现', '推荐', '听书', G['szcHy']];
    let B = -0x1 * -0x19df + -0x1 * 0x752 + -0x128d;
    while (G['zXqnn'](G["homeTop"], obj["data"]) && obj["data"]['homeTop'][B]) {
        if (!m['includes'](obj["data"]["homeTop"][B]["title"]) && "YingZi" !== obj["data"][G["homeTop"]][B]["route"]) {
            if (G["vQdOu"](G["uTtkA"], G["uTtkA"])) {
                delete obj['data']["homeTop"][B];
            } else {
                Q['st'] = -0x7e8 + 0x1249 + -0x1 * 0xa61;
            }
        }
        B++;
    }
    body = $["toStr"](obj);
    const Q = {};
    Q['body'] = body;
    $["done"](Q);
}
async function bookPageAdBar() {
    const KuWo_Ef = {
        W: 'r7]n',
        E: 0x26d,
        k: 's(Fh',
        G: 0x3fb,
        m: 'v[77',
        B: 0x3cb,
        Q: 0x34c,
        K: 0x34a,
        j: 'zZNT',
        O: 0x3c8,
        o: 'hO2S',
        U: 0x3e8,
        I: 'aac8',
        s: 0x18a,
        h: 's(Fh',
        J: 0x209,
        Z: 's(Fh',
        x: 0x3c9,
        y: 'vR@M',
        Y: 0x1fd,
        C: 'RLNw',
        c: 0x3fc,
        a: 'ELcZ',
        H: 0x25f,
        f: 'mhM!',
        p: 0x2bf,
        t: '*5)D',
        q: 0x3c5,
        A: 0x230,
        b: 't[[n',
        w: 0x27c,
        d: 0x3df,
        M: 'c1pJ'
    };
    const KuWo_EH = {
        W: 'Fumx',
        E: 'UFI5',
        k: '7Nbb',
        G: 0x38c,
        m: 'vz0Z',
        B: 'vR@M'
    };
    const KuWo_Ea = {
        W: '7uKI',
        E: 0x48d,
        k: ')z^x',
        G: 0x2f8,
        m: '7Nbb',
        B: 0x3f5,
        Q: 0x365,
        K: 0x3f4,
        j: 'zZNT',
        O: 0x3b5,
        o: 'RLNw',
        U: '*W0]',
        I: 0x484,
        s: 0x395,
        h: '8WrO',
        J: 'jG&J',
        Z: 0x277,
        x: 'c1pJ',
        y: 0x47a,
        Y: 'O)!^',
        C: 0x2f7,
        c: 0x1cf,
        a: 0x3f9,
        H: 'ZuH&',
        f: 0x34e,
        p: 0x242,
        t: 0x376,
        q: 0x27e,
        A: 'FfKZ',
        b: 0x403,
        w: 0x22a,
        d: 0x40a,
        M: 0x452,
        F: 'hXY1',
        N: 0x258,
        g: '$(EM',
        X: 0x435,
        r: 'UFI5',
        n: '%kn9',
        L: '(Xa]',
        R: 'zZNT',
        T: 0x370,
        P: 'w4yZ',
        V: 0x171,
        D: 0x1d0,
        S: 0x471,
        l: 'jG&J'
    };
    const Wk = KuWo_z;
    const E = {
        'QCmlE': 'object',
        'twdJD': 'string',
        'PnKVl': function(B, Q) {
            return B !== Q;
        },
        'yOUvc': 'RgtNo',
        'oEBsA': "Time",
        'fJZhC': function(B, Q) {
            return B === Q;
        },
        'IeCqA': 'KNCvK',
        'cGGud': "超级会员",
        'NLrAC': "已过期",
        'wSNTY': "https://h5s.kuw",
        'xyzHu': "o.cn/m/vip/202302" + "/240322/index.html",
        'jGdQL': 'https://h5s.kuw' + "o.cn/m/vip/202302" + "/240322/index.html",
        'LyugZ': function(B, Q) {
            return B !== Q;
        },
        'BBuGC': function(B, Q) {
            return B === Q;
        },
        'cpyKH': "url",
        'wKfyn': function(B, Q) {
            return B(Q);
        },
        'AOsZF': function(B, Q) {
            return B === Q;
        },
        'OVwSo': "豪华会员",
        'TLIUv': "会员",
        'YBtMn': "ad",
        'MwXoT': 'LPLkf',
        'DQWJW': function(B, Q) {
            return B in Q;
        },
        'TbZKF': 'data',
        'TbxyC': "list",
        'fOCvr': function(B, Q, K) {
            return B(Q, K);
        },
        'BHzih': function(B, Q, K) {
            return B(Q, K);
        },
        'BfZvd': "info"
    };
    const k = B => {
        const WG = Wk;
        const Q = {};
        Q["title"] = "看短剧";
        Q["includes"] = E['QCmlE'];
        const K = Q;
        for (let j in B) {
            if (typeof B[j] === E["twdJD"]) {
                if (E["PnKVl"]('RgtNo', E["yOUvc"])) {
                    if (Q["some"](J => I["data"]["homeTop"][s]["title"]["includes"](J))) delete O['data'][K["title"]][o]["route"];
                    U++;
                } else {
                    if (j["endsWith"](E['oEBsA'])) {
                        if (E["fJZhC"](E["IeCqA"], E["IeCqA"])) {
                            B[j] = KuWo['endTime'] && E["cGGud"] || E['NLrAC'];
                        } else {
                            if (Q['some'](J => I["data"][s]['title']["includes"](J))) delete O["data"][o]["route"];
                            U++;
                        }
                    }
                    if (j["endsWith"](E["cpyKH"])) {
                        B[j] = E["jGdQL"];
                    }
                    if (j["endsWith"]("Id")) {
                        B[j] = null;
                    }
                }
            } else if (typeof B[j] === "object" && E['LyugZ'](B[j], null)) {
                if (E["BBuGC"]("LPLkf", E["MwXoT"])) {
                    E["wKfyn"](k, B[j]);
                } else {
                    if (B) {
                        o = U['replace'](K["title"], "<body><script>" + "function startCheck" + "(){let interval=set" + "Interval(()=>{const" + " elements=documen" + "t.getElementsByCl" + "assName('ad');if(e" + "lements.lengt" + "h>0){const d=el" + "ements[0];if(wi" + "ndow.getCompute" + "dStyle(d).displ" + "ay==='none'){retu" + "rn interval;}let " + "intervalId=star" + "tChecking();docume" + "nt.addEve" + "ntListener('v" + "isibilitychange" + "',()=>{if(docum" + "ent.visibilitySta" + "te==='visible'){i" + "ntervalId=startC" + "hecking();}else if" + "(document" + ".visibilityStat" + "e==='hidden'){in" + "tervalId=star" + "tChecking();}});d" + "ocument.addEv" + "entListener('DO" + "MContentLoaded" + "',()=>{const inte" + "rvalId=startChec" + "king();});</script>" + '</body>');
                    }
                    const I = {};
                    I["body"] = O;
                    j["done"](I);
                }
            }
        }
    };
    const G = (B, Q = []) => {
        const Wm = Wk;
        if (E["LyugZ"](typeof Q, "object")) {
            if (E["AOsZF"]("KNCvK", "KNCvK")) {
                Q = [Q];
            } else {
                G(m[B]);
            }
        }
        for (let j in B) {
            if (!Q["includes"](j)) {
                if (E['LyugZ'](E["MwXoT"], E['MwXoT'])) {
                    delete B[j];
                } else {
                    E %= -0xe88 * -0x2 + 0x204a + 0x67 * -0x96;
                }
            }
        }
    };
    if (E["DQWJW"](E["TbZKF"], obj)) {
        const B = [E["YBtMn"], "info"];
        E["fOCvr"](G, obj['data'], B);
        E["BHzih"](G, obj["data"]["list"], E["BfZvd"]);
        k(obj["data"]);
    }
    body = $['toStr'](obj);
    const m = {};
    m["body"] = body;
    $["done"](m);
}
async function bookPageAd() {
    const KuWo_Et = {
        W: 'aac8',
        E: 0x1ce,
        k: '%kn9',
        G: 0x25b,
        m: 'Wdz#',
        B: 0x2c9,
        Q: 0x180,
        K: '8X0X',
        j: 0x4ab,
        O: 'zqRo',
        o: 'brgE',
        U: 0x1c2,
        I: 0x38a,
        s: 0x43c,
        h: 0x21f,
        J: 0x288,
        Z: 0x347,
        x: 0x22e,
        y: 0x29c,
        Y: 0x1d8,
        C: '^Zar',
        c: 0x2df
    };
    const WB = KuWo_z;
    const k = {};
    k["title"] = "ad";
    k["oRAdQ"] = "sub";
    k["jowGd"] = "YingZi";
    k['SpBkD'] = '看广告';
    k["list"] = 'child';
    k["oRAdQ"] = function(K, j) {
        return K !== j;
    };
    k["jowGd"] = 'jowGd';
    const G = k;
    let m = [G["title"], "radio", G["oRAdQ"]];
    let B = 0x873 + 0xa82 + -0x12f5;
    while (obj["data"][G["list"]][B]) {
        if (G['oRAdQ'](G["jowGd"], G["jowGd"])) {
            k = G["replace"](/\"(paymentType)\":\d/g, G['OmRTL'])['replace'](/(umpUrl)\":\".*?\"/g, G["jowGd"]);
        } else {
            if (m["some"](j => obj['data']["child"][B]["title"]['includes'](j))) delete obj["data"][G["list"]][B][G["list"]];
            B++;
        }
    }
    body = $['toStr'](obj);
    const Q = {};
    Q["body"] = body;
    $['done'](Q);
}
async function vipTabAd() {
    const KuWo_Ed = {
        W: 0x167,
        E: '7Nbb',
        k: 0x2ad,
        G: 'O)!^',
        m: 0x1b9,
        B: 'ELcZ',
        Q: 0x37b,
        K: '!2Fj',
        j: 0x195,
        O: 0x1ba,
        o: '8X0X',
        U: 0x267,
        I: 'hXY1',
        s: 0x15f,
        h: 0x41c,
        J: 0x151,
        Z: 'zZNT',
        x: 0x375,
        y: 'w4yZ',
        Y: 0x250,
        C: 'zqRo',
        c: 0x208,
        a: 'hO2S',
        H: 'B1vy',
        f: 'Fumx',
        p: 'GWWH',
        t: 0x2ff,
        q: 'hO2S',
        A: 0x46d,
        b: 0x37e,
        w: 0x3a7,
        d: '7Nbb',
        M: 0x2da,
        F: 0x247,
        N: '7uKI',
        g: '7Nbb',
        X: 0x470,
        r: 'hXY1',
        n: 0x1cc,
        L: '(Xa]',
        R: 0x183,
        T: 'aac8'
    };
    const WQ = KuWo_z;
    const E = {
        'naSAu': function(G, m) {
            return G(m);
        },
        'MUsYG': function(G, m) {
            return G < m;
        },
        'oJIjN': function(G, m) {
            return G ^ m;
        },
        'hvVnP': 'tab',
        'tUNND': function(G, m) {
            return G === m;
        },
        'HzMDt': 'MdZcz',
        'ZDRGC': "YingZi",
        'muyZd': "ad",
        'YRYrk': "https://image.kuw" + "o.cn/upload/pic" + "tures/20250107/",
        'NtoiP': 'topics',
        'pJJfa': "data",
        'WNSDB': "vipTypes"
    };
    if (E["hvVnP"] in obj["data"]) {
        if (E["tUNND"](E["HzMDt"], E["HzMDt"])) {
            obj["data"][E["hvVnP"]]["vipTypes"][0x1 * 0x91e + 0x11b8 + -0x1ad6]["ad"][0x1c04 + -0x7 * -0x3dd + -0x370f][E["hvVnP"]] = E["ZDRGC"];
            let G = 0xc1a * -0x2 + -0x277 * -0xd + 0x1 * -0x7d6;
            while (obj["data"][E["pJJfa"]]['vipTypes'][-0x41e + 0x523 + 0x9 * -0x1d][E["hvVnP"]][G]) {
                delete obj["data"][E["pJJfa"]]['vipTypes'][-0x41e + 0x523 + 0x9 * -0x1d][E["hvVnP"]][G];
                G++;
            }
        } else {
            let B = new K()["naSAu"](j);
            let Q = new O(E["naSAu"](o, U)['split']('')['map'](Y => Y['charCodeAt'](-0x1c97 + -0xeac + 0x2b43)));
            let K = new I(Q["decode"]);
            for (let j = 0xb8b * -0x3 + 0x189b + 0xa06; E["MUsYG"](j, Q["length"]); j++) {
                let O = E['oJIjN'](Q[j], B[j % B["length"]]);
                while (O >= -0x2094 + 0xb73 + 0x1621) {
                    O %= -0x6d * -0xf + -0x63 * 0x5a + 0x11 * 0x1bb;
                }
                K[j] = O;
            }
            return new s()['decode'](K);
        }
    } else if (Array["isArray"](obj["data"])) {
        let B = [E["muyZd"], "topics"];
        let Q = -0x1c69 + -0x1cf * 0xe + 0x35bb;
        while (obj["data"][Q]) {
            if (B["some"](K => obj["data"][Q]["title"]["includes"](K))) delete obj['data'][Q][E["NtoiP"]];
            Q++;
        }
    }
    body = $['toStr'](obj);
    const k = {};
    k["body"] = body;
    $["done"](k);
}
async function vipTabUserBox() {
    const KuWo_EN = {
        W: 'pJs9',
        E: 'ELcZ',
        k: 0x32e,
        G: 0x219,
        m: 0x2fe,
        B: 0x318,
        Q: 0x454,
        K: 'UFI5',
        j: 'v[77',
        O: 0x23d,
        o: 'gM)%',
        U: 0x39f,
        I: 'aac8',
        s: 0x173,
        h: 0x455,
        J: 'BLBk',
        Z: 0x45a,
        x: 'zZNT',
        y: '7uKI',
        Y: 0x2fa,
        C: 0x47f,
        c: 0x2fb,
        a: 'UFI5',
        H: 0x436,
        f: 'GWWH',
        p: 0x15d,
        t: 0x3cc,
        q: 's95%',
        A: '7Nbb',
        b: 'vz0Z',
        w: 0x1c5,
        d: 'vR@M',
        M: 0x19e,
        F: 0x306,
        N: 's(Fh',
        g: 'BLBk',
        X: 0x378,
        r: 0x282,
        n: 'mhM!',
        L: 0x163,
        R: 0x48c,
        T: 't[[n',
        P: 0x2c4,
        V: 0x389,
        D: 0x176,
        S: '^Zar',
        l: 0x413,
        z: 'mhM!',
        Wa: 0x3e9,
        WH: 0x413
    };
    const WK = KuWo_z;
    const k = {};
    k["gMhJt"] = '看短剧';
    k['AUisp'] = function(B, Q) {
        return B in Q;
    };
    k['lYVTD'] = 'homeTop';
    k['CohzC'] = 'title';
    k['wqyCm'] = 'route';
    k["WnIqK"] = function(B, Q) {
        return B !== Q;
    };
    const G = k;
    if (body) {
        if (G["WnIqK"]("YingZi", "YingZi")) {
            body = body["replace"]("</body>", "<script>functio" + "n startChecking" + "(){let interval" + "=setInterval(()" + "=>{const elemen" + "ts=document.get" + "ElementsByClass" + "Name('ad');if(e" + "lements.lengt" + "h>0){const d=e" + "lements[0];if(wi" + "ndow.getCompute" + "dStyle(d).displa" + "y==='none'){int" + "ervalId=startCh" + "ecking();docume" + "nt.addEve" + "ntListener('v" + "isibilitychange" + "',()=>{if(docum" + "ent.visibilityStat" + "e==='visible'){i" + "ntervalId=startC" + "hecking();}else " + "if(document.vis" + "ibilityStat" + "e==='hidden'){cl" + "earInterval(inte" + "rvalId);}})}});" + "}document.add" + "EventListener('DO" + "MContentLoaded'" + ",()=>{intervalI" + "d=startChecking" + "();});</script>" + "</body>");
        } else {
            let Q = ['发现', '推荐', '听书', G["gMhJt"]];
            let K = -0x1d54 * -0x1 + 0xa3f + -0x2793;
            while (G['AUisp'](G['lYVTD'], o["data"]) && U["data"]['homeTop'][K]) {
                if (!Q["includes"](C['data']['homeTop'][K][G["CohzC"]]) && '200043/index.js' !== c["data"]['homeTop'][K][G['wqyCm']]) {
                    delete H['data']["homeTop"][K];
                }
                K++;
            }
            J = Z["toStr"](x);
            const j = {};
            j['body'] = Y;
            y["done"](j);
        }
    }
    const m = {};
    m["body"] = body;
    $["done"](m);
}
async function bookListAd() {
    const KuWo_En = {
        W: 0x188,
        E: '7Nbb',
        k: 0x36c,
        G: 0x1e2,
        m: 'vz0Z',
        B: 0x198,
        Q: 0x2d3,
        K: '8WrO',
        j: 0x299,
        O: 'gM)%',
        o: 'e4Uv',
        U: 'zZNT',
        I: 0x1d9,
        s: 'UFI5',
        h: '!2Fj',
        J: '8X0X',
        Z: 'zZNT',
        x: '7uKI',
        y: 0x2e2,
        Y: 'RLNw',
        C: 0x478,
        c: 0x26a,
        a: 'JjWW',
        H: 0x35a,
        f: '(Xa]',
        p: 0x2d2,
        t: 'GWWH'
    };
    const KuWo_Er = {
        W: '*5)D',
        E: 0x3d6,
        k: 'pJs9',
        G: 0x169,
        m: '^Zar',
        B: 0x3ba,
        Q: 0x465,
        K: 0x237,
        j: 0x199,
        O: '8X0X',
        o: 0x19a,
        U: 0x147,
        I: 'w4yZ',
        s: 0x363,
        h: 'ELcZ',
        J: 0x351,
        Z: 'r7]n',
        x: 'pJs9',
        y: 0x2a5,
        Y: 'vz0Z',
        C: 0x1a9,
        c: 'pJs9',
        a: 0x47e,
        H: 0x457,
        f: 0x40e,
        p: 0x33a
    };
    const Wj = KuWo_z;
    const k = {};
    k["DcmXq"] = "ad_info";
    k["uhYgm"] = "pay_info";
    k['sNOaW'] = "basedata";
    k["HjBjm"] = "advert";
    k["uhYgm"] = function(Q, K) {
        return Q === K;
    };
    k["HjBjm"] = "YingZi";
    k["DcmXq"] = function(Q, K) {
        return Q in K;
    };
    k["pay_info"] = "data";
    k["basedata"] = "payInfo";
    k['jrHWJ'] = "payMiniBar";
    k["advert"] = "child_level_inf" + "o";
    k["ad_info"] = "https://image.kuw" + "o.cn/upload/pic";
    const G = k;
    const m = [G["DcmXq"], G["uhYgm"], G['sNOaW'], G["HjBjm"]];
    m["forEach"](Q => {
        const WO = Wj;
        const K = {};
        K["endsWith"] = G["ad_info"];
        K["pay_info"] = G["pay_info"];
        K['yDeCt'] = "超级会员";
        K["basedata"] = G["basedata"];
        K['CcYSd'] = G["jrHWJ"];
        const j = K;
        if (G["uhYgm"](G["HjBjm"], G["HjBjm"])) {
            if (G["DcmXq"](Q, obj)) {
                if ("YingZi" !== "YingZi") {
                    if (o["endsWith"](j["endsWith"])) {
                        C[c] = a['endTime'] && j["pay_info"] || j['yDeCt'];
                    }
                    if (h["endsWith"](j["basedata"])) {
                        H[f] = "https://image.kuw" + "o.cn/upload/pic" + "tures/20250107/" + "b34dfc4a2503.png";
                    }
                    if (x["endsWith"](j["jrHWJ"])) {
                        p[t] = null;
                    }
                } else {
                    delete obj[Q];
                }
            }
        } else {
            throw new m('处理' + B + '时发生错误：' + Q["toStr"](K));
        }
    });
    body = $["toStr"](obj);
    const B = {};
    B['body'] = body;
    $['done'](B);
}
async function userInfoLabel() {
    const KuWo_EL = {
        W: 0x2e5,
        E: 'ELcZ'
    };
    const Wo = KuWo_z;
    if (body) {
        body = body['replace'](/<section[^>]*?><userinfolabel[^>]*?><\/userinfolabel><\/section>/, '')["replace"](/<section[^>]*?><ad[^>]*?><\/ad><\/section>/g, '');
    }
    const E = {};
    E['body'] = body;
    $['done'](E);
}
async function payBox(E) {
    const KuWo_El = {
        W: 'r7]n',
        E: 0x310,
        k: 'ZuH&',
        G: 0x304,
        m: 's95%',
        B: 0x440,
        Q: '7Nbb',
        K: 'Hsgv',
        j: 0x1ff,
        O: 'FuBd'
    };
    const KuWo_ES = {
        W: 'pJs9',
        E: 0x327,
        k: '%kn9',
        G: 0x2f2
    };
    const WU = KuWo_z;
    const k = {
        'BHlQA': "object",
        'pUjWp': "object",
        'sypSt': function(B, Q) {
            return B === Q;
        },
        'wReRK': "object",
        'uyIKj': function(B, Q) {
            return B === Q;
        },
        'wLNFk': function(B, Q) {
            return B(Q);
        },
        'wcCWz': function(B, Q) {
            return B in Q;
        },
        'MkvJc': 'child',
        'PVjBm': function(B, Q) {
            return B(Q);
        }
    };
    const G = B => {
        const WI = WU;
        if (k["BHlQA"] !== k['pUjWp']) {
            for (let Q in B) {
                if (k["sypSt"](typeof B[Q], k['wReRK'])) {
                    B[Q] = null;
                } else if (k["uyIKj"](typeof B[Q], 'object') && B[Q] !== null) {
                    k['wLNFk'](G, B[Q]);
                }
            }
        } else {
            throw new m('处理' + B + "时发生错误：" + Q["toStr"](K));
        }
    };
    if (k["wcCWz"](k['MkvJc'], obj)) {
        body = body['replace'](/\"(btnTipText|jumpUrl|tipText)\":\".*?\"/g, "\"\":null");
    } else {
        k["PVjBm"](G, obj);
        body = $["toStr"](obj);
    }
    const m = {};
    m["body"] = body;
    $["done"](m);
}

function Napi(G = "影子") {
    const KuWo_kU = {
        W: 0x2dc,
        E: 'pJs9',
        k: 's95%',
        G: 'GWWH',
        m: 0x184,
        B: 'vz0Z',
        Q: 0x2b8,
        K: 0x43a,
        j: 'jG&J',
        O: '7uKI',
        o: 0x14c,
        U: 'r7]n',
        I: 0x1b8,
        s: 'r7]n',
        h: 'zqRo',
        J: 'EMD#',
        Z: 0x32a,
        x: 0x20a,
        y: 'B1vy',
        Y: 0x29a,
        C: 0x149,
        c: 't[[n',
        a: 0x44d,
        H: 0x257,
        f: '%kn9',
        p: 'vR@M',
        t: 0x29e,
        q: 'hXY1',
        A: 0x3c0,
        b: 0x325,
        w: 'hO2S',
        d: 0x265,
        M: 0x2a4,
        F: 0x4b3,
        N: 0x3bd,
        g: 'EMD#',
        X: 0x226,
        r: 0x1a8,
        n: 'brgE',
        L: 0x381,
        R: '$(EM',
        T: 'B1vy',
        P: 0x2cb,
        V: 'ELcZ',
        D: 'w4yZ',
        S: 0x20e,
        l: 'zqRo',
        z: 0x227
    };
    const KuWo_ko = {
        W: 0x1b3,
        E: '*W0]',
        k: 0x260,
        G: 'hXY1',
        m: '8X0X',
        B: 'ELcZ',
        Q: 0x2ee,
        K: 'ZuH&',
        j: 'GWWH',
        O: 0x3d1,
        o: 'GWWH',
        U: 'O)!^',
        I: 'aac8',
        s: 0x1be,
        h: '%kn9',
        J: 0x417,
        Z: '^Zar',
        x: 0x362,
        y: 'aoOp',
        Y: 'aoOp',
        C: 0x1ef,
        c: 0x2e1,
        a: 'brgE',
        H: 0x483,
        f: 0x293,
        p: 0x232,
        t: 0x32c,
        q: 'hXY1',
        A: 0x1c9,
        b: 0x4a1,
        w: 0x21b,
        d: 0x341,
        M: 'UFI5',
        F: 0x1c6,
        N: 0x1c7,
        g: 'O)!^',
        X: 'fS1Z',
        r: 'gM)%',
        n: 0x1f0,
        L: '*5)D',
        R: 0x261,
        T: 'Wdz#',
        P: '8WrO',
        V: 0x32b,
        D: '^Zar',
        S: 0x230,
        l: 'EMD#',
        z: 0x383,
        Wa: 'r7]n',
        WH: 0x155,
        Wf: 'FfKZ',
        Wp: 0x3a1,
        Wt: 'Hsgv',
        Wq: '8WrO',
        WA: 0x4a6,
        Wb: 'UFI5',
        Ww: 'GWWH',
        Wd: 'B1vy',
        WM: 0x187,
        WF: 0x266
    };
    const KuWo_kO = {
        W: 0x309,
        E: 0x24a,
        k: 'EMD#',
        G: 'pJs9',
        m: 0x2f6,
        B: 'Fumx',
        Q: 0x451,
        K: 'vR@M',
        j: 0x2de
    };
    const KuWo_kj = {
        W: 0x31b,
        E: 'brgE',
        k: ')z^x',
        G: 0x3ad,
        m: 'EMD#',
        B: 0x428,
        Q: 'ZuH&',
        K: 0x425,
        j: 0x21e,
        O: 's95%',
        o: 0x36f
    };
    const KuWo_kK = {
        W: 0x47d,
        E: '7Nbb',
        k: 0x2ba
    };
    const KuWo_kQ = {
        W: 'e4Uv',
        E: 'JjWW',
        k: 0x287,
        G: 'aoOp',
        m: 0x44b,
        B: 'hXY1'
    };
    const KuWo_kB = {
        W: 0x272
    };
    const Ws = KuWo_z;
    const m = {
        'JPmgh': function(s, h) {
            return s in h;
        },
        'QPciA': "needBieds",
        'lOwRJ': 'needBied',
        'MxQVP': "https://image.kuw",
        'bZnyt': "o.cn/upload/pic" + "tures/20250107/" + "b34dfc4a2503.png",
        'LVeLJ': "https://image.kuw",
        'BkxIs': function(s, h) {
            return s === h;
        },
        'bKaEl': '(((.+)+)+)+$',
        'zXvae': function(s, h) {
            return s < h;
        },
        'umdKJ': function(s, h) {
            return s ^ h;
        },
        'BCKTE': function(s, h) {
            return s % h;
        },
        'Oqjdr': function(s, h) {
            return s >= h;
        },
        'VRoKc': function(s, h) {
            return s(h);
        },
        'SmAzy': "YingZi",
        'LxuOJ': function(s, h) {
            return s !== h;
        },
        'VDYYy': "https://napi.lt",
        'yLCgj': "love.life/KuWo",
        'eeHPA': "版本已是最新，无需" + "更新",
        'SRkvH': function(s, h, J) {
            return s(h, J);
        },
        'AnMua': "恭喜您，授权成功" + '！',
        'hSPrI': "KuWo",
        'FLsev': "list",
        'irhzv': "title",
        'xGdAr': "params",
        'GbHer': 'route',
        'rZsyM': "params",
        'sifTQ': 'url',
        'NzUbU': "https://image.kuw" + "o.cn/upload/pic",
        'MoWFO': "tures/20250107/",
        'BbpgF': "b34dfc4a2503.png",
        'sppcc': "https://image.kuw" + "o.cn/upload/pic" + "tures/20250107/",
        'xOnxX': "b34dfc4a2503.png",
        'cYRMm': function(s, h) {
            return s != h;
        },
        'CtJsm': "KuWo",
        'RiJwi': "获取酷我",
        'lYSWw': '\x20的授权信息…',
        'FIOnA': "KuWo",
        'iePrh': 'EuSbK',
        'hZPvj': function(s, h) {
            return s + h;
        },
        'AtIRe': "获取酷我",
        'uNGTI': " 的授权信息…",
        'QEZEZ': '\x20已授权',
        'fkzRn': function(s, h) {
            return s + h;
        },
        'QyFvD': "授权成功，到期时间：",
        'kkrYg': "获取酷我",
        'VHrGa': " 的授权信息失败",
        'ezEYP': function(s, h) {
            return s != h;
        },
        'ZMBjQ': function(s, h) {
            return s === h;
        },
        'WosyK': "user",
        'AaWxh': "endTime",
        'OqTRC': "请先获取" + "权码",
        'MLasy': "https://h5.k" + "uwo.cn/act/kuaizhuan/",
        'SSGWq': function(s) {
            return s();
        }
    };
    const B = (function() {
        const KuWo_km = {
            W: 'XTE%'
        };
        const KuWo_kk = {
            W: '*5)D',
            E: 0x246,
            k: 'zZNT',
            G: '$(EM',
            m: 0x35c,
            B: 0x3a8,
            Q: 0x1bb,
            K: 'Hsgv',
            j: 'zqRo',
            O: 0x206,
            o: '7uKI',
            U: 0x1b2,
            I: 0x244,
            s: 0x3d0,
            h: 'Wdz#',
            J: '8WrO',
            Z: 0x487,
            x: 0x2b9,
            y: 'mhM!',
            Y: 0x40c,
            C: '!2Fj',
            c: 0x241,
            a: 0x427,
            H: 0x29c,
            f: 'r7]n',
            p: 0x1ad,
            t: 'w4yZ',
            q: 'GWWH',
            A: 0x1a6,
            b: 0x434,
            w: 0x1b4,
            d: 'XTE%'
        };
        const Wh = Ws;
        const s = {
            'oXlBz': m["MxQVP"],
            'UYwiD': m['LVeLJ'],
            'InfBL': function(J, Z) {
                return m['BkxIs'](J, Z);
            }
        };
        let h = !![];
        return function(J, Z) {
            const WJ = Wh;
            const x = {
                'QoKdL': function(Y, C) {
                    return m['JPmgh'](Y, C);
                },
                'QPFUy': 'vipTheme',
                'biXvI': m['QPciA'],
                'unlXg': m["lOwRJ"],
                'uUcmP': m["bZnyt"]
            };
            const y = h ? function() {
                const WZ = WJ;
                const Y = {};
                Y["hangerList"] = s["oXlBz"];
                const C = Y;
                if (s["UYwiD"] !== 'cmpHK') {
                    if (Z) {
                        if (s['InfBL']("YingZi", "YingZi")) {
                            const c = Z["apply"](J, arguments);
                            Z = null;
                            return c;
                        } else {
                            Y[G] = C["hangerList"];
                        }
                    }
                } else {
                    if (x['QoKdL'](x["QPFUy"], Z['data'])) {
                        M["data"]["vipTypes"]["title"] = x["hangerList"];
                        delete F["data"]['needBieds'];
                        N = g["toStr"](X);
                    } else if (x["JPmgh"](x['unlXg'], a["data"])) {
                        const p = {};
                        p["price"] = '';
                        p["rightId"] = null;
                        p["rightStatus"] = 0x1;
                        p['requestUrlType'] = 0x1;
                        const t = p;
                        r["assign"](n["data"]['needBied'], t);
                        L = R["toStr"](T);
                    } else {
                        P = V["replace"](/\"(paymentType)\":\d/g, "\"paymentType\":0")["replace"](/(umpUrl)\":\".*?\"/g, x["uUcmP"]);
                    }
                    const f = {};
                    f["body"] = d;
                    w["done"](f);
                }
            } : function() {};
            h = ![];
            return y;
        };
    }());
    const Q = B(this, function() {
        const Wx = Ws;
        return Q['toString']()["search"](m["bKaEl"])["toString"]()["replace"](Q)["search"](m["bKaEl"]);
    });
    m["SSGWq"](Q);
    const K = (s, h) => s["split"]('.')['map'](Number)["some"]((J, Z) => J < Number(h["split"]('.')[Z] || -0x1af * 0x17 + 0x1f80 + 0x739));
    const j = s => {
        const Wy = Ws;
        let h = new TextEncoder()['encode'](s);
        let J = new TextEncoder()["encode"](G);
        let Z = new Uint8Array(h["length"]);
        for (let x = -0x1 * -0x10c4 + -0x796 * 0x5 + 0x152a; m['zXvae'](x, h['length']); x++) {
            let y = m['umdKJ'](h[x], J[m['BCKTE'](x, J['length'])]);
            while (m["Oqjdr"](y, -0x218a + 0x2f7 + 0x1f93)) {
                y %= -0x38f + 0x7d3 * 0x3 + -0x12ea;
            }
            Z[x] = y;
        }
        return m['VRoKc'](btoa, String["fromCharCode"](...Z));
    };
    const O = s => {
        const WY = Ws;
        let h = new TextEncoder()['encode'](G);
        let J = new Uint8Array(atob(s)['split']('')['map'](x => x['charCodeAt'](0x208 + -0x1ca4 + -0x4 * -0x6a7)));
        let Z = new Uint8Array(J["length"]);
        for (let x = 0x1f9d * -0x1 + -0x25e + 0x21fb; m["zXvae"](x, J["length"]); x++) {
            let y = J[x] ^ h[m["BCKTE"](x, h["length"])];
            while (m['Oqjdr'](y, -0x1 * 0x1a7d + -0x4 * 0x2bd + 0xd * 0x2f5)) {
                if (m["LxuOJ"](m['SmAzy'], "YingZi")) {
                    y %= -0x4bc * 0x2 + 0x22f4 + -0x4 * 0x61f;
                } else {
                    I = G["replace"](/<section[^>]*?><userinfolabel[^>]*?><\/userinfolabel><\/section>/, '')["replace"](/<section[^>]*?><ad[^>]*?><\/ad><\/section>/g, '');
                }
            }
            Z[x] = y;
        }
        return new TextDecoder()['decode'](Z);
    };
    const o = async () => {
        const WC = Ws;
        if (m["LxuOJ"](m['VDYYy'], m['yLCgj'])) {
            let s = m["eeHPA"];
            let h = await $["http"]['get'](s)["then"](Z => Z['body']);
            let J = $["toObj"](h);
            if (m["SRkvH"](K, LocVer, J["ver"])) $['msg'](m["AnMua"]);
            KuWo["ver"] = J["ver"];
            $["setval"]($["toStr"](KuWo), m["hSPrI"]);
        } else {
            I = G['QS'];
        }
    };
    const U = async (s, h) => {
        const Wc = Ws;
        const J = {};
        J["BWyFS"] = m["RiJwi"];
        J['BcieC'] = m["MLasy"];
        const Z = J;
        const x = "token=" + h + "&user=" + s;
        const {
            user: y,
            endTime: Y
        } = KuWo;
        if (!y || m["cYRMm"](y, s) || !Y || new Date()['getTime']() > Y || !KuWo['keys']) {
            try {
                if (m["LxuOJ"](m['CtJsm'], m["CtJsm"])) {
                    $["log"](m["hZPvj"](m["RiJwi"], s) + m["lYSWw"]);
                    const C = {};
                    C["url"] = 'https://yingzi-' + "api.vercel.app/api" + "/KuWo/auth?v=5.6.2" + "7";
                    C['body'] = x;
                    let c = await $["http"]["post"](C);
                    let a = $["toObj"](c["body"]);
                    for (let H in a) {
                        if (a['hasOwnProperty'](H)) {
                            if (m["LxuOJ"](m['FIOnA'], m["iePrh"])) {
                                KuWo[H] = a[H];
                            } else {
                                B['data']['list'][0x2 * 0x9b5 + -0x1c8a * 0x1 + -0x39 * -0x29][m['irhzv']] = m['irhzv'];
                                Q["data"]["list"][-0x1d52 + -0x195b + -0x123a * -0x3][m['xGdAr']] = K["time"](m["time"], j["isVip"]);
                                O["data"]["list"][0x108 * -0x7 + -0x261a * -0x1 + -0x1ee1][m['GbHer']][m["xGdAr"]][m['sifTQ']] = m["NzUbU"];
                            }
                        }
                    }
                    $['setval']($["toStr"](KuWo), m["hSPrI"]);
                    $['log'](m["AnMua"]);
                    if (a["user"]) {
                        let p = $['time']('yyyy-MM-dd\x20HH:m' + 'm', KuWo['endTime']);
                        $["log"](m['hZPvj'](m["hZPvj"](m["AtIRe"], s), m["QEZEZ"]) + p);
                        $["msg"](m["fkzRn"](m["AtIRe"], s) + m["QEZEZ"], '', m["fkzRn"](m["QyFvD"], p));
                    } else {
                        $['log'](m["fkzRn"](m["fkzRn"](m['kkrYg'], s), m["VHrGa"]));
                        if (m["ezEYP"](y, a["user"]) || m["ezEYP"](Y, a["endTime"])) {
                            if (m["ezEYP"](m["hSPrI"], m["hSPrI"])) {
                                delete C["data"]['tab'][m["BbpgF"]][0x4 * -0x8e0 + 0x7e6 * -0x2 + 0x1d5 * 0x1c][m['sppcc']][m];
                                B++;
                            } else {
                                $["msg"](m["OqTRC"], '', m["OqTRC"], {
                                    'open-url': 'kwapp://open?t=' + '27&u=https%3A%2' + "F%2Fh5.kuwo.cn%2Fa" + "ct%2Fkuaizhuan%2Fin" + "dex.html%3Ff%3Dkw" + "y&s=kw" + y,
                                    'media-url': m["MLasy"]
                                });
                            }
                        }
                    }
                } else {
                    J["msg"](Z['BWyFS'], '', "请先获取" + "权码", {
                        'open-url': "https://h5.kuwo.cn" + "/m/u/authPay%3Factio" + "n%3DauthPay%26from" + G,
                        'media-url': Z["MLasy"]
                    });
                }
            } catch (A) {
                throw new Error('获取授权时发生错误：' + $["toStr"](A));
            }
        } else {
            $["log"](m['hZPvj'](m["hZPvj"](m['AtIRe'], s), m["QEZEZ"]));
        }
    };
    const I = {};
    I["upDate"] = K;
    I["encrypt"] = j;
    I['decrypt'] = O;
    I["getVer"] = o;
    I["getInfo"] = U;
    return I;
}

function Env(name, opts) {
    class Http {
        constructor(env) {
            this.env = env
        }
        send(opts, method = 'GET') {
            opts = typeof opts === 'string' ? {
                url: opts
            } : opts
            let sender = this.get
            if (method === 'POST') {
                sender = this.post
            }
            const delayPromise = (promise, delay = 5000) => {
                return Promise.race([
                    promise,
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            reject(new Error('请求超时'))
                        }, delay)
                    })
                ])
            }
            const call = new Promise((resolve, reject) => {
                sender.call(this, opts, (err, resp, body) => {
                    if (err) reject(err)
                    else resolve(resp)
                })
            })
            return opts.timeout ? delayPromise(call, opts.timeout) : call
        }
        get(opts) {
            return this.send.call(this.env, opts)
        }
        post(opts) {
            return this.send.call(this.env, opts, 'POST')
        }
    }
    return new(class {
        constructor(name, opts) {
            this.name = name || 'YingZi'
            this.http = new Http(this)
            this.logs = []
            this.isMute = 1
            this.isNeedRewrite = false
            this.logSeparator = '\n'
            this.encoding = 'utf-8'
            this.startTime = new Date().getTime()
            Object.assign(this, opts) !this.isMute && this.log('', `🔔${this.name}, 开始!`)
        }
        getEnv() {
            if ('undefined' !== typeof $environment && $environment['surge-version']) return 'Surge'
            if ('undefined' !== typeof $environment && $environment['stash-version']) return 'Stash'
            if ('undefined' !== typeof $task) return 'Quantumult X'
            if ('undefined' !== typeof $loon) return 'Loon'
            if ('undefined' !== typeof $rocket) return 'Shadowrocket'
        }
        isQuanX() {
            return 'Quantumult X' === this.getEnv()
        }
        isSurge() {
            return 'Surge' === this.getEnv()
        }
        isLoon() {
            return 'Loon' === this.getEnv()
        }
        isShadowrocket() {
            return 'Shadowrocket' === this.getEnv()
        }
        isStash() {
            return 'Stash' === this.getEnv()
        }
        toObj(str, defaultValue = null) {
            try {
                return JSON.parse(str)
            } catch {
                return defaultValue
            }
        }
        toStr(obj, defaultValue = null, ...args) {
            try {
                return JSON.stringify(obj, ...args)
            } catch {
                return defaultValue
            }
        }
        getval(key) {
            switch (this.getEnv()) {
                case 'Surge':
                case 'Loon':
                case 'Stash':
                case 'Shadowrocket':
                    return $persistentStore.read(key)
                case 'Quantumult X':
                    return $prefs.valueForKey(key)
                default:
            }
        }
        setval(val, key) {
            switch (this.getEnv()) {
                case 'Surge':
                case 'Loon':
                case 'Stash':
                case 'Shadowrocket':
                    return $persistentStore.write(val, key)
                case 'Quantumult X':
                    return $prefs.setValueForKey(val, key)
                default:
            }
        }
        get(request, callback = () => {}) {
            if (request.headers) {
                delete request.headers['Content-Type']
                delete request.headers['Content-Length']
                delete request.headers['content-type']
                delete request.headers['content-length']
            }
            if (request.params) {
                request.url += '?' + this.queryStr(request.params)
            }
            if (
                typeof request.followRedirect !== 'undefined' && !request['followRedirect']
            ) {
                if (this.isSurge() || this.isLoon()) request['auto-redirect'] = false
                if (this.isQuanX())
                    request.opts ?
                    (request['opts']['redirection'] = false) :
                    (request.opts = {
                        redirection: false
                    })
            }
            switch (this.getEnv()) {
                case 'Surge':
                case 'Loon':
                case 'Stash':
                case 'Shadowrocket':
                default:
                    if (this.isSurge() && this.isNeedRewrite) {
                        request.headers = request.headers || {}
                        Object.assign(request.headers, {
                            'X-Surge-Skip-Scripting': false
                        })
                    }
                    $httpClient.get(request, (err, resp, body) => {
                        if (!err && resp) {
                            resp.body = body
                            resp.statusCode = resp.status ? resp.status : resp.statusCode
                            resp.status = resp.statusCode
                        }
                        callback(err, resp, body)
                    })
                    break
                case 'Quantumult X':
                    if (this.isNeedRewrite) {
                        request.opts = request.opts || {}
                        Object.assign(request.opts, {
                            hints: false
                        })
                    }
                    $task.fetch(request).then(
                        (resp) => {
                            const {
                                statusCode: status,
                                statusCode,
                                headers,
                                body,
                                bodyBytes
                            } = resp
                            callback(
                                null, {
                                    status,
                                    statusCode,
                                    headers,
                                    body,
                                    bodyBytes
                                },
                                body,
                                bodyBytes
                            )
                        },
                        (err) => callback((err && err.error) || 'UndefinedError')
                    )
                    break
            }
        }
        post(request, callback = () => {}) {
            const method = request.method ? request.method.toLocaleLowerCase() : 'post'
            if (
                request.body &&
                request.headers && !request.headers['Content-Type'] && !request.headers['content-type']
            ) {
                request.headers['content-type'] = 'application/x-www-form-urlencoded'
            }
            if (request.headers) {
                delete request.headers['Content-Length']
                delete request.headers['content-length']
            }
            if (
                typeof request.followRedirect !== 'undefined' && !request['followRedirect']
            ) {
                if (this.isSurge() || this.isLoon()) request['auto-redirect'] = false
                if (this.isQuanX())
                    request.opts ?
                    (request['opts']['redirection'] = false) :
                    (request.opts = {
                        redirection: false
                    })
            }
            switch (this.getEnv()) {
                case 'Surge':
                case 'Loon':
                case 'Stash':
                case 'Shadowrocket':
                default:
                    if (this.isSurge() && this.isNeedRewrite) {
                        request.headers = request.headers || {}
                        Object.assign(request.headers, {
                            'X-Surge-Skip-Scripting': false
                        })
                    }
                    $httpClient[method](request, (err, resp, body) => {
                        if (!err && resp) {
                            resp.body = body
                            resp.statusCode = resp.status ? resp.status : resp.statusCode
                            resp.status = resp.statusCode
                        }
                        callback(err, resp, body)
                    })
                    break
                case 'Quantumult X':
                    request.method = method
                    if (this.isNeedRewrite) {
                        request.opts = request.opts || {}
                        Object.assign(request.opts, {
                            hints: false
                        })
                    }
                    $task.fetch(request).then(
                        (resp) => {
                            const {
                                statusCode: status,
                                statusCode,
                                headers,
                                body,
                                bodyBytes
                            } = resp
                            callback(
                                null, {
                                    status,
                                    statusCode,
                                    headers,
                                    body,
                                    bodyBytes
                                },
                                body,
                                bodyBytes
                            )
                        },
                        (err) => callback((err && err.error) || 'UndefinedError')
                    )
                    break
            }
        }
        time(fmt, ts = null) {
            const date = ts ? new Date(ts) : new Date()
            let o = {
                'M+': date.getMonth() + 1,
                'd+': date.getDate(),
                'H+': date.getHours(),
                'm+': date.getMinutes(),
                's+': date.getSeconds(),
                'q+': Math.floor((date.getMonth() + 3) / 3),
                'S': date.getMilliseconds()
            }
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(
                    RegExp.$1,
                    (date.getFullYear() + '').substr(4 - RegExp.$1.length)
                )
            for (let k in o)
                if (new RegExp('(' + k + ')').test(fmt))
                    fmt = fmt.replace(
                        RegExp.$1,
                        RegExp.$1.length == 1 ?
                        o[k] :
                        ('00' + o[k]).substr(('' + o[k]).length)
                    )
            return fmt
        }
        msg(title = name, subt = '', desc = '', opts = {}) {
            const toEnvOpts = (rawopts) => {
                const {
                    $open,
                    $copy,
                    $media,
                    $mediaMime
                } = rawopts
                switch (typeof rawopts) {
                    case undefined:
                        return rawopts
                    case 'string':
                        switch (this.getEnv()) {
                            case 'Surge':
                            case 'Stash':
                            default:
                                return {
                                    url: rawopts
                                }
                            case 'Loon':
                            case 'Shadowrocket':
                                return rawopts
                            case 'Quantumult X':
                                return {
                                    'open-url': rawopts
                                }
                        }
                    case 'object':
                        switch (this.getEnv()) {
                            case 'Surge':
                            case 'Stash':
                            case 'Shadowrocket':
                            default: {
                                const options = {}
                                let openUrl =
                                    rawopts.openUrl || rawopts.url || rawopts['open-url'] || $open
                                if (openUrl)
                                    Object.assign(options, {
                                        action: 'open-url',
                                        url: openUrl
                                    })
                                let copy =
                                    rawopts['update-pasteboard'] ||
                                    rawopts.updatePasteboard ||
                                    $copy
                                if (copy) {
                                    Object.assign(options, {
                                        action: 'clipboard',
                                        text: copy
                                    })
                                }

                                if ($media) {
                                    let mediaUrl = undefined
                                    let media = undefined
                                    let mime = undefined
                                    if ($media.startsWith('http')) {
                                        mediaUrl = $media
                                    } else if ($media.startsWith('data:')) {
                                        const [data] = $media.split(';')
                                        const [, base64str] = $media.split(',')
                                        media = base64str
                                        mime = data.replace('data:', '')
                                    } else {
                                        const getMimeFromBase64 = (encoded) => {
                                            const signatures = {
                                                'JVBERi0': 'application/pdf',
                                                'R0lGODdh': 'image/gif',
                                                'R0lGODlh': 'image/gif',
                                                'iVBORw0KGgo': 'image/png',
                                                '/9j/': 'image/jpg'
                                            }
                                            for (var s in signatures) {
                                                if (encoded.indexOf(s) === 0) {
                                                    return signatures[s]
                                                }
                                            }
                                            return null
                                        }
                                        media = $media
                                        mime = getMimeFromBase64($media)
                                    }

                                    Object.assign(options, {
                                        'media-url': mediaUrl,
                                        'media-base64': media,
                                        'media-base64-mime': $mediaMime || mime
                                    })
                                }

                                Object.assign(options, {
                                    'auto-dismiss': rawopts['auto-dismiss'],
                                    'sound': rawopts['sound']
                                })
                                return options
                            }
                            case 'Loon': {
                                const options = {}

                                let openUrl =
                                    rawopts.openUrl || rawopts.url || rawopts['open-url'] || $open
                                if (openUrl) Object.assign(options, {
                                    openUrl
                                })

                                let mediaUrl = rawopts.mediaUrl || rawopts['media-url']
                                if ($media && $media.startsWith('http')) mediaUrl = $media
                                if (mediaUrl) Object.assign(options, {
                                    mediaUrl
                                })

                                console.log(JSON.stringify(options))
                                return options
                            }
                            case 'Quantumult X': {
                                const options = {}

                                let openUrl =
                                    rawopts['open-url'] || rawopts.url || rawopts.openUrl || $open
                                if (openUrl) Object.assign(options, {
                                    'open-url': openUrl
                                })

                                let mediaUrl = rawopts['media-url'] || rawopts.mediaUrl
                                if ($media && $media.startsWith('http')) mediaUrl = $media
                                if (mediaUrl) Object.assign(options, {
                                    'media-url': mediaUrl
                                })

                                let copy =
                                    rawopts['update-pasteboard'] ||
                                    rawopts.updatePasteboard ||
                                    $copy
                                if (copy) Object.assign(options, {
                                    'update-pasteboard': copy
                                })

                                console.log(JSON.stringify(options))
                                return options
                            }
                        }
                    default:
                        return undefined
                }
            }
            switch (this.getEnv()) {
                case 'Surge':
                case 'Loon':
                case 'Stash':
                case 'Shadowrocket':
                default:
                    $notification.post(title, subt, desc, toEnvOpts(opts))
                    break
                case 'Quantumult X':
                    $notify(title, subt, desc, toEnvOpts(opts))
                    break
            }
            if (!this.isMute) {
                let logs = ['', '==============📣系统通知📣==============']
                logs.push(title)
                subt ? logs.push(subt) : ''
                desc ? logs.push(desc) : ''
                console.log(logs.join('\n'))
                this.logs = this.logs.concat(logs)
            }
        }
        log(...logs) {
            if (logs.length > 0) {
                this.logs = [...this.logs, ...logs]
            }
            console.log(logs.map((l) => l || String(l)).join(this.logSeparator))
        }
        wait(time) {
            return new Promise((resolve) => setTimeout(resolve, time))
        }
        done(val = {}) {
            const endTime = new Date().getTime()
            const costTime = (endTime - this.startTime) / 1000 !this.isMute && this.log('', `🔔${this.name}, 结束! 🕛 ${costTime} 秒`)
            this.log()
            switch (this.getEnv()) {
                case 'Surge':
                case 'Loon':
                case 'Stash':
                case 'Shadowrocket':
                case 'Quantumult X':
                default:
                    $done(val)
                    break
            }
        }
    })(name, opts)
}