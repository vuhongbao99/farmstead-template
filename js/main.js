// DARK AND LIGHT
document.getElementById("switchButton").onclick = function () {
  document.getElementById("myBody").classList.toggle("dark");
};

// PAGINATION
$(document).ready(function () {
  var pageItem = $(".pagination li").not(".prev,.next");
  var prev = $(".pagination li.prev");
  var next = $(".pagination li.next");

  pageItem.click(function () {
    pageItem.removeClass("active");
    $(this).not(".prev,.next").addClass("active");
  });

  next.click(function () {
    $("li.active").removeClass("active").next().addClass("active");
  });

  prev.click(function () {
    $("li.active").removeClass("active").prev().addClass("active");
  });
});

// STICKY SIDEBAR
$("document").ready(function () {
  let sidebar = $(".blog__right");
  let sidebar_content = $(".blog__righblog__righSideBar");

  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    let viewportHeight = $(this).height();
    let sidebarTop = sidebar.offset().top;
    let contentHeight = sidebar_content.height();
    if (scrollTop >= contentHeight - viewportHeightsidebarTop) {
      sidebar_content.css(
        "transform",
        `translateY{(contentHeight - viewportHeight + sidebarTop)}px)`
      );
      sidebar_content.css("position", "fixed");
    } else {
      sidebar_content.css("transform", "");
      sidebar_content.css("position", "");
    }
  });
});
document.getElementById("myBody").classList.toggle("dark");

(function () {
  // Back to Top - by CodyHouse.co
  var backTop = document.getElementsByClassName("js-cd-top")[0],
    offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
    offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    scrollDuration = 700,
    scrolling = false;

  if (backTop) {
    //update back to top visibility on scrolling
    window.addEventListener("scroll", function (event) {
      if (!scrolling) {
        scrolling = true;
        !window.requestAnimationFrame
          ? setTimeout(checkBackToTop, 250)
          : window.requestAnimationFrame(checkBackToTop);
      }
    });

    //smooth scroll to top
    backTop.addEventListener("click", function (event) {
      event.preventDefault();
      !window.requestAnimationFrame
        ? window.scrollTo(0, 0)
        : Util.scrollTo(0, scrollDuration);
    });
  }

  function checkBackToTop() {
    var windowTop = window.scrollY || document.documentElement.scrollTop;
    windowTop > offset
      ? Util.addClass(backTop, "cd-top--is-visible")
      : Util.removeClass(backTop, "cd-top--is-visible cd-top--fade-out");
    windowTop > offsetOpacity && Util.addClass(backTop, "cd-top--fade-out");
    scrolling = false;
  }
})();
