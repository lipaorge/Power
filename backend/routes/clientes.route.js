let mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const clientesController = require("../../controllers/clientes.controller");

// Modelo Estudiante
let ClientesSchema = require("../models/clientes.model");

// CREAR Estudiante
router.route("/create-clientes").post((req, res, next) => {
    ClientesSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// LEER Estudiante
router.route("/").get((req, res, next) => {
    ClientesSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Obtener un Estudiante
router.route("/edit-clientes:id").get((req, res, next) => {
    ClientesSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Actualizar Estudiante
router.route("/update-clientes/:id").put((req, res, next) => {
    ClientesSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Clientes updated successfully !");
      }
    }
  );
});

// BORRAR Estudiante
router.route("/delete-clientes/:id").delete((req, res, next) => {
    ClientesSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;