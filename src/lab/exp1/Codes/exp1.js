$(document).ready(function(){
  $("#start").click(function(){
	  
	$("#xabox").animate({top: '112px'}, 8000);
	  $("#xbbox").animate({top: '167px'}, 8000);
	  $("#xcbox").animate({top: '205px'}, 8000);
	  $("#xdt").animate({top: '305px'}, 8000);
	  $("#dot1").animate({top: '341px'}, 8000);  
	  
	$("#yabox").animate({top: '531px'}, 8000);  
	  $("#ybbox").animate({top: '493px'}, 8000); 
	  $("#ycbox").animate({top: '395px'}, 8000); 
	  $("#ydt").animate({top: '345px'}, 8000); 
	  $("#dot2").animate({top: '351px'}, 8000);  
	
	  
  });
	
  $("#stop").click(function(){
   $("#xabox").stop();
	 $("#xbbox").stop();
	  $("#xcbox").stop();
	  $("#xdt").stop();
	  $("#dot1").stop();
   $("#yabox").stop();
	  $("#ybbox").stop();
	  $("#ycbox").stop();
	  $("#ydt").stop();
	  $("#dot2").stop();
	});
});