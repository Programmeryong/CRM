$(function(){
	$('.thispowsubmit').click(function(){
		$('.powsubmit').click();
	})
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
    var ding1 = null;
    var ifclick1 = true;
    $(".YZM").click(function(){
        var time1 = 10;
        if (ifclick1==true) {
            ding1 = setInterval(function(){
                ifclick1 = false;
                $(".YZM").text(time1+"s 重试");
                $(".YZM").css({"cursor":"not-allowed","color":"rgba(0,0,0,0.65)"});
                time1--;
                if(time1==-2){
                    ifclick1 = true;
                    clearInterval(ding1);
                    $(".YZM").text("重新获取");
                    $(".YZM").css({"cursor":"pointer","color":"#198cff"});
                }
            },1000);
        } 
    })
    /*获取验证码 60s后重试结束*/

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

    $('.thanphonesubmit').click(function(){
    	if(textphone('.thisphone') == false){
            let thistext = $('.thisphone').val();
            if(thistext == ''){
                $('.thisp2').text('不能为空').show();
                return false;
            }else{
                $('.thisp2').text('请输入正确的电话号码').show();
                return false;
            }
        }else{
            $('.thisp2').hide();
        }
        if(textYZM('.thisyzm') == false){
            let thistext = $('.thisyzm').val();
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

})