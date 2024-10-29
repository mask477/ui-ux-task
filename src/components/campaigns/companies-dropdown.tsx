import { ReactNode } from '@tanstack/react-router'
import React, { LegacyRef } from 'react'
import { Dropdown } from 'react-bootstrap'

import '@scss/components/companies-dropdown.scss'
import { ChevronDown } from 'lucide-react'

export default function CompaniesDropdown() {
    return (
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
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

const CustomToggle = React.forwardRef(
    (
        {
            children,
            onClick,
        }: {
            children: ReactNode
            onClick: (
                e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
            ) => void
        },
        ref: LegacyRef<HTMLAnchorElement>
    ) => (
        <a
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault()
                onClick(e)
            }}
            className="dropdown-toggle"
        >
            {children}
            <ChevronDown className="ms-2" />
        </a>
    )
)
