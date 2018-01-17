$(document).ready(function() {

//Collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//Page scroll easing - requires Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Navbar collapse on link click  
$('.nav a').on('click', function(){ 
  if($('.navbar-toggle').css('display') !='none'){
    $(".navbar-toggle").trigger( "click" );
  }
});

// Transition hamburger icon to 'X' on click
$('.navbar-toggle').on("click", function(){
  $('.bar1').toggleClass('bar1Active');
  $('.bar2').toggleClass('bar2Active');
  $('.bar3').toggleClass('bar3Active');
}); 

// Home section portfolio button and chevron fade in
  $(".portfolio-button").hide(0).delay(4200).fadeTo(500 , 1);
  $(".chevron-container").hide(0).delay(4300).fadeTo(500 , 1);

// Parallax.js 
  $('#home').parallax({imageSrc: 'images/nyc-home-background.jpg'});
  $('#bio').parallax({imageSrc: 'images/nyc-bio-background.jpg'});
  $('.subway-image').parallax({imageSrc: 'images/subway-background.jpg', zIndex: '100'});

// Magnific Popup
  $('.video-gallery').magnificPopup({
    delegate: 'a',
    type: 'iframe',
    gallery:{
      enabled:true
    }
  });

});