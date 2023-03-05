import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './menu.css';
import logo from '../images/logo.png'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Banner } from '../Banner/Banner';
import { Aboutus } from '../Aboutus/Aboutus';
import { Services } from '../Services/Services';
import { Testimonials } from '../Testimonials/Testimonials';
import { Footer } from '../Footer/Footer';

export const Menu = () => {
  return (
    
    <Navbar className='navbare' bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" ><img  className='logo-img' src={logo} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{marginBottom: '-25px'}}>
          <Nav
            className="me-auto my-2 my-lg-0 offset-5 " id='navoptions'
            style={{ maxHeight: '100px' }} 
            navbarScroll 
          >
            <Nav.Link className='text-white' href="#banner">Home</Nav.Link>
            <Nav.Link className='text-white' href="#services">Services</Nav.Link>
            <Nav.Link className='text-white' href="#About-us">About us</Nav.Link>
            <Nav.Link className='text-white' href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link className='text-white' href="#contact">Contact</Nav.Link>

            {/* <HashRouter>
            <Routes>
            <Route path='banner' element={<Banner/>}/>
            <Route path='services' element={<Services/>}/>
            <Route path='aboutus' element={<Aboutus/>}/>
            <Route path='testimonials' element={<Testimonials/>}/>
            
            </Routes>
            </HashRouter>  */}


            
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button  className='searchbtn' variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    

    
  
  )
}
