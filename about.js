// js0501
let swiper_about = new Swiper(".review-slider", {
    loop:true,

    grabCursor:true,

    spaceBetween: 20,

    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },


    breakpoints: {
        450: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

// accordion 👉about.fa-html5
document.querySelectorAll('.accordian-container .accordion').forEach(accordion => {
    accordion.onclick =()=>{
        accordion.classList.toggle('active');
    }
});;