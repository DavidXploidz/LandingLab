// Submenu
let subMenu = document.querySelector(".menu__sub");

window.addEventListener("click", (e) => {
    if(e.target.closest(".toggle")){
        subMenu.style.display = "flex";
    }else{
        subMenu.style.display = "none";
    }
});