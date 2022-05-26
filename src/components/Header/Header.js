import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

const authenticatedOptions = (
  <Fragment>
    <NavLink to='/issue' className='nav-link'>Bug Creation</NavLink>
    <NavLink to='/issue' className='nav-link'>All Bugs</NavLink>
    <div className='auth-func'>
      <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
      <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
    </div>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg='dark' variant='light' expand='md'>
    <Navbar.Brand>
      <Link to='/' style={{ color: 'white', textDecoration: 'bold', fontSize: '50px' }}>Debuggr-Trackr</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        {user && (
          <span className='navbar-text mr-2'>Good Morning, {user.email}</span>
        )}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
