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

    // Nosotros animations
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
 });

function scrollToSection(section){
    const targetElement = document.getElementById(`${section}`);
    if (targetElement) {
        gsap.to(window, { duration: 1, scrollTo: targetElement });
    }else{
        alert(`No se encontró la sección con el ID: ${section}`);
    }
}