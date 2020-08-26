import React, { useState, useEffect } from 'react';
import { Toast } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Home = () => {
    const [show, setShow] = useState(false);
    let { status } = useParams()

    useEffect(() => {
        if (status == 'success') {
            setShow(true);
        }
    }, []);


    return (
        <div>
            <div
                aria-live="polite"
                aria-atomic="true"
                style={{
                    position: 'absolute',
                    minHeight: '100px',
                    top: '15%'
                }}
            >
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }} >
                    <Toast.Body>Welcome!</Toast.Body>
                </Toast>
            </div>
        </div>
    )
}

export default Home;