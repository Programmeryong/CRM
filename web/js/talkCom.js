$(function(){
	
	$('.dianzan').attr('title',"赞");

	/*文本域的字数控制*/
	$('#content').on("keyup", function () {
	    $('.textNum').text($('#content').val().length);//这句是在键盘按下时，实时的显示字数
	    if ($('#content').val().length > 500) {
	        $('.textNum').text(500);//长度大于100时0处显示的也只是100
	        $('#content').val($('#content').val().substring(0, 500));//长度大于100时截取钱100个字符
	    }
	});
	
	/*文本域的字数控制*/
	$('.zfzConten #content1').on("keyup", function () {
	    $('.zfzConten .textNum').text($('.zfzConten #content1').val().length);//这句是在键盘按下时，实时的显示字数
	    if ($('.zfzConten #content1').val().length > 500) {
	        $('.zfzConten .textNum').text(500);//长度大于100时0处显示的也只是100
	        $('.zfzConten #content1').val($('.zfzConten #content1').val().substring(0, 500));//长度大于100时截取钱100个字符
	    }
	});
	
	/*文本域的字数控制*/
	$('.commentBox #comment_cont').on("keyup", function () {
	    $('.commentBox .textNum').text($('.commentBox #comment_cont').val().length);//这句是在键盘按下时，实时的显示字数
	    if ($('.commentBox #comment_cont').val().length > 500) {
	        $('.commentBox .textNum').text(500);//长度大于100时0处显示的也只是100
	        $('.commentBox #comment_cont').val($('.commentBox #comment_cont').val().substring(0, 500));//长度大于100时截取钱100个字符
	    }
	});
	
	var titles = $('.aloudBox>ul>li').length;
	for (let i =0;i<titles;i++) {
		var num = $('.aloud_content').eq(i).text().length;
		var nText = $('.aloud_content').eq(i).text();
		if(num>169){
			$('.aloud_content').eq(i).addClass('height72');
			$('.readAll').eq(i).show();
		}

		var a =0;
		$('.readAll:eq('+(i)+')').on('click',function(){
			a++;
			if(a%2==1){
				$('.aloud:eq('+(i)+') .aloud_content').removeClass('height72');
				$('.aloud:eq('+(i)+') .readAll .read').hide();
				$('.aloud:eq('+(i)+') .readAll .shouqi').show();
				$('.aloud:eq('+(i)+') .readAll i').removeClass('icon-Group-').addClass('icon-shang');
			}else{
				$('.aloud:eq('+(i)+') .aloud_content').addClass('height72');
				$('.aloud:eq('+(i)+') .readAll .read').show();
				$('.aloud:eq('+(i)+') .readAll .shouqi').hide();
				$('.aloud:eq('+(i)+') .readAll i').removeClass('icon-shang').addClass('icon-Group-');
			}
		})
		
		/*遍历每条帖子的图片*/
		showImg('.aloudBox>ul>li:eq('+i+')');
		
		/*遍历每个收藏*/
		collect('.aloudBox>ul>li:eq('+i+')');
		
		/*转发*/
		transmit('.aloudBox>ul>li:eq('+i+')');
		
		/*打开收起评论*/
		showHideComment('.aloudBox>ul>li:eq('+i+')');
		
		/*评论*/
		comment('.aloudBox>ul>li:eq('+i+')');
		
		/*评论别人的评论*/
		commentIncomment('.aloudBox>ul>li:eq('+i+')');
		
	}
	
	/*每个帖子图片的方法*/
	function showImg(who){
		var imgIndex;//点击哪一张图片进去放大图
		var index;//点击哪个缩略图
		$(who+' .aloud_img1 li').click(function(){//点击图片到放大图
			imgIndex = $(this).index();
			$(who+' .aloud_img1').hide();
			$(who+' .aloud_img2').show();
			$(who+' .tabs_img_big li').eq(imgIndex).fadeIn().siblings().hide();
			$(who+' .img_small li').eq(imgIndex).addClass('borderFFB31A').siblings().removeClass('borderFFB31A');
			$(who+' .img_small li >div').removeClass('opacity0');
			$(who+' .img_small li:eq('+imgIndex+')>div').addClass('opacity0');
			index  = imgIndex;
		})
		
		//获取每个帖子的图片数量
		var imgSum = $(who+' .img_small li').length;
		//定义长宽
		var sideLength = 650/imgSum;
		$(who+' .img_small li').width(sideLength);
		if (imgSum==1) {
			$(who+' .tabs_img_small').hide();
		}else if(imgSum>=7){
			$(who+' .img_small li').height(sideLength-16);
		}else{
			$(who+' .img_small li').height(80);
		}
		$(who+' .img_small li').click(function(){
			index = $(this).index();
			$(this).addClass('borderFFB31A').siblings().removeClass('borderFFB31A');
			$(who+' .img_small li >div').removeClass('opacity0');
			$(who+' .img_small li:eq('+index+')>div').addClass('opacity0');
			$(who+' .tabs_img_big li').eq(index).fadeIn(300).siblings().hide();
		})
		
		/*上一个*/
		$(who+' .pre_small').click(function(){
			if (index>0) {
				index--;
				haha();
			} else{
				$(who+' .tabs_img_big li').eq(index).css('opacity','0');
				setTimeout(function () {$(who+' .tabs_img_big li').eq(index).css('opacity','1');},100);
			}
		})
		
		/*下一个*/
		$(who+' .next_small').click(function(){
			if (index<(imgSum-1)) {
				index++;
				haha();
			} else{
				$(who+' .tabs_img_big li').eq(index).css('opacity','0');
				setTimeout(function () {$(who+' .tabs_img_big li').eq(index).css('opacity','1');},100);
			}
		})
		
		function haha(){
			$(who+' .tabs_img_big li').eq(index).fadeIn().siblings().hide();
			$(who+' .img_small li >div').removeClass('opacity0');
			$(who+' .img_small li:eq('+index+')>div').addClass('opacity0');
			$(who+' .tabs_img_big li').stop();
			$(who+' .tabs_img_big li').eq(index).fadeIn(300).siblings().hide();
			$(who+' .img_small li').eq(index).addClass('borderFFB31A').siblings().removeClass('borderFFB31A');
		}
				
		/*修改鼠标样式*/
		$(who+' .tabs_img_big').mousemove(function(e) {  
		     varpositionX=e.pageX-$(this).offset().left; //获取当前鼠标相对img的X坐标  
		     varpositionY=e.pageY-$(this).offset().top; //获取当前鼠标相对img的Y坐标  
		     if(varpositionX<190){
		     	$(who+' .tabs_img_big').addClass('zuo').removeClass('you');
		     }else if(varpositionX>440){
		     	$(who+' .tabs_img_big').addClass('you').removeClass('zuo');
		     }else{
		     	$(who+' .tabs_img_big').removeClass('zuo');
		     	$(who+' .tabs_img_big').removeClass('you');
		     }
	 	})  
	 	
	 	/*收起放大图*/
		$(who+' .tabs_img_big img, '+who+' .packUp').click(function(){
			$(who+' .aloud_img2').hide();
			$(who+' .aloud_img1').show();
		})
	}
	/*每个帖子图片的方法结束*/
	
	/*收藏*/
	function collect(who){
		let i =0;
		$(who+' .collect').click(function(){
			i++;
			if (i%2==1) {
				$(who+' .collect i').css({"color":"#FFB31A"});
				$(who+' .collect i').addClass('icon-shoucang1').removeClass('icon-shoucang');
				$(who+' .collect').attr("title","取消关注");
			}else{
				$(who+' .collect i').css({"color":"rgba(0,0,0,0.45)"});
				$(who+' .collect i').addClass('icon-shoucang').removeClass('icon-shoucang1');
				$(who+' .collect').attr("title","关注");
			}
		})
	}
	
	/*转发*/
	function transmit(who){
		$(who+' .transmit').click(function(){
			$('.temp').show();
			$('.forwDem').fadeIn();
			var imgSrc = $(who+' .aloud_tx img').attr('src');
			var userName = $(who+' .aloud_username').text();
			var content = $(who+' .aloud_content').text();
			$('.fromWhoImg img').attr("src",imgSrc);
			$('.fromName').text(userName);
			$('.fromWhoCont').text(content);
			disabledMouseWheel();
		})
		
		$('.forwDem_close').click(function(){
			$('.forwDem').fadeOut();
			$('.temp').hide();
			cancelDisMouseWheel();
		})
	}
	
	$('.commInputBox textarea').click(function(){
		$(this).css({"border":"1px solid #FFB31A","box-shadow": "0 0 1px 1px #FFf"});
	})
	$('.commInputBox textarea').blur(function(){
		$(this).css({"border":"1px solid #F5F7FA","box-shadow": "inset 0 0 1px 1px rgba(0,0,0,0.15)"});
	});
	
	/*打开评论*/
	function showHideComment(who){
		var bb=0;
		$(who+' .commentLogo').click(function(){
			bb++;
			if (bb%2==1) {
				$(who+' .commentBox').stop();
				$(who+' .commentBox').slideDown();
			} else{
				$(who+' .commentBox').stop();
				$(who+' .commentBox').slideUp();
			}
		})
	}
	
	/*评论*/
	function comment(who){
		$(who+' .comment_btn').click(function(){
			var txt1 = $(who+' .commentBox .comment_cont').val();
			var nulls = /^[\s]*$/;
			if(txt1=='' || nulls.test(txt1)){
				$(who+' .commentBox .comm_null1').fadeIn(500).delay(1000).fadeOut(500);
			} else{
				
			}
		})
	}
	
	/*评论别人的评论*/
	function commentIncomment(who){
		var comment_name;
		var comms = $(who+' .comment').length;
		for (let i=0;i<comms;i++) {
			let a = $(who+' .comment:eq('+i+') .huifu').length;
			for (let j=0; j<a; j++) {
				$(who+' .comment:eq('+i+') .huifu:eq('+j+')').click(function(){
					$(who+' .comment:eq('+i+') .commInputBox').slideDown();
					comment_name = $(who+' .comment:eq('+i+') .userName:eq('+j+')').text();
					$(who+' .comment:eq('+i+') .commInputBox textarea').attr("placeholder","回复 "+comment_name);
				})
				
				/*点赞*/
				$(who+' .comment:eq('+i+') .dianzan:eq('+j+')').click(function(){
					var color = $(who+' .comment:eq('+i+') .dianzan:eq('+j+') i').css('color');
					if (color == 'rgba(0, 0, 0, 0.65)') {
						/*已点赞*/
						$(who+' .comment:eq('+i+') .dianzan:eq('+j+') i').css({"color":"#F52230"});
					} else{
						/*未点赞*/
						$(who+' .comment:eq('+i+') .dianzan:eq('+j+') i').css({"color":"rgba(0,0,0,0.65)"});
					}
				})
			}
			
			$(who+' .comment:eq('+i+') .comment_btn1').click(function(){
				var mydate = new Date();  
				var month=mydate.getMonth()+1;
				var dates=mydate.getDate(); 
				var h=mydate.getHours();  
				var m=mydate.getMinutes();
				var thisTime = month+"月"+dates+"日  "+h+":"+m;
 				
				var txt = $(who+' .comment:eq('+i+') .commInputBox textarea').val();
				var nulls = /^[\s]*$/;
				if(txt=='' || nulls.test(txt)){
					$(who+' .comment:eq('+i+') .commInputBox .comm_null').fadeIn(500).delay(1000).fadeOut(500);
				} else{
					$(who+' .comment:eq('+i+') .commInputBox textarea').css({"height":"30px"});
					$(who+' .comment:eq('+i+') .commInputBox').slideUp();
					$(who+' .comment:eq('+i+') .commInputBox textarea').val('');
					$(who+' .comment:eq('+i+') .comincom').append("<li><p><span class='userName'>文华炎</span> 回复 <span class='userName'>"+comment_name+"</span>："+txt+"</p>"+
																"<p class='haha'>"+
																	"<span class='block45'>"+thisTime+"</span>"+
																	"<span class='block65'><span class='huifu'>回复</span><span class='dianzan'><i class='iconfont icon-iconfontzhizuobiaozhun023148' style='margin-right: 5px;'></i>点赞</span></span>"+
																"</p>"+
															"</li>");
				}
				
			})
			
		}
	}
	
	
	
	$('.sendAloud_btn').click(function(){
		var txt = $('#content').val();
		var nulls = /^[\s]*$/;
		if(txt=='' || nulls.test(txt)){
			$('.sendAloud_null').fadeIn(500).delay(1000).fadeOut(500);
		} else{
			
		}
	})
	
	
	$('.commInputBox textarea').autoTextarea({
		maxHeight:200
	});
	
	
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
	
})

/*文本域随字数增加，高度增加*/
$.fn.autoTextarea = function (options){
	var defaults = {
		maxHeight:null,
		minHeight:$(this).height()
	};
	var opts = $.extend({}, defaults, options);
 
	return $(this).each(function (){
		var _this = $(this);
 		_this.bind('paste cur keydown keyup focus blur', function (){
			var height, style = this.style;
			style.height = opts.minHeight + 'px';
			if(this.scrollHeight > opts.minHeight){
				if(opts.maxHeight && this.scrollHeight > opts.maxHeight){
					height = opts.maxHeight;
					style.overflowY = 'scroll';
				}else{
					height = this.scrollHeight;
					style.overflowY = 'hidden';
				}
				style.height = height + 'px';
			}
		});
	});
}