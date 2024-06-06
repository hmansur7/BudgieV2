import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
    
    setError("");
  };

return (
    <Container>
        <Row className="justify-content-md-center mt-5">
            <Col md={6}>
                <h2 className="text-center">Welcome to Budgie</h2>
                <h4 className="text-center">Login?</h4>
                <Form onSubmit={handleSubmit}>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="jonedoe@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary mt-2" type="submit">
                        Login
                    </Button>
                    {error && <Alert variant="danger mt-2">{error}</Alert>}
                    <Alert variant="info mt-2">
                            Don't have an account? <a href="/signup">Sign up</a>
                    </Alert>
                </Form>
            </Col>
        </Row>
    </Container>
);
};

export default LoginPage;
