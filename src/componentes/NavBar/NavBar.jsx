import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


import CartWidget1 from "../CartWidget1/CartWidget1"
import Titulo from '../Titulo/Titulo';

import './NavBar.css'

const NavBar = () => {

    return (
        <div>
            <Navbar expand="lg">
                <Titulo titulo='Baby Bom' />
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/'>Inicio</Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <div className='nav__dropdown'>
                                    <Link to='/category/accesoriosAseo'> Accesorios de Baño</Link>
                                    <Link to='/category/cochecitos'> Cochecitos</Link>
                                    <Link to='/category/juguetes'> Juguetes</Link>
                                    <Link to='/category/mochilas'> Mochilas</Link>
                                    <Link to='/category/sillas'> Sillas</Link>
                                    <Link to='/category/vasos'> Vasos</Link>
                                    <NavDropdown.Divider />
                                    <Link to='/'>Todos los productos</Link>
                                </div>
                            </NavDropdown>
                            <Link to='/dudas'> Dudas </Link>
                            <Link to='/contacto'> Contacto </Link>

                        </Nav>
                    </Navbar.Collapse>
                    <Link to='/cart'>
                        <CartWidget1 />
                    </Link>
                </Container>
            </Navbar>
        </div>

    )
}

export default NavBar

