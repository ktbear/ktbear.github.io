// build time:Sat May 22 2021 19:59:41 GMT+0800 (GMT+08:00)
function eye(){$(".eye .eye2").click(function(){$(".eye .eye1").slideToggle()});$(".eye ul li").click(function(){$(".eye .eye1").slideToggle();$color=$(this).css("background-color");console.log($color);$(".eye .eye1").css("background",$color);$("body").css("background",$color)});$("#yuanSe").click(function(){console.log("11111");$("body").css("background","#fffef8")})}eye();
//rebuild by neat 