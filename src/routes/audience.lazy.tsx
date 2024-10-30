import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/audience')({
    component: () => <div>Hello /dashboard!</div>,
})
