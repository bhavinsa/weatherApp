import React, { useState } from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { Types } from '../../reducers/crudReducer';
import { AppContext } from '../../reducers/context';
import Navigation from '../../nav/navigation';

const Create = () => {
    const { state, dispatch } = React.useContext(AppContext);
    const [form, setForm] = React.useState({
        name: "",
        description: ""
    });

    const handleForm = (type: string, value: string) => {
        setForm(data => ({
            ...data,
            [type]: value
        }));
    }

    const create = () => {
        dispatch({
            type: Types.Create,
            payload: {
                id: Math.round(Math.random() * 10000),
                name: form.name,
                description: form.description
            }
        });

        setForm( () => ({
            name: "",
            description: ""
        }));
    }
    return (
        <Container>
            
            <br />
            <Form>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Name
                </Form.Label>
                    <Col lg="8">
                        <Form.Control type="text" value={form.name}
                            onChange={(e: any) => {
                                handleForm("name", e.target.value);
                            }}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Description
                </Form.Label>
                    <Col lg="8">
                        <Form.Control type="text" value={form.description}
                            onChange={(e: any) => {
                                handleForm('description', e.target.value)
                            }}
                        />
                    </Col>
                </Form.Group>


                <Button variant="primary" onClick={create}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Create;