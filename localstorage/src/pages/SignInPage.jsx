import React, { useState } from 'react'
import { Container, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function SignInPage(props) {
    const { setIsLogged, setUserData } = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userData = {
            firstName: "Trop",
            lastName: "Alwest",
            email: "vraiment.trop-alwest@gmal.ouille",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2Njg0NjA4NTMsImV4cCI6MTY5OTk5Njg1MywiYXVkIjoiIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImZpcnN0TmFtZSI6IlRyb3AiLCJsYXN0TmFtZSI6IkFsd2VzdCIsImVtYWlsIjoidnJhaW1lbnQudHJvcC1hbHdlc3RAZ21hbC5vdWlsbGUifQ.GBZE3f-dxXOoy5YiA6WUuxee-qzY6p_QJxqh5Q1RXIc'
        }

        console.log({
            email: email,
            password: password
        })

        if ((email && email.length > 0) && (password && password.length > 0)) {
            await localStorage.setItem('userData', JSON.stringify(userData));
            setIsLogged(true);
            setUserData(userData);
            await navigate('/profile', { replace: true });
        }
    }
    return (
        <>
            <Container className='mt-5'>
                <h1 className='mb-3'>Sign In</h1>
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
                        <Form.Control value={password} onChange={(event) => setPassword(event.currentTarget.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}
