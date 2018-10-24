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
})