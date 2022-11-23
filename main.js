$(window).on("load", function () {
  // preloader
  $(".preloader").fadeOut(7000);

  // Home section slideshow
  let slideIndex = $(".slide.active").index();
  const slideLen = $(".slide").length;

  function slideShow() {
    $(".slide").removeClass("active").eq(slideIndex).addClass("active");
    if (slideIndex == slideLen - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    setTimeout(slideShow, 5000);
  }
  slideShow();
});

// people filter
$(document).ready(function () {
  // nav toggle
  $(".hamburger-btn").click(function () {
    $(".header .nav").slideToggle();
  });
  $(".header .nav a").click(function () {
    if ($(window).width() < 768) {
      $(".header .nav").slideToggle();
    }
  });

  // fixed header
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  });

  // scrollit
  $.scrollIt({
    topOffset: -50,
  });

  peopleFilter($(".filter-btn.active").attr("data-target"));
  $(".filter-btn").click(function () {
    if (!$(this).hasClass("active")) {
      peopleFilter($(this).attr("data-target"));
    }
  });
  function peopleFilter(target) {
    $(".filter-btn").removeClass("active");
    $(".filter-btn[data-target=" + target + "]").addClass("active");
    $(".people-item").hide();
    $(".people-item[data-category=" + target + "]").fadeIn();
  }
  // galery popup
  const wHeight = $(window).height();
  $(".gallery-popup .gp-img").css("max-height", wHeight + "px");
  let itemIndex = 0;
  const totalGaleryItems = $(".gellery-item").length;

  $(".gellery-item").click(function () {
    itemIndex = $(this).index();
    $(".gallery-popup").addClass("open");
    $(".gallery-popup .gp-img").hide();
    gpSlideShow();
  });

  $(".gp-controls .next").click(function () {
    if (itemIndex == totalGaleryItems - 1) {
      itemIndex = 0;
    } else {
      itemIndex++;
    }
    $(".gallery-popup .gp-img").fadeOut(function () {
      gpSlideShow();
    });
  });

  $(".gp-controls .prev").click(function () {
    if (itemIndex === 0) {
      itemIndex = totalGaleryItems - 1;
    } else {
      itemIndex--;
    }
    $(".gallery-popup .gp-img").fadeOut(function () {
      gpSlideShow();
    });
  });

  function gpSlideShow() {
    const imgSrc = $(".gellery-item")
      .eq(itemIndex)
      .find("img")
      .attr("data-large");
    $(".gallery-popup .gp-img").fadeIn().attr("src", imgSrc);
    $(".gp-counter").text(itemIndex + 1 + "/" + totalGaleryItems);
  }

  // close  galery
  $(".gp-close").click(function () {
    $(".gallery-popup").removeClass("open");
  });

  // hide gallery
  $(".gallery-popup").click(function (event) {
    if ($(event.target).hasClass("open")) {
      $(".gallery-popup").removeClass("open");
    }
  });
});
