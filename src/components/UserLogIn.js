import react from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './UserLogIn.css';

const UserLogIn = () => {
    return (
        <Container>
            <Row className="justify-content-md-center"><Col md={5} xs={9}>
                <h1 className="login-header mb-4">Log In</h1>
                <Form>
                    <Form.Group className="mb-5" controlId="Email">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                
                    <Form.Group className="mb-5" controlId="Password">
                        <Form.Control type="password" placeholder="Password" />
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
