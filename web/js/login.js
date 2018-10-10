$(function(){
	$('.login_content li').hide();
	$('.login_nav li').on('click',function(){
		var i = $(this).index();
		$('.login_nav li').removeClass('thisnavli');
		$(this).addClass('thisnavli');
		$('.login_content li').hide();
		$('.login_content li').eq(i).show();
	})
	$('.login_nav li').eq(0).click();
	var ii =0;
	var jj =0;
	$('.thischeckbox').click(function(){
		ii++;
		if(ii%2 ==0){
			// 不变色
			$('.thischeckbox').removeClass('icon-duoxuankuang1');
			$('.thischeckbox').addClass('icon-icon-');
			$('.thischeckbox').css({'color':'rgba(0,0,0,.45)'});
			$('.thisbox').click();
		}else{
			// 变蓝色
			$('.thischeckbox').removeClass('icon-icon-');
			$('.thischeckbox').addClass('icon-duoxuankuang1');
			$('.thischeckbox').css({'color':'#1A8CFF'});
			$('.thisbox').click();
		}
	})
	$('.thischeckbox1').click(function(){
		jj++;
		if(jj%2 ==0){
			// 不变色
			$('.thischeckbox1').removeClass('icon-duoxuankuang1');
			$('.thischeckbox1').addClass('icon-icon-');
			$('.thischeckbox1').css({'color':'rgba(0,0,0,.45)'});
			$('.thisbox1').click();
		}else{
			// 变蓝色
			$('.thischeckbox1').removeClass('icon-icon-');
			$('.thischeckbox1').addClass('icon-duoxuankuang1');
			$('.thischeckbox1').css({'color':'#1A8CFF'});
			$('.thisbox1').click();
		}
	})
	$('.clickthisbtn').click(function(){
		$('.thanbtn').click();
	})
	$('.clickthisbtn1').click(function(){
		$('.thanbtn1').click();
	})
	/*获取验证码 60s后重试*/
	var ding = null;
	var ifclick = true;
	$(".thisYZM").click(function(){
		var time = 10;
		if (ifclick==true) {
			ding = setInterval(function(){
				ifclick = false;
		        $(".thisYZM").text(time+"s 重试");
		        $(".thisYZM").css({"cursor":"not-allowed","color":"rgba(0,0,0,0.65)"});
		        
		        time--;
		        if(time==-2){
			    	ifclick = true;
			    	clearInterval(ding);
			    	$(".thisYZM").text("重新获取");
			    	$(".thisYZM").css({"cursor":"pointer","color":"#198cff"});
			    }
		    },1000);
		} 
	})
	/*获取验证码 60s后重试结束*/
})