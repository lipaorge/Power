import React, { Component } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

<<<<<<< HEAD:src/components/create-powerbank.component.js
export default class CreatePowerbank extends Component {
    constructor(props) {
        super(props);
        this.onChangepowerbankName = this.onChangepowerbankName.bind(this);
        this.onChangepowerbankEmail = this.onChangepowerbankEmail.bind(this);
        this.onChangepowerbankRollno = this.onChangepowerbankRollno.bind(this);
=======

export default class CreateStudent extends Component {
    constructor(props) {
        super(props);
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
        this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
>>>>>>> b68bd79d75777a77680916b020eca269178381bc:src/components/create-student.component.js
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

<<<<<<< HEAD:src/components/create-powerbank.component.js
    onChangepowerbankRollno(e) {
=======
    onChangeStudentRollno(e) {
>>>>>>> b68bd79d75777a77680916b020eca269178381bc:src/components/create-student.component.js
        this.setState({ rollno: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();

<<<<<<< HEAD:src/components/create-powerbank.component.js
        const powerbankObject = {
=======
        const studentObject = {
>>>>>>> b68bd79d75777a77680916b020eca269178381bc:src/components/create-student.component.js
            name: this.state.name,
            email: this.state.email,
            rollno: this.state.rollno,
        };

        axios
<<<<<<< HEAD:src/components/create-powerbank.component.js
            .post("htpp://localhost:4000/student/createpowerbank", powerbankObject)
=======
            .post("htpp://localhost:4000/students/create-student", studentObject)
>>>>>>> b68bd79d75777a77680916b020eca269178381bc:src/components/create-student.component.js
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
<<<<<<< HEAD:src/components/create-powerbank.component.js
                            value={this.setState.name}
                            onChange={this.onChangepowerbankName}
=======
                            value={this.State.name}
                            onChange={this.onChangeStudentName}
>>>>>>> b68bd79d75777a77680916b020eca269178381bc:src/components/create-student.component.js
                        />
                    </Form.Group>
                    <Form.Group controlId="Email">
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control 
                        type="email" 
<<<<<<< HEAD:src/components/create-powerbank.component.js
                        value={this.setState.email}
                        onChange={this.onChangepowerbankEmail}
=======
                        value={this.State.email}
                        onChange={this.onChangeStudentEmail}
>>>>>>> b68bd79d75777a77680916b020eca269178381bc:src/components/create-student.component.js
                        />
                       
                    </Form.Group>
                    <Form.Group controlId="Name">
                        <Form.Label>Identificación</Form.Label>
                        <Form.Control
                            type="text"
<<<<<<< HEAD:src/components/create-powerbank.component.js
                            value={this.setState.rollno}
                            onChange={this.onChangepowerbankRollno}
=======
                            value={this.State.rollno}
                            onChange={this.onChangeStudentRollno}
>>>>>>> b68bd79d75777a77680916b020eca269178381bc:src/components/create-student.component.js
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
