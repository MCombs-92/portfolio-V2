const nav = document.querySelector(".nav");
const navmenu = document.querySelector(".nav-menu")

nav.addEventListener("click", function() {

    if(nav.classList.contains("active")) {
        nav.classList.remove("active");
        navmenu.classList.remove("active");
    }
    else {
        nav.classList.add("active");
        navmenu.classList.add("active");
    }

});

