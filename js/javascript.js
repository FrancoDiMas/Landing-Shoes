// Making the intro animation after document is ready
const divForPPointed = document.getElementById("div_for_p");
const divCircle = document.getElementById("div_circle");
const divProducts = document.getElementById("div_to_products");
const sectionMainPointed = document.getElementById("section_main");

// Functions
document.addEventListener("DOMContentLoaded", function(){

    const introAnimation = document.getElementById("infinity_h1");

    introAnimation.classList.add("intro_home");

    setTimeout(function(){
        introAnimation.classList.add("intro_home_desapear");
    }, 3000 );

    setTimeout(function(){
        divForPPointed.classList.add("div_appair");
        divCircle.classList.add("div_appair");
        divProducts.classList.add("div_appair_flex");
        sectionMainPointed.style.alignItems = 'start'
    }, 3000 );

    setTimeout(function(){
        divForPPointed.style.opacity = '1';
        divCircle.style.opacity = '1';
        divProducts.style.opacity = '1';
    }, 3500 );

})

// Menu configuration
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('#navbar-id');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-menu');
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('navbar-active');
}

