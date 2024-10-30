import '@scss/components/campaigns-list.scss'
import CampaignListItem from './campaign-list-item'
import { Campaigns } from '@utils/constants'
import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import CampaignListItemLoader from './campaing-list-item-loader'

export default function CampaignsList() {
    const [loading, setLoading] = useState<boolean>(true)
    const [campaigns, setCampaigns] = useState<CampaignType[]>([])

    useEffect(() => {
        setTimeout(() => {
            setCampaigns(Campaigns)
            setLoading(false)
        }, 1500)
    }, [])

    return (
        <div className="campaigns-list mt-4">
            <Header />
            {loading
                ? Array.from({ length: 10 }, (_, i) => i + 1).map((item) => (
                      <div className="mb-2">
                          <CampaignListItemLoader key={item} />
                      </div>
                  ))
                : campaigns.map((campaign) => (
                      <CampaignListItem campaign={campaign} key={campaign.id} />
                  ))}
        </div>
    )
}

const Header = () => {
    return (
        <Row className="header text-muted mb-2 px-4">
            <Col sm={5}>
                <small>Campaign Name</small>
            </Col>
            <Col sm={2}>
                <small>Status</small>
            </Col>
            <Col className="text-end">
                <small>Recipients</small>
            </Col>
            <Col className="text-end">
                <small>Results</small>
            </Col>
            <Col className="text-end">
                <small>Leads</small>
            </Col>
            <Col sm={2} className="text-end">
                <small>Amount Spent</small>
            </Col>
        </Row>
    )
}
