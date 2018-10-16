$(function(){
	$('.form_box4 span').click(function(){
		$('.form_box4 input').click();
	})
	$('.curtain').click(function(){
		$('.navbigbox').hide();
		$('.curtain').hide();
	})
	$('.simulationtext').click(function(){
		$('.simulationtext').text('');
		$('.navbigbox').show();
		$('.curtain').show();
	})
	$('.thisclose').click(function(){
		$('.navbigbox').hide();
		$('.curtain').hide();
	})
	
	
	$('.hy-title li').hover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.hy-lable>ul').stop();
		var i = $(this).index();
		var height = i*-678;
		$('.hy-lable>ul').animate({"top":height+"px"},100);
	})
})