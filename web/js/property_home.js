$(function(){
	$('.lastsubmit').click(function(){
		$('.thissubmit').click();
	});
    $('#demo1').click(function(){
        $('#test1').click();
    })
    $('.propert_textarea').keydown(function(){
        let text = $('.propert_textarea').val();
        let textnumber = $('.propert_textarea').val().length;
        if(textnumber <= 300){
            $('.newnumber').text(textnumber);
        }else{
            $('.propert_textarea').val(text.substring(0,299));
        }
        console.log(textnumber);
    })
})