$(function(){
	
	$('.main_r_1 ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var i = $(this).index();
		$('.main_l_tab').hide();
		$('.main_l_tab').eq(i).show();
	})
	
	
})
