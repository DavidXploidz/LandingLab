document.addEventListener("DOMContentLoaded", (event) => {

    // Submenu
    let subMenu = document.querySelector(".menu__sub");

    window.addEventListener("click", (e) => {
        if(e.target.closest(".toggle")){
            subMenu.style.display = "flex";
        }else{
            subMenu.style.display = "none";
        }
    });
    
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Header animations
    gsap.from('.header h1', {y: -80, duration: 1.5, opacity: 0, filter: "blur(5px)"})
    gsap.from('.header__text', {y: -40, duration: 1.5, opacity: 0, filter: "blur(5px)", delay: .375})
    gsap.from('.header button', {y: -20, duration: 1.5, opacity: 0, filter: "blur(5px)", delay: .725})
    gsap.from('.header__img', {y: 80, duration: 1.5, opacity: 0, filter: "blur(5px)"})

    // Nosotros timeline
    const nosotros_tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.nosotros',
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
        }
    });
    nosotros_tl.from('.nosotros h2', {y: -100, opacity: 0, filter: "blur(5px)"})
    nosotros_tl.from('.nosotros__image', {x: -200, opacity: 0, filter: "blur(5px)"})

    const items_ul = document.querySelectorAll('.nosotros__li')
    items_ul.forEach(item => {
        nosotros_tl.from(item, {y: 200, opacity: 0, filter: "blur(5px)"})
    })

    // Sliders timeline
    const slider_tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.proyectos',
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
        }
    })
    slider_tl.from('.proyectos h2', {scaleY: 1.2, y: -100, opacity: 0, filter: "blur(5px)"})
    const cards = document.querySelectorAll('.card');
    cards.forEach(function(card){
        slider_tl.from(card, { opacity: 0, filter: "blur(10px)"})
    })

    // Sliders
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
        breakpoints: {
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
        },
        mousewheel: {
            forceToAxis: true,
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            autoplayTimeLeft(s, time, progress) {
                progressCircle.style.setProperty("--progress", 1 - progress);
                progressContent.textContent = `${Math.ceil(time / 1000)}s`;
            }
        }
    });

    // Testimoniales timeline
    const test_tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.testimonios',
            start: 'top 70%',
            end: 'top',
            scrub: 1,
            markers: true,
        }
    })
    test_tl.from('.testimonios h2', {scaleY: 1.2, y: -100, opacity: 0, filter: "blur(5px)"})
    const cards_test = document.querySelectorAll('.testimonios__card');
    cards_test.forEach(function(card){
        test_tl.from(card, { opacity: 0, filter: "blur(10px)"})
    })
});

function scrollToSection(section){
    const targetElement = document.getElementById(`${section}`);
    if (targetElement) {
        gsap.to(window, { duration: 1, scrollTo: targetElement, ease: "power1.out" });
    }else{
        alert(`No se encontró la sección con el ID: ${section}`);
    }
}