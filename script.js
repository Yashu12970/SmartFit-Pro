const menuIcon = document.getElementById("menu-icon");

const navbar = document.getElementById("navbar");

// Open and close mobile menu

menuIcon.addEventListener("click", () => {

    navbar.classList.toggle("active");

    menuIcon.classList.toggle("ri-menu-fill");

    menuIcon.classList.toggle("ri-close-line");

});

// Close menu after clicking a navigation link

const navLinks = document.querySelectorAll(".links a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuIcon.classList.add("ri-menu-fill");

        menuIcon.classList.remove("ri-close-line");

    });

});