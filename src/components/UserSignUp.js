import react from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './UserSignUp.css';

const UserSignUp = () => {
    return (
        <Container>
            <Row className="justify-content-md-center"><Col md={5} xs={9}>
                <h1 className="signup-header mb-4">Sign Up</h1>
                <Form>
                    <Form.Group className="mb-5" controlId="Email">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                
                    <Form.Group className="mb-5" controlId="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="Password2">
                        <Form.Control type="password" placeholder="Confirm Password" />
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
