$(function(){
	var textnumber=0;
	var editor = new Simditor({
	  textarea: $('#editor'),
	});
	// console.log(editor.getValue);
	editor.on('valuechanged',function(){
		var text = editor.sync();
		textnumber =  editor.sync().length;
		if( textnumber >0){
			// let thistext = text.substring(0,299);
			// editor.setValue(thistext);
			return true;
		}else{
			return false;
		}
	})
	$('.form_box4 span').click(function(){
		$('.form_box4 input').click();
	})
	$('.curtain').click(function(){
		$('.navbigbox').hide();
		$('.curtain').hide();
	})
	$('.simulationtext').click(function(){
		$('.simulationtext').text('');
		$('.navbigbox').show();
		$('.curtain').show();
	})
	$('.thisclose').click(function(){
		$('.navbigbox').hide();
		$('.curtain').hide();
	})
	
	


	// 监控搜索框 关键字变色
	$('.tijiao').click(function(){
		$('.curtainfff').show();
		$('.searchnav').show();
		var tijiaotext = $('.inputing').val();
		var thisli = $('.searchnav li').length;
		for(let a = 0;a<thisli;a++){
			var thistext = $('.searchnav li:eq('+a+')').text();
			// console.log(thistext);
			var newtext = thistext.split(tijiaotext);
			var alsdkfj =  newtext.join('<i style="color:#198cff;">'+tijiaotext+'</i>');
			$('.searchnav li:eq('+a+')').html(alsdkfj);
		}
	})
	$('.curtainfff').click(function(){
		$('.curtainfff').hide();
		$('.searchnav').hide();
	})
	$('.searchnav').on('click','li',function(){
		$('.searchnav').hide();
	})

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
    function textemail(thisclass){  //邮箱判断
        let Uemail = $(thisclass).val();
        let Temail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if(Temail.test(Uemail) == false || Uemail == ''){
            $(thisclass).css({'border':'1px solid #F52230'});
            return false;
        }else if(Temail.test(Uemail) == true){
            $(thisclass).css({'border':'1px solid #5FCC29'});
            return true;
        }
    }
    function textqq(thisclass){   //QQ号码判断
        let Uqq = $(thisclass).val();
        let Tqq = /^[1-9][0-9]\d{5,12}$/;
        if(Tqq.test(Uqq) == false || Uqq == ''){
            $(thisclass).css({'border':'1px solid #F52230'});
            return false;
        }else if(Tqq.test(Uqq) == true){
            $(thisclass).css({'border':'1px solid #5FCC29'});
            return true;
        }
    }
    function textnull(thisclass){   //不为空判断
        let Unull = $(thisclass).val();
        if(Unull.length == 0){
            $(thisclass).css({'border':'1px solid #F52230'});
            return false;
        }else{
            $(thisclass).css({'border':'1px solid #5FCC29'});
            return true;
        }
    }
	$('.clickformbox4').click(function(){
		var simulationtextnumber = $('.simulationtext i').text().length;
		if(textqq('.thisqq') == false || textemail('.thisemail') == false || textphone('.phone') == false || textnull('.telnumber') == false || textnull('.crmformtitle') == false || textnumber == 0 || simulationtextnumber == 0){
			if(textnumber == 0){
				$('.simditor-wrapper').css({'border':'1px solid #f52230'});
				$('.thisp3').show();
				$('.thisp3').text('补充描述不能为空');
			}else if(textnumber != 0){
				$('.simditor-wrapper').css({'border':'1px solid #5FCC29'});
				$('.thisp3').hide();
			}
			if(simulationtextnumber == 0){
				$('.simulationtext').css({'border':'1px solid #f52230'});
				$('.thisp1').show();
				$('.thisp1').text('标签不能为空');
			}else if(simulationtextnumber != 0){
				$('.simulationtext').css({'border':'1px solid #5FCC29'});
				$('.thisp1').hide();
			}
			if(textphone('.phone') == false){
				let thistext = $('.phone').val();
				if(thistext.length == 0){
					$('.thisp4').show();
					$('.thisp4').text('手机号码不能为空');
				}else if(textphone('.phone') == false){
					$('.thisp4').show();
					$('.thisp4').text('手机号码格式错误');
				}
			}else if(textphone('.phone') == true){
				$('.thisp4').hide();
			}
			if(textemail('.thisemail') == false){
				let thistext = $('.thisemail').val();
				if(thistext.length == 0){
					$('.thisp6').show();
					$('.thisp6').text('邮箱地址不能为空');
				}else if(textemail('.thisemail') == false){
					$('.thisp6').show();
					$('.thisp6').text('邮箱地址格式错误');
				}
			}else if(textemail('.thisemail') == true){
				$('.thisp6').hide();
			}
			if(textqq('.thisqq') == false){
				let thistext = $('.thisemail').val();
				if(thistext.length == 0){
					$('.thisp7').show();
					$('.thisp7').text('QQ号码不能为空');
				}else if(textqq('.thisqq') == false){
					$('.thisp7').show();
					$('.thisp7').text('QQ号码格式错误');
				}
			}else if(textqq('.thisqq') == true){
				$('.thisp7').hide();
			}
			if(textnull('.crmformtitle') == false){
				let thistext = $('.crmformtitle').val();
				if(thistext.length == 0){
					$('.thisp2').show();
					$('.thisp2').text('标题不能为空');
				}
			}else if(textnull('.crmformtitle') == true){
				$('.thisp2').hide();
			}
			if(textnull('.telnumber') == false){
				let thistext = $('.telnumber').val();
				if(thistext.length == 0){
					$('.thisp5').show();
					$('.thisp5').text('电话号码不能为空');
				}
			}else if(textnull('.telnumber') == true){
				$('.thisp5').hide();
			}
		}else if(textqq('.thisqq') == true && textemail('.thisemail') == true && textphone('.phone') == true && textnull('.telnumber') && textnull('.crmformtitle') == true){
			$('.thisp1').hide();$('.thisp2').hide();$('.thisp3').hide();$('.thisp4').hide();$('.thisp5').hide();
			//ajax()
			return true;
		}
	})
})