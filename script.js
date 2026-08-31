
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


const galleryImages = document.querySelectorAll(".gallery-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
galleryImages.forEach(image => {
    image.addEventListener("click",() => {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightbox.classList.add("active");
    });
});
lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("active");
});
lightboxClose.addEventListener("click", () => {
    if (event.target === lightbox)
    {lightbox.classList.remove("active");}
});