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
    gsap.from('.header__bg', {duration: 1, opacity: 0.8, scale: 0.8, filter: "blur(5px)"})
    gsap.from('.header__bulb', {duration: 2, opacity: 0.7, filter: "blur(1px)", repeat: 20, yoyo: true, delay: -1})
    gsap.from('.header__person', {y: 50, duration: 3, repeat: 20, yoyo: true, delay: -1})


    // Nosotros timeline
    const nosotros_tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.nosotros',
            start: 'top 60%',
            end: 'top 0%',
            scrub: 1,
        }
    });
    nosotros_tl.from('.nosotros h2', {y: -100, opacity: 0, filter: "blur(5px)"})
    nosotros_tl.from('.nosotros__image', {opacity: 0, filter: "blur(5px)"})

    const items_ul = document.querySelectorAll('.nosotros__li')
    items_ul.forEach(item => {
        nosotros_tl.from(item, {y: 200, opacity: 0, filter: "blur(5px)"})
    })
    // Fondo
    gsap.from('.nosotros__bg', {
        rotation: 10, scale: 0.9, duration: 5, filter: "blur(1px)", repeat: 20, yoyo: true, delay: -1,
        scrollTrigger: {
            trigger: '.nosotros__content',
            start: 'top 60%',
            end: 'top 0%',
        }
    })
    gsap.from('.nosotros__user', {
        scale: 0.85, duration: 3, repeat: 20, yoyo: true, delay: -1,
        scrollTrigger: {
            trigger: '.nosotros__content',
            start: 'top 60%',
            end: 'top 0%',
        }
    })

    // Services Timeline
    gsap.from('.servicios h2', {
            scrollTrigger: {
                trigger: ".servicios",
                start: "top 50%",
                toggleActions: "play pause play reverse",
            },
            y: -100, 
            opacity: 0, 
            filter: "blur(5px)"
        }
    );

    const servicios = gsap.utils.toArray(".servicios__item");

    servicios.forEach((servicio, i) => {
        gsap.from(servicio, {
            scrollTrigger: {
                trigger: servicio,
                start: "top 50%",
                toggleActions: "play pause play reverse",
            },
            x: 200,
            opacity: 0,
            filter: "blur(10px)",
        });
    });

    // Sliders timeline
    const slider_tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.proyectos',
            start: 'top 60%',
            end: 'top 0%',
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
            start: 'top 50%',
            end: 'top 0%',
            scrub: 1,
        }
    })
    test_tl.from('.testimonios h2', {scaleY: 1.2, y: -100, opacity: 0, filter: "blur(5px)"})
    test_tl.from('.card-1', {y: 100, opacity: 0})
    test_tl.from('.card-2', {x: 100, opacity: 0})
    test_tl.from('.card-3', {x: -100, opacity: 0})
    test_tl.from('.card-5', {y: 100, opacity: 0})
    test_tl.from('.card-4', {y: 100, opacity: 0})

});

function scrollToSection(section){
    const targetElement = document.getElementById(`${section}`);
    if (targetElement) {
        gsap.to(window, { duration: 1, scrollTo: targetElement, ease: "power1.out" });
    }else{
        alert(`No se encontró la sección con el ID: ${section}`);
    }
}