import React, { Component } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class CreatePowerbank extends Component {
    constructor(props) {
        super(props);
        this.onChangepowerbankId = this.onChangepowerbankId.bind(this);
        this.onChangepowerbankName = this.onChangepowerbankName.bind(this);
        this.onChangepowerbankLastN = this.onChangepowerbankLastN.bind(this);
        this.onChangepowerbankTel = this.onChangepowerbankTel.bind(this);
        this.onChangepowerbankEmail = this.onChangepowerbankEmail.bind(this);
        this.onChangepowerbankPass = this.onChangepowerbankPass.bind(this);
        this.onChangepowerbankNew = this.onChangepowerbankNew.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            identificacion: "",
            nombre: "",
            apellido: "",
            telefono: "",
            mail: "",
            password: "",
            nuevo: "",
        };
    }

    onChangepowerbankId(e) {
        this.setState({ identificacion: e.target.value });
    }
    onChangepowerbankName(e) {
        this.setState({ nombre: e.target.value });
    }
    onChangepowerbankLastN(e) {
        this.setState({ apellido: e.target.value });
    }
    onChangepowerbankTel(e) {
        this.setState({ telefono: e.target.value });
    }
    onChangepowerbankEmail(e) {
        this.setState({ mail: e.target.value });
    }
    onChangepowerbankPass(e) {
        this.setState({ password: e.target.value });
    }
    onChangepowerbankNew(e) {
        this.setState({ nuevo: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();

        const powerbankObject = {
            identificacion: this.state.identificacion,
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            telefono: this.state.telefono,
            mail: this.state.mail,
            password: this.state.password,
            nuevo: this.state.nuevo,
        };

        axios
            .post(
                "http://localhost:4000/clientes/create-clientes",
                powerbankObject
            )
            .then((res) => console.log(res.data));
        this.setState({
            identificacion: "",
            nombre: "",
            apellido: "",
            telefono: "",
            mail: "",
            password: "",
            nuevo: "",
        });
    }

    render() {
        return (
            <div className="form-wrapper">
                <h1 style={{ marginTop: 10 }}>Registro Cliente</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="id">
                        <Form.Label>Identificación</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.identificacion}
                            onChange={this.onChangepowerbankId}
                        />
                    </Form.Group>
                    <Form.Group controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.nombre}
                            onChange={this.onChangepowerbankName}
                        />
                    </Form.Group>
                    <Form.Group controlId="apellido">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.apellido}
                            onChange={this.onChangepowerbankLastN}
                        />
                    </Form.Group>
                    <Form.Group controlId="telefono">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.telefono}
                            onChange={this.onChangepowerbankTel}
                        />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control
                            type="email"
                            value={this.state.mail}
                            onChange={this.onChangepowerbankEmail}
                        />
                    </Form.Group>
                    <Form.Group controlId="pass">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.password}
                            onChange={this.onChangepowerbankPass}
                        />
                    </Form.Group>
                    <Form.Group controlId="nuevo">
                        <Form.Label>Nuevo</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.nuevo}
                            onChange={this.onChangepowerbankNew}
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        size="lg"
                        block="block"
                        type="submit"
                        className="mt-4"
                    >
                        Crear Cliente
                    </Button>
                </Form>
                <br></br>
                <br></br>
            </div>
        );
    }
}
