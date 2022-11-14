import React, { useState } from 'react'
import { Container, Button, Form } from 'react-bootstrap';

export default function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log({
            email: email,
            password: password,
            confirmPassword: confirmPassword
        })
    }
    return (
        <>
            <Container className='mt-5'>
                <h1 className='mb-3'>Sign Up</h1>
                <Form onSubmit={(event) => handleSubmit(event)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={email} onChange={(event) => setEmail(event.currentTarget.value)} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='mb-2' value={password} onChange={(event) => setPassword(event.currentTarget.value)} type="password" placeholder="Password" />
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control value={confirmPassword} onChange={(event) => setConfirmPassword(event.currentTarget.value)} type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}
