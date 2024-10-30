import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/hygiene-list')({
  component: () => <div>Hello /hygiene-list!</div>,
})
