// Form with tooltips

function createTooltip(target, className) {
	var title, idName;
	$(target).each(function(i) {
		idName = className + i;
		title = $(this).attr('title');
		$(this).parent().append('<div class="' + className + '" id="' + idName
  			 + '"><p>' + title + '</p></div>');

		$(this).on('mouseenter focusin', function() {
			$(this).removeAttr('title');
			$(this).next().fadeIn(600);
		}).on('mouseout focusout', function(){
			$(this).next().fadeOut(300);
			$(this).attr('title', title);
		});
	});

	(function turnOnHelp() {
		$('#help-button').on('click', function() {
			$('.tooltip').fadeIn(600);
		});
	})();
}

$(document).ready(function(){
	createTooltip('input','tooltip');
});