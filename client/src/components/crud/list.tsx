import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { AppContext } from '../../reducers/context';
import { Types } from '../../reducers/crudReducer';
import { Link } from 'react-router-dom';
import update from './update';

const List = () => {
    const { state, dispatch } = React.useContext(AppContext);

    const deleteProduct = (id: number) => {
        dispatch({
            type: Types.Delete,
            id,
        })
    }
    return (
        <Container>
            {state.products.length > 0 ? <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {state.products.map((c, index) => (
                        <tr key={index}>
                            <td>{c.id}</td>
                            <td>{c.name}</td>
                            <td>{c.description}</td>
                            <td>
                                <Link to={`/update/${c.id}`} >Update</Link>
                                <Button variant="link" onClick={() => deleteProduct(c.id)} >Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table> : <p> No Data</p>}
        </Container>

    )
}

export default List;