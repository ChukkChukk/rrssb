var buttonWidth,containerWidth,totalTxt=0,rrsiInit=function(){var e=$(".rrsi-buttons li").length,t=100/e;containerWidth=$(".rrsi-buttons").width();$(".rrsi-buttons").attr("data-width",containerWidth);$(".rrsi-buttons li").css("width",t+"%").attr("data-initwidth",t);$(".rrsi-buttons li .text").each(function(){var e=parseFloat($(this).width());$(this).closest("li").attr("data-size",e);totalTxt+=e+55});rrsiMagicLayout(sizeSmallBtns)},setPercentBtns=function(){var e=$(".rrsi-buttons li").length,t=100/e},sizeSmallBtns=function(){var e,t,n,r,i;r=$(".rrsi-buttons li.small").length;$(".smallbtnsdude span").html(r);if(r>0){n=r*42;e=$(".rrsi-buttons li").not(".small").length;regPercent=100/e;i=n/e;navigator.userAgent.indexOf("Chrome")>=0||navigator.userAgent.indexOf("Safari")>=0?magicWidth="-webkit-calc("+regPercent+"% - "+i+"px)":navigator.userAgent.indexOf("Firefox")>=0?magicWidth="-moz-calc("+regPercent+"% - "+i+"px)":magicWidth="calc("+regPercent+"% - "+i+"px)";$(".rrsi-buttons li").not(".small").css("width",magicWidth)}},rrsiMagicLayout=function(e){console.log("me first");containerWidth=$(".rrsi-buttons").width();$(".containersize span").html(containerWidth);$(".rrsi-buttons").attr("data-width",containerWidth);buttonWidth=$(".rrsi-buttons li").not(".small").first().width();buttonWidth>170?$(".rrsi-buttons").addClass("large-format"):buttonWidth<=170&&$(".rrsi-buttons").removeClass("large-format");totalTxt>=containerWidth?$(".rrsi-buttons li:last-child").not(".small").addClass("small").css("width","42px"):$(".rrsi-buttons li:last-child").removeClass("small").css("width",$(this).attr("data-initwidth"));e()},waitForFinalEvent=function(){var e={};return function(t,n,r){r||(r="Don't call this twice without a uniqueId");e[r]&&clearTimeout(e[r]);e[r]=setTimeout(t,n)}}();$(window).resize(function(){rrsiMagicLayout(sizeSmallBtns)});$(document).ready(function(){rrsiInit()});