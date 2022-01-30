import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './UserSignUp.css';

const UserSignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = {
            email: email,
            password: password,
            confirmPass: confirmPass
        }
        axios.post('/signup', {
            signupInfo: form
        })
    }

    return (
        <Container>
            <Row className="justify-content-md-center"><Col md={5} xs={9}>
                <h1 className="signup-header mb-4">Sign Up</h1>

                <Form onClick={handleSubmit}>
                    <Form.Group className="mb-5" controlId="Email">
                        <Form.Control type="email" placeholder="Email"
                            onChange={event=>setEmail(event.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="Password">
                        <Form.Control type="password" placeholder="Password"
                            onChange={event=>setPassword(event.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="confirmPass">
                        <Form.Control type="password" placeholder="Confirm Password"
                            onChange={event=>setConfirmPass(event.target.value)}/>
                    </Form.Group>

                    <Button type="submit" className="signup-submit mb-5">Create Your Account</Button>
                </Form>

                <p>Already have an account?</p>
                <Link to="/login">
                    <Button className="signup-register">Log In</Button>
                </Link>
            </Col></Row>
        </Container>
    )
}

export default UserSignUp;
