$(function() {
	// Carousel
	(function() {
	    var $jcarousel = $('.jcarousel');
	    $jcarousel
	            .on('jcarousel:reload jcarousel:create', function () {
	                var $carousel = $(this),
	                    width = $carousel.innerWidth();

	                if (width >= 600) {
	                    width = width / 3;
	                } else if (width >= 350) {
	                    width = width / 2;
	                }

	                $carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
	            }).jcarousel({
	                wrap: 'circular'
	            });

	    $('.jcarousel-control-prev')
	        .jcarouselControl({
	            target: '-=1'
	        });

	    $('.jcarousel-control-next')
	        .jcarouselControl({
	            target: '+=1'
	        });

	    $('.jcarousel-pagination')
	        .on('jcarouselpagination:active', 'a', function() {
	            $(this).addClass('active');
	        })
	        .on('jcarouselpagination:inactive', 'a', function() {
	            $(this).removeClass('active');
	        })
	        .on('click', function(e) {
	            e.preventDefault();
	        })
	        .jcarouselPagination({
	            perPage: 1,
	            item: function(page) {
	                return '<a href="#' + page + '">' + page + '</a>';
	            }
	        });
	})();

	// Custom Selects
	(function() {
	  	$('select').niceSelect();
	})();

	// Custom selects
	(function() {
		$('.niceCheck').each(function() {
			changeCheckStart($(this));
		});
		$('.niceCheck').mousedown(function() {
			changeCheck($(this));
		});

		function changeCheck(el) {
			var input = el.find("input").eq(0);
     		if(el.attr("class").indexOf("niceCheckDisabled")==-1) {   
		        if(!input.attr("checked")) {
		            el.addClass("niceChecked");
		            input.attr("checked", true);
		        } else {
		            el.removeClass("niceChecked");
		            input.attr("checked", false).focus();
		        }
		    }

		    return true;
		}

		function changeVisualCheck(input) {
			var $wrapInput = input.parent();
		    if(!input.attr("checked")) {
		        $wrapInput.removeClass("niceChecked");
		    }
		    else {
		        $wrapInput.addClass("niceChecked");
		    }
		}

		function changeCheckStart(el) {
			try {
				checkName = el.attr("name"),
				checkId = el.attr("id"),
				checkChecked = el.attr("checked"),
				checkDisabled = el.attr("disabled"),
				checkTab = el.attr("tabindex"),
				checkValue = el.attr("value");
			    if(checkChecked) {
			        el.after("<span class='niceCheck niceChecked'>"+
			            "<input type='checkbox'"+
			            "name='"+checkName+"'"+
			            "id='"+checkId+"'"+
			            "checked='"+checkChecked+"'"+
			            "value='"+checkValue+"'"+
			            "tabindex='"+checkTab+"' /></span>");
			    }
    			else {
			        el.after("<span class='niceCheck'>"+
			            "<input type='checkbox'"+
			            "name='"+checkName+"'"+
			            "id='"+checkId+"'"+
			             "value='"+checkValue+"'"+
			            "tabindex='"+checkTab+"' /></span>");
    			}
			     
    			/* если checkbox disabled - добавляем соотвсмтвующи класс для нужного вида и добавляем атрибут disabled для вложенного chekcbox */     
			    if(checkDisabled) {
			        el.next().addClass("niceCheckDisabled");
			        el.next().find("input").eq(0).attr("disabled","disabled");
			    }
     
			    /* цепляем обработчики стилизированным checkbox */     
			    el.next().bind("mousedown", function(e) { changeCheck(jQuery(this)) });
			    el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck(jQuery(this)) });
			    if(jQuery.browser.msie) {
			        el.next().find("input").eq(0).bind("click", function(e) { changeVisualCheck(jQuery(this)) });   
			    }
    			el.remove();

			}
			catch(err) {
				// Do nothing
			}
			return true;

			input = el.find("input").eq(0);
      		if(input.attr("checked")) {
        		el.css("background-position","0 -17px");    
        	}

     		return true;
		}
	})();
});