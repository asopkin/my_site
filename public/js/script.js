$("button").click(function(){$(this).toggleClass("expanded").siblings("div").slideToggle()}),$(window).scroll(function(){$(document).scrollTop()>10?$("#nav").addClass("shrink"):$("#nav").removeClass("shrink")}),$(document).ready(function(){$('a[href^="#"]').on("click",function(e){e.preventDefault();var wdw=this.hash,$wdw=$(wdw);$("html, body").stop().animate({scrollTop:$wdw.offset().top},700,"swing",function(){window.location.hash=wdw})})});