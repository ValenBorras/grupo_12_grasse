// Ejecutando funciones
document.getElementById("buttonIconMostrar").addEventListener("click",mostrarBuscador);
document.getElementById("cover-ctn-search").addEventListener("click",ocultarBuscador);
document.getElementById("buttonIconOcultar").addEventListener("click",ocultarBuscador);  

// Declarando variables
const btn_mostrar = document.querySelector(".button-icon-mostrar")
const bars_search = document.querySelector(".contenedor-busqueda");
const cover_ctn_search = document.getElementById("cover-ctn-search");
const inputSearch = document.querySelector(".barra-busqueda-input");
const btn_ocultar = document.querySelector(".button-icon-ocultar");

// Funcion para mostrar el buscador
function mostrarBuscador() {
    bars_search.style.top = "113px";
    cover_ctn_search.style.display ="block"
    btn_mostrar.style.display = "none"
    btn_ocultar.style.display = "block"
}

// Función para ocultar el buscador
function ocultarBuscador() {
    bars_search.style.top = "-10px";
    cover_ctn_search.style.display ="none"
    btn_mostrar.style.display = "block"
    btn_ocultar.style.display = "none"
    inputSearch.value = "";
}