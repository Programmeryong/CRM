$(function(){
	/*头部导航*/
	$('.header-2-l>ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	
	
	
	/*中部行业*/
	$('.main-top-l-index').hover(function(){
		$('.hangye-content').show();
	},function(){
		$('.hangye-content').hide()
		$('.hangye-biaoti li').removeClass('active');
	})
	
	$('.hangye-biaoti li').hover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.hangye-content>ul').stop();
		var i = $(this).index();
		var height = i*-360;
		$('.hangye-content>ul').animate({"top":height+"px"},100);
	})
	
	/*头》右部登录方式*/
	$('.loginType ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var loginType = $(this).index();
		if (loginType==0) {
			$('.phoneLogin').show();
			$('.accountLogin').hide();
		} else{
			$('.phoneLogin').hide();
			$('.accountLogin').show();
		}
	})
	$('.loginType ul li').eq(0).click();
	
	
	/*自动登录*/
	var zddl=0;
	$('.zddl').click(function(){
		zddl++;
		if (zddl%2==1) {
			$('.zddl i').removeClass('icon-icon-');
			$('.zddl i').addClass('icon-duoxuankuang1');
			$('.zddl i').css("color","#198CFF");
		} else{
			$('.zddl i').addClass('icon-icon-');
			$('.zddl i').removeClass('icon-duoxuankuang1');
			$('.zddl i').css("color","rgba(0,0,0,0.45)");
		}
	})
})
