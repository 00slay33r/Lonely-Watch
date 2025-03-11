const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks");
const navItems = document.querySelectorAll("#navlinks a"); // Sélectionne tous les liens du menu

// Ouvrir/Fermer le menu au clic sur le hamburger
hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("navlinks-active");
});

// Fermer le menu quand un lien est cliqué
navItems.forEach(link => {
    link.addEventListener("click", () => {
        navlinks.classList.remove("navlinks-active"); // Supprime la classe pour cacher le menu
    });
});
