import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidget1 from "../CartWidget1/CartWidget1"
import Titulo from '../Titulo/Titulo';

import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <Navbar expand="lg">
                <Titulo titulo='Baby Bom' />
                <Container>
                    {/* <Navbar.Brand href="#home">Inicio</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.4">Todos los productos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.1">Mamaderas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Carritos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Playmats</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">Dudas</Nav.Link>
                            <Nav.Link href="#link">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget1 />
                </Container>
            </Navbar>
        </>

    )
}

export default NavBar

