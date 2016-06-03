var section_content = loadedSection[0].innerHTML;
if(section_content.indexOf("wpb_animate_when_almost_visible") !== -1){
	var section_container = jQuery('.mcw_fp_section.active');
		if(jQuery(section_container).hasClass('fp-section','active') && jQuery(section_container).find('div.fp-slides').length == 0){
			jQuery(section_container).find('.wpb_animate_when_almost_visible').each(function(){
				jQuery(this).addClass('wpb_start_animation');
			});
		} else {
			var slide = jQuery(section_container).find('.fp-slide.fp-table.active');
			jQuery(slide).find('.wpb_animate_when_almost_visible').each(function(){
				jQuery(this).addClass('wpb_start_animation');
			});
			jQuery('.fp-controlArrow').on("click",function(){
				var nextSlide = jQuery(section_container).find('.fp-slide.fp-table.active').next();
				setTimeout(function(){
					jQuery(nextSlide).find('.wpb_animate_when_almost_visible').each(function(){	
						jQuery(this).addClass('wpb_start_animation');
					});
				},750);
			});
		}
}