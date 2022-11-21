const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientesSchema = new Schema({
    identificacion: { type: String, required: true, max: 100 },
    nombre: { type: String, required: true, max: 100 },
    apellido: { type: String, required: true, max: 100 },
    telefono: { type: String, required: true, max: 15 },
    mail: { type: String, required: false, max: 70 },
    password: { type: String, required: true, max: 100 },
    nuevo: { type: Boolean, required: false, max: 3 },
},
{
    collection:"clientes",
}
);

module.exports = mongoose.model("clientes", ClientesSchema);
