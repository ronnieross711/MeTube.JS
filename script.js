var menuIcon = document.querySelector("menu-icon")
var sidbar = document.querySelector("sidebar")

menuIcon.onclick = function () {
    sidbar.classList.toggle("small-sidebar")
}

