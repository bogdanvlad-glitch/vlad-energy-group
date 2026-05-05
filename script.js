const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("open");
  });
}

const pageName = document.body.dataset.page;
if (pageName) {
  document.querySelectorAll(".site-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    const isHome = pageName === "home" && href === "/";
    const normalized = href?.replaceAll("/", "").toLowerCase();
    if (isHome || normalized === pageName) {
      link.classList.add("active");
    }
  });
}
