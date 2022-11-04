import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";
import Index from "./components/index.component";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar id="navbar" bg="info" expand="lg" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/"} className="nav-link">
                  POWER BANK
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-user"} className="nav-link">
                    Crear Usuario
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/user-list"} className="nav-link">
                    Listar Usuarios
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <Index {...props} />}
                  />
                  <Route
                    exact
                    path="/create-user"
                    component={(props) => <CreateStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-user/:id"
                    component={(props) => <EditStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/user-list"
                    component={(props) => <StudentList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
