$(function(){
	
	/*筛选*/
	$('.screen ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
})
