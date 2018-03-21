// Tabs with fading

$(function() {
	$('#tablist').children().on('click', function() {
		var classes = $(this).attr('class');
		var className = '.' + classes.split(' ')[0] ;

		$(this).addClass('active');
		$(this).siblings().removeClass('active');

		$('.tab-definition').children().fadeOut(600);
		$('.tab-definition').find($(className)).delay(700).fadeIn(600);
	});
});