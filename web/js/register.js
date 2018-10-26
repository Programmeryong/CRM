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
        let Utext = $(thisdiv).val();
        let oldtext = $(thisdiv).val().replace(/\s/g, '');
        let Thisterm = /^[\u4e00-\u9fa5]{2,5}$/;
        if(Thisterm.test(Utext)==true && Utext.length == oldtext.length){
            $(thisdiv).css({'border':'1px solid #5FCC29'});
            return true;
        }else{
            $(thisdiv).css({'border':'1px solid #F52230'});
            return false;
        }
    }
    function textEnglish(thisdiv){  //账号名称
        let Uenglish = $(thisdiv).val();
        let oldenglish = $(thisdiv).val().replace(/\s/g, '');
        let Tenglish = /^[0-9A-Za-z]+$/;
        if(Uenglish.length == 0 || Tenglish.test(Uenglish)==false){
            $(thisdiv).css({'border':'1px solid #F52230'});
            return false;
        }else if(Tenglish.test(Uenglish)==true && Uenglish.length == oldenglish.length){
            $(thisdiv).css({'border':'1px solid #5FCC29'});
            return true;
        }else{
            $(thisdiv).css({'border':'1px solid #F52230'});
            return false;
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
    function textnumbernull(thisclass){   //不能有空格判断
        let oldnull = $(thisclass).val().length;
        let Unull = $(thisclass).val().replace(/\s/g, '');
        if(Unull.length >=30 || Unull.length <=3){
            $(thisclass).css({'border':'1px solid #F52230'});
            return false;
        }else if(oldnull == Unull.length){
            $(thisclass).css({'border':'1px solid #5FCC29'});
            return true;
        }else{
            $(thisclass).css({'border':'1px solid #F52230'});
            return false;
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
    function textpow(class1,class2){  //密码判断
        let Upow1 = $(class1).val();
        let Upow2 = $(class2).val();
        let Tpow = /^[a-zA-Z]\w{6,16}$/;
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
    $('.clickthisbtn').click(function(){
        if($('.thisbox').is(':checked') == false){
            $('.formp4').text('请勾选用户协议').show();
            $('.thischeckbox').css({'color':'#F52230'});
            return false;
        }else{
            if(textnumbernull('.logintext1') == true && textchines('.logintext2') == true && 
                textphone('.logintext3') == true && textYZM('.oneYZM') == true && $('.thisbox').is(':checked') == true){
                $('.formp1').hide();
                $('.formp2').hide();
                $('.formp3').hide();
                $('.formp4').hide();
                return true;
            }else{
                if(textnumbernull('.logintext1') == false){
                    let thistext = $('.logintext1').val();
                    let Unull = $('.logintext1').val().replace(/\s/g, '');
                    if(thistext == ''){
                        $('.formp1').text('不能为空').show();
                        return false;
                    }else if(thistext.length >=30){
                        $('.formp1').text('字数不能超过30字').show();
                        return false;
                    }else if(thistext.length <=3){
                        $('.formp1').text('字数不能小于3个字').show();
                        return false;
                    }else if(thistext.length != Unull.length){
                        $('.formp1').text('字段中不能有空格').show();
                        return false;
                    }
                }else{
                   $('.formp1').hide();
                }
                if(textchines('.logintext2') == false){
                    let thistext = $('.logintext2').val();
                    let Unull = $('.logintext2').val().replace(/\s/g, '');
                    if(textchines('.logintext2') == false){
                        $('.formp2').text('输入错误,请输入4位以内的中文').show();
                        return false;
                    }else if(thistext.length != Unull.length){
                        $('.formp2').text('字段中不能有空格').show();
                        return false;
                    }else if(thistext.length <=2){
                        $('.formp2').text('字数不能小于2个字').show();
                        return false;
                    }else if(thistext.length >=4){
                        $('.formp2').text('字数不能超过4个字').show();
                        return false;
                    }
                }else{
                    $('.formp2').hide();
                }
                if(textphone('.logintext3') == false){
                    let thistext = $('.logintext3').val();
                    if(thistext == ''){
                        $('.formp3').text('不能为空').show();
                    }else{
                        $('.formp3').text('请输入正确的电话号码').show();
                    }
                }else{
                    $('.formp3').hide();
                }
                if(textYZM('.oneYZM') == false){
                    let thistext = $('.oneYZM').val();
                    if(thistext.length == 0){
                        $('.formp4').text('验证码错误').show();
                    }else{
                        $('.formp4').text('验证码错误').show();
                    }
                }else{
                    console.log(1);
                    $('.formp4').hide();
                }
                return false;
            }
        }
    })
    $('.clickthisbtn1').click(function(){
        if(textEnglish('.logintext4') == true && textpow('.logintext5','.logintext6') == true &&
            textphone('.logintext7') == true && textYZM('.oneYZM1') == true){
            $('.formp5').hide();
            $('.formp6').hide();
            $('.formp7').hide();
            $('.formp8').hide();
            $('.formp9').hide();
            return true;
        }else{
            if(textEnglish('.logintext4') == false){
                let thistext = $('.logintext4').val();
                let Unull = $('.logintext4').val().replace(/\s/g, '');
                if(thistext == ''){
                    $('.formp5').text('不能为空').show();
                    return false;
                }else if(textchines('.logintext4') == true){
                     $('.logintext4').css({'border':'1px solid #F52230'});
                    $('.formp5').text('不能有中文和字符，格式为英文大小写和数字').show();
                    return false;
                }else if(thistext.length != Unull.length){
                    $('.formp5').text('字段中不能有空格').show();
                    return false;
                }else if(thistext.length <=6){
                    $('.formp5').text('字数不能小于6个字').show();
                    return false;
                }else if(thistext.length >=20){
                    $('.formp5').text('字数不能超过20个字').show();
                    return false;
                }else{
                    return false;
                }
            }else{
                $('.formp5').hide();
            }
            if(textpow('.logintext5','.logintext6') == false){
                let txt1 = $('.logintext5').val();
                let txt2 = $('.logintext6').val();
                let oldtxt1 = $('.logintext5').val().replace(/\s/g, '');
                let oldtxt2 = $('.logintext6').val().replace(/\s/g, '');
                if(txt1.length != oldtxt1.length){
                    $('.formp6').text('密码不能有空格').show();
                    return false;
                }else if(txt1 != txt2){
                    $('.formp7').text('重复密码出错').show();
                    return false;
                }else{
                    $('.formp6').text('密码格式为6到16位字母和数字组合密码').show();
                     $('.formp7').text('密码格式为6到16位字母和数字组合密码').show();
                    return false;
                }
            }else{
                $('.formp6').hide();
                $('.formp7').hide();
            }
            if(textphone('.logintext7') == false){
                let thistext = $('.logintext7').val();
                if(thistext == ''){
                    $('.formp8').text('不能为空').show();
                    return false;
                }else{
                    $('.formp8').text('请输入正确的电话号码').show();
                    return false;
                }
            }else{
                $('.formp8').hide();
            }
            if(textYZM('.oneYZM') == false){
                let thistext = $('.oneYZM').val();
                if(thistext.length == 0){
                    $('.formp9').text('验证码错误').show();
                    return false;
                }else{
                    $('.formp9').text('验证码错误').show();
                    return false;
                }
            }else{
                $('.formp9').hide();
            }
            return false;
        }
    })
})