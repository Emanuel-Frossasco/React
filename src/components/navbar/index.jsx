import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'boxicons';
import './styles.css';
import CartWidget from '../CartWidget/cartWidgetContainer';
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar  expand="lg">
      <Container>
        <Link to='/' className='link-logo'><Navbar.Brand href="#home">Mi Tienda Online</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to={"/cart"} className='category'>
            <Nav.Link href="#link">
              <CartWidget />
            </Nav.Link>
          </Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <Link to='/category/1' className='category'><NavDropdown.Item href="#action/3.1">Categoria 1</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link to='/category/2' className='category'><NavDropdown.Item href="#action/3.2">
                Categoria 2
              </NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link to='/category/3' className='category'><NavDropdown.Item href="#action/3.3">Categoria 3</NavDropdown.Item></Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;