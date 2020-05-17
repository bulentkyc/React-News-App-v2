import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

function NavBar(props) {
    

    return (
        <Navbar bg="light" expand="md">
            <Navbar.Brand href="#home">React News App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown 
                    title="Categories" id="basic-nav-dropdown"
                >
                    <NavDropdown.Item
                        onClick={ () => props.click('business')}
                    >
                        business
                    </NavDropdown.Item>

                    <NavDropdown.Item
                        onClick={ () => props.click('entertainment')}
                    >
                        entertainment
                    </NavDropdown.Item>

                    <NavDropdown.Item onClick={ () => props.click('general')}>
                        general
                    </NavDropdown.Item>

                    <NavDropdown.Item onClick={ () => props.click('health')}>
                        health
                    </NavDropdown.Item>

                    <NavDropdown.Item onClick={ () => props.click('science')}>
                        science
                    </NavDropdown.Item>

                    <NavDropdown.Item onClick={ () => props.click('sports')}>
                        sports
                    </NavDropdown.Item>
                    
                    <NavDropdown.Item onClick={ () => props.click('technology')}>
                        technology
                    </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Country" id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={ () => props.click2('us')}>US</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => props.click2('de')}>Germany</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
