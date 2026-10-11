const nav_btn =document.querySelector(".nav_icon_btn");

const mobile_nav = document.querySelector(".mobile_nav_bar");


nav_btn.addEventListener("click" , ()=>{
    mobile_nav.classList.toggle("active");
})