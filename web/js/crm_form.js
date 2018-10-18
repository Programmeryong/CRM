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

	// 监控搜索框 关键字变色
	$('.tijiao').click(function(){
		$('.curtainfff').show();
		$('.searchnav').show();
		var tijiaotext = $('.inputing').val();
		var thisli = $('.searchnav li').length;
		for(let a = 0;a<thisli;a++){
			var thistext = $('.searchnav li:eq('+a+')').text();
			var newtext = thistext.split(tijiaotext);
			var alsdkfj =  newtext.join('<i style="color:#198cff;">'+tijiaotext+'</i>');
			$('.searchnav li:eq('+a+')').html(alsdkfj);
		}
	})
	$('.curtainfff').click(function(){
		$('.curtainfff').hide();
		$('.searchnav').hide();
	})
	$('.searchnav').on('click','li',function(){
		$('.searchnav').hide();
	})
})