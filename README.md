#Description
This is a workaround to get the CSS animations coming with visual composer working with the plugin [fullpage for visual composer]("http://codecanyon.net/item/fullpage-for-visual-composer/13112364").

#The code
The get the animations working you have to put this code under the "afterLoad" event that you can find in the Events section of the plugin (see the image below).

###Script
`var section_content = loadedSection[0].innerHTML;
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
}`
###Image
![Screenshot](https://cloud.githubusercontent.com/assets/7823934/15777372/03e66722-298f-11e6-8497-d1e9379dc80c.png)