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
	
	
	/*上，中，下午好，晚上好*/
	function timess(){
		var mydate = new Date();  
	   	var thisTime = mydate.getHours();
	 	if (thisTime>=3 && thisTime<=11) {
	 		$('.hours span').eq(0).show().siblings().hide();
	 	} else if (thisTime>=12 && thisTime<14) {
	 		$('.hours span').eq(1).show().siblings().hide();
	 	} else if(thisTime>=14 && thisTime<18){
	 		$('.hours span').eq(2).show().siblings().hide();
	 	}else{
	 		$('.hours span').eq(3).show().siblings().hide();
	 	}
 	}
	timess();
	setInterval(function () {
		timess();
	},60000);
 	/*上，中，下午好，晚上好   结束*/
 	
 	
 	
	
	/*弹框禁止滚动条滚动*/
    //阻止浏览器事件
    function disabledMouseWheel() {  
           document.addEventListener('DOMMouseScroll', scrollFunc, false);  
           document.addEventListener('mousewheel',scrollFunc,false);
    }
    //取消阻止浏览器事件
    function cancelDisMouseWheel(){
           document.removeEventListener('DOMMouseScroll',scrollFunc,false);
           document.removeEventListener('mousewheel',scrollFunc,false);
    }  
    function scrollFunc(evt) {  
           evt = evt || window.event;  
            if(evt.preventDefault) {  
                // Firefox  
                evt.preventDefault();  
                evt.stopPropagation();  
                } else{  
                // IE  
                evt.cancelBubble=true;  
                evt.returnValue = false;  
        }  
             return false;  
    }
   
   
 	
});