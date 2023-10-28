import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="NavBar">
      <Container>
        <Navbar.Brand className='branch'>
          <Link to={'/'}><h1>Organic</h1></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='pages'>
          <NavLink to={`/category/te`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Te</NavLink>
          <NavLink to={`/category/mate`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mate</NavLink>
          <NavLink to={`/category/accesorios`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
        </Navbar.Collapse>
        <NavLink to='/cart'><CartWidget/></NavLink>
      </Container>
    </Navbar>
  );
}

export default NavBar;
