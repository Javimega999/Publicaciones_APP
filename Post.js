const mongoose =require("mongoose")


//utilizzamos el esquema de datos de mongoose 



const {Schema}= mongoose;

//definimos las prpiedades de la publicacion 

const PostSchema = new Schema ({
usuario: {type: String, requiered: true},
Descripcion: {type: String, requiered: true},
base64: {type: String, requiered: true},
date:  {type:Date, default: Date.now}




})
// module.export nos ayuda a exportar la informacion de este modulo 
module.exports= mongoose.model("Post", PostSchema)