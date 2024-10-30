import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/leads')({
  component: () => <div>Hello /leads!</div>,
})
