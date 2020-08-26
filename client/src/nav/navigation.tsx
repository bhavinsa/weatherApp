import React, { Fragment, useContext } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import Create from "../components/crud/create";
import List from "../components/crud/list";
import { AuthContext } from "../reducers/AuthProvider";
import { useHistory } from 'react-router-dom';
import Update from "../components/crud/update";
import Home from "../components/crud/home";

const Navigation = () => {
    const authContext = useContext(AuthContext);
    const history = useHistory();
    
    const logout = () => {
        authContext.authenticated = false;
        history.push("/login");
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="w-100">
                <Navbar.Brand>React</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto menu-items">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/create" >Create</Nav.Link>
                        <Nav.Link as={Link} to="/list" >List</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
                        <Nav.Link onClick={logout}>
                            Logout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <ProtectedRoute path="/home/:status" component={Home} />
            <ProtectedRoute path="/create" component={Create} />
            <ProtectedRoute path="/list" component={List} />
            <ProtectedRoute path="/update/:id" component={Update} />

        </>
    )
}

const ProtectedRoute = ({ component: Comp, path, ...rest }) => {
    const { authenticated } = useContext(AuthContext);
    return (
        <Route
            path={path}
            {...rest}
            render={(props) => {
                return authenticated ? (
                    <Comp {...props} />
                ) : (
                        <Redirect
                            to='/login'
                        />
                    );
            }}
        />
    );
};


export default Navigation;