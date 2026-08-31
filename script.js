
console.log("Javascript is working!");
const hamburger=document.getElementById("hamburger");
const navLinks=document.getElementById("navLinks");
if(hamburger && navLinks) {
hamburger.addEventListener("click", () => {if(navLinks.classList.contains("active"))
    {navLinks.classList.remove("active");}
    else{navLinks.classList.add("active");}});}

const homeButton = document.querySelector(".home-button");
homeButton.classList.add("hidden");
let lastScrollY = window.scrollY;
let scrollUpDistance = 0;
window.addEventListener("scroll", () => {const currentScrollY = window.scrollY; 
    if (currentScrollY > lastScrollY) { scrollUpDistance = 0;
    homeButton.classList.add("hidden");
} else if (currentScrollY < lastScrollY) {scrollUpDistance += lastScrollY -currentScrollY;
    if (scrollUpDistance >= 30) {
        homeButton.classList.remove("hidden");}} 
        lastScrollY = currentScrollY;});
