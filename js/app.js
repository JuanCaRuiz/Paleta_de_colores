console.log("hola mundo")

document.getElementById("color").addEventListener("input", obtenerColor)

function obtenerColor(){
    let color = document.getElementById("color").value

    document.getElementById('contenedor').style.background=color
    document.getElementById('contenedor').innerHTML=color

}
