import react from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

import './UserLogIn.css';

const UserLogIn = () => {
    return (
        <Container>
            <Row className="justify-content-md-center"><Col md={5} xs={9}>
                <h1 className="login-header mb-4">Log In</h1>
                <Form>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                
                    <Form.Group className="mb-5" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button type="submit" className="login-submit">Submit</Button>
                </Form>
            </Col></Row>
        </Container>
    )
}

export default UserLogIn;
