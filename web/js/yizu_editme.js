$(function(){
	// 模仿单选按钮效果
	$('.ulradio li').on('click',function(){
		let i = $(this).index();
		$('.ulradio li').css({"background-image":"url(./images/icon/btn_on.png)"});
		$('.ulradio li:eq('+i+')').css({"background-image":"url(./images/icon/btn_off.png)"});
	})
	$('.ulradio li:eq(0)').click();
	// 模仿点击隐藏按钮
	$('.clickimg').click(function(){
		$('.filetyle').click();
	})

	//抽屉效果实现方法
	$('.editme_box').each(function(){
		$(this).children('.edirt_box').hide();
	})
	$('.editmetit_r').each(function(){
		$(this).click(function(){
			if($(this).parents(".editme_box").children(".edirt_box").css("display") != "none"){  
                $(this).parents(".editme_box").children(".edirt_box").slideUp();     
            }else{  
                $(this).parents(".editme_box").children(".edirt_box").slideDown();  
            }  
		})
	})

	function textphone(thisclass){
			$(thisclass).blur(function(){
				let Uphone = $(thisclass).val();
				let Tphone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
				if(Tphone.test(Uphone) == false|| Uphone == ''){
					$(thisclass).css({'border':'1px solid #F52230'});
				}else if(Tphone.test(Uphone)==true){
					$(thisclass).css({'border':'1px solid #5FCC29'})
				}
			})
		}
		// 名字的验证
		function textname(thisname){
			$(thisname).blur(function(){
				let Uname = $(thisname).val();
				let Tname = /^[\u4e00-\u9fa5]{2,4}$/;
				if(Tname.test(Uname)==false||Uname==''){
					$(thisname).css({'border':'1px solid #F52230'});
				}else if(Tname.test(Uname)==true){
					$(thisname).css({'border':'1px solid #5FCC29'});
				}
			})
		}
		textname(".yourname");
		textphone(".yourphone");
		
})