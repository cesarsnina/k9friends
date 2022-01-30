import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './UserLogIn.css';

const UserLogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = {
            email: email,
            password: password
        }
        axios.post('/login', {
            loginInfo: form
        })
    }

    return (
        <Container>
            <Row className="justify-content-md-center"><Col md={5} xs={9}>
                <h1 className="login-header mb-4">Log In</h1>

                <Form onClick={handleSubmit}>
                    <Form.Group className="mb-5" controlId="Email">
                        <Form.Control type="email" placeholder="Email"
                            onChange={event=>setEmail(event.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="Password">
                        <Form.Control type="password" placeholder="Password"
                            onChange={event=>setPassword(event.target.value)}/>
                    </Form.Group>

                    <Button type="submit" className="login-submit mb-5">Log In</Button>
                </Form>

                <p>Not yet registered?</p>
                <Link to="/signup">
                    <Button className="login-register">Register Now</Button>
                </Link>
            </Col></Row>
        </Container>
    )
}

export default UserLogIn;
