import React from 'react'
import { Drumstick } from 'lucide-react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from '@tanstack/react-router'

export default function AppNavbar() {
    return (
        <Navbar expand="lg" data-bs-theme="dark" bg="dark">
            <Navbar.Brand href="#home">
                <Drumstick />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/" as={Link}>
                        Dashboard
                    </Nav.Link>
                    <Nav.Link href="/campaigns" as={Link}>
                        Campaigns
                    </Nav.Link>
                    <Nav.Link href="/" as={Link}>
                        Recipients
                    </Nav.Link>
                    <Nav.Link href="/" as={Link}>
                        Audience
                    </Nav.Link>
                    <Nav.Link href="/" as={Link}>
                        Hygiene List
                    </Nav.Link>
                    <Nav.Link href="/" as={Link}>
                        Leads
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
