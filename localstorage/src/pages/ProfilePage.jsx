import React from 'react'
import { Container } from 'react-bootstrap';

export default function ProfilePage(props) {
    const { firstName, lastName } = props.userData || { firstName: "??", lastName: "??" };

    return (
        <>
            <Container className='mt-5'>
                <h1>Welcome {firstName} {lastName},</h1>
                <p>You are currently logged.</p>

            </Container>
        </>
    )
}
