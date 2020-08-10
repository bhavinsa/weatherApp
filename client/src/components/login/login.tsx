import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AppContext } from '../../reducers/context';
import { AuthContext } from '../../reducers/AuthProvider';

const Login = () => {
    const authContext = useContext(AuthContext);
    const login = () => {
        authContext.authenticated = true;
        console.log(authContext.authenticated);
    }
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick={login}>
                Submit
            </Button>
        </Form>
    );
}

export default Login;