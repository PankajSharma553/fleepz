// Navbar menu

const navbar = document.querySelector(".header_navbar");
const humburger = document.querySelector(".humburger");
const close = document.querySelector(".close_menu");

humburger.addEventListener("click", function () {
  navbar.classList.add("active");
});
close.addEventListener("click", function () {
  navbar.classList.remove("active");
});
// scroll header navigation

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 80) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }
  });
  
