// validaciones de login

const loginForm = document.querySelector(".login-form")
const campoEmail = document.querySelector(".inputEmailLogin")
const errorEmail = document.querySelector(".errorEmail")
const campoContrasena = document.querySelector(".inputContrasenaLogin")
const errorContrasena = document.querySelector(".errorContrasena")

campoEmail.addEventListener("focus",()=> {
    errorEmail.innerText = "Ingresa el correo electrónico con el que te registraste"
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
    errorContrasena.innerText = "Ingresa la contraseña del correo electrónico"
    errorContrasena.style.color = "orange"
})

campoContrasena.addEventListener("change",()=> {
    if(campoContrasena.value == "") {
        errorContrasena.innerText = "Campo obligatorio"
        errorContrasena.style.color = "tomato"
    } else {
        errorContrasena.innerText = ""
    }   
})

loginForm.addEventListener("submit",(e)=> {
    
    if(campoEmail.value == "") {
        errorEmail.innerText = "Campo obligatorio para ingresar"
        errorEmail.style.color = "tomato"
        e.preventDefault()
    }
    
    if(campoContrasena.value == "") {
        errorContrasena.innerText = "Campo obligatorio para ingresar"
        errorContrasena.style.color = "tomato"
        e.preventDefault()
    }
})


