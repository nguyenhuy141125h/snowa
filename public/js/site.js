document.addEventListener("click", (event) => {
    const target = event.target;

    const homeNav = document.querySelector("#nav");
    const homeToggle = document.querySelector("#navToggle");
    if (
        homeNav?.classList.contains("open") &&
        !homeNav.contains(target) &&
        !homeToggle?.contains(target)
    ) {
        homeNav.classList.remove("open");
        homeToggle?.setAttribute("aria-expanded", "false");
    }

    document.querySelectorAll(".mobile-menu[open]").forEach((menu) => {
        if (!menu.contains(target)) menu.removeAttribute("open");
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    const homeNav = document.querySelector("#nav");
    const homeToggle = document.querySelector("#navToggle");
    homeNav?.classList.remove("open");
    homeToggle?.setAttribute("aria-expanded", "false");
    document.querySelectorAll(".mobile-menu[open]").forEach((menu) => {
        menu.removeAttribute("open");
    });
});
