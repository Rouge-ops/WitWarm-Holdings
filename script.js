console.log("Javascript is working!");
const hamburger=document.getElementById("hamburger");
const navLinks=document.getElementById("navLinks");
hamburger.addEventListener("click", () => {if(navLinks.classList.contains("active")){navLinks.classList.remove("active");}else{navLinks.classList.add("active");}});