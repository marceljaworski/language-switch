import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext } from 'react';
import { LanguageContext } from '../context/Context';

function LanguageChooser() {
    const { chooseLanguage } = useContext(LanguageContext)
    const handleSelect = (eventKey) => {
        chooseLanguage(eventKey)
    };

    return (
        <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
            
            <NavDropdown title="Dropdown" id="nav-dropdown">
                <NavDropdown.Item eventKey="1">Spanisch</NavDropdown.Item>
                <NavDropdown.Item eventKey="2">DE Deutsch</NavDropdown.Item>
                <NavDropdown.Item eventKey="3">Englisch</NavDropdown.Item>
                <NavDropdown.Item eventKey="4">French</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}


export default LanguageChooser