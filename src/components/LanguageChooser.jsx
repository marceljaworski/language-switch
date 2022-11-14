import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext } from 'react';
import { LanguageContext } from '../context/Context';

function LanguageChooser() {
    const { chooseLanguage } = useContext(LanguageContext)
    const handleSelect = (eventKey) => {
        chooseLanguage(eventKey)
    };

    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Nav className="me-auto" onSelect={handleSelect}>
              <NavDropdown title="Languages" id="basic-nav-dropdown">
                <NavDropdown.Item eventKey="1">Spanisch - </NavDropdown.Item>
                <NavDropdown.Item eventKey="2">Deutsch - </NavDropdown.Item>
                <NavDropdown.Item eventKey="3">Englisch - </NavDropdown.Item>
                <NavDropdown.Item eventKey="4">French</NavDropdown.Item>
               
              </NavDropdown>
            </Nav>
          
        </Container>
      </Navbar>


        // <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
            
           
        // </Nav>
    )
}


export default LanguageChooser