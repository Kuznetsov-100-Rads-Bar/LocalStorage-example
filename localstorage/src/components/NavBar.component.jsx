import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavbarComponent(props) {
    const { isLogged, setIsLogged, setUserData } = props;

    const handleLogout = async (event) => {
        event.preventDefault();
        await localStorage.removeItem('userData');
        setIsLogged(false);
        setUserData({});
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        {!isLogged ?
                            <>
                                <Nav.Link as={Link} to='/signin'>Sign In</Nav.Link>
                                <Nav.Link as={Link} to='/signup'>Sign Up</Nav.Link>
                            </>
                            :
                            <>
                                <Nav.Link as={Link} to="/profile">My Account</Nav.Link>
                                <Nav.Link onClick={(event) => handleLogout(event)}>Logout</Nav.Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
