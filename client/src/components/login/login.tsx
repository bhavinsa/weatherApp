import React, { useContext, useState } from 'react';
import { Form, Button, Col, Row, Toast } from 'react-bootstrap';
import { AppContext } from '../../reducers/context';
import { AuthContext } from '../../reducers/AuthProvider';
import { useHistory } from 'react-router-dom';


const Login = () => {
    const authContext = useContext(AuthContext);
    const history = useHistory();

    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');


    const [user, setUser] = React.useState({
        email: "admin@example.com",
        password: "admin"
    });

    const handleForm = (type: string, value: string) => {
        setUser(data => ({
            ...data,
            [type]: value
        }));
    }

    const login = () => {
        if (user.email && user.password) {

            if (user.email === 'admin@example.com' && user.password === 'admin') {
                authContext.authenticated = true;
                history.push(`/home/success`);
            } else {
                authContext.authenticated = false;
            }
            console.log(authContext.authenticated);
        } else {
            setShow(true);
            setMessage('Please provide valid details.');
        }
    }
    return (
        <Form className="login">

            {(show == true) ? <Col xs={9} className="div-toast">
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Body> {message}</Toast.Body>
                </Toast>
            </Col> : ''}

            <Form.Group as={Row} controlId="formBasicEmail">
                <Form.Label column sm="3">Email address</Form.Label>
                <Col lg="9">
                    <Form.Control type="email" placeholder="Enter email"
                        value={user.email}
                        onChange={(e: any) => {
                            handleForm("email", e.target.value);
                        }} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formBasicPassword">
                <Form.Label column sm="3">Password</Form.Label>
                <Col lg="9">
                    <Form.Control type="password" placeholder="Password"
                        value={user.password}
                        onChange={(e: any) => {
                            handleForm("password", e.target.value);
                        }} />
                </Col>
            </Form.Group>

            <Button variant="primary" onClick={login}>
                Login
            </Button>
        </Form>
    );
}

export default Login;