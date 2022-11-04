import React, { Component } from "react";
import axios from "axios";

import { Button, Form } from "react-bootstrap";

export default class CreatStudent extends Component {
    constructor(props) {
        super(props);
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
        this.onChangeStufentRollno = this.onChangeStufentRollno.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: "",
            email: "",
            rollno: "",
        };
    }

    onChangeStudentName(e) {
        this.setState({ name: e.target.value });
    }
    onChangeStudentEmail(e) {
        this.setState({ email: e.target.value });
    }

    onChangeStufentRollno(e) {
        this.setState({ rollno: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();

        const studendObject = {
            name: this.state.name,
            email: this.state.email,
            rollno: this.state.rollno,
        };

        axios
            .post("htpp://localhost:4000/student/createStudent", studendObject)
            .then((res) => console.log(res.data));
        this.setState({ name: "", email: "", rollno: "" });
    }

    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.setState.name}
                            onChange={this.onChangeStudentName}
                        />
                    </Form.Group>
                    <Form.Group controlId="Email">
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control 
                        type="email" 
                        value={this.setState.email}
                        onChange={this.onChangeStudentEmail}
                        />
                       
                    </Form.Group>
                    <Form.Group controlId="Name">
                        <Form.Label>Identificación</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.setState.rollno}
                            onChange={this.onChangeStudentRollno}
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
