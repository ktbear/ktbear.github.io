// build time:Sun Apr 05 2020 23:09:01 GMT+0800 (GMT+08:00)
function createImgEventFullScreen(){var i=$(".post-body").find("img");console.log(i);for(var e=0;e<i.length;e++){i[e].onclick=function(i){var e=i.srcElement.currentSrc;var o=$(this);console.log(o);t(e,o)}}function t(i,e){console.log(e);console.log(i);var t=$("<div id='outerDiv'  style='position:fixed;top:0;left:0;background:rgba(0,0,0,0.7);z-index:5;width:100%;height:100%;display:none;'><div id='innerDiv' style='position:absolute;'><img  id='bigImg' style='border:5px solid #fff;' src=''/></div></div>");$("#outerDiv").remove();$("body").append(t);imgShow("#outerDiv","#innerDiv","#bigImg",e,i)}}function imgShow(i,e,t,o,n){$(t).attr("src",n);$("<img/>").attr("src",n).load(function(){var o=$(window).width();var n=$(window).height();var r=this.width;var s=this.height;var c,a;var l=.8;if(s>n*l){a=n*l;c=a/s*r;if(c>o*l){c=o*l}}else if(r>o*l){c=o*l;a=c/r*s}else{c=r;a=s}$(t).css("width",c);var d=(o-c)/2;var v=(n-a)/2;$(e).css({top:v,left:d});$(i).fadeIn("fast")});$(i).click(function(){$(this).fadeOut("fast")})}setTimeout(function(){createImgEventFullScreen()},1e3);
//rebuild by neat 