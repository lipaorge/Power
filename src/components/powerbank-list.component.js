import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import ClienteTableRow from "./ClienteTableRow";

export default class PowerbankList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientes: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:4000/clientes/")
            .then((res) => {
                this.setState({
                    clientes: res.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    DataTable() {
        return this.state.clientes.map((res, i) => {
            return <ClienteTableRow obj={res} key={i} />;
        });
    }

    render() {
        return (
            <div className="">
                <h1 style={{ marginTop: 10 }}>Listado Clientes</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Identificación</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Telefono</th>
                            <th>Email</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>{this.DataTable()}</tbody>
                </Table>
            </div>
        );
    }
}
