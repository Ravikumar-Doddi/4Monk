import React from 'react'
import { Navbar,Container,Nav} from 'react-bootstrap'
import './style.css'
import logo from '../../assets/logo.png'

function NavBar() {
  return (
    <Navbar expand="lg" className="main-nav p-3" fixed='top'>
    <Container className='main-nav2 nav-cont' fluid>
      <Navbar.Brand href="#home"><img href="#home" className='logo' src={logo} alt='logo'/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#home" className='nav-link'>Storie</Nav.Link>
          <Nav.Link href="#link" className='nav-link'>Loev</Nav.Link>
          <Nav.Link href="#home" className='nav-link'>One</Nav.Link>
          <Nav.Link href="#link" className='nav-link'>Superbike <span className='new mb-3'>new</span></Nav.Link>
        </Nav>
        <Nav className='nav-link1'>
          <Nav.Link href="#home" className='nav-link'>Book Now</Nav.Link>
          <Nav.Link href="#link" className='nav-link'>Book a Test Ride</Nav.Link>
          <Nav.Link href="#home" className='nav-link'>Become a Dealer</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  )
}

export default NavBar
