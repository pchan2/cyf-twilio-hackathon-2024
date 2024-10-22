const theme = localStorage.getItem("theme") || "";
const themeToggle = document.querySelector(".themeToggle");
const body = document.querySelector("body");

document.body.className = theme;

themeToggle.addEventListener("click", () => {  
    localStorage.setItem("theme", theme === "light" ? "" : "light")
    body.classList.toggle("light")
})