import { Search } from 'lucide-react'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import HeaderTabs from './header-tabs'

export default function Header() {
    return (
        <div className="row justify-content-between">
            <div className="col-6">
                <div className="d-flex">
                    <Button
                        variant="light"
                        className="border  border-secondary-subtle"
                    >
                        <Search />
                    </Button>
                    <HeaderTabs />
                </div>
            </div>

            <div className="col-4">
                <div className="d-flex gap-2">
                    <StatusSelect />
                    <LastModifiedSelect />
                </div>
            </div>
        </div>
    )
}

const StatusSelect = () => {
    return (
        <Form.Select aria-label="Default select example">
            <option>All Status</option>
            <option value="running">Running</option>
            <option value="scheduled">Scheduled</option>
        </Form.Select>
    )
}

const LastModifiedSelect = () => {
    return (
        <Form.Select aria-label="Default select example">
            <option>Last Modified</option>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
        </Form.Select>
    )
}
