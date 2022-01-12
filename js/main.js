//  start Animation
AOS.init({
  offset: 100,
  once: true,
  duration: 3000,
  easing: "slide",
});
//  start jQuery
(function ($) {
  /*******************
    start conter break
  *******************/
    $(window).on('load', function () {
      $(".loader").fadeOut();
      $("#preloder").delay(500).fadeOut("slow");
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.back-to-top').css('display', 'flex')
    } else {
        $('.back-to-top').css('display', 'none')
    }
  });
  $('.back-to-top').click(function () {
      $('html, body').animate({scrollTop: 0}, 500);
      return false;
  });
    
  /*******************
   start navbar
   *******************/
  $(window).scroll(function () {
    // start nav fixed
    let wne = $(window).scrollTop();
    if (wne >= 190) {
      $("nav").addClass("nav-fixed-top");
    } else {
      $("nav").removeClass("nav-fixed-top");
    }
    if (wne >= 400) {
      $("nav").addClass("navbar-scroll");
    } else {
      $("nav").removeClass("navbar-scroll");
    }

    // start nav li add class active
    var scrollDistance = $(window).scrollTop();
    // Assign active class to nav links while scolling
    $(".page-section").each(function (i) {
      if ($(this).position().top - 80 < scrollDistance) {
        $("nav li.active").removeClass("active");
        $("nav li").eq(i).addClass("active");
      }
    });
  });
  // start menu nav click
  $(".nav_menu").click(function (event) {
    $(".nav-list .list").toggleClass("show");
  });
  // Close the dropdown if the user 
  // clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".nav_menu")) {
      let dropdowns = $(".nav-list .list");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  /*******************
   start header
   *******************/
  var carousel = function () {
    $(".header_slider").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 0,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: true,
      autoplayHoverPause: false,
      items: 1,
      navText: [
        "<span class='ion-md-arrow-back'></span>",
        "<span class='ion-chevron-right'></span>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        66600: {
          items: 1,
        },
        100000: {
          items: 1,
        },
      },
    });
  };
  carousel();
  /*******************
   start conter about
   *******************/
  let numScroll;
  let flag1 = 0;
  $(window).scroll(function () {
    let _1vh = Math.round(window.innerHeight);
    let aboutToTop = $(".cont_about").offset().top - _1vh + 48;
    numScroll = $(document).scrollTop();
    if (flag1 == 0) {
      if (numScroll >= aboutToTop) {
        flag1 = 1;
        // start contar one
        let aboutCount = document.querySelector(".myProject");
        let cont = 0;
        let setIntervalAbout = setInterval(() => {
          aboutCount.innerText = cont;
          cont++;
          if (cont >= 21) {
            clearInterval(setIntervalAbout);
          }
        }, 150);
      }
    }
  });
  /*******************
    start conter break
  *******************/
  let NumScroll;
  let flag = 0
  $(window).scroll(function () {
    // start section Counter
    let _1vh = Math.round(window.innerHeight);
    // Calculate the distance from the top to the div Counter = ( (document.scrollTop) - (window.innerHeight = 100vh) + (div.counter-row paddingTop = 48px) = srart counter )
    let veiwSectionTop = $(".counter-row").offset().top - _1vh + 48;

    NumScroll = $(document).scrollTop();
    if (flag == 0) {
      if (NumScroll >= veiwSectionTop) {
        flag = 1;
        // start contar one
        let count1 = document.querySelector(".count1");
        let contar = 0;
        let setInterval1 = setInterval(() => {
          count1.innerText = contar;
          contar++;
          if (contar >= 21) {
            clearInterval(setInterval1);
          }
        }, 100);
        // start contar tow
        let count2 = document.querySelector(".count2");
        let contar2 = 0;
        let setInterval2 = setInterval(() => {
          count2.innerText = contar2;
          contar2++;
          if (contar2 >= 81) {
            clearInterval(setInterval2);
          }
        }, 40);
        // start contar three
        let count3 = document.querySelector(".count3");
        let contar3 = 50;
        let setInterval3 = setInterval(() => {
          count3.innerText = contar3;
          contar3++;
          if (contar3 >= 151) {
            clearInterval(setInterval3);
          }
        }, 40);
        // start contar four
        let count4 = document.querySelector(".count4");
        let contar4 = 400;
        let setInterval4 = setInterval(() => {
          count4.innerText = contar4;
          contar4++;
          if (contar4 >= 501) {
            clearInterval(setInterval4);
          }
        }, 40);
      }
    }
  });
})(jQuery);
