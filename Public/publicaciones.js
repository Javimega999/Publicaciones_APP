async function getData (){
    const response = await fetch("/publicaciones")
    const datos = await response.json();
    console.log(datos);

for(let i = 0; i < datos.length; i++){
//contenedor principal para alojar al post
const  root = document.createElement("div")
const   usuario = document.createElement("div")
const Descripcion = document.createElement("div")
const fecha = document.createElement("div")
const imagen = document.createElement("img")
const linea = document.createElement("hr") 
// creamos las etiquetas los datos que queremos mostrar 
usuario.innerHTML ="Usuario:" + datos[i].usuario;
Descripcion.innerHTML ="Descripcion:" + datos[i].Descripcion;
const fechaOk = new Date(datos[i].Date).toLocaleDateString();
Date.innerHTML ="Fecha publicacion:" + fechaOk;
imagen.src = datos[i].base64;
imagen.style ="width: 400px;"

// hemos llamado al root en el orden que queremos 

root.append(imagen, usuario, Descripcion, fecha, linea)
document.getElementById("publicaciones").append(root)
}


}
getData()