$(function(){
	$('.cleartext').click(function(){
		$('.powliinput input').val('');
	})
	$('.falsebtn').click(function(){
		$('#phoneform').show();
		$('.phonenunber').hide();
		$('.falsebtn').hide();
	})
	$('.thanphoneshop').click(function(){
		$('#phoneform').hide();
		$('.phonenunber').show();
		$('.falsebtn').show();
	})

	/*获取验证码 60s后重试结束*/
	function yzm(classname){
		var ding1 = null;
	    var ifclick1 = true;
	    $(classname).click(function(){
	        var time1 = 10;
	        if (ifclick1==true) {
	            ding1 = setInterval(function(){
	                ifclick1 = false;
	                $(classname).text(time1+"s 重试");
	                $(classname).css({"cursor":"not-allowed","color":"rgba(0,0,0,0.65)"});
	                time1--;
	                if(time1==-2){
	                    ifclick1 = true;
	                    clearInterval(ding1);
	                    $(classname).text("重新获取");
	                    $(classname).css({"cursor":"pointer","color":"#198cff"});
	                }
	            },1000);
	        } 
	    })
	}
   	yzm('.YZM');
   	yzm('.YZM1');
    /*获取验证码 60s后重试结束*/

    function textpow(class1,class2){  //密码判断
        let Upow1 = $(class1).val();
        let Upow2 = $(class2).val();
        let oldpow = $('.oldpow').val();
        let Tpow = /^[a-zA-Z]\w{6,16}$/;
        if(Tpow.test(Upow1) == false || Upow1 == '' || Upow1 != Upow2 || Upow1 == oldpow){
            $(class1).css({'border':'1px solid #F52230'});
            $(class2).css({'border':'1px solid #F52230'});
            return false;
        }else{
            $(class1).css({'border':'1px solid #5FCC29'});
            $(class2).css({'border':'1px solid #5FCC29'});
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
    function  textYZM(thisclass){//验证码验证
        let Uyzm = $(thisclass).val();
        let Tyzm = /^\d{6}$/;
        if(Uyzm.length == 0 || Tyzm.test(Uyzm) == false){
            $(thisclass).css({'border':'1px solid #F52230'});
            return false;
        }else{
            $(thisclass).css({'border':'1px solid #5FCC29'});
            return true;
        }
    }

    $('.thispowsubmit').click(function(){
    	if($('.oldpow').val()==0){
    		$('.oldpow').css({'border':'1px solid #F52230'});
    		$('.thisp2').text('密码不能为空').show();
    		return false;
    	}else{
    		$('.oldpow').css({'border':'1px solid #5FCC29'});
    		$('.thisp2').hide();
		}
    	if(textpow('.newpow1','.newpow2') == false){
            let txt1 = $('.newpow1').val();
            let txt2 = $('.newpow2').val();
            let oldtxt1 = $('.newpow1').val().replace(/\s/g, '');
            let oldtxt2 = $('.newpow2').val().replace(/\s/g, '');
            if(txt1.length != oldtxt1.length){
                $('.thisp3').text('密码不能有空格').show();
                return false;
            }else if(txt1 != txt2){
                $('.thisp4').text('重复密码出错').show();
                return false;
            }else if(txt1 == $('.oldpow').val()){
            	$('.thisp4').text('新密码与旧密码重复').show();
                return false;
            }else{
                $('.thisp3').text('密码格式为6到16位字母和数字组合密码').show();
                 $('.thisp4').text('密码格式为6到16位字母和数字组合密码').show();
                return false;
            }
        }else{
            $('.thisp3').hide();
            $('.thisp4').hide();
        }
    })

    $('.thanphonesubmit1').click(function(){
    	if(textYZM('.thisyzm1') == false){
            let thistext = $('.thisyzm1').val();
            if(thistext.length == 0){
                $('.thisp1').text('验证码错误').show();
                return false;
            }else{
                $('.thisp1').text('验证码错误').show();
                return false;
            }
        }else{
            $('.thisp1').hide();
        }
    })

    $('.thanphonesubmit2').click(function(){
    	if(textphone('.thisphone1') == false){
            let thistext = $('.thisphone1').val();
            if(thistext == ''){
                $('.thisp5').text('不能为空').show();
                return false;
            }else{
                $('.thisp5').text('请输入正确的电话号码').show();
                return false;
            }
        }else{
            $('.thisp5').hide();
        }
        if(textYZM('.thisyzm') == false){
            let thistext = $('.thisyzm').val();
            if(thistext.length == 0){
                $('.thisp6').text('验证码错误').show();
                return false;
            }else{
                $('.thisp6').text('验证码错误').show();
                return false;
            }
        }else{
            $('.thisp6').hide();
        }
    })

})