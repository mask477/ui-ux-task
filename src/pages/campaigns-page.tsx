import CampaignsList from '@/components/campaigns/campaigns-list'
import Header from '@/components/campaigns/header'
import SubNav from '@/components/campaigns/sub-nav'
import { Container } from 'react-bootstrap'

export default function CampaignsPage() {
    return (
        <div>
            <SubNav />
            <Container className="py-4">
                <Header />

                <CampaignsList />
            </Container>
        </div>
    )
}
