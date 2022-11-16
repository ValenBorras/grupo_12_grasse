// validaciones de register

const createProductForm = document.querySelector(".createProductForm")
const campoNombre = document.querySelector(".campoNombreProd")
const errorNombre = document.querySelector(".errorNombreProd")
const campoDescripcion = document.querySelector(".campoDescripcion")
const errorDescripcion = document.querySelector(".errorDescripcion");
const campoImagen = document.querySelector(".campoImagen");
const errorImagen = document.querySelector(".errorImagen");
const campoCategoriaCrema = document.querySelector("#category-crema");
const campoCategoriaPerfume = document.querySelector("#category-perfume");
const campoCategoriaKit = document.querySelector("#category-kit");
const errorCategoria = document.querySelector(".errorCategoria")
const campoPresentacion50 = document.querySelector("#presentation-50ml")
const campoPresentacion85 = document.querySelector("#presentation-85g")
const campoPresentacion100 = document.querySelector("#presentation-100ml")
const campoPresentacion280 = document.querySelector("#presentation-280g")
const campoPresentacion50y85 = document.querySelector("#presentation-50ml-85g")
const campoPresentacion100y280 = document.querySelector("#presentation-100ml-280g")
const errorPresentacion = document.querySelector(".errorPresentacion")
const campoPrecio = document.querySelector(".campoPrecio")
const errorPrecio = document.querySelector(".errorPrecio")


campoNombre.addEventListener("focus",()=> {
    if(campoNombre.value.length > 0) {
        errorNombre.innerText = ""
    } else {
        errorNombre.innerText = "Ingresa el nombre del producto"
    errorNombre.style.color = "orange"
    }
})

campoNombre.addEventListener("change",()=> {
    errorNombre.innerText = ""
    errorNombre.style.color = "orange"
})

campoDescripcion.addEventListener("focus",()=> {
    if(campoDescripcion.value.length > 0) {
        errorDescripcion.innerText = ""
    } else {
        errorDescripcion.innerText = "Ingresa la descripción del producto"
        errorDescripcion.style.color = "orange"
    }
    
})

campoDescripcion.addEventListener("change",()=> {
    errorDescripcion.innerText = ""
    errorDescripcion.style.color = "orange"
})

campoImagen.addEventListener("change",()=> {
    if(campoImagen.value != "") {
        document.getElementById("checked").style.display = "flex"
        errorImagen.innerText = ""
        errorImagen.style.color = "orange"
    }
})

campoCategoriaCrema.addEventListener("focus",()=> {
    errorCategoria.innerText = ""
    campoCategoriaCrema.checked = true
})
campoCategoriaPerfume.addEventListener("focus",()=> {
    errorCategoria.innerText = ""
    campoCategoriaPerfume.checked = true
})
campoCategoriaKit.addEventListener("focus",()=> {
    errorCategoria.innerText = ""
    campoCategoriaKit.checked = true
})

campoPresentacion50.addEventListener("focus",() => {
    errorPresentacion.innerText = ""
    campoPresentacion50.checked = true
})

campoPresentacion85.addEventListener("focus",() => {
    errorPresentacion.innerText = ""
    campoPresentacion85.checked = true
})
campoPresentacion100.addEventListener("focus",() => {
    errorPresentacion.innerText = ""
    campoPresentacion100.checked = true
})
campoPresentacion280.addEventListener("focus",() => {
    errorPresentacion.innerText = ""
    campoPresentacion280.checked = true
})
campoPresentacion50y85.addEventListener("focus",() => {
    errorPresentacion.innerText = ""
    campoPresentacion50y85.checked = true
})
campoPresentacion100y280.addEventListener("focus",() => {
    errorPresentacion.innerText = ""
    campoPresentacion100y280.checked = true
})

campoPrecio.addEventListener("focus", ()=> {
    if(campoPrecio.value.length > 0) {
        errorPrecio.innerText = ""
    } else {
        errorPrecio.innerText = "Ingresa el precio del producto"
    }
    
})
campoPrecio.addEventListener("change", ()=> {
    errorPrecio.innerText = ""
})

////// SUBMIT

createProductForm.addEventListener("submit",(e)=> {
    if(campoNombre.value.length > 0) {
        errorNombre.innerText = ""
    } else {
        errorNombre.innerText = "Debes ingresar un nombre de producto"
        errorNombre.style.color = "tomato"
        e.preventDefault()
    }
    if(campoDescripcion.value.length > 0) {
        errorDescripcion.innerText = ""
    } else {
        errorDescripcion.innerText = "Debes ingresar una descripción de producto"
        errorDescripcion.style.color = "tomato"
        e.preventDefault()
    }
    if(campoImagen.value != "") {
        document.getElementById("checked").style.display = "flex"
        errorImagen.innerText = ""
    } else {
        e.preventDefault()
        errorImagen.innerText = "Debes subir una imagen de producto"
        errorImagen.style.color = "tomato"
    }
    if(campoCategoriaCrema.checked != true && campoCategoriaPerfume.checked != true && campoCategoriaKit.checked != true) {
        e.preventDefault()
        errorCategoria.innerText = "Debes elegir una categoria de producto"
        errorCategoria.style.color = "tomato"
    }
    if(campoPresentacion50.checked != true&&campoPresentacion85.checked != true&&campoPresentacion100.checked != true&&campoPresentacion280.checked != true&&campoPresentacion50y85.checked != true&&campoPresentacion100y280.checked != true) {
        e.preventDefault()
        errorPresentacion.innerText = "Debes elegir una presentación de producto"
        errorPresentacion.style.color = "tomato"
    }
    if(campoPrecio.value == "") {
        e.preventDefault()
        errorPrecio.innerText = "Debes elegir un precio de producto"
        errorPrecio.style.color = "tomato"
    }
})




