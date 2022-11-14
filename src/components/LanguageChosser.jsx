import React from 'react'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'

function LanguageChosser() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (
        <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
            
            <NavDropdown title="Dropdown" id="nav-dropdown">
                <NavDropdown.Item eventKey="1">Spanisch</NavDropdown.Item>
                <NavDropdown.Item eventKey="2">Deutsch</NavDropdown.Item>
                <NavDropdown.Item eventKey="3">Englisch</NavDropdown.Item>
                <NavDropdown.Item eventKey="4">French</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}


export default LanguageChosser