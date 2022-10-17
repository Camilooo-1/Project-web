const nombre = document.getElementById("Nombres")
const Apellidos = document.getElementById("Apellidos")
const Telefono = document.getElementById("Telefono")
const Identificacion = document.getElementById("Identificacion")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    parrafo.innerHTML = ""
    if(nombre.value.length <1){
        warnings += `El nombre no es valido <br>`
        entrar = true
        alert("DEBE DILIGENCIAR EL CAMPO NOMBRES")
    }
    if(Apellidos.value.length <1){
        warnings += `Los apellidos no son validos <br>`
        entrar = true
        alert("DEBE DILIGENCIAR EL CAMPO APELLIDOS")
    }
    if(Telefono.value.length <1){
        warnings += `El telefono no es valido <br>`
        entrar = true
        alert("DEBE DILIGENCIAR EL CAMPO TELEFONO")
    }
    if(Identificacion.value.length <1){
        warnings += `La identificacion no es valida <br>`
        entrar = true
        alert("DEBE DILIGENCIAR EL CAMPO IDENTIFICACION")
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Registrado"
    }
})