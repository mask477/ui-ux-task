import AppNavbar from '@/components/app-navbar'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => (
        <>
            <AppNavbar />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})
