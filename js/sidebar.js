const hamBurger = document.querySelector("#toggle-btn");
hamBurger.addEventListener("click", function () {
    let aside = document.querySelector("#sidebar");
    const icon = document.querySelector("#flechita");
    aside.classList.toggle("expand");
    // icon.ClassList.toggle('fa-arrow-right');
    // icon.classList.toggle('fa-arrow-right');
});
const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);