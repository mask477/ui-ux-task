import { ChevronDown, Drumstick } from 'lucide-react'
import { Dropdown, Nav, Navbar } from 'react-bootstrap'
import { Link } from '@tanstack/react-router'
import { forwardRef, ReactNode } from 'react'

export default function AppNavbar() {
    return (
        <Navbar expand="lg" data-bs-theme="dark" bg="dark">
            <Navbar.Brand href="#home">
                <Drumstick />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/dashboard">
                        Dashboard
                    </Nav.Link>
                    <Nav.Link as={Link} to="/">
                        Campaigns
                    </Nav.Link>
                    <Nav.Link as={Link} to="/recipients">
                        Recipients
                    </Nav.Link>
                    <Nav.Link as={Link} to="/audience">
                        Audience
                    </Nav.Link>
                    <Nav.Link as={Link} to="/hygiene-list">
                        Hygiene List
                    </Nav.Link>
                    <Nav.Link as={Link} to="/leads">
                        Leads
                    </Nav.Link>
                </Nav>
                <Nav className="ms-auto me-2">
                    <Nav.Link as={Link} to="/support">
                        Support
                    </Nav.Link>
                </Nav>
                <Dropdown className="companies-dropdown">
                    <Dropdown.Toggle
                        variant="default"
                        id="dropdown-basic"
                        as={CustomToggle}
                    >
                        All Companies
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                            Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                            Something else
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar.Collapse>
        </Navbar>
    )
}

const CustomToggle = forwardRef(
    ({
        onClick,
    }: {
        children: ReactNode
        onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
    }) => (
        <div
            className="d-flex align-items-center"
            onClick={(e) => {
                e.preventDefault()
                onClick(e)
            }}
            style={{
                cursor: 'pointer',
            }}
        >
            <div
                className="bg-success rounded-circle text-white me-2"
                style={{
                    width: 40,
                    height: 40,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <strong>SB</strong>
            </div>
            <div className="d-flex flex-column text-white">
                <strong>Shawn Burst</strong>
                <small className="text-muted">Sales360</small>
            </div>
            <ChevronDown className="ms-2" color="white" />
        </div>
    )
)
