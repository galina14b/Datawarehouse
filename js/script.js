//Menu =========

let hamburger = document.getElementById('jsMenuMobile');
let menuList = document.querySelector('.menu');
let hamburgSvg = document.querySelector('.menu-icon');
let crossSvg = document.querySelector('.menu-cross')


hamburger.addEventListener("click", function () {
  menuList.classList.toggle('menu-opened');
  hamburgSvg.classList.toggle('icon-closed');
  crossSvg.classList.toggle('menu-opened');


});

// Scrolling =========

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');
        console.log(id);
        console.log(document.querySelector(id));

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
)}

// Opacity ==========

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}