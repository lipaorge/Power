import React, { Component } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class CreatePowerbank extends Component {
    constructor(props) {
        super(props);
        this.onChangepowerbankName = this.onChangepowerbankName.bind(this);
        this.onChangepowerbankEmail = this.onChangepowerbankEmail.bind(this);
        this.onChangepowerbankRollno = this.onChangepowerbankRollno.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: "",
            email: "",
            rollno: "",
        };
    }

    onChangepowerbankName(e) {
        this.setState({ name: e.target.value });
    }
    onChangepowerbankEmail(e) {
        this.setState({ email: e.target.value });
    }

    onChangepowerbankRollno(e) {
        this.setState({ rollno: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();

        const powerbankObject = {
            name: this.state.name,
            email: this.state.email,
            rollno: this.state.rollno,
        };

        axios
            .post("htpp://localhost:4000/student/createpowerbank", powerbankObject)
            .then((res) => console.log(res.data));
        this.setState({ name: "", email: "", rollno: "" });
    }

    render() {
        return (
            <div className="form-wrapper">
                <Form >
                    <Form.Group controlId="Name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.setState.name}
                            onChange={this.onChangepowerbankName}
                        />
                    </Form.Group>
                    <Form.Group controlId="Email">
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control 
                        type="email" 
                        value={this.setState.email}
                        onChange={this.onChangepowerbankEmail}
                        />
                       
                    </Form.Group>
                    <Form.Group controlId="Name">
                        <Form.Label>Identificación</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.setState.rollno}
                            onChange={this.onChangepowerbankRollno}
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        size="lg"
                        block="block"
                        type="submit"
                        className="mt-4"
                    >
                        Crear Usuario
                    </Button>
                </Form>
            </div>
        );
    }
}
