$(function(){
	$('.no_this_btn').click(function(){
		$('.no_this_btn').animate({left: '+150px',opacity: '0'}, 500);
		$('.yes_this_btn').animate({left: '+100px',opacity: '1'}, 500);
	})	
	$('.clickthisbtn').click(function(){
		$('.yes_this_btn').animate({left: '+50px',opacity: '0'}, 500)
		$('.no_this_btn').animate({left: '+100px',opacity: '1'}, 500);
	})
	
	
	/*控制提供/需求的列表的标题*/
	var titles = $('.title').length;
	for (var i =0;i<titles;i++) {
		var num = $('.title').eq(i).text().length;
		var nText = $('.title').eq(i).text();
		if (num==15) {
			$('.zome-logo').eq(i).css({"position": "absolute","right":"3px","bottom":"21px"});
		}else if(num>31){
			$('.zome-logo').eq(i).css({"position": "absolute","right":"3px","bottom":"0"});
			$('.title').eq(i).text(nText.substring(0,31)+"...");
		}
	}
	
	
	var ps = $('.l7_bom').length;
	for (var i =0;i<ps;i++) {
		var numP = $(".l7_bom:eq("+i+") p").text().length;
		var pText = $(".l7_bom:eq("+i+") p").text();
		if(numP>105){
			$(".l7_bom:eq("+i+") p").text(pText.substring(0,104)+"...");
		}
	}
})	