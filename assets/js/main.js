
// Class 
(function ($) {
	"use strict";

    jQuery(document).ready(function($){
		
		
		$(".project-title li").on("click", function() {
			var selector = $(this).attr('data-filter');
			&(".project-list").isotope({
				filter: selector
			});
		});
      
    });


    jQuery(window).load(function(){
		
		jQuery(".project-list").isotope();
        
    });


}(jQuery));
