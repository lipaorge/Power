//parameter para los datos para la conexion con MongoDB
const mongoose = require("mongoose");

const host = "localhost";
const port = "27017";
const db = "powerup";

//Cadena de Coenxion
exports.mongoConnect = () => {
  const mongoStringConnection = `mongodb://${host}:${port}/${db}`;

  //Configuracion para conectarse con mongDB

  mongoose.connect(mongoStringConnection);
  mongoose.Promise = global.Promise;
  const dbConnection = mongoose.connection;
  dbConnection.on("error",console.error.bind(console, "MongoDB connection error")
  );
};
// exports.mongoConnect = () => {
//     const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
//     mongoose.connect(mongoStringConnection);
//     mongoose.Promise = global.Promise;
//     const dbConnection = mongoose.connection;
//     dbConnection.on("error", console.error.bind(console,"Mongodb connection error"))
// }