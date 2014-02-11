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

$(function() { 

  // settings
  var $transition_time = 1000; // 1 second
  var $time_between_slides = 4000; // 4 seconds

  // auto scroll 
  $interval = setInterval(
    function(){
    $('.slider').fadeOut(500);
    var $clone = $('.slider li:first').clone(true);
    
    setTimeout(function() {
      $('.slider li:first').remove();
    }, 500)

    $clone.appendTo($('.slider')).removeClass().addClass('inactive');

    var slides = $('.slider').find('li')

    for (var i = 0; i < slides.length; i++) {
      if (i < 5 ) {
        $('.slider li:nth-child('+i+')').removeClass().addClass('active');
      }
      else {
        $('.slider li:nth-child('+i+')').removeClass().addClass('inactive'); 
      }
    }

    $('.slider').fadeIn(500);
    }
    , $transition_time + $time_between_slides 
  );

});

//--------- RESPONSIVE NAV ---------//

$(function() {  
    var pull        = $('#pull');  
        menu        = $('nav ul');  
        menuHeight  = menu.height();  
  
    $(pull).on('click', function(e) {  
        e.preventDefault();  
        menu.slideToggle();  
    });  
});

$(window).resize(function(){  
    var w = $(window).width();  
    if(w > 320 && menu.is(':hidden')) {  
        menu.removeAttr('style');  
    }  
});

// -----------smooth scrolling---------- //

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// -----------blog nav---------- //

jQuery(document).ready(function(){

  if (!!jQuery('#follow').offset()) {
    var stickyTop = jQuery('#follow').offset().top;
    jQuery(window).scroll(function() {
    var windowTop = jQuery(window).scrollTop();
      if (stickyTop < windowTop){
        jQuery('#follow').css({ position: 'fixed', top: 0, height: '238px', width: '357px' });
      }
      else {
        jQuery('#follow').css('position','static');
      }
    });
  }  
});