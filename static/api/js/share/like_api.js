// build time:Wed Apr 15 2020 12:05:37 GMT+0800 (GMT+08:00)
window._bd_share_main.F.module("share/like_api",function(e,n,t){var i=e("base/tangram").T,a=e("base/class").Class,c=e("share/api_base");n.Api=a.create(function(e){function n(e){window._bd_share_main.F.use("trans/data",function(n){n.get({type:"like_count",url:document.location.href,callback:function(n){var t={count:n};e&&e(t)}})})}function t(n){var t=e;window._bd_share_main.F.use("trans/trans",function(e){e.run({type:"like",url:document.location.href,callback:function(e){var t={err:e};n&&n(t)}})})}var i=this,a={count:0,clicked:!1};i._init=function(){var e=i.getView();e.render(),e.init(),n(function(n){a.count=n.count,e.setNumber(n.count)})},i._processAction=function(e){e.cmd=="like"&&(a.clicked?i.getView().showDoneState(e.element):t(function(n){a.clicked=!0,n.err==0?(a.count++,i.getView().addOne(e.element,a.count)):i.getView().showDoneState(e.element)}))}},c.ApiBase)});
//rebuild by neat 