import React from 'react'
import { Container, Form } from 'react-bootstrap';

export default function ContactPage() {
    return (
        <>
            <Container className='mt-5'>
                <h1 className='mb-3'>Contact us</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}
