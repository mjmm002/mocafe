//NAVIGATION TOGGLE
let menuToggle = document.querySelector ("#menuToggle");
let header = document.querySelector ("header");

menuToggle.onclick = function(){
    header.classList.toggle ('active');
}

document.onclick = function(clickEvent){
    if (clickEvent.target.id !== 'menuToggle'){
        header.classList.remove ('active');
    }
}



//TESTIMONIALS SECTION

var swiper = new Swiper(".slideContent", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });