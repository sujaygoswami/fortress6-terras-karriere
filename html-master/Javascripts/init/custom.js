(function($){
    
  const h1 = $('.com-content-article__body > h1:first-of-type');
  //const h2 = $('.com-content-article__body > h1:first-of-type + h2');

  h1.detach().appendTo(".page-header > .container");
  //h2.detach().appendTo(".page-header > .container");

  // h1 center + redlines
  $( '<span>' ).insertBefore(".page-header .container h1");
  $( '<span>' ).appendTo(".page-header > .container");
  
}(jQuery));


!(function (e) {
  var t = e(".heroslider-home");
  t.on("init", function () {
      t.addClass("loaded");
  }),
      t.on("afterChange", function (n, o, r) {
          !(function (n) {
              let o = e(".slick-slide").eq(n).find("video");
              o.length &&
                  (o[0].play(),
                  t.slick("slickPause"),
                  (o[0].onended = function () {
                      t.slick("slickPlay"), t.slick("slickNext"), (o[0].currentTime = 1);
                  }));
          })(r);
      }),
      t.on("beforeChange", function (t, n, o) {
          !(function (t) {
              let n = e(".slick-slide").eq(t).find("video");
              n.length && (n[0].pause(), (n[0].currentTime = 1));
          })(n);
      }),
      t.slick({ autoplay: !0, arrows: !1, dots: !1, focusOnSelect: !0, swipeToSlide: !0, slidesToShow: 1, autoplaySpeed: 6e3, fade: !0, infinite: !0, speed: 2e3, pauseOnFocus: !1, pauseOnHover: !1 });
  var n = e(".heroslider");
  n.on("init", function () {
      n.addClass("loaded");
  }),
      n.slick({ autoplay: !0, adaptiveHeight: !1, focusOnSelect: !0, swipeToSlide: !0, slidesToShow: 1, autoplaySpeed: 2e3, fade: !0, infinite: !0, speed: 2e3, pauseOnFocus: !1, pauseOnHover: !1, dots: !1, arrows: !1 });
  var o = e(".big-teaser-slider");
  o.on("init", function () {
      o.addClass("loaded");
  }),
      o.slick({ autoplay: !1, adaptiveHeight: !0, focusOnSelect: !0, swipeToSlide: !0, slidesToShow: 1, autoplaySpeed: 2e3, fade: !0, infinite: !0, speed: 800, pauseOnFocus: !1, pauseOnHover: !1, dots: !1, arrows: !0 });
  var r = e(".hero-item-image video");
  e.each(r, function () {
      this.controls = !1;
  }),
      e("#wachstum").click(function () {
          e(".wrapper-wachstum").toggleClass("show");
      }),
      e("#btn-play").click(function () {
          e("#movie").get(0).play(), e("#btn-play").hide(1e3);
      }),
      e(".js-fo-close").click(function () {
          var t = e("#movie").get(0);
          t.pause(), (t.currentTime = 0), e("#btn-play").show();
      });
})(jQuery);
const observerOptions = { root: null, rootMargin: "0% 0% -20% 0%", threshold: 0 };
let observerCallback = (e, t) => {
      e.forEach((e) => {
          e.isIntersecting && e.target.classList.add("active");
      });
  },
  observer = new IntersectionObserver(observerCallback, observerOptions),
  observerTargets = document.querySelectorAll(".checkview");
observerTargets.forEach((e) => {
  observer.observe(e);
});
let offset = 60,
  header = ".header";
function showContent(e) {
  document.getElementById(e).classList.add("active-marker"), document.getElementById(e + "-content").classList.add("active");
}
function closeWindow(e) {
  document.getElementById(e).classList.remove("active-marker"), document.getElementById(e + "-content").classList.remove("active");
}
$(window).scroll(function () {
  $(this).scrollTop() > offset ? $(header).addClass("scrolled") : $(header).removeClass("scrolled");
}),
  $(".red-headline h2:first-of-type").wrap("<div class='content-headline'></div>"),
  $(".red-headline h3:first-of-type").wrap("<div class='content-headline'></div>"),
  $("<span>").appendTo(".content-headline"),
  $(
      ".com-content-article__body > h3, .standortkarte-outer h3, .fields-bereich-unten .container h3, .wachstum h1:first-of-type, .g-fields h3, body:not(.is-home) .fields-container .section :not(.heading) > h3:not(.no-headline):first-of-type, body:not(.is-home) .fields section :not(.heading) > h3:not(.no-headline):first-of-type"
  ).wrap("<div class='content-headline-us'></div>"),
  $("<span>").appendTo(".content-headline-us"),
  $("<span>").prependTo(".content-headline-us"),
  $("#hero-site .hero-container").parents(".site-container").find(".main").addClass("space"),
  $(".site-container #hero-site .hero-container").parents(".site-wrapper").find(".header").addClass("trans"),
  $(".btn.btn-primary").addClass("uk-animation-slide-bottom-small"),
  $("body.site.is-home .hero-container .second-layer").delay(400).animate({ marginTop: "+=0px", opacity: ".5" }, 2e3),
  $("body.site .hero-container .third-layer").delay(200).animate({ marginTop: "+=0px", opacity: "1" }, 800);
var util = UIkit.util;
window.addEventListener(
  "scroll",
  function () {
      var e = util.$("a.uk-totop");
      window.pageYOffset > window.innerHeight ? util.addClass(e, "uk-active") : util.removeClass(e, "uk-active");
  },
  !1
),
  UIkit.icon(".slick-prev", { icon: "chevron-left", ratio: 1.5 }),
  UIkit.icon(".slick-next", { icon: "chevron-right", ratio: 1.5 }),
  UIkit.icon(".icon-chevron-left", { icon: "chevron-left", ratio: 1.1 }),
  UIkit.icon(".icon-chevron-right", { icon: "chevron-right", ratio: 1.1 }),
  UIkit.icon(".js-spoiler-title", { icon: "plus", ratio: 1.2 });
const formBewerbung = document.querySelector("#cf7");
(prozessFormBewerbung = function () {
  const e = formBewerbung.querySelector('input[name="cf[einsatzbereich]"]'),
      t = formBewerbung.querySelector('input[name="cf[ausbildung]"]'),
      n = formBewerbung.querySelector('input[name="cf[berufserfahrung]"]'),
      o = formBewerbung.querySelector('input[name="cf[fuehrerschein]"]'),
      r = formBewerbung.querySelectorAll('input[name="t-ausbildung"]'),
      i = formBewerbung.querySelectorAll('input[name="t-berufserfahrung"]'),
      a = formBewerbung.querySelectorAll('input[name="t-fuehrerschein"]'),
      s = formBewerbung.querySelector("#btn-page-1-forward"),
      c = formBewerbung.querySelector("#btn-page-2-back"),
      l = formBewerbung.querySelector("#btn-page-2-forward"),
      d = formBewerbung.querySelector(".cf-control-group.page1"),
      u = formBewerbung.querySelector(".cf-control-group.page2"),
      f = formBewerbung.querySelectorAll(".cf-control-group:not(.form-page)");
  function h() {
      d.classList.remove("active"),
          f.forEach((e) => {
              e.classList.remove("active");
          }),
          u.classList.add("active");
  }
  function p(e) {
      let t = !0;
      return (
          e.forEach((e) => {
              e.checkValidity() || (e.reportValidity(), (t = !1));
          }),
          t
      );
  }
  r.forEach((e) => {
      e.addEventListener("change", (e) => {
          e.target.checked && (t.value = e.target.value);
      });
  }),
      i.forEach((e) => {
          e.addEventListener("change", (e) => {
              e.target.checked && (n.value = e.target.value);
          });
      }),
      a.forEach((e) => {
          e.addEventListener("change", (e) => {
              e.target.checked && (o.value = e.target.value);
          });
      }),
      s.addEventListener("click", (e) => {
          e.preventDefault(), p(r) && p(i) && h();
      }),
      c.addEventListener("click", (e) => {
          e.preventDefault(),
              u.classList.remove("active"),
              f.forEach((e) => {
                  e.classList.remove("active");
              }),
              d.classList.add("active");
      }),
      l.addEventListener("click", (e) => {
          e.preventDefault(),
              p(a) &&
                  (d.classList.remove("active"),
                  u.classList.remove("active"),
                  f.forEach((e) => {
                      e.classList.add("active");
                  }));
      }),
      e.value.includes("Ausbildung / Studium") && ((i[0].checked = !0), (r[0].checked = !0), h());
}),
  formBewerbung && prozessFormBewerbung();
