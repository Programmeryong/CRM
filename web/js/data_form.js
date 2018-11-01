$(function(){
	$('.lastsubmit').click(function(){
		$('.thissubmit').click();
	});
	$('.shangchuan1').click(function(){
		$('.filesfz1').click();
	})
	$('.shangchuan2').click(function(){
		$('.filesfz2').click();
	})

    $(".filesfz1").change(function () {
        run(this,'.sfzbase1', function (data) {
            $('.shangchuan1').attr('src', data);
        });
    });
    $(".filesfz2").change(function () {
        run(this,'.sfzbase2', function (data) {
            $('.shangchuan2').attr('src', data);
        });
    });
	function run(input_file,textval, get_data) {
        /*input_file：文件按钮对象*/
        /*get_data: 转换成功后执行的方法*/
        if (typeof (FileReader) === 'undefined') {
            alert("抱歉，你的浏览器不支持 FileReader!请更换浏览器~");
        } else {
            try {
                /*图片转Base64 核心代码*/
                var file = input_file.files[0];
                //这里我们判断下类型如果不是图片就返回 去掉就可以上传任意文件
                if (!/image\/\w+/.test(file.type)) {
                    alert("请确保文件为图像类型");
                    return false;
                }
                var reader = new FileReader();
                reader.onload = function () {
                    get_data(this.result);
                    $(textval).val(this.result);
                }
                reader.readAsDataURL(file);
            } catch (e) {
                alert('图片转Base64出错啦！' + e.toString())
            }
        }
    }

    // 正则判断  职位和电话号码只判断了不为空~~
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
    function textFixed(thisclass){
        let Ufixed = $(thisclass).val();
        let Tfixed = /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/;
        if(Tfixed.test(Ufixed) == false ){
            $(thisclass).css({'border':'1px solid #F52230'});
            return false;
        }else if(Tfixed.test(Ufixed) == true){
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

    $('#thisform').submit(function(){
        if(textchines('.dataform1') == true && textnull('.dataform2') == true &&
           textphone('.dataform3') == true && textFixed('.dataform4') == true &&
           textemail('.dataform5') == true && textqq('.dataform6')){
            return true;
        }else{
            return false;
        }
    })
})