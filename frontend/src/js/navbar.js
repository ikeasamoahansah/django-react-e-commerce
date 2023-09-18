const btn = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
})