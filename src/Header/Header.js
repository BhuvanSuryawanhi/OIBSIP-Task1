import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
    return (
        <Navbar className="bg-primary">
          <Container>
            <Navbar.Brand href="#home" className='text-white'>R3 Systems Pvt. Ltd.</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className='text-white'>
                Call Us: <a className='text-white' href="#login">82008787667</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
