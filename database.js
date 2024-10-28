const  mongoose =require("mongoose")

// Sustituir por tu mongo url
const  mongodb_url =""


mongoose.connect(mongodb_url,{

useCreateIndex: true,
userNewUrlParser: true,
userFindAndModify: false



}).then(db => console.log("Bdd Conectada con exito")).catch(err => console.error(err));


