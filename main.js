const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks");
const navItems = document.querySelectorAll("#navlinks a");


hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("navlinks-active");
});


navItems.forEach(link => {
    link.addEventListener("click", () => {
        navlinks.classList.remove("navlinks-active");
    });
});
