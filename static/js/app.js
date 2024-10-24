const theme = localStorage.getItem("theme") || "";
const themeToggle = document.querySelector(".themeToggle");
const loginStatus = localStorage.getItem("loginStatus") || "";
const logInButton = document.querySelector(".logInButton");
const logOutButton = document.querySelector(".logOutButton");
const pingButtons = document.querySelectorAll(".pingButton");
const body = document.querySelector("body");

document.body.className = theme;
document.body.className = loginStatus;

themeToggle.addEventListener("click", () => {
    localStorage.setItem("theme", theme === "light" ? "" : "light")
    body.classList.toggle("light")
})

logInButton.addEventListener("click", () => {
    localStorage.setItem("loginStatus", loginStatus === "loggedIn" ? "" : "loggedIn")
    body.classList.toggle("loggedIn")
})

logOutButton.addEventListener("click", () => {
    localStorage.setItem("loginStatus", loginStatus === "loggedIn" ? "" : "loggedIn")
    body.classList.toggle("loggedIn")
})

pingButtons.forEach((pingButton) => {
    pingButton.addEventListener("click", () => {
        console.log(pingButton)
    });
});