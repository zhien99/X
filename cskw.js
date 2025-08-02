/****************************

#!name = abc
#!desc = def
#!author = qa
#!homepage = z
#!openUrl = a
#!tag = 测试
#!loon_version = 3.2.3(762)
#!icon = https://aaaImage/KuWo.png
#!date = 2025-07-28

[Argument]
QS = select,"Hi-Res音质","无损音质","超品音质","高品音质",tag=音质选择
authUI = switch,false,tag=启用旧版会员中心

[Rule]
USER-AGENT,KWPlayer*,PROXY
DOMAIN-SUFFIX,kuwo.cn,PROXY

[Rewrite]
^.*?(ad(.*)?\.tencentmusic\.com|kuwo\.cn\/((EcomResource|(Mobile)?Ad)Serv(er|ice)|(vip|(open)?api)?\/(setting\/sidebar\/menus|v\d\/(user\/freeMode|album\/adBar|app\/(newMenuList\/menuListInfo|pasterAdvert\/config)|operate\/pop\/info))|kuwopay\/vip-tab\/page\/floatbox|commercia\/eproxy\/boot\/recommend\/fee\/config)) reject-200

[Script]
http-response ^(?!.*img).*?(abt-kuwo\.tencentmusic\.com|kuwo\.cn)(/vip|/(open)?api)?(/enc.*?signver|/(v\d/)?(pay/app/getConfigInfo|user/vip\?vers|app/startup/config|theme\?op=gd|api/((pay/)?(user/info|payInfo/kwplayer/payMiniBar))|tingshu/index/radio|operate/homePage|sysinfo\?op\=getRePayAndDoPayBox(New)?&useNewHeadShow|recommend/(daily/main|songlist/getRecSonglist)|online/bottomTab/abConfig)|/kuwo/ui/info$|/kuwopay\/personal\/cells|/pay/viptab/index\.html|/kuwopay/vip-tab/(setting|page/cells)|/a\.p($|\?newver\=\d$|.*?op\=(getvip|policy_shortvideo)|.*?ptype\=vip)|/commercia/vip(Tab/myTab/base|/player/getStyleListByModel|/hanger/wear)|/mobi\.s\?f\=kwxs|/music\.pay\?newver\=\d$|/basedata\.s|/mgxh\.s\?user) script-path=https://raw.githubusercontent.com/zhien99/X/refs/heads/main/cskw.js, requires-body=true, timeout=60, tag=酷我音乐, img-url=https://static.napi.ltd/Image/KuWo.png, argument=[{QS},{authUI}]

[Mitm]
hostname = *.kuwo.cn

****************************/







// Optimized by AI based on user feedback. Version 2.0
const KuWo_z=KuWo_G;(function(W,E){const KuWo_Wa={W:0x273,E:0x1c4,k:0x399,G:0x43f,m:0x27b,B:'FfKZ',Q:'Wdz#'};const v=KuWo_G;const k=W();while(!![]){try{const G=-parseInt(v(KuWo_Wa.W,'Hsgv'))/(0x17e1+-0x1784+-0x5c)+parseInt(v(0x197,'s(Fh'))/(0x1*0x1219+-0x6a*-0x36+0x2873*-0x1)*(-parseInt(v(0x388,'r7]n'))/(0x1d5c+-0x1f7d*-0x1+-0x2*0x1e6b))+parseInt(v(0x307,'8WrO'))/(0x3*0x295+-0x12b*-0x1d+-0x299a)+-parseInt(v(KuWo_Wa.E,'pJs9'))/(0x1976*-0x1+-0xf16+-0x2891*-0x1)*(parseInt(v(KuWo_Wa.k,'Hsgv'))/(-0x569+0x2108+-0x1b99))+parseInt(v(KuWo_Wa.G,'vz0Z'))/(-0x2*0x1255+0x1*-0xef3+-0x33a4*-0x1)+-parseInt(v(KuWo_Wa.m,')z^x'))/(0x7*-0x211+0x24db+-0x165c)*(-parseInt(v(0x494,KuWo_Wa.B))/(-0x2f*-0x7f+0x25c4*0x1+0x1*-0x3d0c))+parseInt(v(0x25a,KuWo_Wa.Q))/(-0x2e0+0xd*-0xc8+0xef*0xe);if(G===E){break;}else{k['push'](k['shift']());}}catch(m){k['push'](k['shift']());}}}(KuWo_k,-0x17a4c+0x336cc+0x7733));const $=new Env(KuWo_z(0x4b0,'(Xa]'));const {upDate,encrypt,decrypt,getVer,getInfo}=Napi('影子');const LocVer='999.999.999';const KuWo=$[KuWo_z(0x29d,'UFI5')]($['getval'](KuWo_z(0x1da,'!2Fj')))||{};let url=KuWo_z(0x35e,'EMD#')!==typeof $request?$request[KuWo_z(0x191,'FuBd')]:'';let body=KuWo_z(0x41e,'hO2S')!==typeof $response?$response[KuWo_z(0x4a0,'gM)%')]:null;let obj=$[KuWo_z(0x402,'%kn9')](body);const KuWo_S={};KuWo_S[KuWo_z(0x28b,'!2Fj')]=/mobi\.s\?f\=kwxs/;KuWo_S[KuWo_z(0x47b,'hO2S')]=/vip\/enc/;function KuWo_G(W,E){const k=KuWo_k();KuWo_G=function(G,m){G=G-(0xd*0xf3+0xe0a+0x647*-0x4);let B=k[G];if(KuWo_G['uVZFgN']===undefined){var Q=function(U){const I='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let s='';let h='';let J=s+Q;for(let Z=-0xef*0x1+0x50e+-0x1*0x41f,x,y,Y=-0x4c3*-0x5+-0x134d+-0x482;y=U['charAt'](Y++);~y&&(x=Z%(-0x3b*-0x57+-0x4*0x2d7+0x8ad*-0x1)?x*(-0x17*0x57+-0x25*0x9f+0x2*0xf86)+y:y,Z++%(0x895*-0x1+0x1*0x1852+-0x325*0x5))?s+=J['charCodeAt'](Y+(-0xaef+0x1539+-0xa40))-(0x7*-0xc5+0x3db+0x192)!==0x647*0x2+0x1*0x986+-0x3ae*0x6?String['fromCharCode'](-0x1*0x117+-0x1*0x1447+0x19*0xe5&x>>(-(0x116f+0x1*-0xf0b+-0x262*0x1)*Z&0x1b1+0x1*0x1f5+-0x3a0)):Z:-0x1164+-0x441+0x15a5){y=I['indexOf'](y);}for(let C=-0x1d97+-0x1977+0x370e,c=s['length'];C<c;C++){h+='%'+('00'+s['charCodeAt'](C)['toString'](-0xc1*-0x2f+-0x1*-0x7ef+0x2*-0x15a7))['slice'](-(0x1eaf*0x1+0x477*-0x5+-0x85a));}return decodeURIComponent(h);};const o=function(U,I){let h=[],J=0x8*-0x45e+-0xb41+-0x113*-0x2b,Z,Y='';U=Q(U);let C;for(C=-0x2*0x449+0x1*0x1181+0x8ef*-0x1;C<-0x2316*0x1+0x116a*0x1+0x4ab*0x4;C++){h[C]=C;}for(C=0x5*0x1b+0x420+-0x4a7;C<0x14ab+0x9a+-0x1445;C++){J=(J+h[C]+I['charCodeAt'](C%I['length']))%(-0x53*0x4a+-0x2d6+0x1a*0x112);Z=h[C];h[C]=h[J];h[J]=Z;}C=0x1*-0x1e66+0x1052+0x35*0x44;J=0x5c6*-0x5+0x1*-0x6cb+0x23a9;for(let c=0x17f*0x1+-0x5de+0x45f;c<U['length'];c++){C=(C+(0x147d+0x10a6*-0x1+-0x2*0x1eb))%(-0x2d*-0x43+-0x1*-0x93b+-0x1402);J=(J+h[C])%(0x108a+-0x1459+-0x1*-0x4cf);Z=h[C];h[C]=h[J];h[J]=Z;Y+=String['fromCharCode'](U['charCodeAt'](c)^h[(h[C]+h[J])%(-0x1243+-0x226f*-0x1+-0x2*0x796)]);}return Y;};KuWo_G['wLonfE']=o;W=arguments;KuWo_G['uVZFgN']=!![];}const K=k[-0xf1c+0x1e45+-0xf29*0x1];const j=G+K;const O=W[j];if(!O){if(KuWo_G['pMdklb']===undefined){const U=function(I){this['GCArug']=I;this['OvJDzL']=[0x3a*0xa5+0x35*0x97+-0x44a4,-0x1e7f+-0x1a3d*-0x1+0x442,-0x92*0x25+-0x2041+0x355b];this['RaigQF']=function(){return'newState';};this['lVJDeU']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['NkiGgV']='[\x27|\x22].+[\x27|\x22];?\x20*}';};U['prototype']['gAqAAh']=function(){const I=new RegExp(this['lVJDeU']+this['NkiGgV']);const s=I['test'](this['RaigQF']['toString']())?--this['OvJDzL'][0x956+-0xb73*0x3+0xc82*0x2]:--this['OvJDzL'][0x235e+-0x933*-0x2+-0x35c4];return this['IpuonM'](s);};U['prototype']['IpuonM']=function(I){if(!Boolean(~I)){return I;}return this['zyGaAo'](this['GCArug']);};U['prototype']['zyGaAo']=function(I){for(let s=0x26e+0x1ce3+-0x1f51,h=this['OvJDzL']['length'];s<h;s++){this['OvJDzL']['push'](Math['round'](Math['random']()));h=this['OvJDzL']['length'];}return I(this['OvJDzL'][-0x10e9+-0x1*0x2319+0x3402]);};new U(KuWo_G)['gAqAAh']();KuWo_G['pMdklb']=!![];}B=KuWo_G['wLonfE'](B,m);W[j]=B;}else{B=O;}return B;};return KuWo_G(W,E);}KuWo_S[KuWo_z(0x368,'r7]n')]=/vip\/v\d\/user\/vip/;KuWo_S['bookVip']=/(a\.p|v\d\/api\/(pay\/)?user\/info)/;KuWo_S[KuWo_z(0x495,'O)!^')]=/music\.pay\?newver\=\d$/;KuWo_S[KuWo_z(0x30a,'ELcZ')]=/(commercia\/)?vip\/(v\d\/theme\?op\=gd|(player\/getStyleListByModel|hanger\/wear))/;KuWo_S['kwBookHome']=/v\d\/api\/advert\/myPage/;KuWo_S[KuWo_z(0x193,'pJs9')]=/(online\/bottomTab\/abConfig|kuwo\/ui\/info$)/;KuWo_S[KuWo_z(0x400,'EMD#')]=/openapi\/v\d\/operate\/homePage/;KuWo_S[KuWo_z(0x196,'FfKZ')]=/kuwopay\/personal\/cells/;KuWo_S[KuWo_z(0x1a2,'w4yZ')]=/api\/v\d\/pay\/app\/getConfigInfo/;KuWo_S[KuWo_z(0x2fc,'hO2S')]=/openapi\/v\d\/tingshu\/index\/radio/;KuWo_S[KuWo_z(0x2a0,'Wdz#')]=/kuwopay\/vip-tab\/(setting|page\/cells)/;KuWo_S['vipTabUserBox']=/pay\/viptab\/index\.html/;KuWo_S[KuWo_z(0x161,'^Zar')]=/((openapi)?v\d\/(api\/pay\/payInfo\/kwplayer\/payMiniBar|app\/startup\/config)|basedata\.s)/;KuWo_S[KuWo_z(0x473,'ELcZ')]=/mgxh\.s\?user/;KuWo_S[KuWo_z(0x170,'BLBk')]=/(sysinfo\?op\=getRePayAndDoPayBox(New)?&useNewHeadShow|openapi\/v\d\/recommend)/;const urlHandlers=KuWo_S;const KuWo_l={};KuWo_l[KuWo_z(0x1ee,'^Zar')]=playInfo;KuWo_l[KuWo_z(0x392,'mhM!')]=userInfo;KuWo_l['vipInfo']=vipInfo;KuWo_l[KuWo_z(0x207,'8X0X')]=bookVip;KuWo_l[KuWo_z(0x4b7,'ZuH&')]=musicInfo;KuWo_l[KuWo_z(0x48e,'BLBk')]=vipTheme;KuWo_l[KuWo_z(0x2ce,'mhM!')]=kwBookHome;KuWo_l[KuWo_z(0x292,'ELcZ')]=bottomTab;KuWo_l[KuWo_z(0x3ec,'EMD#')]=myPageVipBox;KuWo_l[KuWo_z(0x156,'BLBk')]=indexTopAd;KuWo_l[KuWo_z(0x2c3,'aac8')]=bookPageAdBar;KuWo_l['bookPageAd']=bookPageAd;function KuWo_k(){const kI=['thv3aCkX','W63dGmotaw7dP8oPWPddQa','zfZcS8of','FxDx','W7WDn0y','Cf/dOmkOCa','W6vpASkid8o3','hSoGlJ9L','WR7dRCkrEXu','W7ain1C','WP7dGYnOeHm','WPVdKmkHk3y','W7Xww8k+v3C','W75sWPvJWRO','rmoWW4WpWR0','F1n1gSkAseK','reRdTSkOBa','WRNcHmoZxtv1','5l6o5zcX56Em5yIF','WPL2W6a5','mmocbrrc','WQVcKmoOFHG','oCkKW7ddQMC','zmk0WOueuW','pmknW6pdGmkhhqlcP8kaeKeUWRldJ3a','k8ktaw7dV8kYW7pdHhzIWOf1cmosW4e','DCkcW6iLW5C','WQJcOmoQW6XU','WQNdNSkMouS','W6P4WPvOWQG','W44NgSkiW7i','W5idlCkDCa','5O+r5P616iAg77Yb','W6ZdJ8odatxcS8k6W5ldPdeKqCkZE8os','WOtdLIpcHhOKW5KOsmkWdtu','W6jftCkkha','mSoeoJnqo2BcKmki','W7jlASkF','W4Kof8kt','hYBdSKVdRmoo','k2mTo8kn','x8oQW5WjWRS','W7xdJ8ohmg3dVCoZWRZdOJ4V','W4qpgSkAWRNdN8ohAG','W7rECmkQc8oJW4y','W7eajSkpta','WPVdP8knW4znW4e','smkLW50lW6a','W4uvdCkgWR/cGCknnSoZn20QjNdcGq','zv3cUCo0WO5NW4u','W583dmk8W6G','WO3dRmkyW4zhW4ZcSG','WOfMW7eAW7JcUa','WQ/cVCoNW6XUWO5ue8ochKRdSSobWQfD','FCoOW6lcOZC','W7uOlCk6ta','y8keCr9oy2RcJSkil8koWPJcT8kUmW','mq3dPKZdNG','xCkSWQSyWP1W','zflcQCob','vetdR1jX','W6ZcHmoRtJL8WRq7umkjWQRdGfeIWQy','W7hcKmoSwvG','W65YWPT9W4br','shFcTCogWOG','lXhcR8oMWRm','W5aqh8kQsW','nCkzeG','vNRcJCkx','mfW4d8ky','uCoRW6Wm','W5uXpCkpW6tdL8oHlW','wvZdI8kaAG','WPddR8kArG','WOBdKSkQCt4','gSkHjG','WRLZWPP5W4fuWQtdKY1ZnxxcRCoynG','WPNcRSoMwJK','iN8ncCkJ','W5qAWP/cLGW','fmkJbKldIG','AuNcGtz9','j8kAzazgla','WQ/cPSoZW6u','W6nhWQL1','WRXkW6RdRWe2dapdG8ke','WQTwW6ddTGqXgrJdJSkbWQLOW5e','W489nCko','WPNcMXJcNKm','E8osrdNcT8oS','WQTmW6e','Ce9zgCk5','rXziEK0','W5rOA8k5lq','W63dNCosfKhdOmoHWPO','p8kpW7JcGCkd','rLDZtmo3Eq','fmkZW69uWQldOmk7or/dVmodW41+fSoo','W7NdL8kwwtxcQCoPWPRdOJ1Ndmk6CCoB','dJ53WRa8','fCkAW6lcICkR','tSoiW4ZcVYe','lCkFgh4','W5eTb8kpEG','WO1dW643eG','WQ7cGmoZsG','jmkRWPFdGG','C2dcOYTb','W74gWQFcNIrrfW','kSkZrSk2umkN','tfDig8kW','W6ZcUSoUteDcwGG','WPZcLHxcUwS','mSoeoIjalMlcHW','ae8Egq','mIVdIgaAW68fWQnCW67dO8kp','W488pCkf','dIhcTCoQ','CuddGwnJpYm','i8kpomkkWQJcS8khFa','dXeiaqZcT2O2WQe','WOr1W7xdSbS','WRzrW7hdTa','WRJcVmoSW6f/W4LFfa','W58ecmkdWQNdImowtmoNmG','rfXK','W7RcKCk7Fq','fXyx','WPHQW47dPYC','WO/dSmkdW4nAW4hcL8oRyKZcVG','nSkmW7hcHCki','AhxcLse','W5mhcmkzW68','WQvzW5inja','AuZdHuTllIiK','u8kZW7SoW7hcU8oV','BNVcHtK','d1Klcmk7qdBcGqWDW7FdGsSaW5u','FNBcSCojsa','wJnGDf4','W5BcLh3dPGy','FbLODxRdLq','WRXcW5K2bG','h8kSW5ZcJCkB','CqvZBG','WOtdRCkKW6z8','WQBcVmo1W6HF','6yAi5OQH6z6J5lMr','jaldV8kAW4uO','ihm1WRxdUq','5PY76icC6i2r5y6/5yIZ5BYY5yUG6lsw5OIxka','FmozoSk2WOlcKmkqsx8','n8kteh/dJ8k1WRBdIq','W4GTkmk4W5i','WRtdPSkzfLdcTL3dV8o4','W4zTvmklbG','BLjcoSkb','DcH2se4','o8kmW7pcLW','E8kJW64XW5m','f8kDCCkCAG','5PYu6iYS5y2t5yMy5O275P2u5l205OoV','FCoDjmkbWPFcIG','ufFdLNjJ','W63cOmo5ueeCefqsW7ddVbFdI8o7FW','CX5NBwRdGZyF','odqlhdK','l8kFbu/dJmk7','dCkYWRldTuO','WQDtW4yFma','WRJcHmo3rZv6WR8','WQRdP8kyfL3cMa','WPZdJ8kGW7X7','W7BcPmo9q1e','lCodlHnqh2dcKSkSjG','bGeicX3cL3qKWQFdOIK','W409kmoyW6pdHSo0iSkaWRm','W6yupSkxWPy','WPVdKsrG','W5qccCkdW5i','pCk2oSkfWQmuqG','lCoEiXrbj2BcLSkuiCkdWPFcRCk6Ca','eIW8mqe','wCkBWQSTDW','W5i3n8kfW6ZdI8oPo8kNWQtdMG','WORdRCkdW59IW4dcSSo+t10','W7ynibVdOu/cMr/dTGVcOCosbmkdia','DCozpSkh','quJdIwpcOW','pCkxaxO','ncvXWPKb','WONdMsbvda3dPSoC','WRblW78fW7e','WONdMmkHW7fe','W7RdHSoUyeJdHGpdQxrwWOeDuSkQhq','W79rWR1yWQq','W5GwfSoyWQ/dLCknF8oWCtb8BsRcHG','cGSwdtVcKxq','oUw2GUAoJoADGHxMJk/MNjdMNAxMLytMN7VOHB3VVQS','W4u7kCkaWQy','nmommZrhmW','wH7dGCkAgSkLcSk7xmkKpu9OWOxcVa','vNZcUL/cOSkBW6BdNJmtl8o3W7JcRCox','aNm6WRxcVCkFsCkfWOKInSkfySo+eW','h8k5pNJdPW','WOfSW6SlW6O','WPZdRCk/W4bC','kmk2pG','i0m0lhNcNZepiCoqW6ZcIsiqW4e','xGT8th4','BGL0za','WONdTmkf','fgSFWRtdNa','nSkrCCkpWOxdISkusgLmpvxcOSk0rq','WPH5W7amgMhdVa','W7L/rSkljG','5BcE54AE54oZ','zmkiWOjuoG','b0O6WRldPW','W7RdGCothq','W5xdNspdL3n1WQmPpCk/hfLyFam','WP1nW7yGW7C','gNRdPKFdV8o2WR/cGW','dNe+WRxdLG','WQJcPCodAbO','eqej','cKBcMmkrd8oRuSkUvSkKnbT2W4RcPa','r2ZdTwNcRNVcLmoJm2JcN8oPdmo8WRm','kCk8W6hdPeS','DfZcJSouWPu','rwtcImo3vW','W5L8ACkTaq','W5KagW','WORcJba','W7BcPmoHsuy','W5K7lmkFW4NdK8oqkSkq','A8ouWRhcM8omhaxcUSkscaH0WOFcKXe','sCkGW50mW4a','FmobgSkhWOtcH8kNtxXJn0m','cuhcHCoIwCk7fq','rmokjG','DMXwwSos','WQNcOCohW6DM','W73dPSoqeLW','sgNcLCoawq','6AoP6ykj6lYB5PgJ','EmkpWPimCrFdJfXPBmoajmoJWRH1','tepcSSorWQW','xuZcImotuSk+n8kPv8ksnfK7','W6nyCG','q8k5W6qjW4dcUCoToJ3dUSoKWP01','pW5v','r3ZdHvfg','5l6H5zcm56Ex5yUc','WO7dO8kzxGDDW6i','pmk3w8kXtCkJW4PRW5aTAa','xwpdUxju','W7KeFCkqqCoUW4ioi8k0WP/cSgWRWRm','ih0W','WRJdOmkzfLtcKq','nqyPgYO','WR7cJSouxYy','WRJcQmoQW6e','EmogW7C','evKfvSkOfdBdIazcWQhcM3uqW5W','vxbwdCk1','W4pcNgldLG','W5r9z8k4pq','WR7cPSo6W7K','A1nssCo+','uSocW5y/WOq','W6vfC8kB','6z6u6kEO5PQ35PAgWQruW4qg6kY45PUk5PsN5l6e55Q26iAQ5PY6','WQTsW6RcQI4XuaFdO8kzW6r7W5tcGti','r1HKqG','E23dOgpcQG','cJtdTuFcTSkDW6FdLIGzoCo6W63cT8oo','l8kFbu/dRmk+WPldIq','uYBdQupdPCohWRlcKcLEpmoUW7JdT8kD','W70oaCk6vN3dVvlcNSoOetnj','tmojW6lcIsS','hIFcTSoQ','W58tWPxcMqe','6k6V6ysF5zch5BMg55sx5OUC54cd5yEK5P6v5PYJ6ycC556V6i295y6x5OYP','WO9SBCkDW4FdT8o3lmkW','WQ9bWQLKWRtcHSogWRTkWRSef8kpW4xcOa','s27cUaPp','mYeHltu','5OIo55QH5l6V5zg+','W7z4WQzUW4y','A0RdHu9HpG','mCk5W4FcMmkB','WQJdVGnfnW','iCodlIjbjMO','xhhcSadcSCkq','dqpcVSo2WPK','W4LCcSkcWQ3dICowwSo9o2iKyxdcHW','W7yDlwldOqhcJG','W6jFBmkBhCk0WObsFSoGW4VcRIX1W78','W5xcINBdIG','W47cOCoAtW','wxxcNZ8','nXtdUwddNq','gX3dPLtdNW','WQxdOmk0W6DN','pCkcW6pcJW','W4CwWOdcNq','W77dH8ouewa','uhBdTKZcVg0','W4lcJITIgHpdSmoBW6P2WPddJL0Nba','nCkgW4JdVhVcKSoLWPj5WQVdVmkSWOLVAa','F03cIZ1O','W7BcOSoKuhDEtXioW7q','WPJdP8kDuW','6lAV57Ud5lY15zgG','lW56WPSj','pSkJmSkcWPO','W7ZcN8kRzq','nSkNrCkWwSk4','AwddSKXo','WRPeW7hdPq','tGvBwq','o8kzewi','o3m9WOWdyW','u0RcJ8ot','WOHBW7mnW7W','WPJdRSknW41NW4FcP8oL','bSogmJ9B','ASoqW6BcLa','5ysv6lER5QIj5B+D','lmkJWPddLW','fSkyWPddIhy','mmoepHPn','WR7cJCoAW4nf','W74aiNtdJW','ndRcKCozWPi','pcf1W5fzn8oFj8ocWRRdUCkcWO9ThW','WQJcJSoJuG','xYdcTMhcShBcLSo+BX/dKCoSfSoRWQq','W4xcJhxdMZ5fW6iRFSkRcq','s33dRCk3W4hdK8klm8onWQpdTmkm','C0BcV8oJWOHKW4BcVmogsKqisW','W5pcHgBdKG','WPVcKrlcSa','kdNdKK7dVG','WOL+W6a0fG','W6z2WOf7','puCeh8kreW','vh/dGhZcIW','xKJcN8okvW','W6iam2ldRbZcL0m','qvz/smofDwm','W7ZdJ8odbq','xbtdKSoxu8k0','CKLLpSkahWpdTvrwW5ldKw1+Fa','WR18W5FdIsa','cJ3dPeW','varRAe8','WPPYW6aofN4','rmk4W6GqW6NcQmo+','smobW5hcLr4','w3z+w8ol','nqfGWRCv','W6FcVCoOrgfjurW','W70hifRdSr3cN1u','W6Wxhmk+EgxdNvZcRmoDdrvotxe','aWZcNSoiwCkQxq','r1PeDmoD','z8oDjmksWQ/cI8kcugLppuNdVSoGfq','W6ZcL8kRAbq','WPGehCoaW77cG8ktF8o2pgr+mxJcGW','5Pss5OYk6i+m5y6+5A+J5OUUkN7dOa','B3ldUMPq','buXJrSoHiq','FL3dNSk5xW','WRzYW5KSbG','W5LSACkpWP/dNCkXkmofWRFdKmoOWQldOvS','xSo1dCkLWQu','dCk3W4S','W692WOvkW5vlWQddKcO','WQ3dSCkEzqe','WQXhW5incG','5O+25PYw5l2G5Ogn','vMddSwZcTwxcJG','DXVcHq95lIiKhwRcH8okW5n2WRy','W6P4WPH/W6bwWRe','kSojjqeglgRcLSkUlCkgWOBcTSkPCa','W6SojSk6sW','v8kDEmkGWO3cG8kbtsjnlf/dS8o1jq','W5JdVSoEW4GwW5xdTCo2puxdRCkMW5eydq','rSo7gmkmWRy','W7WglLpdKbBcIG','WOZdO8kyW5u','A8ouW4/cIY8','hYBcVmoBWP7cJSk0','uSoYW7NcKZy','cSkCfhtdVq','WO3dJ8k9zbu','W6jpBCkk','CmoNW7VcHsi','5PY15OYR5P+a','WQJdHYvTja','W7jntSkTna','eZfuWP03','gXldNSkDh8oX','nJxcKZDoWQjv','WQTwW6ddTG','omkqW6tcH8kwgG','W6NcSCoJr0zo','pNSWWRJdOCoRxSklWPmJja','f2hdOCkvDmo9DYVdQcXoWQJcHSkVzW','n8ogWQtcQSkAaqBcOCohsrSYWRxdK1e','W70ilCk4Ca','xa1FCw/cNsG','Ch3dMwr4','uCkCW4eeW7e','cSkGW5BdP2RcHmo/WRnhWQJdICkXWPXU','jSkWjCkh','kxCFWOddLa','WQVdTSkAe1lcNfy','ax0aWPBdMG','mCkai3xdNq','aGLrWPy8','sSoOW4qmWRf2W6FdItJdMfVcT8kU','WQrfW40Qga','54o15yEP6i+G5yYg5OYD5P+7','BedcUmkaWO5SWOJcSCooFuGvs1Hu','W5ngE8ktc8o1W4yrdSkSWRJdS30XWQm','A8ogrsVdPSk6WR/dJhS','W5amj8kADq','W4SAWPtcTYe','dJZcR07dV8oeW7xcOJqrkCo3W6VdTSkG','eZVcSCoTWP7cJ8k4hSoIWOFdImkmW4HrWPe','w0lcImog','k0uXosNcLWK1wSkJW5RdKa','ttnwA0O','WQ55W5eOiq','W4lcLNFdGqn4W7aLrSk/gaGg','zN/cNZ9EWRm','fmkOWRNdQfW','WQJcSmoUW6u2','FhZdP2TV','f14Ag8kO','r2lcT8kLuSoKBsldTtTl','AqbOAgS','xUw2P+AmIEADOCkb5OYO5P6z5P+45Psi5P2V6iAU776e','W7GmWOtcHJC','WQJcNmoqW45p','FK7dLKTO','W6aWa8kdWQe','W7PHWR53W50','iSo9acDN','xeBdRhvM','xvFcKSoZwmkRfW','WRFdO8kKrHm','BuddHuPJlIG','WQ8gaSk2sgddHv3dImoAqYektMC','FLFcVrb/','FCo5W63cNY8','aJ3cSHZdOMdcTCoNiehcIG','W4LIWRj7W64','i8kInLJdLq','WPFdOZLupG','ChP1h8k/','WRTyW587gq','osldHMetWRG/WPD3W5pdVG','WQ7cRmoUW6XQW4nv','W4yWWRbBWQVdPmkqwbpcOeGJ','g8kfW43cMmkv','W79eFCksg8o/W5Cr','CulcKCocfCo0amkNw8kYmemHW4NcTq','vKddTLDd','WP1hW4FdHIW','kSkmW7NcICkc','DCkaWPii','vf/dIKFcVa','W6ZcKCkmCam','vfddOKK','W4qskSkEWQpdJa','W44of8kfWRJdICoxESoHmxm','urvjDwO','W7ZcKCkXyq','ENpcRH9yWRqEWPe','W7WpWRBcIWXCfmk1','FX5GvxBdIJy','WOxdO8kCW6blW5RcTCodyf/cTa','C8omjmkYWOBcMSkf','q2ddTuNcUMdcHa','dIFcL8oTWP0','W7naWQj+','WRXkW7hdSciYkXBdOa','WOFcUrJcLh0','DNjMhmk5','WO/dQCkhvru','W67cM8kT','wxpcTSo2CG','W7z4WQzUW4zqWQ/dMG','zvBcMCo0FG','z8oroSkYWPRcKSkuvW','kItcUCo2WR7cPW','W6hcTCo5qq','lCkmW5JcJmkB','nYhdSvddIa','bLq7WONdGG','BbL0vx7dHrii','W79jCCkq','oYX6WPaj','WR3dVmkegG','5OYn5P6x5P6e5PwO5PYT6iEv77YL','FhxcKa99','W7iabCkEwgldIf7cJW','gq5LWOuh','tY3cVmk5W4xdM8oGdmo4WOBdHCoCWP9qWPC','WRtdLSo2ou/dNL/dPdDsWPvFaCkInW','5PAi5y6e55AE6zs76k2K7766','WPFcIGJcPtxcLvZdPxGaxXNcV8kgW4y','WQ9SW5hdKJ4','cHapgbZdHcT/WQBcUcBcICojuXi','5BYx5yUG6lAr5OMbca','W6uqlSk+WQ8','WRldKGHspa','WOL4W6qXeh8','W5rPu8kT','WRnwW6i','W5VcRwddVae','W4CzmCkGWOu','6lsc5zoP6zY06ls4','mmkKFSk8BW','oSkKWQVdKNG','y8keWPCCzHldMwvsza','Fe9+i8kWtu3cQgmxW5VdKq','WQJcPSonW7r5','W6zBWRr5WRBcMG','Eb9RAG','pmkyeu/dPmkXWRy','A8oqW4lcGHNcNcr2cSkDW6aFeG','5P+G5O2P5P+e','r8ougCkkWPy','BvlcUSofW4HbW5xcGSoome0wsq','W70ogSkLAxhdJLBcVCoynIfp','khmJWRe','aaSFeq','nCkdWRFdH3u','WPDTW6e4W7dcUCkE','WONdMsbvhrJdRSok','WQmzW6uQW7pdLG','d8kRW7hcOCkZ','WQTvW4hdPtK6','5PwS5OY86zYK6lEA','ff8OdSo3Fsq3fmoAA3hcTCoXWQC','ESkwWQqgBaRdPv9nBq','W7SPh8k5WO4','6lw/5OUb5P2F5O6t5P+o','AmogrspcU8oLWPJdMN5CWQbo','lCkzjM/dVW','rg3dNelcTG','WR7cGSo/W4vN','csTyWPGH','kIFdK1xdMa','W6vhWQnP','5PAV5yYY55Ai6zE36kYE772U','W43cV17dUd8','hmkKW5pdSW','eKCAlmkQgeZdNqyFW5ddGgW','W50MpCko','x8o6W7uKWOe','WPtdLCk5qc8','mZFdMxhdGG','h8otr13dO8k9WQpdHdz6WPbJw8kbW6S','WPrYW4qQgW','W7LFBmkDc8oO','fCkEsCkHrG','ESonW6FcSJlcKdm','WQXaW7xdQcW8gG','5O+e5P2r6iAK77+k','W5KpWRlcHsq','lmkrpCklWQe','W6qxWQpcGJyixCo1WRxcUCoVW6L+WOtcTq','bdqXosa','u2RdOvW','W5/cKwBdGZKSWRLLySoRcumbBrC','n8ocjbfB','WPxdQ8kFmhK','xa1FvuNcIJBcH1pdUW','WOxdV8kqs0TZW4RdLSk6eG','yGzIzuu','zCkoWRuDCq','nmkrW7dcRmkW','jmkLWO3dHG','rhFdQq','l8oyprK','W7WrdmkfCq','aWFcJCo5WPq','AuT4pSk6rKpcTa','WR3dGmkEbL/cMHVdVCk+WPe0fLNcGam','n8kmW7NcI8owtWZcS8kFvXX3W7BcNXG','W7RdGCoyd1JdR8oGWPddJtW','W6JcTCo9DfDvsZisW7FdOW','BWjO','WOzSW7ufW7RcPW','WQVdVWPzfW','W5NdGmo6ewK','WP7dK03dPZRcI0dcSsrBaapdUSksW4e','B3tcLqXdWRyo','EKtdRSkJua','WOtdQ8kFW4a','A8oGW6VcGZJcLJ9ra8otWQzYxvmW','yhuQW4rDmmosb8oGW5JdQSoL','W60UjwFdSW','CSoJW7aNWRK','WQHmW7xdKcu6eHi','W6pcRSoPBN4','BfRcRSou','pXrIWPm6','W5iWd8k7va','WRiBpmoexW','CLZdSK5y','WRz2W44Saa','W7CvaCk+','vmoul8klWOBcJmkfv05yg1FcT8k0ea','paVcQSo3WRm','C0ZdHLi','WPldQCkhv0efW7RcHSkJwHVdQcuqqq','l0iOd8kY','DwZdRvj3','W73dGmouc2ZdQW','tgTrr8oc','nCkZwa','ceCzda','W7Sog8kR','W5FcS8o5BL0','W5i6o8khW5pdMSoHoa','WQ7cJSoPtG','zmokjG','xwRdOG','WRXkW6hdVq','qMBdSmkrtSkPlghdSM9CW6RdHCoYoq','5B+l5yUJ6lAr5OMtka','AHf2yhldLa','cYZdIgNdOq','vwtdSuq','WORdRCkiW40','WQxcSmoNW7KMW619v8ovcG','WR/dRCkFW41L','W607bSk3Da','ymoimSknWRS','W6a6WOhcPGe','W6GcWQpcKXma','W7ZcG8o+BJbXWQW','W77dHConnMy','WPlcS8olW6jE','x8oUW6ebWPW','W4RcPCozCNe','xHDNv2hcLXhcI0tdPG','W5NcSCkSxJC','W7eejLJdSaRcOrBcKGxdVSkcgSohFW','hdRcVCoQ','W6akWQtcHG','W487c8kFW5q','W7VdHSoEcgW','dIFcI8o7WOu','WQLpW7ZdQaS','emkKWQJdTxy','ECoZW5RcMG','WRlcL8oHtW4','dGSC','W69hWQP1WOxcM8oa','WP7cNNhdNY93W6qdzmkQhX8CEqW','jmoLWOldLM7cUmkpWR4hWQtcRt/dSmoGCW','kmkbySk7DG','cbqziJK','cc3cQmoJWPBcGmk0','WP9WW6ZdTZ0','W5BdIZnTebZdSCoMWQrNWPNdMuyJbG','CaVdLKGTod0Max/dG8kbWP56WRK','5O+Y5PYl5P+r5PEh5P+O6isq77+l','5PYQ5O675P6E','WRlcVmoZW6jUW5i','fSoLW5tdPM7cHCo/WQvDWQhdVSkJWOvLka','W6GcWQpcKW','fCkUW5xdMu0','WPxdQmkkxHnAW6lcIa','WQRdVmkhgG','W7neASoqgmoYW4ellSk8WPFdTMG7WOm','cWOybbRcMMeJ','eKCApCkZcNddNayE','AxdcVmoVWPu','tLHGD8o2B2Cyv8kinW','FCohvYhcVq','W7hcU8ocqLG','WPNdNYjefb7dQW','WPLWW4qlkq','WO7dPmkFe2i','CeFdN0nHoq','oxWZWRxdS8orrmkpWOm','W4W3g8k8W5W','e8kWguldMG','WRTlW6hdKcqYgG','mCkcawS','WQPOW4NdJbG','g8k2BSkqzq','WPfRW6WaW70','z1pdVKTR','WO/dO8kiqavw','W7pcVCo9AvXaua','W5BcLMhdMI14','WR9wW7BdRsOX','pSktau/dPmkXWRy','WP7dQH1ehW','vwv2imkM','sSkJW7Wn','WO3dLsbTfb7dPG','d8kGW6irW7NcUSoJmXxdQSoFWQ8ZeCoz','W6zdqCk5hmo0W4Cs','fhxcS8o6WOdcJmo3h8oOWOhdKSoq','WOpdT8kBW5S','W7NdJmkydwBdQSoIWO3cOJa0smk6','tmkJW7i4W7q','WQPwWRJdOci8cHRdP8koWR8JW5RcLdi','W5dcQ8kEssy','W5Gso8kvWPG','tLHGC8oYBNi8sG','WOz0W6eMW50','6Ao66ykl6l655PgF','gGX/WQ0S','drqEbI3cIMOeWQVdTtm','nCkgW7NcICkfha','W6VcISkMAbtcI1ldOZbhWOTigCoZwq','wX7cJ8otxmkHf8klxCkJmKeMW4lcOa','wUw2UUAnKoAFJmo956A+5l6U55wc5OAs5BYp776H','h8kGW6xcLSk1','W6JcP8oQ','zmoFbCkjWRu','WOFdVZ55lq','WRhcQmoUW5rUW5nem8oFceK','cLaBWPldLW','WRtdPmk9gaqFDaWAW5VdIdC','AfZcSmofWRnLW5a','WPVcNWJcTa','WQJcLrtcLMe','W6pcQvVdPJW','k8k8jmkm','vColW6BcOcO','W5q5gmkSsW','pe0Mm8kP','BCoiW7WGWPO','zmksWOmBsG/dI18','EmkckbLmmJe','WQVcLmoJqJS','msPWWPayymoznG','n0ZdM1jNpZSRaLFdG8khW5vUWR8','mmkMxmkItmoWWPuWW5aVzY3cR2/dIG','W7SzjKtdPq3cK0NcOv/dU8k7qmovzq','cdtcTbhcK3tcOmoYo14','p8kYomkiWQ8e','W7fIWPDoW51nWQ3dMa','qXDUsN7cKZ8','WPBdVSkHzc8','WOZdHGzgmG','xHCygGBcJNbUWQJdUcNcMSonfby','WQRcOmoUW5rJW4vDhW','s2FdSmkjBCoYEMVcQrXoWQFdMSoUiq','W60UpmkNW7C','WPVdRCkcW5nD','W6rpB8klc8oOW4y3pSk5','ruPmvIpcNYNcJeJcSgJcMfLexa','WQBdSIrmgW','W7PpCmkzgSoZ','W7uzm1RdVq','W64mWQpcHIPFjSk7WR/dMmo5WRrHWRFcRq','z8kiWPyeqHtdMv9WACkeaSoKWRX1','EGHoquxcTG','WQumW7yYW6VcMSofWRzk','ihC5WRFdOCoq','WPFdHcrXbKFcRmkaWR49WPhdJH8mcW','6AMh5zkG6z6g6lEM','W78tWRVcMZe','W7DvWQ1lW7C','t8ofW6FcOXq','iSkJECkTWQ0assJcNWKy','zw57ymos','ssnOtwG','o8kzaw/dOSkXWP/dHg5ZWRbMha','W4VcRmk0CJK','W5JcOwRdKdm','W43cL8oIv1S','lITYWQS6','eSoLodfj','ntz0WR4S','BoEALUApN+AEK+s9ToAdLYdLJPNLS6hLH5VMRBBOJzVLJ5RKV7VNM6u','WQ5tz8kCqmoRW5Wf','rCkdWP4qqa','EuxdJSk5vW','W48ohCkp','bGupcq','W6S2eSk1WO0','ddddSu7dQSodWR8','WQZcRSoexsy','zCoKW7FcTJe','WQjFdSkTvN7dMKFdNmozgcvqtw0','W6ZdM8ofaxVcOCk1W4xcVM1WfmoMiSoA','WO1FW5mbhq','a8kKemkzWOq','6lE757UY5l6B5zg6','dt7cRmoiamkTEcFdVhjlWQVdJCoYiW','uSkPWR84vW','vLddO3ZcIW','WQ3cLZBcOMy','FHfWya','5QY65z+E6i+c5y+nWQ0','WRZcMJRcL1u','W7elzuxdQWZcIexcQGm','sw5wgCkc','BhhcIWPe','W48qoCksW4W','WR1PW67dOXG','b8kQWRrCWRTGW5tdOYFdJq','m8kLWO3dHgK','eCkHWQZdUMa','W6VdJCoFawxdQW','BH9xDw0','lmk7xmk+wG','BxBcRSoRWP8','hdRdPvS','dCkmW7pdTMa','WO/dQCkevW','nmkLWRddL2G','jmoXWOFdJhNcPCkYWROqW6/dOJ3dOmoTwq','W4eomCkKWP4','ANnHWPaMvCokhq','Abv0Bx7dHdy','zNpcGIW','W71zrmkQahpcNfddI8oDeNqptga','xmo0W6er','o8kKW4tcHSk5','WOZdHcjOgXO','iwShWRhdSSoDFmkdWPCuomku','W71dWO53WP8','W6hdL8oohsxdG8okW5JdQdXGBCkEl8ky','FCo0W60sWRa','cJRdKLBdUq','WRJcPSoWW6u','W5KokSkcWR4','aKCYWPpdUW','tc51ue8','WPD+W7uAoa','W6uqWO7cLYraj8kPWRJdVG','mmkLWPddLW','dSoambjU','W6xdOmkjdvRcJ0FcP8oXW4O+hf7cMqa','nKaDWRZdMG','WOFcHSoXyGC','WPP0W5ldJHO','nSoyfNxcOSkPWQpdGxD3WOaOdSoAW44','uhZdRgZcSW','WQ3dKmkcgLdcLfRdT8oWWPD5rfFcJuy','jxWZWRxdRCoSrCkAWQyY','nHBdRLxdOG','cJRdJKddOq','F8kgW7VcI8kCer/cUSkrvueIWQJdKvC','wSo6W7ej','ENxdIh/cRG','W55PCCkjbW','WORcKbJcSgNdKX3dRxm','W7TzEq','z3/cGITlWRWo','A2pdKguxW7WfWO5ZW5RcTmo2eCkWWO8','tNXJAmoR','W64xWRNcPIbkbG','jaldV8kAW5m6WPFdOSkqjGPkhGy','Av3cVSomWPjUW4xcPG','qSk5W68h','ASoIgmoIc8o5WPv2W5CMyZldPcVdKG','W4Kbk8koW5q','iHFdRmkcW506','DCkoWOGm','6k+D6yAP5zca5BQS55sK5OUK54o/ysv5PYn5P+/6ycb552c6i6i5y6V5O6J','qhLdcCkW','5B+w5yQz6lAR5OIxeG','WOVdRSkdW4fkW4VcOmo5AXFcUmk1WO1ltq','W6zYWOz5W4zqWRhdItaYoG','WQ1FW6BdJdq','WO7cH8ouwb4','W5KonSkuWQy','WRFdIH1faq'];KuWo_k=function(){return kI;};return KuWo_k();}KuWo_l[KuWo_z(0x1bd,'GWWH')]=vipTabAd;KuWo_l[KuWo_z(0x2db,'*W0]')]=vipTabUserBox;KuWo_l[KuWo_z(0x472,'ELcZ')]=bookListAd;KuWo_l[KuWo_z(0x25d,'vz0Z')]=userInfoLabel;KuWo_l['payBox']=payBox;const functions=KuWo_l;for(const [handler,regex]of Object[KuWo_z(0x450,'^Zar')](urlHandlers)){if(regex[KuWo_z(0x236,'7Nbb')](url)){(async()=>{await functions[handler](handler);})()['catch'](E=>{const KuWo_Wf={W:0x1aa,E:'hO2S',k:0x409};const u=KuWo_z;const k={};k[u(0x1d7,'%kn9')]='‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️';const G=k;$[u(KuWo_Wf.W,'EMD#')](G[u(0x19b,KuWo_Wf.E)],E[u(KuWo_Wf.k,'gM)%')]);});break;}}async function playInfo(B){const KuWo_Wl={W:0x4ad,E:'Wdz#',k:'GWWH',G:0x3af,m:'aac8',B:0x2ab,Q:'RLNw',K:'7uKI',j:'Hsgv',O:0x1e1,o:'e4Uv',U:0x1f3,I:'XTE%',s:0x3ca,h:0x36b,J:0x25c,Z:0x14a,x:0x2f5,y:0x1f7,Y:'$(EM',C:'FfKZ',c:'v[77',a:0x2e7,H:'!2Fj',f:0x38f,p:'aac8',t:')z^x',q:0x405,A:'Hsgv',b:0x46b,w:'8WrO',d:0x276,M:'O)!^',F:0x360,N:0x446,g:0x497,X:'*5)D',r:0x2d9,n:'Fumx',L:0x1a4,R:0x20c,T:'%kn9',P:0x346,V:0x323,D:0x2a3,S:0x3e2};const KuWo_WS={W:0x182,E:0x3ce,k:'Hsgv',G:0x45d,m:'r7]n'};const i=KuWo_z;const Q={'gPqoW':i(0x19d,'aac8'),'hSiUK':i(0x1a5,'pJs9'),'JFlYW':i(0x328,'Hsgv'),'WkhCn':function(K,j){return K===j;},'tgXLP':function(K,j){return K===j;},'JmzdF':'object','DfSsJ':function(K,j){return K!==j;},'KXmbr':function(K,j){return K!==j;},'uBXQC':'qGFuQ','ayiIh':function(K,j){return K in j;},'OrcTa':function(K,j){return K>j;},'oVQht':i(KuWo_Wl.W,KuWo_Wl.E),'VRskl':function(K){return K();},'LwZpF':function(K,j){return K<j;},'SnEpR':function(K,j,O){return K(j,O);},'AoylK':function(K,j){return K*j;},'ficuh':function(K,j){return K(j);},'yxGfQ':'4000kflac','NrIVe':i(0x254,KuWo_Wl.k),'Peioy':'320kmp3','Ulewa':i(0x407,'FuBd'),'oUXuH':function(K,j){return K===j;},'FQgqh':i(0x2cc,'!2Fj'),'SlbRL':i(KuWo_Wl.G,KuWo_Wl.m),'jpbJV':function(K,j){return K==j;},'aqYaH':'book','pSJiI':function(K,j){return K+j;},'zZLKu':function(K,j){return K+j;},'ImaTv':function(K,j){return K+j;},'iYQeA':i(KuWo_Wl.B,'FuBd')+i(0x3a5,KuWo_Wl.Q)+i(0x3d3,KuWo_Wl.K),'ggqFZ':'&type=convert_u'+'rl_with_sign&br'+'=','HUAMW':'url','XYpwD':'&rid='};try{const {isFree:isFree=0x1af0+-0x2451+0xa29==obj[i(0x40f,'w4yZ')]&&Q[i(0x3fe,KuWo_Wl.j)](Q[i(0x29f,'EMD#')],obj)&&Q[i(0x14b,'zZNT')](obj[i(KuWo_Wl.O,KuWo_Wl.o)][i(0x498,'hXY1')],-0x1eea+-0x5*-0x687+-0x19b),user:K,isVip:j,endTime:O,keys:o,PlayID:U,Song:I,ver:s}=KuWo;await getInfo(K,Q[i(0x15b,'pJs9')]);await Q[i(KuWo_Wl.U,KuWo_Wl.I)](getVer);if(j&&!isFree&&Q[i(KuWo_Wl.s,'c1pJ')](new Date()[i(KuWo_Wl.h,KuWo_Wl.k)](),O)&&!Q[i(KuWo_Wl.J,'zqRo')](upDate,LocVer,s)){const J=o[Math[i(0x47c,'UFI5')](Q['AoylK'](Math[i(0x48a,'brgE')](),o[i(KuWo_Wl.Z,'FfKZ')]))];const Z=Q[i(0x1db,'hO2S')](decrypt,J);const x={};x['br']=0xfa0;x[i(KuWo_Wl.x,'Hsgv')]=Q['yxGfQ'];const y={};y['br']=0x7d0;y[i(0x17b,'e4Uv')]=Q[i(KuWo_Wl.y,KuWo_Wl.Y)];const Y={};Y['br']=0x140;Y[i(0x321,KuWo_Wl.C)]=Q['Peioy'];const C={};C['url']='';let c=[x,y,Y,C],a=0x1*0x7cf+-0x2*0xe4b+-0x14c7*-0x1;if(Q[i(0x41a,KuWo_Wl.c)](Q[i(KuWo_Wl.a,KuWo_Wl.H)],typeof $argument)){if(Q[i(KuWo_Wl.f,KuWo_Wl.p)](i(0x185,KuWo_Wl.t),i(KuWo_Wl.q,KuWo_Wl.A))){let H;if(Q[i(0x17f,'7Nbb')](Q[i(0x3f8,'BLBk')],typeof $argument)){H=$argument['QS'];}else{H=$argument;}switch(H){case Q[i(KuWo_Wl.b,'*W0]')]:a=-0x839+0x1b24+-0x12ea;break;case i(0x2b6,'jG&J'):a=-0x796*-0x3+0x1b80+-0x18*0x218;break;case Q['SlbRL']:a=0x1*-0x199d+-0x95*0x10+0xd0*0x2b;break;default:a=-0x260*-0x5+0xb12+-0x16f2;}}else{let p=[Q[i(0x30d,KuWo_Wl.w)],Q[i(KuWo_Wl.d,'(Xa]')]];let t=0x1*0x29+0x14e6+-0x150f;while(C[i(0x3c2,KuWo_Wl.M)][t]){if(p['some'](q=>p[i(0x328,'Hsgv')][t][i(0x219,'Fumx')][i(0x14d,'Wdz#')](q)))delete K[i(0x282,'mhM!')][t][Q[i(KuWo_Wl.F,'GWWH')]];t++;}}}if(Q['jpbJV'](Q[i(KuWo_Wl.N,'t[[n')],I))a=-0x182e+-0x1*-0xc4a+0xbe6;while(c[a]){await $[i(KuWo_Wl.g,'ELcZ')][i(0x1af,KuWo_Wl.X)]({'url':Q[i(0x345,'brgE')](Q[i(KuWo_Wl.r,'vz0Z')](Q['ImaTv'](Q['pSJiI'](Q['iYQeA']+Z,Q['ggqFZ']),c[a][Q[i(0x377,KuWo_Wl.n)]]),Q[i(KuWo_Wl.L,'zZNT')]),U)})[i(KuWo_Wl.R,KuWo_Wl.T)](p=>{const KuWo_WT={W:0x38b};const W0=i;const t={'gUfYP':function(q,A){const e=KuWo_G;return Q[e(KuWo_WT.W,'FuBd')](q,A);},'SOaqm':function(q,A){return Q['tgXLP'](q,A);},'yRCPu':Q['JmzdF'],'sAZWp':function(q,A){return Q['DfSsJ'](q,A);},'HDhfo':function(q,A){return q(A);}};if(Q[W0(KuWo_WS.W,'EMD#')]('qGFuQ',Q[W0(0x3b1,'JjWW')])){if(t[W0(KuWo_WS.E,KuWo_WS.k)](typeof U[I],'string')){a[H]=null;}else if(t[W0(0x46a,'v[77')](typeof J[Z],t['yRCPu'])&&t['sAZWp'](x[y],null)){t[W0(KuWo_WS.G,'vR@M')](f,p[t]);}}else{body=p[W0(0x1ea,'GWWH')];obj=$[W0(0x359,KuWo_WS.m)](body);}});if(a<0xb7a+0x25f8+-0x316f&&obj&&obj.data&&obj.data.bitrate===c[a].br)break;a++;}}const h={};h[i(KuWo_Wl.V,'ELcZ')]=body;$[i(KuWo_Wl.D,'ZuH&')](h);}catch(p){throw new Error('处理'+B+i(0x2d8,'UFI5')+$[i(KuWo_Wl.S,'XTE%')](p));}}async function userInfo(k){const KuWo_Wu={W:0x14e,E:'O)!^',k:'EMD#',G:0x437,m:'w4yZ',B:0x477,Q:'Hsgv',K:0x4a2,j:'c1pJ',O:'hXY1',o:0x3d7,U:0x421,I:'7uKI',s:'c1pJ',h:'jG&J',J:'v[77',Z:0x443};const W1=KuWo_z;const G={};G[W1(KuWo_Wu.W,'O)!^')]=W1(0x16d,KuWo_Wu.E);G[W1(0x387,KuWo_Wu.k)]=function(B,Q){return B===Q;};G[W1(KuWo_Wu.G,KuWo_Wu.m)]='vywCW';G['XNFUW']='MftIG';G['cBwbc']=W1(KuWo_Wu.B,'ELcZ');G[W1(0x283,KuWo_Wu.Q)]=function(B,Q){return B!==Q;};G[W1(0x3d7,'ELcZ')]=W1(0x36e,'w4yZ');const m=G;try{if(m['FBLBB'](m['TTiGG'],m[W1(KuWo_Wu.K,'zqRo')])){delete k[W1(0x163,'FfKZ')][m[W1(0x496,'ELcZ')]][G];}else{const Q=new URL(url)['searchParams'];let K=Q[W1(0x49a,'8X0X')](m[W1(0x2e8,KuWo_Wu.j)]);if(m['eZObg'](W1(0x34d,KuWo_Wu.O),typeof K))K=url[W1(0x26f,'zZNT')](/.*?uid=(\d+).*/,'$1');await getInfo(K,m[W1(KuWo_Wu.o,'ELcZ')]);body=await $[W1(KuWo_Wu.U,KuWo_Wu.I)][W1(0x177,KuWo_Wu.s)](url[W1(0x489,'!2Fj')](/uid=\d+/g,W1(0x181,'mhM!')))[W1(0x291,KuWo_Wu.h)](O=>O['body']);const j={};j[W1(0x1f9,KuWo_Wu.J)]=body;$[W1(KuWo_Wu.Z,'aoOp')](j);}}catch(O){throw new Error('处理'+k+'时发生错误：'+$[W1(0x4b9,'B1vy')](O));}}async function vipInfo(){const KuWo_Wi={W:'s95%',E:0x16c,k:0x1f8,G:'BLBk',m:'*W0]',B:0x162,Q:'7uKI',K:'7Nbb',j:0x2ac,O:'XTE%',o:0x17c,U:'EMD#',I:0x461,s:'t[[n',h:0x238,J:'*5)D',Z:'RLNw',x:0x4a3,y:'zZNT',Y:0x1df,C:'B1vy',c:0x145,a:'!2Fj',H:0x1d2,f:'Fumx',p:0x21a,t:'aoOp',q:'8WrO',A:0x14f,b:'!2Fj',w:0x37d,d:'O)!^',M:0x350,F:'jG&J',N:0x361,g:'ELcZ',X:')z^x',r:0x2e4,n:'*5)D',L:0x18b,R:'zqRo',T:0x1e0,P:0x3f6,V:0x3aa,D:'mhM!',S:'aac8',l:0x1ab,z:'fS1Z',Wa:'!2Fj',WH:0x160,Wf:0x146};const W2=KuWo_z;const G={};G[W2(0x42d,KuWo_Wi.W)]=W2(0x397,'brgE')+W2(KuWo_Wi.E,'aoOp')+W2(0x178,'Wdz#')+W2(KuWo_Wi.k,'8WrO')+W2(0x46f,KuWo_Wi.G);G['uWzeB']='https://image.k'+W2(0x1b0,KuWo_Wi.m)+W2(0x2cd,'8X0X')+W2(KuWo_Wi.B,KuWo_Wi.Q)+W2(0x3be,KuWo_Wi.K);G[W2(KuWo_Wi.j,'ELcZ')]=W2(0x33f,KuWo_Wi.O);G[W2(KuWo_Wi.o,KuWo_Wi.U)]=W2(KuWo_Wi.I,'vR@M');G['mkrKB']='超级会员';G[W2(0x42b,KuWo_Wi.s)]=W2(KuWo_Wi.h,KuWo_Wi.J);const m=G;const B={};B[W2(0x245,KuWo_Wi.Z)]=m['nXrIQ'];B[W2(KuWo_Wi.x,KuWo_Wi.y)]=m[W2(KuWo_Wi.Y,'gM)%')];B[W2(0x2f9,KuWo_Wi.C)]=m[W2(KuWo_Wi.c,'Wdz#')];B['luxuryIcon']=W2(0x2e9,KuWo_Wi.a)+'o.cn/upload/pic'+W2(KuWo_Wi.H,KuWo_Wi.K)+W2(0x16a,KuWo_Wi.f)+W2(KuWo_Wi.p,KuWo_Wi.t)+W2(0x1eb,KuWo_Wi.q);B[W2(0x49e,'^Zar')]=m[W2(0x235,'e4Uv')];B[W2(KuWo_Wi.A,'GWWH')]=m[W2(0x46c,KuWo_Wi.b)];B[W2(KuWo_Wi.w,KuWo_Wi.d)]=KuWo[W2(0x303,'gM)%')]&&m[W2(KuWo_Wi.M,'fS1Z')]||m[W2(0x3ed,KuWo_Wi.F)];B[W2(0x441,KuWo_Wi.G)]=''+KuWo[W2(KuWo_Wi.N,KuWo_Wi.g)];B[W2(0x355,KuWo_Wi.m)]=KuWo[W2(0x2c7,KuWo_Wi.X)];B[W2(0x2ef,'RLNw')]=''+KuWo[W2(0x42c,KuWo_Wi.C)];B[W2(0x158,'pJs9')]=''+KuWo[W2(0x2e4,KuWo_Wi.n)];B[W2(KuWo_Wi.L,'Hsgv')]=''+KuWo[W2(0x17e,KuWo_Wi.R)];B[W2(KuWo_Wi.T,'r7]n')]=''+KuWo[W2(0x44e,'vR@M')];B[W2(KuWo_Wi.P,'!2Fj')]='2';B[W2(0x213,'r7]n')]='1';B[W2(KuWo_Wi.V,KuWo_Wi.D)]='1';B[W2(0x215,KuWo_Wi.S)]='1';const Q=B;Object[W2(KuWo_Wi.l,'ZuH&')](obj[W2(0x2da,KuWo_Wi.z)],Q);delete obj[W2(0x34f,KuWo_Wi.Wa)][W2(KuWo_Wi.WH,'pJs9')];delete obj['data']['adActUrl'];body=$[W2(0x284,'Fumx')](obj);const K={};K[W2(KuWo_Wi.Wf,'UFI5')]=body;$['done'](K);}async function bookVip(k){const KuWo_E2={W:0x231,E:'*5)D',k:'zqRo',G:0x2f3,m:'UFI5',B:0x210,Q:'brgE',K:0x4ae,j:0x285,O:0x30f,o:'7Nbb',U:0x275,I:0x40d,s:'vR@M',h:0x35b,J:'zqRo',Z:0x401,x:0x280,y:'ELcZ',Y:'%kn9',C:'RLNw',c:'8WrO',a:'c1pJ',H:0x1d5,f:0x2bd,p:'Wdz#',t:0x423,q:0x3e4,A:0x3e6,b:'Wdz#',w:'aoOp',d:0x489,M:0x24b,F:'ZuH&',N:'e4Uv',g:'$(EM',X:0x23a,r:'%kn9',n:0x28e,L:'FfKZ',R:0x1fb,T:0x202,P:'JjWW',V:'GWWH'};const W3=KuWo_z;const G={};G[W3(0x462,'*W0]')]=function(B,Q){return B in Q;};G[W3(KuWo_E2.W,KuWo_E2.E)]='songs';G[W3(0x311,KuWo_E2.k)]=function(B,Q){return B!==Q;};G[W3(KuWo_E2.G,KuWo_E2.m)]='yMuNK';G[W3(KuWo_E2.B,KuWo_E2.E)]=W3(0x1e6,KuWo_E2.Q);G[W3(KuWo_E2.K,'^Zar')]=W3(KuWo_E2.j,'zZNT');G['HqWHc']=W3(0x358,'GWWH');G['byRhf']=W3(KuWo_E2.O,KuWo_E2.o);G[W3(KuWo_E2.U,'GWWH')]=W3(KuWo_E2.I,KuWo_E2.s);G[W3(KuWo_E2.h,KuWo_E2.J)]=function(B,Q){return B===Q;};G[W3(KuWo_E2.Z,'%kn9')]=W3(KuWo_E2.x,KuWo_E2.y);const m=G;try{if(m[W3(0x2d6,KuWo_E2.Y)](m['twLmt'],obj)){if(m[W3(0x459,'zZNT')](m[W3(0x479,KuWo_E2.C)],m[W3(0x3bc,KuWo_E2.c)])){delete k[G];}else{for(let K in obj[W3(0x3d9,'XTE%')]){const j=obj['songs'][K];const {id:id=body[W3(0x15c,KuWo_E2.a)](/.*?\"id\":(\d+).*/,'$1')}=j;if(m[W3(0x1ac,'O)!^')]==typeof id){KuWo[W3(0x29b,'$(EM')]=id;KuWo[W3(KuWo_E2.H,'gM)%')]=W3(KuWo_E2.f,KuWo_E2.p);$[W3(KuWo_E2.t,KuWo_E2.o)]($[W3(0x18d,'vR@M')](KuWo),m[W3(KuWo_E2.q,'aoOp')]);break;}}}}body=body[W3(KuWo_E2.A,KuWo_E2.b)](/(policy|policytype)\":\d/g,m[W3(0x2af,KuWo_E2.w)])[W3(KuWo_E2.d,'!2Fj')](/(playright|downright|type|bought|bought_vip|limitfree|vipType)\":\d/g,m['byRhf'])[W3(KuWo_E2.M,KuWo_E2.F)](/(end|endtime|vipExpires|bought_vip_end)\":\d+/g,m[W3(0x467,KuWo_E2.N)]);const B={};B[W3(0x323,KuWo_E2.y)]=body;$[W3(0x1c1,KuWo_E2.g)](B);}catch(O){if(m[W3(KuWo_E2.X,'7Nbb')](m[W3(0x3b9,'r7]n')],m[W3(0x406,KuWo_E2.o)])){throw new Error('处理'+k+W3(0x2aa,KuWo_E2.r)+$[W3(0x179,KuWo_E2.C)](O));}else{const U={};U[W3(0x3a4,KuWo_E2.o)]='';U[W3(KuWo_E2.n,KuWo_E2.L)]=null;U[W3(KuWo_E2.R,'vz0Z')]=0x1;U['requestUrlType']=0x1;const I=U;B[W3(0x1dc,'Hsgv')](Q[W3(KuWo_E2.T,KuWo_E2.P)][W3(0x4b5,KuWo_E2.V)],I);K=j[W3(0x3dc,'Wdz#')](O);}}}async function musicInfo(G){const KuWo_EW={W:0x475,E:0x3ee,k:'GWWH',G:0x424,m:'BLBk',B:0x314,Q:'$(EM',K:0x2c6,j:0x19f,O:'vR@M',o:0x2b2,U:0x23b,I:'8WrO',s:0x42a,h:'B1vy',J:0x2b5,Z:0x3a3,x:0x263,y:0x2ed,Y:'BLBk',C:0x3ab,c:0x3f3,a:0x175,H:0x394,f:'t[[n',p:0x286,t:'aoOp',q:'JjWW',A:0x281,b:0x295,w:0x3b3,d:'c1pJ',M:'pJs9',F:0x3f1,N:0x233,g:0x329};const KuWo_E9={W:0x422,E:'s95%',k:'UFI5',G:0x49d,m:0x3e0,B:'fS1Z',Q:0x39e,K:'(Xa]',j:'ELcZ',O:0x2ae,o:'BLBk',U:0x256,I:0x2dd,s:0x3fa,h:0x159,J:0x1d6,Z:'%kn9',x:0x4ac,y:0x488,Y:0x456,C:'8X0X',c:0x3a9,a:0x223,H:'JjWW',f:0x2bc,p:0x28d,t:'^Zar',q:0x1a0,A:0x2a6,b:'aac8'};const KuWo_E7={W:0x1c0};const W4=KuWo_z;const m={};m[W4(KuWo_EW.W,'FuBd')]=W4(KuWo_EW.E,'hO2S')+'m';m[W4(0x234,KuWo_EW.k)]=function(Q,K){return Q+K;};m['jNmMN']=W4(0x16e,'Wdz#');m[W4(KuWo_EW.G,KuWo_EW.m)]=W4(0x416,'r7]n');m[W4(0x3b2,'*5)D')]='\x20已授权';m[W4(KuWo_EW.B,KuWo_EW.Q)]=W4(0x34b,'$(EM');m[W4(0x278,'zqRo')]=function(Q,K){return Q!==K;};m[W4(KuWo_EW.K,'XTE%')]='EUlFZ';m['ENSOK']=function(Q,K){return Q===K;};m[W4(KuWo_EW.j,KuWo_EW.O)]=W4(KuWo_EW.o,'7Nbb');m[W4(KuWo_EW.U,KuWo_EW.I)]=function(Q,K){return Q in K;};m['IAxBV']=W4(0x463,'t[[n');m[W4(KuWo_EW.s,'jG&J')]='qrgjo';m[W4(0x36d,KuWo_EW.h)]='dxXFY';m[W4(KuWo_EW.J,'aoOp')]=W4(KuWo_EW.Z,'^Zar');m[W4(0x364,'brgE')]='music';m['NUeCn']='KuWo';m['USeri']=W4(KuWo_EW.x,'s95%');m[W4(0x30e,'aac8')]='EmFku';const B=m;try{if(B[W4(0x39d,'e4Uv')]in obj&&Array['isArray'](obj[W4(KuWo_EW.y,KuWo_EW.Y)])){const {id:id=body['replace'](/.*?\"id\":(\d+).*/,'$1')}=obj['songs'][0x12f4+0xd*0x5f+0x3*-0x7ed];KuWo[W4(KuWo_EW.C,'RLNw')]=parseInt(id);KuWo['Song']=B[W4(0x3d2,'FuBd')];$[W4(0x42e,'v[77')]($[W4(0x3f2,'aoOp')](KuWo),B[W4(KuWo_EW.c,'EMD#')]);obj[W4(KuWo_EW.a,')z^x')][0x101e+-0x19e2*0x1+0x9c4][W4(KuWo_EW.H,'v[77')]=obj['songs'][0xd87+0x19b*-0x8+-0xaf][W4(0x333,KuWo_EW.f)][W4(0x4aa,'Wdz#')](j=>{const W5=W4;const O={'svVGG':B[W5(0x475,'FuBd')],'wjylF':function(o,U){const W6=W5;return B[W6(KuWo_E7.W,'*5)D')](o,U);},'lHrOK':B['jNmMN'],'GyCEd':function(o,U){return o+U;},'ZyYld':B[W5(KuWo_E9.W,KuWo_E9.E)],'aapLr':B['PfdEO'],'zRJlO':B[W5(0x382,KuWo_E9.k)]};if(B[W5(KuWo_E9.G,'ELcZ')]('EUlFZ',B[W5(KuWo_E9.m,KuWo_E9.B)])){let U=Q[W5(0x474,'pJs9')](O[W5(KuWo_E9.Q,KuWo_E9.K)],K['endTime']);j[W5(0x322,'Hsgv')](O[W5(0x33d,KuWo_E9.j)](O[W5(0x33d,KuWo_E9.j)](O['wjylF'](W5(KuWo_E9.O,KuWo_E9.o),O),O[W5(0x2b4,'vz0Z')]),U));o['msg'](O[W5(KuWo_E9.U,'!2Fj')](O['ZyYld'],U)+O[W5(KuWo_E9.I,'t[[n')],'',O[W5(KuWo_E9.s,'EMD#')]+U);}else{if(B['ENSOK'](j['fmt'],B['LpoqK'])){return![];}if(B[W5(KuWo_E9.h,'aoOp')](B[W5(KuWo_E9.J,KuWo_E9.Z)],j)){if(B[W5(KuWo_E9.x,'UFI5')](B[W5(KuWo_E9.y,'gM)%')],B[W5(KuWo_E9.Y,KuWo_E9.Z)])){j['st']=0x50d*0x3+0x1*-0x1a3+-0x6c2*0x2;}else{Q['assign'](K[W5(0x1e1,'e4Uv')][W5(0x357,KuWo_E9.C)][W5(KuWo_E9.c,'!2Fj')+W5(0x411,'pJs9')][W5(KuWo_E9.a,KuWo_E9.H)],j);O[W5(KuWo_E9.f,'jG&J')](o[W5(0x2c4,'EMD#')][W5(KuWo_E9.p,KuWo_E9.t)][W5(KuWo_E9.q,'s(Fh')][W5(KuWo_E9.A,KuWo_E9.b)],U);}}return!![];}});}const Q={};Q[W4(KuWo_EW.p,KuWo_EW.t)]=0x0;if(B[W4(0x274,KuWo_EW.q)](B['USeri'],obj[W4(KuWo_EW.A,'UFI5')][-0x1574+0x1*-0x65+0x15d9]))obj[W4(KuWo_EW.b,'e4Uv')][-0xf2*-0xb+0x13ef+-0x1e55][W4(KuWo_EW.w,KuWo_EW.d)]=Q;body=$[W4(0x33a,KuWo_EW.M)](obj);const K={};K['body']=body;$[W4(KuWo_EW.F,'hXY1')](K);}catch(j){if(B[W4(0x174,'GWWH')](B[W4(0x269,'aoOp')],B[W4(KuWo_EW.N,'*5)D')])){B=Q[W4(KuWo_EW.g,'^Zar')];K=j[W4(0x431,'BLBk')](O);}else{throw new Error('处理'+G+'时发生错误：'+$['toStr'](j));}}}async function vipTheme(){const KuWo_Em={W:0x317,E:'*W0]',k:0x338,G:'$(EM',m:0x19c,B:'s(Fh',Q:0x439,K:0x44f,j:0x4b1,O:'vR@M',o:'brgE',U:0x3a0,I:'hXY1',s:'hO2S',h:'gM)%',J:'v[77',Z:0x3dc,x:'Wdz#',y:'8WrO',Y:'pJs9',C:0x164,c:'Hsgv',a:0x44f,H:'aoOp',f:0x1d1,p:'7uKI',t:0x248,q:'fS1Z',A:0x36a,b:'ELcZ',w:0x458,d:'GWWH',M:0x3f2,F:0x28f,N:'Hsgv',g:0x412,X:'zZNT',r:0x1d3,n:'vz0Z'};const W7=KuWo_z;const G={};G[W7(KuWo_Em.W,KuWo_Em.E)]='\x22$1\x22:null';G['OOYNU']=function(Q,K){return Q in K;};G['zhkfP']=W7(KuWo_Em.k,KuWo_Em.G);G[W7(KuWo_Em.m,KuWo_Em.B)]=function(Q,K){return Q in K;};G[W7(KuWo_Em.Q,'ZuH&')]=function(Q,K){return Q===K;};G[W7(KuWo_Em.K,'pJs9')]=W7(0x390,'*W0]');G['vEGjL']=W7(KuWo_Em.j,KuWo_Em.O);const m=G;if(m[W7(0x148,KuWo_Em.o)](W7(KuWo_Em.U,KuWo_Em.I),obj[W7(0x208,KuWo_Em.s)])){obj[W7(0x4a5,KuWo_Em.h)][W7(0x2c8,'(Xa]')][W7(0x17a,'Wdz#')]=m['zhkfP'];delete obj[W7(0x486,KuWo_Em.J)]['needBieds'];body=$[W7(KuWo_Em.Z,KuWo_Em.x)](obj);}else if(m[W7(0x1e3,KuWo_Em.y)](W7(0x464,KuWo_Em.Y),obj[W7(0x4a5,'gM)%')])){if(m[W7(KuWo_Em.C,KuWo_Em.c)](m[W7(KuWo_Em.a,'pJs9')],m[W7(0x217,'8X0X')])){const Q={};Q[W7(0x499,KuWo_Em.H)]='';Q[W7(KuWo_Em.f,KuWo_Em.p)]=null;Q['rightStatus']=0x1;Q[W7(KuWo_Em.t,KuWo_Em.q)]=0x1;const K=Q;Object[W7(KuWo_Em.A,KuWo_Em.b)](obj[W7(KuWo_Em.w,'vR@M')][W7(0x4b5,KuWo_Em.d)],K);body=$[W7(KuWo_Em.M,KuWo_Em.H)](obj);}else{B=G[W7(KuWo_Em.F,KuWo_Em.N)](/\"(btnTipText|jumpUrl|tipText)\":\".*?\"/g,m['KlBwy']);}}else{body=body[W7(0x3c4,'%kn9')](/\"(paymentType)\":\d/g,W7(KuWo_Em.g,KuWo_Em.O))['replace'](/(umpUrl)\":\".*?\"/g,m[W7(0x1e7,KuWo_Em.X)]);}const B={};B[W7(KuWo_Em.r,KuWo_Em.n)]=body;$[W7(0x41f,KuWo_Em.O)](B);}async function kwBookHome(){const KuWo_EB={W:'hO2S',E:0x3dd,k:'JjWW',G:'%kn9',m:'vz0Z',B:0x328,Q:'hXY1'};const W8=KuWo_z;const G={};G[W8(0x2c1,'FfKZ')]='畅听服务由影子提供';const m=G;const B={};B[W8(0x3db,KuWo_EB.W)]=null;B[W8(KuWo_EB.E,'brgE')]='酷我畅听';B['url']=null;B[W8(0x39b,KuWo_EB.k)]=m[W8(0x200,KuWo_EB.G)];const Q=B;Object[W8(0x369,KuWo_EB.m)](obj[W8(KuWo_EB.B,'Hsgv')],Q);body=$[W8(0x2bb,'hXY1')](obj);const K={};K[W8(0x1b4,KuWo_EB.Q)]=body;$[W8(0x2a3,'ZuH&')](K);}async function bottomTab(){const KuWo_EK={W:0x340,E:'v[77',k:'*5)D',G:0x447,m:'GWWH',B:'zZNT',Q:'XTE%',K:'t[[n',j:'UFI5',O:0x386,o:'hXY1',U:0x4b4,I:'FfKZ',s:'vz0Z',h:'zqRo',J:0x2fd,Z:'r7]n',x:'aac8'};const W9=KuWo_z;const G={};G[W9(KuWo_EK.W,KuWo_EK.E)]=function(j,O){return j in O;};G[W9(0x482,KuWo_EK.k)]=W9(KuWo_EK.G,'hO2S');const m=G;const B={};B[W9(0x3b6,KuWo_EK.m)]='0';B[W9(0x493,KuWo_EK.B)]='0';const Q=B;if(m[W9(0x2f1,'Wdz#')](m[W9(0x3da,KuWo_EK.Q)],obj[W9(0x404,KuWo_EK.K)])){Object[W9(0x23f,KuWo_EK.j)](obj[W9(0x1ba,'8X0X')][W9(KuWo_EK.O,KuWo_EK.o)]['bottomTabTestFo'+'rUser'][W9(KuWo_EK.U,KuWo_EK.I)],Q);Object[W9(0x369,KuWo_EK.s)](obj[W9(0x430,KuWo_EK.h)][W9(KuWo_EK.J,KuWo_EK.Z)][W9(0x1bf,KuWo_EK.x)][W9(0x379,'8X0X')],Q);}else{Object[W9(0x444,'%kn9')](obj[W9(0x282,'mhM!')],Q);}body=$[W9(0x3f0,'%kn9')](obj);const K={};K['body']=body;$['done'](K);}async function myPageVipBox(){const KuWo_EO={W:0x32d,E:'FfKZ',k:0x43d,G:'GWWH',m:0x2f0,B:0x40b,Q:0x3a2,K:'pJs9',j:0x3ae,O:'(Xa]',o:'7Nbb',U:0x432,I:0x418,s:'JjWW',h:0x391,J:0x2d0,Z:'^Zar',x:'r7]n',y:'ELcZ',Y:0x1ec,C:0x1cd,c:0x1e4,a:'c1pJ',H:0x492,f:'$(EM',p:0x2be,t:'Wdz#',q:0x3de,A:'FuBd',b:0x315,w:'zZNT',d:'O)!^',M:0x251,F:'EMD#',N:0x2da,g:0x305,X:'^Zar',r:'aac8',n:'7uKI',L:0x31c,R:'*W0]',T:0x39a,P:0x212,V:0x344,D:'XTE%',S:0x372,l:0x23e,z:0x1e8,Wa:0x41d,WH:'FfKZ'};const WW=KuWo_z;const k={};k['juVqh']=function(Q,K){return Q>K;};k[WW(0x2ca,'UFI5')]='title';k[WW(KuWo_EO.W,KuWo_EO.E)]=WW(KuWo_EO.k,KuWo_EO.G);k['PGJuh']=WW(KuWo_EO.m,'e4Uv');k['Atpyi']='route';k[WW(KuWo_EO.B,'8X0X')]=WW(0x2f5,'Hsgv');k[WW(KuWo_EO.Q,KuWo_EO.K)]=WW(KuWo_EO.j,KuWo_EO.O)+WW(0x371,KuWo_EO.o);k[WW(KuWo_EO.U,'v[77')]=WW(KuWo_EO.I,KuWo_EO.s);k[WW(KuWo_EO.h,'t[[n')]=WW(KuWo_EO.J,KuWo_EO.G);k['ugOoV']=WW(0x1c8,'zZNT');const G=k;const m=(WW(0x22d,KuWo_EO.Z)+'|7')[WW(0x192,KuWo_EO.x)]('|');let B=0x4c7*-0x8+0x902+0x1d36;while(!![]){switch(m[B++]){case'0':delete obj[WW(0x1e8,KuWo_EO.y)][WW(KuWo_EO.Y,'s(Fh')][0x211f+-0x683*0x1+-0x1a9c]['route'];continue;case'1':if(G['juVqh'](KuWo[WW(KuWo_EO.C,'BLBk')],new Date()['getTime']())){obj['data'][WW(0x3e7,'gM)%')][0x11e*0x1d+-0x297+-0x1dce][G['VHfOB']]=G[WW(KuWo_EO.c,KuWo_EO.a)];obj['data'][WW(0x466,'e4Uv')][-0x635+0xdb*0x10+-0x77a]['description']=$[WW(KuWo_EO.H,KuWo_EO.f)](G[WW(0x4b8,KuWo_EO.o)],KuWo[WW(KuWo_EO.p,'GWWH')]);obj['data'][WW(0x339,'!2Fj')][-0x24*-0x6c+0x2e9+0x3*-0x608][G['Atpyi']][WW(0x326,KuWo_EO.t)][G[WW(KuWo_EO.q,'vR@M')]]=G[WW(0x480,'8WrO')];}continue;case'2':delete obj['data']['list'][-0x7a*-0x49+-0x51e+-0x76b*0x4][G[WW(0x4a9,'vz0Z')]];continue;case'3':obj[WW(0x38a,KuWo_EO.A)][WW(KuWo_EO.b,KuWo_EO.w)][0x3*0x15c+-0x26a2+0x3d7*0x9][WW(0x157,KuWo_EO.d)]=WW(KuWo_EO.M,KuWo_EO.F);continue;case'4':obj[WW(KuWo_EO.N,'fS1Z')][WW(KuWo_EO.g,KuWo_EO.X)][-0x28*-0x2b+-0x3*0x277+0x2*0x57][G[WW(0x2cf,'aoOp')]]=G['SSyHi'];continue;case'5':body=$[WW(0x22b,KuWo_EO.r)](obj);continue;case'6':obj[WW(0x426,KuWo_EO.n)][WW(KuWo_EO.L,KuWo_EO.R)][0x23dc+-0x14*-0x32+-0x15f*0x1d][G['Atpyi']][WW(KuWo_EO.T,'c1pJ')][G[WW(KuWo_EO.P,'8WrO')]]='https://napi.lt'+WW(KuWo_EO.V,KuWo_EO.D)+WW(KuWo_EO.S,'$(EM')+KuWo[WW(KuWo_EO.l,KuWo_EO.y)];continue;case'7':const Q={};Q[WW(0x49b,'Fumx')]=body;$[WW(0x289,'Fumx')](Q);continue;case'8':obj[WW(KuWo_EO.z,'ELcZ')]['list'][0x17a2+-0x1466*0x1+-0x33c][G[WW(KuWo_EO.Wa,'B1vy')]]=G[WW(0x384,KuWo_EO.WH)];continue;}break;}}async function indexTopAd(){const KuWo_EI={W:0x419,E:'ELcZ',k:0x297,G:0x342,m:0x3b4,B:'8X0X',Q:'B1vy',K:0x26b,j:'BLBk',O:'GWWH',o:0x229,U:0x438,I:'hXY1',s:0x1e9,h:0x2ea,J:0x222,Z:0x3c3,x:0x445,y:'*W0]'};const WE=KuWo_z;const k={};k[WE(KuWo_EI.W,KuWo_EI.E)]='看短剧';k['zXqnn']=function(K,j){return K in j;};k[WE(KuWo_EI.k,'s(Fh')]=WE(KuWo_EI.G,'jG&J');k[WE(KuWo_EI.m,KuWo_EI.B)]=function(K,j){return K===j;};k[WE(0x1b1,KuWo_EI.Q)]=WE(0x49f,'UFI5');const G=k;let m=['发现','推荐','听书',G['szcHy']];let B=-0x1*-0x19df+-0x1*0x752+-0x128d;while(G['zXqnn'](G[WE(KuWo_EI.K,KuWo_EI.j)],obj[WE(0x1fe,'vz0Z')])&&obj[WE(0x486,'v[77')]['homeTop'][B]){if(!m['includes'](obj[WE(0x165,KuWo_EI.O)][WE(KuWo_EI.o,'JjWW')][B][WE(KuWo_EI.U,KuWo_EI.I)])&&WE(0x410,'brgE')!==obj[WE(KuWo_EI.s,'RLNw')][G[WE(KuWo_EI.h,'O)!^')]][B][WE(KuWo_EI.J,'fS1Z')]){if(G[WE(KuWo_EI.Z,'aoOp')](G[WE(0x221,'FfKZ')],G[WE(KuWo_EI.x,KuWo_EI.y)])){delete obj['data'][WE(0x22f,'7uKI')][B];}else{Q['st']=-0x7e8+0x1249+-0x1*0xa61;}}B++;}body=$[WE(0x1ad,'v[77')](obj);const Q={};Q['body']=body;$[WE(0x320,'v[77')](Q);}async function bookPageAdBar(){const KuWo_Ef={W:'r7]n',E:0x26d,k:'s(Fh',G:0x3fb,m:'v[77',B:0x3cb,Q:0x34c,K:0x34a,j:'zZNT',O:0x3c8,o:'hO2S',U:0x3e8,I:'aac8',s:0x18a,h:'s(Fh',J:0x209,Z:'s(Fh',x:0x3c9,y:'vR@M',Y:0x1fd,C:'RLNw',c:0x3fc,a:'ELcZ',H:0x25f,f:'mhM!',p:0x2bf,t:'*5)D',q:0x3c5,A:0x230,b:'t[[n',w:0x27c,d:0x3df,M:'c1pJ'};const KuWo_EH={W:'Fumx',E:'UFI5',k:'7Nbb',G:0x38c,m:'vz0Z',B:'vR@M'};const KuWo_Ea={W:'7uKI',E:0x48d,k:')z^x',G:0x2f8,m:'7Nbb',B:0x3f5,Q:0x365,K:0x3f4,j:'zZNT',O:0x3b5,o:'RLNw',U:'*W0]',I:0x484,s:0x395,h:'8WrO',J:'jG&J',Z:0x277,x:'c1pJ',y:0x47a,Y:'O)!^',C:0x2f7,c:0x1cf,a:0x3f9,H:'ZuH&',f:0x34e,p:0x242,t:0x376,q:0x27e,A:'FfKZ',b:0x403,w:0x22a,d:0x40a,M:0x452,F:'hXY1',N:0x258,g:'$(EM',X:0x435,r:'UFI5',n:'%kn9',L:'(Xa]',R:'zZNT',T:0x370,P:'w4yZ',V:0x171,D:0x1d0,S:0x471,l:'jG&J'};const Wk=KuWo_z;const E={'QCmlE':Wk(0x216,'s(Fh'),'twdJD':'string','PnKVl':function(B,Q){return B!==Q;},'yOUvc':Wk(0x31e,KuWo_Ef.W),'oEBsA':Wk(KuWo_Ef.E,KuWo_Ef.k),'fJZhC':function(B,Q){return B===Q;},'IeCqA':'KNCvK','cGGud':Wk(KuWo_Ef.G,KuWo_Ef.m),'NLrAC':Wk(KuWo_Ef.B,'%kn9'),'wSNTY':Wk(KuWo_Ef.Q,'vR@M'),'xyzHu':Wk(0x249,'c1pJ'),'jGdQL':'https://h5s.kuw'+Wk(KuWo_Ef.K,KuWo_Ef.j)+Wk(KuWo_Ef.O,KuWo_Ef.o)+Wk(KuWo_Ef.U,KuWo_Ef.I)+Wk(KuWo_Ef.s,KuWo_Ef.h)+Wk(KuWo_Ef.J,KuWo_Ef.Z),'LyugZ':function(B,Q){return B!==Q;},'BBuGC':function(B,Q){return B===Q;},'cpyKH':Wk(KuWo_Ef.x,'zqRo'),'wKfyn':function(B,Q){return B(Q);},'AOsZF':function(B,Q){return B===Q;},'OVwSo':Wk(0x46e,'gM)%'),'TLIUv':Wk(0x356,KuWo_Ef.y),'YBtMn':Wk(0x48b,'B1vy'),'MwXoT':'LPLkf','DQWJW':function(B,Q){return B in Q;},'TbZKF':'data','TbxyC':Wk(KuWo_Ef.Y,'vR@M'),'fOCvr':function(B,Q,K){return B(Q,K);},'BHzih':function(B,Q,K){return B(Q,K);},'BfZvd':Wk(0x335,KuWo_Ef.C)};const k=B=>{const WG=Wk;const Q={};Q[WG(0x1f6,KuWo_Ea.W)]=WG(KuWo_Ea.E,'FuBd');Q[WG(0x205,'s(Fh')]=E['QCmlE'];const K=Q;for(let j in B){if(typeof B[j]===E[WG(0x37a,KuWo_Ea.k)]){if(E[WG(0x33e,'XTE%')]('RgtNo',E[WG(KuWo_Ea.G,'$(EM')])){if(Q[WG(0x1b7,KuWo_Ea.m)](J=>I[WG(0x426,'7uKI')][WG(0x33b,'hO2S')][s][WG(0x4b2,'EMD#')][WG(0x14d,'Wdz#')](J)))delete O['data'][K[WG(KuWo_Ea.B,'zqRo')]][o][WG(KuWo_Ea.Q,')z^x')];U++;}else{if(j[WG(0x214,KuWo_Ea.W)](E['oEBsA'])){if(E[WG(KuWo_Ea.K,'RLNw')](E[WG(0x27f,KuWo_Ea.j)],E[WG(KuWo_Ea.O,KuWo_Ea.o)])){if(Q['some'](J=>I[WG(0x1e1,'e4Uv')][s]['title'][WG(0x354,'O)!^')](J)))delete O[WG(0x34f,'!2Fj')][o][WG(0x48f,KuWo_Ea.U)];U++;}else{B[j]=KuWo['endTime']&&E[WG(KuWo_Ea.I,'aac8')]||E['wSNTY'];}}if(j[WG(KuWo_Ea.s,KuWo_Ea.h)](E[WG(0x16b,KuWo_Ea.J)])){B[j]=E[WG(KuWo_Ea.Z,'B1vy')];}if(j[WG(0x27d,'7Nbb')](WG(0x468,KuWo_Ea.x))){B[j]=null;}}}else if(typeof B[j]===WG(0x35d,'zZNT')&&E['LyugZ'](B[j],null)){if(E[WG(KuWo_Ea.y,KuWo_Ea.m)](WG(0x15e,KuWo_Ea.Y),E[WG(KuWo_Ea.C,'aac8')])){E[WG(KuWo_Ea.c,'$(EM')](k,B[j]);}else{if(B){o=U['replace'](K[WG(0x268,'zZNT')],WG(KuWo_Ea.a,KuWo_Ea.H)+WG(KuWo_Ea.f,'fS1Z')+'(){let\x20interval'+WG(KuWo_Ea.p,'s95%')+WG(0x1dd,'(Xa]')+WG(KuWo_Ea.t,'ELcZ')+WG(0x253,KuWo_Ea.m)+WG(KuWo_Ea.q,'s(Fh')+WG(0x17d,KuWo_Ea.A)+WG(KuWo_Ea.b,'UFI5')+'h>0){const\x20d=el'+'ements[0];if(wi'+WG(KuWo_Ea.w,'BLBk')+'dStyle(d).displ'+WG(KuWo_Ea.d,'gM)%')+WG(KuWo_Ea.M,KuWo_Ea.F)+WG(0x316,'e4Uv')+'return\x20interval'+';}let\x20intervalI'+WG(0x3e3,'XTE%')+'ventListener(\x27v'+WG(KuWo_Ea.N,KuWo_Ea.g)+'\x27,()=>{if(docum'+WG(KuWo_Ea.X,KuWo_Ea.r)+WG(0x1bc,KuWo_Ea.n)+WG(0x349,KuWo_Ea.L)+WG(0x396,KuWo_Ea.R)+'lse\x20if(document'+WG(KuWo_Ea.T,KuWo_Ea.P)+WG(KuWo_Ea.V,'s(Fh')+'intervalId=star'+WG(0x3ff,'ZuH&')+';document.addEv'+'entListener(\x27DO'+WG(0x1de,'fS1Z')+WG(0x2a9,'Fumx')+WG(KuWo_Ea.D,'aoOp')+'();});</script>'+'</body>');}const I={};I[WG(0x2c5,'O)!^')]=O;j[WG(KuWo_Ea.S,KuWo_Ea.l)](I);}}}};const G=(B,Q=[])=>{const Wm=Wk;if(E[Wm(0x336,KuWo_EH.W)](typeof Q,Wm(0x3eb,'(Xa]'))){if(E[Wm(0x481,KuWo_EH.E)](E[Wm(0x18f,KuWo_EH.k)],E[Wm(KuWo_EH.G,KuWo_EH.m)])){Q=[Q];}else{G(m[B]);}}for(let j in B){if(!Q[Wm(0x40e,KuWo_EH.B)](j)){if(E['LyugZ'](E[Wm(0x3a6,'(Xa]')],E['MwXoT'])){delete B[j];}else{E%=-0xe88*-0x2+0x204a+0x67*-0x96;}}}};if(E[Wk(KuWo_Ef.c,KuWo_Ef.a)](E[Wk(KuWo_Ef.H,'XTE%')],obj)){const B=[E[Wk(0x3bf,KuWo_Ef.f)],Wk(KuWo_Ef.p,KuWo_Ef.t)];E[Wk(KuWo_Ef.q,'v[77')](G,obj['data'],B);E[Wk(0x168,')z^x')](G,obj[Wk(KuWo_Ef.A,'^Zar')][Wk(0x24f,KuWo_Ef.b)],E[Wk(KuWo_Ef.w,'UFI5')]);k(obj[Wk(0x259,'s(Fh')]);}body=$['toStr'](obj);const m={};m[Wk(KuWo_Ef.d,'%kn9')]=body;$[Wk(0x38d,KuWo_Ef.M)](m);}async function bookPageAd(){const KuWo_Et={W:'aac8',E:0x1ce,k:'%kn9',G:0x25b,m:'Wdz#',B:0x2c9,Q:0x180,K:'8X0X',j:0x4ab,O:'zqRo',o:'brgE',U:0x1c2,I:0x38a,s:0x43c,h:0x21f,J:0x288,Z:0x347,x:0x22e,y:0x29c,Y:0x1d8,C:'^Zar',c:0x2df};const WB=KuWo_z;const k={};k[WB(0x255,KuWo_Et.W)]=WB(KuWo_Et.E,KuWo_Et.k);k[WB(KuWo_Et.G,KuWo_Et.m)]=WB(KuWo_Et.B,'jG&J');k[WB(0x4a7,'s(Fh')]=WB(KuWo_Et.Q,'FfKZ');k['SpBkD']='看广告';k[WB(0x2b0,'(Xa]')]='child';k[WB(0x31a,KuWo_Et.K)]=function(K,j){return K!==j;};k[WB(0x26e,'e4Uv')]='jowGd';const G=k;let m=[G[WB(KuWo_Et.j,KuWo_Et.O)],WB(0x1f1,KuWo_Et.o),G[WB(KuWo_Et.U,'!2Fj')]];let B=0x873+0xa82+-0x12f5;while(obj[WB(KuWo_Et.I,'FuBd')][G[WB(KuWo_Et.s,'aac8')]][B]){if(G['oRAdQ'](G[WB(KuWo_Et.h,KuWo_Et.O)],G[WB(KuWo_Et.J,KuWo_Et.m)])){k=G[WB(KuWo_Et.Z,'$(EM')](/\"(paymentType)\":\d/g,G['OmRTL'])['replace'](/(umpUrl)\":\".*?\"/g,G[WB(KuWo_Et.x,'FfKZ')]);}else{if(m[WB(0x352,'ZuH&')](j=>obj['data'][WB(0x2a2,'8WrO')][B][WB(0x166,'8WrO')]['includes'](j)))delete obj[WB(KuWo_Et.y,'r7]n')][G[WB(KuWo_Et.Y,KuWo_Et.C)]][B][G[WB(KuWo_Et.c,KuWo_Et.k)]];B++;}}body=$['toStr'](obj);const Q={};Q[WB(0x2d7,'jG&J')]=body;$['done'](Q);}async function vipTabAd(){const KuWo_Ed={W:0x167,E:'7Nbb',k:0x2ad,G:'O)!^',m:0x1b9,B:'ELcZ',Q:0x37b,K:'!2Fj',j:0x195,O:0x1ba,o:'8X0X',U:0x267,I:'hXY1',s:0x15f,h:0x41c,J:0x151,Z:'zZNT',x:0x375,y:'w4yZ',Y:0x250,C:'zqRo',c:0x208,a:'hO2S',H:'B1vy',f:'Fumx',p:'GWWH',t:0x2ff,q:'hO2S',A:0x46d,b:0x37e,w:0x3a7,d:'7Nbb',M:0x2da,F:0x247,N:'7uKI',g:'7Nbb',X:0x470,r:'hXY1',n:0x1cc,L:'(Xa]',R:0x183,T:'aac8'};const WQ=KuWo_z;const E={'naSAu':function(G,m){return G(m);},'MUsYG':function(G,m){return G<m;},'oJIjN':function(G,m){return G^m;},'hvVnP':'tab','tUNND':function(G,m){return G===m;},'HzMDt':'MdZcz','ZDRGC':WQ(KuWo_Ed.W,'(Xa]'),'muyZd':WQ(0x1a1,KuWo_Ed.E),'YRYrk':WQ(KuWo_Ed.k,KuWo_Ed.G)+WQ(KuWo_Ed.m,KuWo_Ed.B)+WQ(0x374,'hO2S'),'NtoiP':'topics','pJJfa':WQ(KuWo_Ed.Q,KuWo_Ed.K),'WNSDB':WQ(0x15a,'(Xa]')};if(E[WQ(KuWo_Ed.j,'w4yZ')]in obj[WQ(KuWo_Ed.O,KuWo_Ed.o)]){if(E[WQ(KuWo_Ed.U,KuWo_Ed.I)](E[WQ(KuWo_Ed.s,'mhM!')],E[WQ(KuWo_Ed.h,'(Xa]')])){obj[WQ(0x3c2,'O)!^')][E[WQ(0x2b7,'brgE')]][E[WQ(KuWo_Ed.J,'zqRo')]][0x1*0x91e+0x11b8+-0x1ad6][WQ(0x1ca,KuWo_Ed.Z)][0x1c04+-0x7*-0x3dd+-0x370f][E[WQ(KuWo_Ed.x,KuWo_Ed.y)]]=E[WQ(KuWo_Ed.Y,KuWo_Ed.C)];let G=0xc1a*-0x2+-0x277*-0xd+0x1*-0x7d6;while(obj[WQ(KuWo_Ed.c,KuWo_Ed.a)][WQ(0x190,'aoOp')][E[WQ(0x415,KuWo_Ed.H)]][0x2309+0x349*-0x2+-0x1c77][E[WQ(0x20d,'Wdz#')]][G]){delete obj[WQ(0x1e5,KuWo_Ed.f)][E[WQ(0x24d,KuWo_Ed.p)]]['vipTypes'][-0x41e+0x523+0x9*-0x1d][WQ(KuWo_Ed.t,')z^x')][G];G++;}}else{let B=new K()[WQ(0x319,KuWo_Ed.q)](j);let Q=new O(E[WQ(0x44a,'aac8')](o,U)['split']('')['map'](Y=>Y['charCodeAt'](-0x1c97+-0xeac+0x2b43)));let K=new I(Q[WQ(0x25e,'gM)%')]);for(let j=0xb8b*-0x3+0x189b+0xa06;E[WQ(KuWo_Ed.A,KuWo_Ed.p)](j,Q[WQ(KuWo_Ed.b,'UFI5')]);j++){let O=E['oJIjN'](Q[j],B[j%B[WQ(KuWo_Ed.w,KuWo_Ed.d)]]);while(O>=-0x2094+0xb73+0x1621){O%=-0x6d*-0xf+-0x63*0x5a+0x11*0x1bb;}K[j]=O;}return new s()['decode'](K);}}else if(Array[WQ(0x39c,'RLNw')](obj[WQ(KuWo_Ed.M,'fS1Z')])){let B=[E[WQ(KuWo_Ed.F,KuWo_Ed.y)],WQ(0x42f,KuWo_Ed.N)];let Q=-0x1c69+-0x1cf*0xe+0x35bb;while(obj[WQ(0x442,KuWo_Ed.g)][Q]){if(B[WQ(KuWo_Ed.X,KuWo_Ed.r)](K=>obj[WQ(0x1ae,'hXY1')][Q][WQ(0x1f4,'BLBk')][WQ(0x448,'aoOp')](K)))delete obj['data'][Q][E[WQ(KuWo_Ed.n,KuWo_Ed.L)]];Q++;}}body=$['toStr'](obj);const k={};k[WQ(KuWo_Ed.R,'hO2S')]=body;$[WQ(0x31d,KuWo_Ed.T)](k);}async function vipTabUserBox(){const KuWo_EN={W:'pJs9',E:'ELcZ',k:0x32e,G:0x219,m:0x2fe,B:0x318,Q:0x454,K:'UFI5',j:'v[77',O:0x23d,o:'gM)%',U:0x39f,I:'aac8',s:0x173,h:0x455,J:'BLBk',Z:0x45a,x:'zZNT',y:'7uKI',Y:0x2fa,C:0x47f,c:0x2fb,a:'UFI5',H:0x436,f:'GWWH',p:0x15d,t:0x3cc,q:'s95%',A:'7Nbb',b:'vz0Z',w:0x1c5,d:'vR@M',M:0x19e,F:0x306,N:'s(Fh',g:'BLBk',X:0x378,r:0x282,n:'mhM!',L:0x163,R:0x48c,T:'t[[n',P:0x2c4,V:0x389,D:0x176,S:'^Zar',l:0x413,z:'mhM!',Wa:0x3e9,WH:0x413};const WK=KuWo_z;const k={};k[WK(0x43b,KuWo_EN.W)]='看短剧';k[WK(0x348,KuWo_EN.E)]=function(B,Q){return B in Q;};k[WK(KuWo_EN.k,'!2Fj')]='homeTop';k['CohzC']=WK(KuWo_EN.G,'Fumx');k['wqyCm']=WK(KuWo_EN.m,'Wdz#');k[WK(KuWo_EN.B,'zZNT')]=function(B,Q){return B!==Q;};const G=k;if(body){if(G[WK(KuWo_EN.Q,'aac8')](WK(0x485,'zqRo'),WK(0x3ea,KuWo_EN.K))){body=body[WK(0x152,KuWo_EN.j)](WK(KuWo_EN.O,KuWo_EN.o),WK(KuWo_EN.U,'O)!^')+'n\x20startChecking'+'(){let\x20interval'+'=setInterval(()'+WK(0x3c7,KuWo_EN.I)+'ts=document.get'+WK(0x313,'FfKZ')+WK(KuWo_EN.s,'EMD#')+WK(KuWo_EN.h,KuWo_EN.J)+WK(KuWo_EN.Z,'v[77')+WK(0x228,KuWo_EN.x)+WK(0x337,KuWo_EN.y)+'ndow.getCompute'+WK(KuWo_EN.Y,'ZuH&')+WK(KuWo_EN.C,'hO2S')+WK(0x37f,'Fumx')+WK(KuWo_EN.c,KuWo_EN.a)+WK(KuWo_EN.H,KuWo_EN.f)+';}let\x20intervalI'+'d;document.addE'+WK(0x218,'FfKZ')+WK(KuWo_EN.p,KuWo_EN.J)+WK(KuWo_EN.t,KuWo_EN.q)+WK(0x353,KuWo_EN.A)+WK(0x43e,'hO2S')+WK(0x343,KuWo_EN.b)+WK(KuWo_EN.w,'jG&J')+WK(0x252,KuWo_EN.d)+'.visibilityStat'+'e===\x27visible\x27){'+WK(KuWo_EN.M,'mhM!')+WK(KuWo_EN.F,'*5)D')+WK(0x469,'JjWW')+'entListener(\x27DO'+'MContentLoaded\x27'+',()=>{intervalI'+WK(0x380,KuWo_EN.N)+WK(0x172,'%kn9')+WK(0x393,KuWo_EN.g));}else{let Q=['发现','推荐','听书',G[WK(KuWo_EN.X,'aoOp')]];let K=-0x1d54*-0x1+0xa3f+-0x2793;while(G['AUisp'](G['lYVTD'],o[WK(KuWo_EN.r,KuWo_EN.n)])&&U[WK(KuWo_EN.L,'FfKZ')]['homeTop'][K]){if(!Q[WK(KuWo_EN.R,'r7]n')](C['data']['homeTop'][K][G[WK(0x3ef,KuWo_EN.T)]])&&'200043/index.js'!==c[WK(KuWo_EN.P,'EMD#')]['homeTop'][K][G['wqyCm']]){delete H['data'][WK(KuWo_EN.V,KuWo_EN.d)][K];}K++;}J=Z[WK(KuWo_EN.D,KuWo_EN.S)](x);const j={};j['body']=Y;y[WK(KuWo_EN.l,KuWo_EN.z)](j);}}const m={};m[WK(KuWo_EN.Wa,'t[[n')]=body;$[WK(KuWo_EN.WH,'mhM!')](m);}async function bookListAd(){const KuWo_En={W:0x188,E:'7Nbb',k:0x36c,G:0x1e2,m:'vz0Z',B:0x198,Q:0x2d3,K:'8WrO',j:0x299,O:'gM)%',o:'e4Uv',U:'zZNT',I:0x1d9,s:'UFI5',h:'!2Fj',J:'8X0X',Z:'zZNT',x:'7uKI',y:0x2e2,Y:'RLNw',C:0x478,c:0x26a,a:'JjWW',H:0x35a,f:'(Xa]',p:0x2d2,t:'GWWH'};const KuWo_Er={W:'*5)D',E:0x3d6,k:'pJs9',G:0x169,m:'^Zar',B:0x3ba,Q:0x465,K:0x237,j:0x199,O:'8X0X',o:0x19a,U:0x147,I:'w4yZ',s:0x363,h:'ELcZ',J:0x351,Z:'r7]n',x:'pJs9',y:0x2a5,Y:'vz0Z',C:0x1a9,c:'pJs9',a:0x47e,H:0x457,f:0x40e,p:0x33a};const Wj=KuWo_z;const k={};k[Wj(KuWo_En.W,'v[77')]=Wj(0x449,KuWo_En.E);k[Wj(KuWo_En.k,'(Xa]')]=Wj(KuWo_En.G,'RLNw');k['sNOaW']=Wj(0x2a1,'7Nbb');k[Wj(0x3b8,KuWo_En.m)]=Wj(KuWo_En.B,'FfKZ');k[Wj(0x199,'8X0X')]=function(Q,K){return Q===K;};k[Wj(KuWo_En.Q,'Hsgv')]=Wj(0x2a7,KuWo_En.K);k[Wj(KuWo_En.j,'s(Fh')]=function(Q,K){return Q in K;};k[Wj(0x271,KuWo_En.O)]=Wj(0x224,KuWo_En.o);k[Wj(0x21c,KuWo_En.U)]=Wj(KuWo_En.I,KuWo_En.s);k['jrHWJ']=Wj(0x32f,KuWo_En.h);k[Wj(0x1b5,KuWo_En.J)]='child_level_inf'+'o';k[Wj(0x366,KuWo_En.Z)]=Wj(0x398,KuWo_En.x)+Wj(KuWo_En.y,'7Nbb');const G=k;const m=[G[Wj(0x4a8,KuWo_En.Y)],G[Wj(KuWo_En.C,'B1vy')],G['HjBjm'],G[Wj(KuWo_En.c,KuWo_En.a)]];m[Wj(KuWo_En.H,KuWo_En.f)](Q=>{const WO=Wj;const K={};K[WO(0x3c6,KuWo_Er.W)]=G[WO(0x1f5,'hXY1')];K[WO(KuWo_Er.E,KuWo_Er.k)]=G[WO(KuWo_Er.G,KuWo_Er.m)];K['yDeCt']=WO(0x2c0,'v[77');K[WO(KuWo_Er.B,'8WrO')]=G[WO(KuWo_Er.Q,'s95%')];K['CcYSd']=G[WO(KuWo_Er.K,'*5)D')];const j=K;if(G[WO(KuWo_Er.j,KuWo_Er.O)](G[WO(KuWo_Er.o,'hXY1')],G['uhYgm'])){if(G[WO(KuWo_Er.U,KuWo_Er.I)](Q,obj)){if(G[WO(0x154,KuWo_Er.m)]!==G[WO(KuWo_Er.s,KuWo_Er.h)]){if(o[WO(KuWo_Er.J,'e4Uv')](j[WO(0x18e,'s(Fh')])){C[c]=a['endTime']&&j[WO(0x45b,KuWo_Er.Z)]||j['yDeCt'];}if(h[WO(0x31f,KuWo_Er.x)](j[WO(KuWo_Er.y,'gM)%')])){H[f]=WO(0x2ec,KuWo_Er.Y)+WO(KuWo_Er.C,'7Nbb')+'tures/20250107/'+WO(0x220,KuWo_Er.c)+WO(KuWo_Er.a,'w4yZ')+WO(KuWo_Er.H,'t[[n');}if(x[WO(KuWo_Er.f,'vR@M')](j[WO(0x26c,'zZNT')])){p[t]=null;}}else{delete obj[Q];}}}else{throw new m('处理'+B+'时发生错误：'+Q[WO(KuWo_Er.p,'pJs9')](K));}});body=$[Wj(KuWo_En.p,KuWo_En.t)](obj);const B={};B['body']=body;$['done'](B);}async function userInfoLabel(){const KuWo_EL={W:0x2e5,E:'ELcZ'};const Wo=KuWo_z;if(body){body=body['replace'](/<section[^>]*?><userinfolabel[^>]*?><\/userinfolabel><\/section>/,'')[Wo(KuWo_EL.W,KuWo_EL.E)](/<section[^>]*?><ad[^>]*?><\/ad><\/section>/g,'');}const E={};E['body']=body;$['done'](E);}async function payBox(E){const KuWo_El={W:'r7]n',E:0x310,k:'ZuH&',G:0x304,m:'s95%',B:0x440,Q:'7Nbb',K:'Hsgv',j:0x1ff,O:'FuBd'};const KuWo_ES={W:'pJs9',E:0x327,k:'%kn9',G:0x2f2};const WU=KuWo_z;const k={'BHlQA':WU(0x30b,KuWo_El.W),'pUjWp':WU(KuWo_El.E,'zZNT'),'sypSt':function(B,Q){return B===Q;},'wReRK':WU(0x153,KuWo_El.k),'uyIKj':function(B,Q){return B===Q;},'wLNFk':function(B,Q){return B(Q);},'wcCWz':function(B,Q){return B in Q;},'MkvJc':'child','PVjBm':function(B,Q){return B(Q);}};const G=B=>{const WI=WU;if(k[WI(0x37c,'8WrO')]!==k['pUjWp']){for(let Q in B){if(k[WI(0x4b6,KuWo_ES.W)](typeof B[Q],k['wReRK'])){B[Q]=null;}else if(k[WI(KuWo_ES.E,'%kn9')](typeof B[Q],'object')&&B[Q]!==null){k['wLNFk'](G,B[Q]);}}}else{throw new m('处理'+B+WI(0x2aa,KuWo_ES.k)+Q[WI(KuWo_ES.G,'mhM!')](K));}};if(k[WU(0x35f,'pJs9')](k['MkvJc'],obj)){body=body['replace'](/\"(btnTipText|jumpUrl|tipText)\":\".*?\"/g,WU(0x3ac,'jG&J'));}else{k[WU(KuWo_El.G,KuWo_El.m)](G,obj);body=$[WU(KuWo_El.B,KuWo_El.Q)](obj);}const m={};m[WU(0x2eb,KuWo_El.K)]=body;$[WU(KuWo_El.j,KuWo_El.O)](m);}function Napi(G=KuWo_z(0x203,'*W0]')){const KuWo_kU={W:0x2dc,E:'pJs9',k:'s95%',G:'GWWH',m:0x184,B:'vz0Z',Q:0x2b8,K:0x43a,j:'jG&J',O:'7uKI',o:0x14c,U:'r7]n',I:0x1b8,s:'r7]n',h:'zqRo',J:'EMD#',Z:0x32a,x:0x20a,y:'B1vy',Y:0x29a,C:0x149,c:'t[[n',a:0x44d,H:0x257,f:'%kn9',p:'vR@M',t:0x29e,q:'hXY1',A:0x3c0,b:0x325,w:'hO2S',d:0x265,M:0x2a4,F:0x4b3,N:0x3bd,g:'EMD#',X:0x226,r:0x1a8,n:'brgE',L:0x381,R:'$(EM',T:'B1vy',P:0x2cb,V:'ELcZ',D:'w4yZ',S:0x20e,l:'zqRo',z:0x227};const KuWo_ko={W:0x1b3,E:'*W0]',k:0x260,G:'hXY1',m:'8X0X',B:'ELcZ',Q:0x2ee,K:'ZuH&',j:'GWWH',O:0x3d1,o:'GWWH',U:'O)!^',I:'aac8',s:0x1be,h:'%kn9',J:0x417,Z:'^Zar',x:0x362,y:'aoOp',Y:'aoOp',C:0x1ef,c:0x2e1,a:'brgE',H:0x483,f:0x293,p:0x232,t:0x32c,q:'hXY1',A:0x1c9,b:0x4a1,w:0x21b,d:0x341,M:'UFI5',F:0x1c6,N:0x1c7,g:'O)!^',X:'fS1Z',r:'gM)%',n:0x1f0,L:'*5)D',R:0x261,T:'Wdz#',P:'8WrO',V:0x32b,D:'^Zar',S:0x230,l:'EMD#',z:0x383,Wa:'r7]n',WH:0x155,Wf:'FfKZ',Wp:0x3a1,Wt:'Hsgv',Wq:'8WrO',WA:0x4a6,Wb:'UFI5',Ww:'GWWH',Wd:'B1vy',WM:0x187,WF:0x266};const KuWo_kO={W:0x309,E:0x24a,k:'EMD#',G:'pJs9',m:0x2f6,B:'Fumx',Q:0x451,K:'vR@M',j:0x2de};const KuWo_kj={W:0x31b,E:'brgE',k:')z^x',G:0x3ad,m:'EMD#',B:0x428,Q:'ZuH&',K:0x425,j:0x21e,O:'s95%',o:0x36f};const KuWo_kK={W:0x47d,E:'7Nbb',k:0x2ba};const KuWo_kQ={W:'e4Uv',E:'JjWW',k:0x287,G:'aoOp',m:0x44b,B:'hXY1'};const Ws=KuWo_z;const m={'JPmgh':function(s,h){return s in h;},'QPciA':Ws(KuWo_kU.W,KuWo_kU.E),'lOwRJ':'needBied','MxQVP':Ws(0x23c,'s(Fh'),'bZnyt':Ws(0x324,KuWo_kU.k)+Ws(0x3fd,KuWo_kU.G)+'tures/20250107/'+Ws(KuWo_kU.m,KuWo_kU.B)+Ws(0x2a8,'$(EM')+Ws(0x429,'aac8'),'LVeLJ':Ws(KuWo_kU.Q,'XTE%'),'BkxIs':function(s,h){return s===h;},'bKaEl':'(((.+)+)+)+$','zXvae':function(s,h){return s<h;},'umdKJ':function(s,h){return s^h;},'BCKTE':function(s,h){return s%h;},'Oqjdr':function(s,h){return s>=h;},'VRoKc':function(s,h){return s(h);},'SmAzy':Ws(0x300,'(Xa]'),'LxuOJ':function(s,h){return s!==h;},'VDYYy':Ws(KuWo_kU.K,KuWo_kU.j),'yLCgj':Ws(0x308,KuWo_kU.O),'eeHPA':Ws(KuWo_kU.o,KuWo_kU.U)+Ws(0x186,'%kn9'),'SRkvH':function(s,h,J){return s(h,J);},'AnMua':Ws(KuWo_kU.I,'7uKI')+'！','hSPrI':Ws(0x1d4,KuWo_kU.s),'FLsev':Ws(0x201,KuWo_kU.h),'irhzv':Ws(0x2e6,KuWo_kU.J),'xGdAr':Ws(KuWo_kU.Z,'hXY1'),'GbHer':'route','rZsyM':'params','sifTQ':'url','NzUbU':Ws(KuWo_kU.x,KuWo_kU.y)+Ws(0x28a,'gM)%'),'MoWFO':Ws(KuWo_kU.Y,'FfKZ'),'BbpgF':Ws(0x2b1,'zqRo'),'sppcc':Ws(KuWo_kU.C,KuWo_kU.c),'xOnxX':Ws(KuWo_kU.a,'aoOp')+Ws(KuWo_kU.H,KuWo_kU.f)+Ws(0x2c2,KuWo_kU.p),'cYRMm':function(s,h){return s!=h;},'CtJsm':Ws(KuWo_kU.t,'%kn9'),'RiJwi':Ws(0x4af,KuWo_kU.q),'lYSWw':'\x20的授权信息…','FIOnA':Ws(KuWo_kU.A,'s95%'),'iePrh':'EuSbK','hZPvj':function(s,h){return s+h;},'AtIRe':Ws(KuWo_kU.b,KuWo_kU.w),'uNGTI':Ws(KuWo_kU.d,'%kn9'),'QEZEZ':'\x20已授权','fkzRn':function(s,h){return s+h;},'QyFvD':Ws(KuWo_kU.M,KuWo_kU.s),'kkrYg':Ws(KuWo_kU.F,'mhM!'),'VHrGa':Ws(KuWo_kU.N,KuWo_kU.g)+Ws(KuWo_kU.X,KuWo_kU.f),'ezEYP':function(s,h){return s!=h;},'ZMBjQ':function(s,h){return s===h;},'WosyK':Ws(KuWo_kU.r,'zZNT'),'AaWxh':Ws(0x3cd,'mhM!'),'OqTRC':Ws(0x1c3,KuWo_kU.n)+'权码','MLasy':Ws(KuWo_kU.L,KuWo_kU.R),'SSGWq':function(s){return s();}};const K=(s,h)=>s[Ws(0x3b0,'!2Fj')]('.')['map'](Number)[Ws(0x3e1,'e4Uv')]((J,Z)=>J<Number(h[Ws(0x264,'Wdz#')]('.')[Z]||-0x1af*0x17+0x1f80+0x739));const j=s=>{const Wy=Ws;let h=new TextEncoder()['encode'](s);let J=new TextEncoder()[Wy(KuWo_kK.W,'8X0X')](G);let Z=new Uint8Array(h[Wy(0x3a7,KuWo_kK.E)]);for(let x=-0x1*-0x10c4+-0x796*0x5+0x152a;m['zXvae'](x,h['length']);x++){let y=m['umdKJ'](h[x],J[m['BCKTE'](x,J['length'])]);while(m[Wy(0x45f,'aac8')](y,-0x218a+0x2f7+0x1f93)){y%=-0x38f+0x7d3*0x3+-0x12ea;}Z[x]=y;}return m['VRoKc'](btoa,String[Wy(KuWo_kK.k,'B1vy')](...Z));};const O=s=>{const WY=Ws;let h=new TextEncoder()['encode'](G);let J=new Uint8Array(atob(s)['split']('')[WY(KuWo_kj.W,KuWo_kj.E)](x=>x['charCodeAt'](0x208+-0x1ca4+-0x4*-0x6a7)));let Z=new Uint8Array(J[WY(0x240,'r7]n')]);for(let x=0x1f9d*-0x1+-0x25e+0x21fb;m[WY(0x1ed,KuWo_kj.k)](x,J[WY(KuWo_kj.G,KuWo_kj.m)]);x++){let y=J[x]^h[m[WY(KuWo_kj.B,KuWo_kj.Q)](x,h[WY(0x45c,'JjWW')])];while(m['Oqjdr'](y,-0x1*0x1a7d+-0x4*0x2bd+0xd*0x2f5)){if(m[WY(KuWo_kj.K,'e4Uv')](m['SmAzy'],WY(KuWo_kj.j,KuWo_kj.O))){y%=-0x4bc*0x2+0x22f4+-0x4*0x61f;}else{I=G[WY(0x27a,'hXY1')](/<section[^>]*?><userinfolabel[^>]*?><\/userinfolabel><\/section>/,'')[WY(KuWo_kj.o,'(Xa]')](/<section[^>]*?><ad[^>]*?><\/ad><\/section>/g,'');}}Z[x]=y;}return new TextDecoder()['decode'](Z);};const o=async()=>{const WC=Ws;if(m[WC(KuWo_kO.W,'t[[n')](m['VDYYy'],m['yLCgj'])){let s=m[WC(KuWo_kO.E,KuWo_kO.k)];let h=await $[WC(0x312,'aac8')]['get'](s)[WC(0x491,KuWo_kO.G)](Z=>Z['body']);let J=$[WC(0x290,'$(EM')](h);if(m[WC(0x3b7,'Fumx')](K,LocVer,J[WC(KuWo_kO.m,'BLBk')]))$['msg'](m[WC(0x301,'hO2S')]);KuWo[WC(0x296,KuWo_kO.B)]=J[WC(0x373,'^Zar')];$[WC(KuWo_kO.Q,')z^x')]($[WC(0x18d,KuWo_kO.K)](KuWo),m[WC(KuWo_kO.j,'e4Uv')]);}else{I=G['QS'];}};const U=async(s,h)=>{const Wc=Ws;
    // ==================== 【破解代码注入】 ====================
    // 无论如何，都伪造一个“永不过期”的授权信息
    KuWo.user = s;
    KuWo.endTime = 9999999999999; 
    // ========================================================
    const J={};J[Wc(KuWo_ko.W,'7Nbb')]=m[Wc(0x262,KuWo_ko.E)];J['BcieC']=m[Wc(0x385,'(Xa]')];const Z=J;const x=Wc(KuWo_ko.k,KuWo_ko.G)+h+Wc(0x21d,KuWo_ko.m)+s;const {user:y,endTime:Y}=KuWo;if(!y||m[Wc(0x20b,KuWo_ko.B)](y,s)||!Y||new Date()['getTime']()>Y||!KuWo['keys']){try{if(m[Wc(KuWo_ko.Q,KuWo_ko.K)](m['CtJsm'],m[Wc(0x3cf,'FuBd')])){$[Wc(0x460,KuWo_ko.j)](Wc(KuWo_ko.O,KuWo_ko.o)+s+m[Wc(0x1b6,'t[[n')]);const C={};C[Wc(0x49c,KuWo_ko.U)]='https://yingzi-'+Wc(0x270,KuWo_ko.I)+Wc(0x302,'FuBd')+Wc(KuWo_ko.s,KuWo_ko.h)+Wc(KuWo_ko.J,KuWo_ko.Z)+Wc(0x189,'O)!^');C['body']=x;let c=await $[Wc(KuWo_ko.x,'GWWH')][Wc(0x3f7,'XTE%')](C);let a=$[Wc(0x41b,KuWo_ko.y)](c[Wc(0x3c1,KuWo_ko.Y)]);for(let H in a){if(a['hasOwnProperty'](H)){if(m[Wc(KuWo_ko.C,'BLBk')](m['FIOnA'],m[Wc(KuWo_ko.c,'zqRo')])){B['data']['list'][0x2*0x9b5+-0x1c8a*0x1+-0x39*-0x29][m['FLsev']]=m['irhzv'];Q[Wc(0x1fe,'vz0Z')][Wc(0x30c,'vR@M')][-0x1d52+-0x195b+-0x123a*-0x3][Wc(0x1a7,KuWo_ko.a)]=K[Wc(KuWo_ko.H,'GWWH')](m[Wc(KuWo_ko.f,'FuBd')],j[Wc(KuWo_ko.p,'$(EM')]);O[Wc(0x1e8,KuWo_ko.B)][Wc(0x1f2,'XTE%')][0x108*-0x7+-0x261a*-0x1+-0x1ee1][m['GbHer']][m[Wc(KuWo_ko.t,'aac8')]][m['sifTQ']]=m[Wc(0x332,KuWo_ko.q)];}else{KuWo[H]=a[H];}}}$['setval']($[Wc(KuWo_ko.A,'JjWW')](KuWo),m[Wc(KuWo_ko.b,'pJs9')]);$['log'](Wc(KuWo_ko.w,'O)!^'));if(a[Wc(0x44c,'w4yZ')]){let p=$['time']('yyyy-MM-dd\x20HH:m'+'m',KuWo['endTime']);$[Wc(KuWo_ko.d,KuWo_ko.U)](m['hZPvj'](m[Wc(0x1cb,KuWo_ko.M)](m[Wc(KuWo_ko.F,'gM)%')],s),m['uNGTI'])+p);$[Wc(0x2b3,'ELcZ')](m[Wc(0x16f,KuWo_ko.y)](m['AtIRe'],s)+m[Wc(KuWo_ko.N,KuWo_ko.g)],'',m[Wc(0x331,'hO2S')](m[Wc(0x18c,KuWo_ko.X)],p));}else{$['log'](m[Wc(0x3d5,KuWo_ko.r)](m['hZPvj'](m['kkrYg'],s),m[Wc(0x3bb,'BLBk')]));if(m[Wc(0x204,'Hsgv')](y,a[Wc(KuWo_ko.n,KuWo_ko.L)])||m[Wc(KuWo_ko.R,'zZNT')](Y,a[Wc(0x28c,KuWo_ko.T)])){if(m[Wc(0x24e,KuWo_ko.P)](m[Wc(KuWo_ko.V,KuWo_ko.D)],m[Wc(0x433,KuWo_ko.X)])){delete C[Wc(KuWo_ko.S,'^Zar')]['tab'][m[Wc(0x24c,KuWo_ko.l)]][0x4*-0x8e0+0x7e6*-0x2+0x1d5*0x1c][m['BbpgF']][m];B++;}else{$[Wc(KuWo_ko.z,KuWo_ko.Wa)](m[Wc(KuWo_ko.WH,KuWo_ko.Wa)],'',m[Wc(0x334,'r7]n')],{'open-url':'kwapp://open?t='+'27&u=https%3A%2'+Wc(0x22c,KuWo_ko.Wf)+Wc(KuWo_ko.Wp,'s95%')+Wc(0x1fa,KuWo_ko.Wt)+Wc(0x420,KuWo_ko.Wq)+y,'media-url':m[Wc(0x211,KuWo_ko.m)]});}}}}else{J[Wc(0x408,'7Nbb')](Z['BWyFS'],'',Wc(0x414,'RLNw')+'权码',{'open-url':Wc(KuWo_ko.WA,'*W0]')+Wc(0x194,KuWo_ko.Wb)+Wc(0x2e0,KuWo_ko.Ww)+'authPay%3Factio'+Wc(0x243,'UFI5')+Wc(0x1a3,KuWo_ko.Wd)+G,'media-url':Z[Wc(KuWo_ko.WM,'EMD#')]});}}catch(A){throw new Error('获取授权时发生错误：'+$[Wc(KuWo_ko.WF,'!2Fj')](A));}}else{$[Wc(0x341,'O)!^')](m['hZPvj'](m['hZPvj'](m['AtIRe'],s),m[Wc(0x2e3,KuWo_ko.a)]));}};const I={};I[Ws(KuWo_kU.P,KuWo_kU.V)]=K;I[Ws(0x20f,KuWo_kU.D)]=j;I['decrypt']=O;I[Ws(KuWo_kU.S,KuWo_kU.l)]=o;I[Ws(KuWo_kU.z,'Hsgv')]=U;return I;}
function Env(name, opts) {
	class Http {
		constructor(env) {
			this.env = env
		}
		send(opts, method = 'GET') {
			opts = typeof opts === 'string' ? { url: opts } : opts
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
	return new (class {
		constructor(name, opts) {
			this.name = name || 'YingZi'
			this.http = new Http(this)
			this.logs = []
			this.isMute = 1
			this.isNeedRewrite = false
			this.logSeparator = '\n'
			this.encoding = 'utf-8'
			this.startTime = new Date().getTime()
			Object.assign(this, opts)
			!this.isMute && this.log('', `🔔${this.name}, 开始!`)
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
					request.opts
						? (request['opts']['redirection'] = false)
						: (request.opts = { redirection: false })
			}
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
				default:
					if (this.isSurge() && this.isNeedRewrite) {
						request.headers = request.headers || {}
						Object.assign(request.headers, { 'X-Surge-Skip-Scripting': false })
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
						Object.assign(request.opts, { hints: false })
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
								null,
								{ status, statusCode, headers, body, bodyBytes },
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
					request.opts
						? (request['opts']['redirection'] = false)
						: (request.opts = { redirection: false })
			}
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
				default:
					if (this.isSurge() && this.isNeedRewrite) {
						request.headers = request.headers || {}
						Object.assign(request.headers, { 'X-Surge-Skip-Scripting': false })
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
						Object.assign(request.opts, { hints: false })
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
								null,
								{ status, statusCode, headers, body, bodyBytes },
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
						RegExp.$1.length == 1
							? o[k]
							: ('00' + o[k]).substr(('' + o[k]).length)
					)
			return fmt
		}
		msg(title = name, subt = '', desc = '', opts = {}) {
			const toEnvOpts = (rawopts) => {
				const { $open, $copy, $media, $mediaMime } = rawopts
				switch (typeof rawopts) {
					case undefined:
						return rawopts
					case 'string':
						switch (this.getEnv()) {
							case 'Surge':
							case 'Stash':
							default:
								return { url: rawopts }
							case 'Loon':
							case 'Shadowrocket':
								return rawopts
							case 'Quantumult X':
								return { 'open-url': rawopts }
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
								Object.assign(options, { action: 'open-url', url: openUrl })
								let copy =
									rawopts['update-pasteboard'] ||
									rawopts.updatePasteboard ||
									$copy
								if (copy) {
									Object.assign(options, { action: 'clipboard', text: copy })
								}

								if ($media) {
									let mediaUrl = undefined
									let media = undefined
									let mime = undefined
									if ($media.startsWith('http')) {
										mediaUrl = $media
									}
									else if ($media.startsWith('data:')) {
										const [data] = $media.split(';')
										const [, base64str] = $media.split(',')
										media = base64str
										mime = data.replace('data:', '')
									}
									else {
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
								if (openUrl) Object.assign(options, { openUrl })

								let mediaUrl = rawopts.mediaUrl || rawopts['media-url']
								if ($media && $media.startsWith('http')) mediaUrl = $media
								if (mediaUrl) Object.assign(options, { mediaUrl })

								console.log(JSON.stringify(options))
								return options
							}
							case 'Quantumult X': {
								const options = {}

								let openUrl =
									rawopts['open-url'] || rawopts.url || rawopts.openUrl || $open
								if (openUrl) Object.assign(options, { 'open-url': openUrl })

								let mediaUrl = rawopts['media-url'] || rawopts.mediaUrl
								if ($media && $media.startsWith('http')) mediaUrl = $media
								if (mediaUrl) Object.assign(options, { 'media-url': mediaUrl })

								let copy =
									rawopts['update-pasteboard'] ||
									rawopts.updatePasteboard ||
									$copy
								if (copy) Object.assign(options, { 'update-pasteboard': copy })

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
			const costTime = (endTime - this.startTime) / 1000
			!this.isMute && this.log('', `🔔${this.name}, 结束! 🕛 ${costTime} 秒`)
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