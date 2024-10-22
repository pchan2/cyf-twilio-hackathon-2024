const mode = localStorage.getItem("theme") || "";
const themeToggle = document.querySelector(".themeToggle");
const body = document.querySelector("body");

document.body.className = mode;

themeToggle.addEventListener("click", () => {  
    localStorage.setItem("theme", mode === "light" ? "" : "light")
    body.classList.toggle("light")
})