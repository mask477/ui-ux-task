import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/recipients')({
    component: () => <div>Hello /recipients!</div>,
})
