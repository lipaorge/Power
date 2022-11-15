const Cliente = require("../backend/models/clientes.model");

let response = {
    msg: "",
    exito: false,
};

exports.create = function (req, res) {
    let cliente = new Cliente({
        identificacion: req.body.identificacion,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        mail: req.body.mail,
        password: req.body.password,
        nuevo: req.body.nuevo,
    });
};

