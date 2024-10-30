import CampaignsPage from '@/pages/campaigns-page'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
    component: CampaignsPage,
})
