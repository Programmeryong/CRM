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
	$('.clickthisbtn').click(function(){
		$('.thanbtn').click();
	})
})