$(function(){
	/*头部导航*/
	$('.header-2-l>ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	
	// 点击回到顶部
	$('.gototop').click(function () {
        $('body,html').animate({scrollTop: 0}, 1000);
    })
	
	$('.clickSM').hover(function(){
		$('.thisSM').stop();
		$('.thisSM').fadeIn(500);
	},function(){
		$('.thisSM').stop();
		$('.thisSM').fadeOut(500);
	})
    
});