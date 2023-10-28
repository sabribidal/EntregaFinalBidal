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
          <NavLink to={`/category/green`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>green</NavLink>
          <NavLink to={`/category/black`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>black</NavLink>
          <NavLink to={`/category/blue`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>blue</NavLink>
        </Navbar.Collapse>
        <NavLink to='/cart'><CartWidget/></NavLink>
      </Container>
    </Navbar>
  );
}

export default NavBar;
