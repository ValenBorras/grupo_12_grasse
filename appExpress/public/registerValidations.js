// validaciones de register

const registerForm = document.querySelector(".register-form")
const campoNombre = document.querySelector(".campoNombre")
const errorNombre = document.querySelector(".errorNombre")
const campoApellido = document.querySelector(".campoApellido")
const errorApellido = document.querySelector(".errorApellido")
const campoEmail = document.querySelector(".campoEmail")
const errorEmail = document.querySelector(".errorEmail")
const campoContrasena = document.querySelector(".campoContrasena")
const errorContrasena = document.querySelector(".errorContrasena")
const campoFile = document.querySelector(".campoFile")
const errorFile = document.querySelector(".errorFile")

campoNombre.addEventListener("focus",()=> {
    errorNombre.innerText = "Ingresa tu primer nombre"
    errorNombre.style.color = "orange"
})

campoNombre.addEventListener("change",()=> {
    if(campoNombre.value == "") {
        errorNombre.innerText = "Campo obligatorio"
        errorNombre.style.color = "tomato"
    } else {
        errorNombre.innerText = ""
    }
})

campoApellido.addEventListener("focus",()=> {
    errorApellido.innerText = "Ingresa tu primer apellido"
    errorApellido.style.color = "orange"
})

campoApellido.addEventListener("change",()=> {
    if(campoApellido.value == "") {
        errorApellido.innerText = "Campo obligatorio"
        errorApellido.style.color = "tomato"
    } else {
        errorApellido.innerText = ""
    }
    
})

campoEmail.addEventListener("focus",()=> {
    errorEmail.innerText = "Ingresa un correo electronico valido (example@example.com)"
    errorEmail.style.color = "orange"
})

campoEmail.addEventListener("change",()=> {
    if (campoEmail.value.includes("@") && campoEmail.value.includes(".com") || campoEmail.value.includes("@") && campoEmail.value.includes(".co") || campoEmail.value.includes("@") && campoEmail.value.includes(".com.co") ) {
        errorEmail.style.color = "green"
        errorEmail.innerText = "Email válido"
        
    } else if(campoEmail.value == "") {
        errorEmail.innerText = "Campo obligatorio"
        errorEmail.style.color = "tomato"
    } else {
        errorEmail.innerText = "Email inválido"
        errorEmail.style.color = "tomato"
    }
})

campoContrasena.addEventListener("focus",()=> {
    errorContrasena.innerText = "La contraseña debe contener al menos 8 caracteres"
    errorContrasena.style.color = "orange"
})
campoContrasena.addEventListener("change",()=> {
    let caracteres = campoContrasena.value.length
    if(campoContrasena.value.length >= 8) {
        errorContrasena.innerText = "Contraseña válida " + "(" + caracteres + " caracteres)"
        errorContrasena.style.color = "green"
    } else if(campoContrasena.value == "") {
        errorContrasena.innerText = "Campo obligatorio para ingresar"
        errorContrasena.style.color = "tomato"
    } else {
        errorContrasena.innerText = "Contraseña inválida " + "(" + caracteres + " caracteres)"
        errorContrasena.style.color = "tomato"
    }
})
campoFile.addEventListener("change",()=> {
    if(campoFile.value != "") {
        document.getElementById("checked").style.display = "flex"
        errorFile.innerText = ""
    } 
})

/////////////////// SUBMIT

registerForm.addEventListener("submit",(e)=> {

    if(campoNombre.value == "") {
        errorNombre.innerText = "Campo obligatorio"
        errorNombre.style.color = "tomato"
        e.preventDefault()
    }


    if(campoApellido.value == "") {
        errorApellido.innerText = "Campo obligatorio"
        errorApellido.style.color = "tomato"
        e.preventDefault()
    }
    if (campoEmail.value.includes("@") && campoEmail.value.includes(".com") || campoEmail.value.includes("@") && campoEmail.value.includes(".co") || campoEmail.value.includes("@") && campoEmail.value.includes(".com.co") ) {
        errorEmail.style.color = "green"
        errorEmail.innerText = "Email válido"
        
    } else if(campoEmail.value == "") {
        errorEmail.innerText = "Campo obligatorio"
        errorEmail.style.color = "tomato"
        e.preventDefault()
    } else {
        e.preventDefault()
        errorEmail.innerText = "Email inválido"
        errorEmail.style.color = "tomato"
    }

    let caracteres = campoContrasena.value.length
    if(campoContrasena.value.length >= 8) {
        errorContrasena.innerText = "Contraseña válida " + "(" + caracteres + " caracteres)"
        errorContrasena.style.color = "green"
    } else if(campoContrasena.value == "") {
        errorContrasena.innerText = "Campo obligatorio"
        errorContrasena.style.color = "tomato"
        e.preventDefault()
    } else {
        errorContrasena.innerText = "Contraseña inválida " + "(" + caracteres + " caracteres)"
        errorContrasena.style.color = "tomato"
        e.preventDefault()
    }
        
    if(campoFile.value != "") {
        document.getElementById("checked").style.display = "flex"
        errorFile.innerText = ""
        
    } else {
        errorFile.innerText = "Debes subir una foto de perfil"
        errorFile.style.color = "tomato"
        e.preventDefault()
    }
})


