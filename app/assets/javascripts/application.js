// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

//--------- CAROUSEL ---------//

.slider {
  margin: 10px 0;
  width: 580px; /* Update to your slider width */
  height: 250px; /* Update to your slider height */
  position: relative;
  overflow: hidden;
}

.slider li {
  display: none;
  position: absolute; 
  top: 0; 
  left: 0; 
}
jQuery Javascript
jQuery(function($) { 

  // settings
  var $slider = $('.slider'); // class or id of carousel slider
  var $slide = 'li'; // could also use 'img' if you're not using a ul
  var $transition_time = 1000; // 1 second
  var $time_between_slides = 4000; // 4 seconds

  function slides(){
    return $slider.find($slide);
  }

  slides().fadeOut();
  console.log(slides())

  // set active classes
  slides().first().clone(true).appendTo(slides());
  slides().first().delete();
  // slides().first().fadeIn($transition_time);

  // auto scroll 
  $interval = setInterval(
    function(){
      var $i = $slider.find($slide + '.active').index();

      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut($transition_time);

      if (slides().length == $i + 1) $i = -1; // loop to start

      slides().eq($i + 1).fadeIn($transition_time);
      slides().eq($i + 1).addClass('active');
    }
    , $transition_time +  $time_between_slides 
  );

});

//--------- RESPONSIVE NAV ---------//

// $(function() {  
//     var pull        = $('#pull');  
//         menu        = $('nav ul');  
//         menuHeight  = menu.height();  
  
//     $(pull).on('click', function(e) {  
//         e.preventDefault();  
//         menu.slideToggle();  
//     });  
// });

// $(window).resize(function(){  
//     var w = $(window).width();  
//     if(w > 320 && menu.is(':hidden')) {  
//         menu.removeAttr('style');  
//     }  
// });