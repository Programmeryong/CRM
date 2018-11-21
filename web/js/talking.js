$(function(){	
	var index=0;
	$('.user-list>ul>li').click(function(){
		index = $(this).index();
		$('.user-list>ul>li').removeClass("active");
		$('.user-list>ul>li').eq(index).addClass("active");
		if ($('.talk-box:eq('+index+')').length>0) {
			$('.talk-box').eq(index).show().siblings().hide();
		} else{
			$('.talk-box').hide();
			$('.talk_boxss').append("<div class='talk-box'>"+
										"<ul class='talk-text clearfix'>"+
											"<li class='mine'>"+
												"<p class='time-mine'>14:12</p>"+
												"<div class='mine-img'><img src='images/test/adf.jpg'/></div>"+
												"<div class='text'>"+
													"<p>dsf dsfdsf</p>"+
												"</div>"+
											"</li>"+
										"</ul>"+
									"</div>");
		}
		
	})
	$('.user-list>ul>li').eq(0).click();
	
	$('.talk-box').eq(index).scroll(function(){
		var scrollTop = $(this).scrollTop();    //滚动条距离顶部的高度
		if(scrollTop<=5){ 
			var dataInt = {"data":[{"tex":"1"},{"tex":"2"}]};
		    //滚动条到达顶部
		    console.log(scrollTop);
		    var mydate = new Date(); 
			var thisTime = mydate.toLocaleString('chinese', { hour12: false });
			for (var i=0; i<dataInt.data.length;i++) {
				if (i%2==0) {
					$('.talk-box:eq('+index+') .talk-text').prepend("<li class='mine'>"+
										"<p class='time-mine'>"+thisTime+"</p>"+
										"<div class='mine-img'><img src='images/test/adf.jpg'/></div>"+
										"<div class='text'>"+
											"<p>"+dataInt.data[i].tex+"</p>"+
										"</div>"+
									"</li>");
				} 
				else{
					$('.talk-box:eq('+index+') .talk-text').prepend("<li class='other'>"+
										"<p class='time-other'>"+thisTime+"</p>"+
										"<div class='other-img'><img src='images/test/minhead.png'/></div>"+
										"<div class='text'>"+
											"<p>"+dataInt.data[i].tex+"</p>"+
										"</div>"+
									"</li>");
				}
			}	
			
			$('.talk-box').eq(index).scrollTop($('.talk-box').eq(index).scrollTop());
		}
	});
	
	var txt='';
	var i = 0;
	$('#txt').on('DOMNodeInserted',function(){
		txt = $('#txt').text();
		var nulls = /^[\s]*$/;
		if(txt=='' || nulls.test(txt)){
			$('#send').css({"background-color": "#fff","cursor": "not-allowed"});
		}else{
			/*console.log(txt);*/
			$('#send').css({"background-color": "#62d5c8","cursor": "pointer"});
		}
		
	});
	
	$('.ex_phone_btn').click(function(){
		var mydate = new Date(); 
		var thisTime = mydate.toLocaleString('chinese', { hour12: false });
		$('.talk-box:eq('+index+') .talk-text').append("<li class='ex_phone'>"+
						"<div>"+
							"<p>您的交换电话号码请求已送达</p>"+
						"</div>"+
						"<p class='time'>15:41</p>"+
					"</li>");
					
		$('.talk-box:eq('+index+') .talk-text').append("<li class='other'>"+
						"<p class='time-other'>"+thisTime+"</p>"+
						"<div class='other-img'><img src='images/test/minhead.png'/></div>"+
						"<div class='ec_phone_box'>"+
							"<p>对方请求交换电话号码，不知道您是否同意？</p>"+
							"<div>"+
								"<p><a href=''>同意</a></p>|"+
								"<p><a href=''>不同意</a></p>"+
							"</div>"+
						"</div>"+
					"</li>");
		
		$('.ex_phone_btn span').text("交换手机 (已发送,可再次发送)");
		
		/*var div = document.getElementById('talk-box');
		div.scrollTop = div.scrollHeight;*/
		$('.talk-box').eq(index).scrollTop($('.talk-box').eq(index)[0].scrollHeight);

	})
	
	$('#send').click(function(){
       	var mydate = new Date();  
		var thisTime = mydate.toLocaleString('chinese', { hour12: false });
		
		
		txt = $('#txt').html();
		txts = $('#txt').text();
		var nulls = /^[\s]*$/;
		if(txts=='' || nulls.test(txts)){
			return false;
		}else{
			i++;
			$('#txt').html("");
			if (i%2==1) {
				$('.talk-box:eq('+index+') .talk-text').append("<li class='mine'>"+
										"<p class='time-mine'>"+thisTime+"</p>"+
										"<div class='mine-img'><img src='images/test/adf.jpg'/></div>"+
										"<div class='text'>"+
											"<p>"+txt+"</p>"+
										"</div>"+
									"</li>");
			} else{
				$('.talk-box:eq('+index+') .talk-text').append("<li class='other'>"+
										"<p class='time-other'>"+thisTime+"</p>"+
										"<div class='other-img'><img src='images/test/minhead.png'/></div>"+
										"<div class='text'>"+
											"<p>"+txt+"</p>"+
										"</div>"+
									"</li>");
			}
			
			$('.talk-box').eq(index).scrollTop($('.talk-box').eq(index)[0].scrollHeight);
			
		}
		$('#send').css({"background-color": "#fff","cursor": "not-allowed"});
	})
	
	
	/*换行开始*/
	$(document).keydown(function (e) {
	    var e = e || window.event, ec = e.keyCode || e.which;
	    var nulls = /^[\s]*$/;
	    	txt = $('#txt').text();
	    	if(txt.length <= 1 || nulls.test(txt)){
				$('#send').css({"background-color": "#fff","cursor": "not-allowed"});
			}else{
				//console.log(txt);
				$('#send').css({"background-color": "#62d5c8","cursor": "pointer"});
			}
	    
	    if (!e.ctrlKey && 13 == ec) {
	        //console.log('发送');
	        $('#send').click();
	        return false;
	    }
	    if (e.ctrlKey && 13 == ec) {
	        //console.log('换行');
	        if (browserType() == "IE" || browserType() == "Edge") {
	            $("#txt").append("<p></p>");
	        }
	        else if (browserType() == "FF") {
	            $("#txt").append("<br/><br/>");
	        } else {
	            $("#txt").append("<p><br/></p>");
	        }
	        //设置输入焦点
	        var o = document.getElementById("txt").lastChild;            
	        var textbox = document.getElementById('txt');
	        var sel = window.getSelection();
	        var range = document.createRange();
	        range.selectNodeContents(textbox);
	        range.collapse(false);
	        range.setEndAfter(o);//
	        range.setStartAfter(o);//
	        sel.removeAllRanges();
	        sel.addRange(range);
	    }
	});

	function browserType () {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = false;
        if (userAgent.indexOf('Edge') > -1) {
            return "Edge";
        }
        if (userAgent.indexOf('.NET') > -1) {
            return "IE";
        }
        if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
            isOpera = true;
            return "Opera"
        }; //判断是否Opera浏览器
        if (userAgent.indexOf("Firefox") > -1) {
            return "FF";
        } //判断是否Firefox浏览器
        if (userAgent.indexOf("Chrome") > -1) {
            return "Chrome";
        }
        if (userAgent.indexOf("Safari") > -1) {
            return "Safari";
        } //判断是否Safari浏览器
        if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
            return "IE";
        }; //判断是否IE浏览器
	}
	/*换行结束*/
	
	/*去除复制粘贴过来的样式和标签*/
	function textInit(e) {
        e.preventDefault();//阻止默认事件
        var text;
        var clp = (e.originalEvent || e).clipboardData;
        if (clp === undefined || clp === null) {
            text = window.clipboardData.getData("text") || "";
            if (text !== "") {
                if (window.getSelection) {
                    var newNode = document.createElement("span");
                    newNode.innerHTML = text;
                    window.getSelection().getRangeAt(0).insertNode(newNode);
                } else {
                    document.selection.createRange().pasteHTML(text);
                }
            }
        } else {
            text = clp.getData('text/plain') || "";
            if (text !== "") {
                document.execCommand('insertText', false, text);
            }
        }
    }
	
	$( document ).on( "paste", "#txt", function(e) {
        //去除复制样式
        textInit(e);
        //去除复制过来的 标签
        if($('#txt').attr('list-layout') == 'true'){ //如果可编辑div #txt中存在li
            //找到所有的li
            var $lichild = $('#txt').find('li');
            $lichild.each(function () {
                //获取li 的子元素var htmlunList = '';
                var $childEles = $(this).children().not('br');
                var htmlunList = '';
                htmlunList +=   $(this)
                    .clone()    //复制元素
                    .children() //获取所有子元素
                    .remove()   //删除所有子元素
                    .end()  //回到选择的元素
                    .html();//获取文本值
                if($childEles>0){
                    $childEles.each(function(){
                        htmlunList +=$(this).text();
                    })
                }
                $(this).html(htmlunList);
            })
        }else{
            var $childEles = $('#txt').children().not('br');
            if($childEles.length>0){
                var htmlunList = '';
                htmlunList +=   $('#txt')
                    .clone()    //复制元素
                    .children() //获取所有子元素
                    .remove()   //删除所有子元素
                    .end()  //回到选择的元素
                    .html();//获取文本值
                $childEles.each(function(){
                    var tagname =  $(this)[0].tagName;
                    htmlunList += $(this).text();
                    /*if(tagname == 'SPAN'){
                        htmlunList += $(this).text();
                    }
                    if(tagname == 'DIV'){
                        htmlunList +='<br>'+ $(this).text();
                    }*/
                });
                $('#txt').html(htmlunList);
            }

        }
    });
	/*去除复制粘贴过来的样式和标签（结束）*/
})
