import React from 'react';

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import style from './Header.module.scss';

function Header(): JSX.Element {
  return (
      <Navbar className={style.navbar} bg="dark" variant='dark' expand="xxl">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <NavDropdown title="File">
                <NavDropdown.Item >New</NavDropdown.Item>
                <NavDropdown.Item >Save</NavDropdown.Item>
                <NavDropdown.Item >Close</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Header