import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AppContext } from '../../reducers/context';
import { AuthContext } from '../../reducers/AuthProvider';
import { useHistory } from 'react-router-dom';


const Login = () => {
    const authContext = useContext(AuthContext);
    const history = useHistory();

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
        if (user.email === 'admin@example.com' && user.password === 'admin') {
            authContext.authenticated = true;
            history.push("/create");
        } else {
            authContext.authenticated = false;
        }

        console.log(authContext.authenticated);
    }
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                    value={user.email}
                    onChange={(e: any) => {
                        handleForm("email", e.target.value);
                    }} />

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                    value={user.password}
                    onChange={(e: any) => {
                        handleForm("password", e.target.value);
                    }} />
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