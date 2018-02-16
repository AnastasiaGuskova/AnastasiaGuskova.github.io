$(function() {
	var $dropDown = $('.dropdown');

	$dropDown.on('mouseenter', function() {
		$(this).children('.submenu').slideDown(250);
	});

	$dropDown.on('mouseleave', function() {
		$(this).children('.submenu').slideUp(250);
	});
});
