const formularioEditProduct = document.querySelector(".editProductForm")
const campoNombre = document.querySelector(".campoNombreProd")
const errorNombre = document.querySelector(".errorCampoNombreProd")
const campoDescripcion = document.querySelector(".campoDescriptionProd")
const errorDescripcion =  document.querySelector(".errorCampoDescriptionProd")
const campoImg = document.querySelector(".campoImgProd")
const errorImg = document.querySelector(".errorImg")
const campoPrecio = document.querySelector(".campoPrecioProd")
const errorPrecio = document.querySelector(".errorPrecioProd")

campoNombre.addEventListener("focus",()=> {
    if(campoNombre.value == "") {
        errorNombre.innerText = "Escribe el nuevo nombre del producto"
        errorNombre.style.color = "orange"
    } else {
        errorNombre.innerText = ""
    }
})
campoNombre.addEventListener("change",()=> {
    if(campoNombre.value == "") {
        errorNombre.innerText = "Escribe el nuevo nombre del producto"
        errorNombre.style.color = "tomato"
    } else {
        errorNombre.innerText = ""
    }
})

campoDescripcion.addEventListener("focus",()=> {
    if(campoDescripcion.value == "") {
        errorDescripcion.innerText = "Escribe la nueva descripción del producto"
        errorDescripcion.style.color = "orange"
    } else {
        errorDescripcion.innerText = ""
    }
})
campoDescripcion.addEventListener("change",()=> {
    if(campoDescripcion.value == "") {
        errorDescripcion.innerText = "Escribe la nueva descripción del producto"
        errorDescripcion.style.color = "tomato"
    } else {
        errorDescripcion.innerText = ""
    }
})

campoImg.addEventListener("change",()=> {
    if(campoImg.value != "") {
        document.getElementById("checked").style.display = "flex"
        errorImg.innerText = ""
        errorImg.style.color = "orange"
    }
})

campoPrecio.addEventListener("focus",()=> {
    if(campoPrecio.value == "") {
        errorPrecio.innerText = "Escribe el nuevo precio del producto"
        errorPrecio.style.color = "orange"
    } else {
        errorPrecio.innerText = ""
    }
})
campoPrecio.addEventListener("change",()=> {
    if(campoPrecio.value == "") {
        errorPrecio.innerText = "Escribe el nuevo precio del producto"
        errorPrecio.style.color = "tomato"
    } else {
        errorPrecio.innerText = ""
    }
})

//////// SUBMIT

formularioEditProduct.addEventListener("submit",(e)=> {
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
    if(campoImg.value != "") {
        document.getElementById("checked").style.display = "flex"
        errorImg.innerText = ""
    } else {
        errorImg.innerText = "(Opcional) subir una imagen de producto"
        errorImg.style.color = "orange"
    }
    
    if(campoPrecio.value == "") {
        e.preventDefault()
        errorPrecio.innerText = "Debes elegir un precio de producto"
        errorPrecio.style.color = "tomato"
    }
})
