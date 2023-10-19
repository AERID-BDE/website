const pathname = window.location.pathname;

const navbar = document.getElementById("navbar");
const navItems = navbar.getElementsByClassName("nav-item");

for (let i = 0; i < navItems.length; i++) {
    let href = navItems[i].getAttribute("href");

    if (href === pathname) {
        navItems[i].classList.add("active");
    }
}

console.log(pathname)