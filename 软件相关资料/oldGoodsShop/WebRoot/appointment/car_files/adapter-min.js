/*! webww 2014-08-28 */
!function(a){function b(){var a=/daily/i;return a.test(location.host)}function c(){return n.g_config}function d(){var a=c();return a?a.webww||-1!==location.host.indexOf(".taobao."):!1}function e(){var b=(c(),d());return a.isBoolean(b)&&b&&k?!0:!1}function f(){if("undefined"==typeof TStart){var a=!b();n.TStart={isOnline:a,isDebug:j,cdnPath:"http://"+(a?"a.tbcdn.cn":"assets.daily.taobao.net")+"/"+l,version:i}}return TStart}function g(b){if("1.30"!=a.version)a.IO.getScript(b);else try{a.use("dom, event, ajax, anim, json",function(a,c,d,e){e.getScript(b)})}catch(c){}}function h(){if("undefined"!=typeof Light&&!Light.addonIsOK()){var c="1.0.10";l="/tbc/webww/"+c+"/",m=["tstart","deploy"];var d=f(),e=!b();if(d.cdnPath="http://"+(e?"g.tbcdn.cn":"g.assets.daily.taobao.net")+l,!d._Loaded){d._Loaded=!0,g(d.cdnPath+"??"+m.join("-min.js,")+"-min.js");try{a.use("dom",function(a,b){b.get("#J_miniCartPlugin")&&b.css("#J_miniCartPlugin","right","65px")})}catch(h){}}}}var i="131022",j=-1!==location.search.indexOf("ts-debug"),k=a.Cookie.get("_nk_")||a.Cookie.get("lgc"),l="apps/stargate/tstart/release/"+(j?"debug":i)+"/",m=["tstart","switch","xiami","u","wallet","trace","quanzi","deploy"],n=window;n._TOOLBAR_TIME_STAMP={tstart:"20120406",tdog:"20110726",startTime:"2012/02/06",endTime:"2012/02/15"},a.ready(function(){e()&&setTimeout(h,1e3)})}(KISSY);