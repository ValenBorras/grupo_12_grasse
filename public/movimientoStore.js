const todos = document.querySelector(".caja-tienda");
const btn_todos = document.querySelector(".todos-store")
const btn_cremas = document.querySelector(".cremas-store");
const btn_perfumes = document.querySelector(".perfumes-store");
const btn_kits = document.querySelector(".kits-store");

btn_cremas.addEventListener("click", function(e) {
    e.preventDefault();

    todos.style.marginLeft = "-25%";
    todos.style.height = "30vw";
});

btn_perfumes.addEventListener("click", function(e) {
    e.preventDefault();

    todos.style.marginLeft = "-50%";
    todos.style.height = "30vw"
});

btn_kits.addEventListener("click", function(e) {
    e.preventDefault();

    todos.style.marginLeft = "-75%";
    todos.style.height = "30vw"
});

btn_todos.addEventListener("click", function(e) {
    e.preventDefault();

    todos.style.marginLeft = "0%";
    todos.style.height = "70vw"
});