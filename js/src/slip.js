// build time:Wed May 13 2020 21:10:56 GMT+0800 (GMT+08:00)
$("#a-down").click(function(){var e=$(window).scrollTop();$("html,body").animate({scrollTop:e+800},500)});$(document).scroll(function(){var e=$(window).scrollTop();if(e>200){$("#aplayer").fadeIn();$(".sidebar-toggle").fadeIn();$(".back-to-top").fadeIn();$(".eye").fadeIn()}else{$("#aplayer").fadeOut();$(".sidebar-toggle").fadeOut();$(".back-to-top").fadeOut();$(".eye").fadeOut()}});
//rebuild by neat 