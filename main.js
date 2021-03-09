const menuIcon = document.querySelector(".hamburguer-menu");
const navBar = document.querySelector(".navbar");


menuIcon.addEventListener("click", () =>{
    navBar.classList.toggle("active")
})

