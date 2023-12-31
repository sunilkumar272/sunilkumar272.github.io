const menubar= document.querySelector(".menubar");
const navMenu= document.querySelector(".nav-menu");

menubar.addEventListener("click",() => {
    menubar.classList.toggle("active");
    navMenu.classList.toggle("active");

})

 document.querySelectorAll(".nav-link").forEach(n=> n.
 addEventListener("click", ()=>{
     menubar.classList.remove("active");
     navMenu.classList.remove("active");
 }))
