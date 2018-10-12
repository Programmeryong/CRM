$(function(){
	/*物业社区（控制布局）*/
	var zomes = $('.zome').length;
	for (var i=1; i<=zomes;i++) {
		if (i%3==0) {
			$('.zome').eq(i-1).css("margin","0");
		} else{
			
		}
	}
	/*物业社区（控制布局）结束*/
	
	
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
	
	
	
	/*判断是哪种内核浏览器*/
	var browser={
	    versions:function(){
	        var u = navigator.userAgent, app = navigator.appVersion;
	        return {
	            trident: u.indexOf('Trident') > -1, //IE内核
	            presto: u.indexOf('Presto') > -1, //opera内核
	            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
	            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
	            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
	            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
	            android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
	            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
	            iPad: u.indexOf('iPad') > -1, //是否iPad
	            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
	            weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
	            qq: u.match(/\sQQ/i) == " qq" //是否QQ
	        };
	    }(),
	    language:(navigator.browserLanguage || navigator.language).toLowerCase()
	}
	

	if(browser.versions.trident){ /*IE浏览器*/
		/*视觉盛宴溢出点点点*/
		var aa = document.querySelector('.wysq');
		var module1 = aa.querySelectorAll('.zome-introduce');
		console.log(module1.length);
		for (var i=0;i<module1.length; i++) {
			$clamp(module1[i], {clamp: 3});
		} 
	}else if(browser.versions.webKit){ /*webKit内核*/
		/*视觉盛宴溢出点点点*/
		var aa = document.querySelector('.wysq');
		var module1 = aa.querySelectorAll('.zome-introduce');
		console.log(module1.length);
		for (var i=0;i<module1.length; i++) {
			$clamp(module1[i], {clamp: 3});
		}
	}else{/*IE,webkit以外的浏览器*/
		/*视觉盛宴溢出点点点*/
		var aa = document.querySelector('.wysq');
		var module1 = aa.querySelectorAll('.zome-introduce');
		console.log(module1.length);
		for (var i=0;i<module1.length; i++) {
			$clamp(module1[i], {clamp: 3});
		} 
	}
})
