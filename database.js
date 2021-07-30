const  mongoose =require("mongoose")


const  mongodb_url ="mongodb+srv://javier:SoRS69mdIJzHujsi@clusterapppublicaciones.79pvh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mongoose.connect(mongodb_url,{

useCreateIndex: true,
userNewUrlParser: true,
userFindAndModify: false



}).then(db => console.log("Bdd Conectada con exito")).catch(err => console.error(err));


