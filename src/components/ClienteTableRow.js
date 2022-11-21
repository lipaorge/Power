import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class ClienteTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteCliente = this.deleteCliente.bind(this);
    }

    deleteCliente() {
        axios
            .delete(
                "http://localhost:4000/clientes/delete-clientes/" +
                    this.props.obj._id
            )
            .then((res) => {
                console.log("Cliente successfully deleted!");
                
                alert("Cliente Borrado");
                
            })
            
            .catch((error) => {
                console.log(error);
            });
           // this.props.history.push("/powerbank-list");   
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.identificacion}</td>
                <td>{this.props.obj.nombre}</td>
                <td>{this.props.obj.apellido}</td>
                <td>{this.props.obj.telefono}</td>
                <td>{this.props.obj.mail}</td>

                <td>
                    <Link
                        className="edit-link"
                        
                        path={"product/:id"}
                        to={"/edit-clientes/" + this.props.obj._id}
                    >
                        Editar
                    </Link>
                    <Button
                        className="delet-link"
                        onClick={this.deleteCliente}
                        size="sm"
                        variant="dark"
                    >
                        Borrar
                    </Button>
                    
                </td>
            </tr>
            
        );
    }
}
