$(function(){
	$('.register_top span:eq(0)').click(function(){
		$('.register_top span:eq(1)').removeClass('current');
		$('.register_ul li:eq(0)').show();
		$('.register_ul li:eq(1)').hide();
		$(this).addClass('current');
	})
	$('.register_top span:eq(1)').click(function(){
		$('.register_top span:eq(0)').removeClass('current');
		$('.register_ul li:eq(1)').show();
		$('.register_ul li:eq(0)').hide();
		$(this).addClass('current');
	})
	// 多选框
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
            // console.log('1'+$('.thisbox').is(':checked'));
        }else{
            // 变蓝色
            $('.thischeckbox').removeClass('icon-icon-');
            $('.thischeckbox').addClass('icon-duoxuankuang1');
            $('.thischeckbox').css({'color':'#1A8CFF'});
            $('.thisbox').click();
            // console.log('2'+$('.thisbox').is(':checked'));
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
            // console.log('3'+$('.thisbox1').is(':checked'));
        }else{
            // 变蓝色
            $('.thischeckbox1').removeClass('icon-icon-');
            $('.thischeckbox1').addClass('icon-duoxuankuang1');
            $('.thischeckbox1').css({'color':'#1A8CFF'});
            $('.thisbox1').click();
            // console.log('4'+$('.thisbox1').is(':checked'));
        }
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
    function textchines(thisdiv){   // 正则表达式——中文名字
        var Utext = $(thisdiv).val();
        var oldtext = $(thisdiv).val().replace(/\s/g, '');
        var Thisterm = /^[\u4e00-\u9fa5]{2,5}$/;
        if(Thisterm.test(Utext)==true && Utext.length == oldtext.length){
            $(thisdiv).css({'border-bottom':'1px solid #5FCC29'});
            return true;
        }else{
            $(thisdiv).css({'border-bottom':'1px solid #F52230'});
            return false;
        }
    }
    function textEnglish(thisdiv){  //账号名称
        var Uenglish = $(thisdiv).val();
        var oldenglish = $(thisdiv).val().replace(/\s/g, '');
        var Tenglish = /^[0-9A-Za-z]+$/;
        if(Uenglish.length == 0 || Tenglish.test(Uenglish)==false){
            $(thisdiv).css({'border-bottom':'1px solid #F52230'});
            return false;
        }else if(Tenglish.test(Uenglish)==true && Uenglish.length == oldenglish.length){
            $(thisdiv).css({'border-bottom':'1px solid #5FCC29'});
            return true;
        }else{
            $(thisdiv).css({'border-bottom':'1px solid #F52230'});
            return false;
        }
    }
    function textphone(thisclass){  //电话号码判断
        var Uphone = $(thisclass).val();
        var Tphone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        if(Tphone.test(Uphone) == false|| Uphone == ''){
            $(thisclass).css({'border-bottom':'1px solid #F52230'});
            return false;
        }else if(Tphone.test(Uphone)==true){
            $(thisclass).css({'border-bottom':'1px solid #5FCC29'});
            return true;
        }
    }
    function  textYZM(thisclass){//验证码验证
        var Uyzm = $(thisclass).val();
        var Tyzm = /^\d{6}$/;
        if(Uyzm.length == 0 || Tyzm.test(Uyzm) == false){
            $(thisclass).css({'border-bottom':'1px solid #F52230'});
            return false;
        }else{
            $(thisclass).css({'border-bottom':'1px solid #5FCC29'});
            return true;
        }
    }
    function textnumbernull(thisclass){   //不能有空格判断
        var oldnull = $(thisclass).val().length;
        var Unull = $(thisclass).val().replace(/\s/g, '');
        if(Unull.length >=30 || Unull.length <=3){
            $(thisclass).css({'border-bottom':'1px solid #F52230'});
            return false;
        }else if(oldnull == Unull.length){
            $(thisclass).css({'border-bottom':'1px solid #5FCC29'});
            return true;
        }else{
            $(thisclass).css({'border-bottom':'1px solid #F52230'});
            return false;
        }
    }
    function textnum(thisclass){   //六位验证码判断
        var Unum = $(thisclass).val();
        var Tnum = /^\d{6}$/;
        if(Tnum.test(Unum) == false || Unum == ''){
            $(thisclass).css({'border-bottom':'1px solid #F52230'});
            return false;
        }else if(Tnum.test(Unum) == true){
            $(thisclass).css({'border-bottom':'1px solid #5FCC29'});
            return true;
        }
    }
    function textpow(class1,class2){  //密码判断
        var Upow1 = $(class1).val();
        var Upow2 = $(class2).val();
        var Tpow = /^[a-zA-Z]\w{6,16}$/;
        if(Tpow.test(Upow1) == false || Upow1 == '' || Upow1 != Upow2){
            $(class1).css({'border-bottom':'1px solid #F52230'});
            $(class2).css({'border-bottom':'1px solid #F52230'});
            return false;
        }else{
            $(class1).css({'border-bottom':'1px solid #5FCC29'});
            $(class2).css({'border-bottom':'1px solid #5FCC29'});
            return true; 
        }
    }

    // 正则判断两个表单
    $('.register1').click(function(){
    	if(textEnglish('.register_input1') == false || textpow('.register_input2','.register_input3') ==false || textphone('.register_input4') == false || textnum('.register_input5') == false){
    		alert(123);
    	}else if(textEnglish('.register_input1') == true && textpow('.register_input2','.register_input3')==true && textphone('.register_input4') == true && textnum('.register_input5') == true){
    		alert(12);
    	}
    })
    $('.register2').click(function(){
    	if(textnumbernull('.register_input6') == false || textchines('.register_input7') == false || textphone('.register_input8') == false || textnum('.register_input9') == false){
    		alert(false);
    	}else if(textnumbernull('.register_input6') == true && textchines('.register_input7') == true && textphone('.register_input8') == true && textnum('.register_input9') == true){
    		alert(true);
    	}
    })
})