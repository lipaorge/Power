import React, { Component } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default class CreateStudent extends Component {
    constructor(props) {
        super(props);
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
        this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
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

    onChangeStudentRollno(e) {
        this.setState({ rollno: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();

        const studentObject = {
            name: this.state.name,
            email: this.state.email,
            rollno: this.state.rollno,
        };

        axios
            .post("htpp://localhost:4000/students/create-student", studentObject)
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
                            value={this.State.name}
                            onChange={this.onChangeStudentName}
                        />
                    </Form.Group>
                    <Form.Group controlId="Email">
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control 
                        type="email" 
                        value={this.State.email}
                        onChange={this.onChangeStudentEmail}
                        />
                       
                    </Form.Group>
                    <Form.Group controlId="Name">
                        <Form.Label>Identificación</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.State.rollno}
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
