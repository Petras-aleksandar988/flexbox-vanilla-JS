const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("ul")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navLinks.classList.toggle("active")
})

document.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
     hamburger.classList.remove("active");
     navLinks.classList.remove("active");
}))