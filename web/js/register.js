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
	var ding1 = null;
	var ifclick1 = true;
	$(".thisYZM1").click(function(){
		var time1 = 10;
		if (ifclick1==true) {
			ding1 = setInterval(function(){
				ifclick1 = false;
		        $(".thisYZM1").text(time1+"s 重试");
		        $(".thisYZM1").css({"cursor":"not-allowed","color":"rgba(0,0,0,0.65)"});
		        
		        time1--;
		        if(time1==-2){
			    	ifclick1 = true;
			    	clearInterval(ding1);
			    	$(".thisYZM1").text("重新获取");
			    	$(".thisYZM1").css({"cursor":"pointer","color":"#198cff"});
			    }
		    },1000);
		} 
	})
	/*获取验证码 60s后重试结束*/
	//正则判断
	function textchines(thisdiv){	// 正则表达式——中文名字
		let Utext = $(thisdiv).val();
		let Thisterm = /[\u4e00-\u9fa5]{2,30}/;
		if(Thisterm.test(Utext)==false || Utext==''){
			$(thisdiv).css({'border':'1px solid #F52230'});
			return false;
		}else if(Thisterm.test(Utext)==true){
			$(thisdiv).css({'border':'1px solid #5FCC29'});
			return true;
		}
	}
	function textphone(thisclass){  //电话号码判断
        let Uphone = $(thisclass).val();
        let Tphone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        if(Tphone.test(Uphone) == false|| Uphone == ''){
            $(thisclass).css({'border':'1px solid #F52230'});
            return false;
        }else if(Tphone.test(Uphone)==true){
            $(thisclass).css({'border':'1px solid #5FCC29'});
            return true;
        }
    }
    function textnull(thisclass){   //不为空判断
        let Unull = $(thisclass).val();
        if(Unull == ''){
            $(thisclass).css({'border':'1px solid #F52230'});
            return false;
        }else{
            $(thisclass).css({'border':'1px solid #5FCC29'});
            return true;
        }
    }
    function textnum(thisclass){   //六位验证码判断
        let Unum = $(thisclass).val();
        let Tnum = /^\d{6}$/;
        if(Tnum.test(Unum) == false || Unum == ''){
            $(thisclass).css({'border':'1px solid #F52230'});
            return false;
        }else if(Tnum.test(Unum) == true){
            $(thisclass).css({'border':'1px solid #5FCC29'});
            return true;
        }
    }
    function textpow(class1,class2){
    	let Upow1 = $(class1).val();
    	let Upow2 = $(class2).val();
    	let Tpow = /^[a-zA-Z]\w{5,17}$/;
    	if(Tpow.test(Upow1) == false || Upow1 == '' || Upow1 != Upow2){
    		$(class1).css({'border':'1px solid #F52230'});
    		$(class2).css({'border':'1px solid #F52230'});
    		return false;
    	}else{
    		$(class1).css({'border':'1px solid #5FCC29'});
    		$(class2).css({'border':'1px solid #5FCC29'});
    		return true;
    	}
    }
    $('#loginform').submit(function(){
    	if(textnull('.logintext1') == true && textchines('.logintext2') == true &&
    		textphone('.logintext3') == true && textnum('.oneYZM') == true){
    		return true;
    	}else{
    		if(textnull('.logintext1') == false){$('.formp1').show();}else{$('.formp1').hide();}
    		if(textnull('.logintext2') == false){$('.formp2').show();}else{$('.formp2').hide();}
    		if(textnull('.logintext3') == false){$('.formp3').show();}else{$('.formp3').hide();}
    		if(textnull('.logintext4') == false){$('.formp4').show();}else{$('.formp4').hide();}
    		return false;
    	}
    })
    $('#loginform1').submit(function(){
    	if(textnull('.logintext4') == true && textpow('.logintext5','.logintext6') == true &&
    		textphone('.logintext7') == true && textnum('.oneYZM1') == true){
    		return true;
    	}else{
    		if(textnull('.logintext4') == false){$('.formp4').show();}else{$('.formp4').hide();}
    		if(textnull('.logintext5') == false){$('.formp5').show();}else{$('.formp5').hide();}
    		if(textnull('.logintext6') == false){$('.formp6').show();}else{$('.formp6').hide();}
    		if(textnull('.logintext7') == false){$('.formp7').show();}else{$('.formp7').hide();}
    		if(textnull('.logintext8') == false){$('.formp8').show();}else{$('.formp8').hide();}
    		return false;
    	}
    })
})