import mongoose from "mongoose";

// Archivo para la conexion de la DB

function connect(){
  return mongoose.connect("mongodb+srv://virnardi1680:s3DJ5AMamLPmbOMr@cluster0.nqkwgkp.mongodb.net/") //poner mi url de mongo
  .then(() => {
    console.log("Base conectada correctamente.");
  })
  .catch((err) => {
    console.log(`Hubo un error al intentar conectar a la DB: ${err}`);
  })
}

export default connect;