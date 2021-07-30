

let publicar =document.getElementById("Publicar")



let base64;



//cargamos la  imagen i generamos su pre visualicacion :


function leerArchivo(input){
//si existe un archivo 
if(input.files){

const reader= new FileReader();

reader.onload = function(e){
const filePreview = document.createElement("img");

filePreview.id = "file-preview";
//al atrivuto src le indicamos la imagen que deve cargar 
filePreview.src = e.target.result;

filePreview.width= 400;
base64 = e.target.result;
console.log(base64)


const previewZone =document.getElementById("preview")
//inserto la etiqueta con toda su informacion dentro del div
previewZone.appendChild(filePreview);

}
reader.readAsDataURL(input.files[0]);
}
}

let fileupload = document.getElementById("file");
// en el momento que cambiaos el input cargara la foto que subimos 
fileupload.onchange =function(e){
leerArchivo(e.srcElement);

}
// Enviamos esos datos al servidor  --------------------------------------------------------------------------------------------------------------------------------------------


publicar.onclick = async() => {

    let usuario = document.getElementById("usuario").value;
    let Descripcion =document.getElementById("Descripcion").value;

    //creamos un objeto  con los datos a enviar
    const datos = {usuario, Descripcion, base64}; 

//preparamos el objeto data con toda la informacion para el envio al servidor (archivo index.js)
    const data ={
          method:"POST",
    headers:{
      
        "Content-type": "application/json"
    },
 //Data que enviamos 

 body: JSON.stringify(datos)


}
const response = await fetch("/", data);
const json = await response.json
console.log (json)

}

document.getElementById("usuario").value = "";
document.getElementById("Descripcion").value= "";
document.getElementById("file").value = "";


const imagen = document.getElementById("file-preview");
const previewZone = document.getElementById("preview")
previewZone.removeChild(image);