const Id = document.getElementById("Id")
const Nom = document.getElementById("Nom")
const Marca = document.getElementById("Marca")
const Unid = document.getElementById("Unid")
const Precio = document.getElementById("Precio")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    parrafo.innerHTML = ""
    if(Id.value.length <1){
        warnings += `El Id no es valido <br>`
        entrar = true
        alert("DEBE DILIGENCIAR EL CAMPO CORREO")
    }
    if(Nom.value.length <1){
        warnings += `El Nom no es valido <br>`
        entrar = true
        alert("DEBE DILIGENCIAR EL CAMPO CONTRASEÑA")
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "INGRESO CON EXITO"
    }
})