

//Requiere (hacemos uso  ) del paquete express
const { request, json } = require("express");
const  express = require("express")
//Requiere (hacemos uso  ) del paquete mongoose
const  mongoose = require("mongoose");
const Post = require("./Post");
require("./database")

//Creamos una instalaciom del paquete express para poder utilizarlo 
const app = express();
const port =3000;
//Lanzamos la aplicacion arabes del puerto 3000
app.listen(process.env.PORT || port, () => 
console.log("Servidor conectado al  puerto " + port)
 
);
//la aplicacion muestra el archivo index.html ubicado en la carpeta public
app.use(express.static("Public"));      

// configuramos el tamaño maximo de los datos que podemos recibir

app.use(express.json({limit:"2mb"}));

//OBTENEMOS LOS DATOS DEL FORMULARIO DE INDEX.HTML
// req parametro desde donce recivimos los datos 
// res parametro desde podemos generar una respuesta al que nos a enviado los datos 
app.post("/", async function (req, res){

console.log("respuesta recibida")
//optenemos los datos en texto  los volvemos a conbertir a js
//console.log(req.body);
const{usuario, Descripcion, base64, date} = req.body;

//Creamos una instancia del esquema post 
const newPost = new Post({usuario, Descripcion, base64, date})


//enviamos los datos a la base de datos 
 await newPost.save();




//ENVIAMOS UNA RESPUESTA AL CLIENTE 
res.json({

status: "success",
usuario: usuario,
desc: Descripcion,
img: base64,
fecha: date 



});


});



//obtenemos los datos desde  la base de datos 

app.get("/publicaciones",async function  (req, res){


const publicaciones = await Post.find({}).lean().sort({date: "desc"})
res.json(publicaciones)

})










































































































































