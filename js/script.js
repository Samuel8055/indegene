/*---------------- Dropdown Menu ----------------*/

let menu_icon = document.querySelector(".menu-link");

menu_icon.addEventListener("click", () => {
  let navbar = document.querySelector(".responsive-nav");
  let border = document.querySelector(".border");
  if (navbar.style.height === "350px") {
    navbar.style.height = "0px";
    border.style.backgroundColor = "#fff";
  } else {
    navbar.style.height = "350px";
    border.style.backgroundColor = "#ccc";
  }
});

/*-------------- Testimonies Slider ---------------*/

$(document).on("ready", function () {
  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  });
});

if ($(window).width() < 729) {
  $(".regular").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
} else if ($(window).width() < 1070) {
  $(".regular").slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  });
}
