import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import {
    BrowserRouter as Router,
    useParams
} from 'react-router-dom'
import { AppContext } from '../../reducers/context';
import { Container, Form, Row, Col, Button, Toast } from 'react-bootstrap';
import { create } from 'domain';
import { Types } from '../../reducers/crudReducer';
import { useHistory } from 'react-router-dom';

const Update: React.FC = () => {
    const history = useHistory();
    let { id } = useParams()
    const { state, dispatch } = React.useContext(AppContext);
    const updateRecord = state.products.filter((data) => data.id == id);

    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');


    console.log(updateRecord[0]);
    const [form, setForm] = React.useState({
        name: updateRecord && updateRecord[0].name ? updateRecord[0].name : '',
        description: updateRecord && updateRecord[0].description ? updateRecord[0].description : ''
    });

    const handleForm = (type: string, value: string) => {
        setForm(data => ({
            ...data,
            [type]: value
        }));
    }

    const update = () => {

        if (form.name && form.description) {
            dispatch({
                type: Types.Update,
                payload: {
                    id: id,
                    name: form.name,
                    description: form.description
                }
            });
            setShow(true);
            setMessage('Updated successfully.');
        } else {
            setShow(true);
            setMessage('Please provide valid details.');
        }

    }

    return (
        <Container>

            <br />
            <Form>

                {(show == true) ? <Col xs={9} className="div-toast">
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Body> {message}</Toast.Body>
                    </Toast>
                </Col> : ''}

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


                <Button variant="primary" onClick={update}>
                    Update
            </Button>
            </Form>
        </Container>
    )
}

export default Update;
