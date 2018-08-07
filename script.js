$(document).ready(function(){

	$('.first').click(function(){
		$(this).siblings('.second').addClass('active').get(0).play();
		console.log('click 2');
	});
	$('.second').click(function(){
		$(this).get(0).pause();
		$(this).siblings('.third').addClass('active').get(0).play();
		console.log('click 3');
	});
	$('.third').click(function(){
		$(this).get(0).pause();
		$(this).siblings('.second').removeClass('active');
		$(this).removeClass('active');
		console.log('reset click');
	});

});