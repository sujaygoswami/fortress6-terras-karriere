/*
  Slick Slider
*/
(function($){
  /* Functions Video */
  function videoPlayToEndThenNextSlide(currentSlide){
    let current_slide = $('.slick-slide').eq(currentSlide);
    let current_video = current_slide.find('video');

    if(current_video.length){
      current_video[0].play();
      heroHomeSlider.slick('slickPause');
    
      current_video[0].onended = function() {
        heroHomeSlider.slick('slickPlay');
        heroHomeSlider.slick('slickNext');
        current_video[0].currentTime = 1;
      }
    }
  }

  function videoPauseBeforeChange(currentSlide){
    let current_slide = $('.slick-slide').eq(currentSlide);
    let current_video = current_slide.find('video');
    if(current_video.length){
      current_video[0].pause();
      current_video[0].currentTime = 1;
    }
  }

  /* Hero Home */  
  var heroHomeSlider = $('.heroslider-home');
  heroHomeSlider.on('init', function(){
    heroHomeSlider.addClass('loaded');
  });

  heroHomeSlider.on('afterChange', function(event, slick, currentSlide){ 
    videoPlayToEndThenNextSlide(currentSlide);
  });

  heroHomeSlider.on("beforeChange", function(slick, currentSlide, nextSlide) {
    videoPauseBeforeChange(currentSlide);
  });

  heroHomeSlider.slick({
    autoplay: true,
    arrows : false,
    //appendArrows: $('.hero-navigation'),
    //appendDots: $('.hero-navigation'),
    dots: false,
    focusOnSelect : true,
    swipeToSlide : true,
    slidesToShow: 1,
    autoplaySpeed: 6000,
    fade: true,
    infinite: true,
    speed: 2000,
    pauseOnFocus: false,
    pauseOnHover: false
  });  

  /* Hero Site */  
  var heroslider = $('.heroslider');
  heroslider.on('init', function(){
    heroslider.addClass('loaded');
  });
	heroslider.slick({
		autoplay: true,
    adaptiveHeight: false,
		focusOnSelect : true,
		swipeToSlide : true,
		slidesToShow: 1,
		autoplaySpeed: 2000,
		fade: true,
		infinite: true,
		speed: 2000,
		pauseOnFocus: false,
		pauseOnHover: false,
    dots: false,
    arrows: false
  });  

  /* NEWSSLIDER */  
  var newsslider = $('.newsslider');
  newsslider.on('init', function(){
    newsslider.addClass('loaded');
  });

  newsslider.on('beforeChange', function(event, slick, currentSlide){
    $('.slick-active .mask').removeClass('works');
    $('.slick-active .caption').removeClass('works');
  });
  newsslider.on('afterChange', function(event, slick, currentSlide){ 
    $('.slick-active .mask').addClass('works');
    $('.slick-active .caption').addClass('works');
  });

	newsslider.slick({
		autoplay: true,
    adaptiveHeight: false,
		focusOnSelect : true,
		swipeToSlide : true,
		slidesToShow: 1,
		autoplaySpeed: 6000,
		//fade: true,
		infinite: true,
		speed: 2000,
		pauseOnFocus: false,
		pauseOnHover: false,
    dots: true,
    arrows: false
  });  

  /* Content-Slider */

  var slider = $('.content-slider');
  slider.on('init', function(){
    slider.addClass('loaded');
  });
	slider.slick({
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    speed: 1000,
    fade: true,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: '0px',
    variableWidth: false,
    infinite: true,
    initialSlide: 0,
    focusOnSelect: false,
    pauseOnHover: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true
        }
      }
    ]
  }); 


/* Gruppenstärke Slider */

var gruppenslider = $('#gruppenslider');
gruppenslider.on('init', function(){
  gruppenslider.addClass('loaded');
});
gruppenslider.slick({
  autoplay: true,
  arrows: false,
  adaptiveHeight: true,
  dots: false,
  focusOnSelect : true,
  swipeToSlide : true,
  slidesToShow: 5,
  centerMode: true,
  centerPadding: '55px',
  autoplaySpeed: 3000,
  fade: false,
  infinite: true,
  speed: 500,
  pauseOnFocus: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 967,
      settings: {
        centerPadding: '150px',
        slidesToShow: 1
      }
    }
    ,
    {
      breakpoint: 600,
      settings: {
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});  

/* Kachel Slider 1 */

$('.kachel-bild-1').slick({
  autoplay: true,
  arrows: false,
  adaptiveHeight: false,
  dots: false,
  focusOnSelect : true,
  swipeToSlide : true,
  slidesToShow: 1,
  autoplaySpeed: 4000,
  fade: true,
  infinite: true,
  speed: 800,
  pauseOnFocus: false,
  pauseOnHover: false
}); 

/* Kachel Slider 2 */

$('.kachel-bild-2').slick({
  autoplay: true,
  arrows: false,
  adaptiveHeight: false,
  dots: false,
  focusOnSelect : true,
  swipeToSlide : true,
  slidesToShow: 1,
  autoplaySpeed: 4000,
  fade: true,
  infinite: true,
  speed: 1000,
  pauseOnFocus: false,
  pauseOnHover: false
}); 

/* Kachel Slider 3 */

$('.kachel-bild-3').slick({
  autoplay: true,
  arrows: false,
  adaptiveHeight: false,
  dots: false,
  focusOnSelect : true,
  swipeToSlide : true,
  slidesToShow: 1,
  autoplaySpeed: 4000,
  fade: true,
  infinite: true,
  speed: 3000,
  pauseOnFocus: false,
  pauseOnHover: false
}); 

/* Kachel Slider 4 */

$('.kachel-bild-4').slick({
  autoplay: true,
  arrows: false,
  adaptiveHeight: false,
  dots: false,
  focusOnSelect : true,
  swipeToSlide : true,
  slidesToShow: 1,
  autoplaySpeed: 4000,
  fade: true,
  infinite: true,
  speed: 2000,
  pauseOnFocus: false,
  pauseOnHover: false
}); 




// Controls ausblenden - Videos Home
var vids = $(".hero-item-image video"); 
$.each(vids, function(){
       this.controls = false; 
}); 

/* Home Grafik - Klick for Infos */
$('#wachstum').click(function() {
  $('.wrapper-wachstum').toggleClass('show');
});

$('.hamburger').on('click', function(){
  //$(this).toggleClass('collapsed');
});

// Video im Popup 

/*
$('#btn-play').click(function() {
$('#movie').get(0).play();
$('#btn-play').hide(1000);
});
$('.js-fo-close').click(function() {
var video = $('#movie').get(0);
video.pause();
video.currentTime = 0;
$('#btn-play').show();
});
*/


}(jQuery));
/* --------- */

/*
  Check view, Observer
*/
const observerOptions = {
  root: null,
  rootMargin: '0% 0% -20% 0%',
  threshold: 0
}

let observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){  
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}

let observer = new IntersectionObserver(observerCallback, observerOptions);
let observerTargets = document.querySelectorAll(".checkview");
observerTargets.forEach(target => {
  observer.observe(target);
});

/*
    Header Scrolled
*/    
let offset = 600;
let header = ('.header');
$(window).scroll(function(){
  if( $(this).scrollTop() > offset ){
    $(header).addClass("scrolled");
  } else {
    $(header).removeClass("scrolled");
  }
});

/*
    Standortkarte
*/

function showContent(marker) {
  document.getElementById(marker).classList.add('active-marker');
  document.getElementById(marker + "-content").classList.add('active');
}

function closeWindow(marker) {
  document.getElementById(marker).classList.remove('active-marker');
  document.getElementById(marker + "-content").classList.remove('active');
}


/* h2 Headlines + right redline */
$( ".red-headline h2:first-of-type" ).wrap( "<div class='content-headline'></div>" );
//$( '<span>' ).appendTo('.content-headline');

/* h3 Headlines + right redline */
$( ".red-headline h3:first-of-type" ).wrap( "<div class='content-headline'></div>" );
$( '<span>' ).appendTo('.content-headline');

/* Item Page h3 Headlines + center redline */
$( '.com-content-article__body h3, .standortkarte-outer h3, .fields-bereich-unten .container h3, .wachstum h1:first-of-type, .g-fields h3' ).wrap( "<div class='content-headline-us'></div>" );
$( '<span>' ).appendTo('.content-headline-us');
$( '<span>' ).prependTo('.content-headline-us');

$('#hero-site .hero-container').parents('.site-container').find('.main').addClass('space');
$('.site-container #hero-site .hero-container').parents('.site-wrapper').find('.header').addClass('trans');

$('.btn.btn-primary').addClass('uk-animation-slide-bottom-small');

/* HERO Rote Ecke einblenden */
$('body.site.is-home .hero-container .second-layer').delay(400).animate({'marginTop':'+=0px','opacity':'.5'},2000);
$('body.site .hero-container .third-layer').delay(200).animate({'marginTop':'+=0px','opacity':'1'},800);

/* Header Parallax */
var cover = document.querySelector('.js-parallax'),
  coverHeight = Math.round(cover.offsetHeight),
  translate,
  parallaxThreshold = 3;

function parallax() {
  if (window.scrollY < coverHeight) {
    translate = Math.round(window.scrollY / parallaxThreshold);
    window.requestAnimationFrame(function () {
      cover.style.transform = 'translateY(' + translate + 'px)';
    });
  }
}

parallax();

window.addEventListener('scroll', parallax, false);

window.addEventListener('resize', debounce(function () {
  coverHeight = Math.round(cover.offsetHeight);
}, 500));

function debounce(fn, wait) {
  var timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn.apply(this, arguments)
    }, (wait || 1));
  }
}

var util = UIkit.util;
window.addEventListener("scroll",function(){
  var totop = util.$("a.uk-totop");
  if(window.pageYOffset > window.innerHeight){
    util.addClass(totop, "uk-active");
  }
  else {
    util.removeClass(totop, "uk-active");
  }
},false);



// new js after typo

jQuery(document).ready(function(){

  // page header h1 append
  const h1 = $('.com-content-article__body > h1:first-of-type');
  //const h2 = $('.com-content-article__body > h1:first-of-type + h2');

  h1.detach().appendTo(".page-header > .container");
  //h2.detach().appendTo(".page-header > .container");

  // h1 center + redlines
  $('<span>').appendTo(".page-header > .container");
  $('<span>').insertBefore(".page-header .container h1");


});

