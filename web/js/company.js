$(function(){
	$('.no_this_btn').click(function(){
		$('.no_this_btn').animate({left: '+150px',opacity: '0'}, 500);
		$('.yes_this_btn').animate({left: '+100px',opacity: '1'}, 500);
	})	
	$('.clickthisbtn').click(function(){
		$('.yes_this_btn').animate({left: '+50px',opacity: '0'}, 500)
		$('.no_this_btn').animate({left: '+100px',opacity: '1'}, 500);
	})
})	