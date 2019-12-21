
$(document).ready(function($){
   
  var full = $('#fullscreen');
  $(full).data('state','open');
  $('.clicky').click(function(){
    
    if($(full).data('state') == 'open'){
      $(full).fadeIn(300);
      $(full).data('state','close');
    }



    particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},
    "color":{"value":"#67b7dc"},"shape":{"type":"triangle","stroke":{"width":0,
    "color":"#3e3e3e"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.20831163420477017,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":8.011985930952697,"random":true,"anim":{"enable":false,"speed":300,"size_min":0.8115236356258881,"sync":false}},"line_linked":{"enable":true,"distance":128.19177489524316,"color":"#000000","opacity":0.10415581710238508,"width":0.8011985930952699},"move":{"enable":true,"speed":1,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":640.9588744762158}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true})



  });
  $('.close').click(function(){
    if($(full).data('state') == 'close'){
  $(full).fadeOut();
  $(full).data('state','open');
    }
  });  
});


$(window).scroll(function(){
	var sticky = $('.sticky-header'),
		scroll = $(window).scrollTop();
  
	if (scroll >= 100) sticky.addClass('fixed');
	else sticky.removeClass('fixed');
  });


  $(document).ready(function(){
	$('.navbar-header li').click(function(){
		$('li.active').removeClass('active');
		$(this).addClass('active');
	})

})
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll == 0) {
		$("#top-menu li").removeClass("active");
		$("#header1").parent().addClass("active");
	}
	else if (scroll <= 712){
		$("#top-menu li").removeClass("active");
		$("#skill").parent().addClass("active");
	}

	else if (scroll <= 1400){
		$("#top-menu li").removeClass('active')
		$("#audit1").parent().addClass("active");
	}
	else if (scroll <= 2002){
		$("#top-menu li").removeClass('active')
		$("#experience").parent().addClass("active");
	}

}); 





var s = skrollr.init();


ScrollReveal().reveal('.item',  { delay: 600, reset: true, desktop: true, opacity: 0.5 })
ScrollReveal().reveal('.desc-header', { delay: 200, reset: true, desktop: true })
ScrollReveal().reveal('.tools-navbar', { delay: 400, reset: true, desktop: true })

window.sr = ScrollReveal({ reset: true });
sr.reveal('.tab-content', {origin: 'right', distance: '300px', duration: 2000});
sr.reveal('.nav-link', { origin: 'left', distance: '300px', duration: 900 });


sr.reveal('.right-animation', {origin: 'right', distance: '100px', duration: 2000});
sr.reveal('.left-animation', {origin: 'left', distance: '100px', duration: 2000});

new WOW().init();








var config = {
  reset: true,
  delay: 'once',
  mobile: false,
  over: '1s',
}
window.sr = new scrollReveal(config);




 /*
$(document).ready(function() {
//drop down menu	
    $(".drop-down").click(function() {
      $('.mega-menu').slideToggle(1000);

    });
 
    $(".mega-menu").mouseout(function() {
      $(this).slideUp(500);

    });


});

*/



$('.js-tilt').tilt({
  scale: 1.1
})



var images = [
  /*
  
  "./images/demo/pdcaheader/header1.jpg",
  "./images/demo/pdcaheader/header3.jpg",
  */
  "./images/demo/pdcaheader/header5.jpg",
  "./images/demo/pdcaheader/header7.jpg",
  "./images/demo/pdcaheader/header6.jpg"
]

var imageHead = document.getElementById("header");


var i = 0;
setInterval(function() {
      imageHead.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
}, 5000);