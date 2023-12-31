// DARK AND LIGHT
document.getElementById("switchButton").onclick = function () {
  const body = document.getElementById("myBody");
  body.classList.toggle("dark");

  // Lưu trạng thái theme vào Local Storage
  const isDarkTheme = body.classList.contains("dark");
  localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
};

document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.getElementById("myBody").classList.add("dark");
  }
});

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
    $('li.active').removeClass('active').next().addClass('active');
  });

  prev.click(function () {
    $('li.active').removeClass('active').prev().addClass('active');
  });
});

// STICKY SIDEBAR
$('document').ready(function () {
  let sidebar = $('.blog__right');
  let sidebar_content = $('.blog__righblog__righSideBar')

  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    let viewportHeight = $(this).height();
    let sidebarTop = sidebar.offset().top;
    let contentHeight = sidebar_content.height();
    if (scrollTop >= contentHeight - viewportHeightsidebarTop) {
      sidebar_content.css('transform', `translateY{(contentHeight - viewportHeight + sidebarTop)}px)`);
      sidebar_content.css('position', 'fixed');
    }
    else {
      sidebar_content.css('transform', '');
      sidebar_content.css('position', '');
    }
  });
});