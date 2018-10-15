$(function(){
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
})