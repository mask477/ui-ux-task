import { Building2 } from 'lucide-react'
import CompaniesDropdown from './companies-dropdown'

import '@scss/components/companies-subnav.scss'
import { Button } from 'react-bootstrap'

export default function SubNav() {
    return (
        <div className="campaigns-sub-nav">
            <div className="d-flex align-items-center">
                <Building2 className="me-2" />
                <CompaniesDropdown />
            </div>
            <div className="d-flex gap-2">
                <Button variant="outline-primary">Explore Templates</Button>
                <Button>New Campaign</Button>
            </div>
        </div>
    )
}
