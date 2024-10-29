import { useCallback, useMemo, useState } from 'react'
import { Nav } from 'react-bootstrap'

import '@/scss/components/companies-header-tabs.scss'

type MenuItem = {
    label: string
    active: boolean
}

export default function HeaderTabs() {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([
        {
            label: 'Active',
            active: true,
        },
        {
            label: 'Draft',
            active: false,
        },
        {
            label: 'Completed',
            active: false,
        },
        {
            label: 'Archived',
            active: false,
        },
    ])

    const onClickNavItem = useCallback(
        (selectedKey: string | null) => {
            setMenuItems(
                menuItems.map((item) => ({
                    label: item.label,
                    active: selectedKey == item.label,
                }))
            )
        },
        [menuItems]
    )

    const activeKey = useMemo(() => {
        const activeItem = menuItems.find((item) => item.active)
        return activeItem?.label
    }, [menuItems])

    return (
        <Nav
            activeKey={activeKey}
            onSelect={(selectedKey) => onClickNavItem(selectedKey)}
            className="companies-header-tabs"
        >
            {menuItems.map((item) => (
                <Nav.Item key={item.label}>
                    <Nav.Link eventKey={item.label}>{item.label}</Nav.Link>
                </Nav.Item>
            ))}
        </Nav>
    )
}
