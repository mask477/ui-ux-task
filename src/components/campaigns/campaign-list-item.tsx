import { Badge, Card, CardBody, Col, Row } from 'react-bootstrap'
import '@scss/components/campaigns-list-item.scss'
import { Calendar, Ellipsis, Info, Zap } from 'lucide-react'
import { CurrencyFormatter } from '@/utils/functions'
import ContentLoader from 'react-content-loader'

export default function CampaignListItem({
    campaign,
}: {
    campaign: CampaignType
}) {
    const {
        id,
        tag,
        title,
        createdBy,
        fromDate,
        toDate,
        status,
        recipients,
        results,
        leads,
        amountSpent,
    } = campaign

    const formattedAmount = CurrencyFormatter.format(amountSpent)

    const image = `https://picsum.photos/20${id}/20${id}`

    return (
        <Card className={`campaign-list-item mb-2`}>
            <CardBody>
                <Row className={`tag tag-${tag}`}>
                    <Col sm={5}>
                        <div className="d-flex">
                            <img
                                src={image}
                                width={75}
                                height={75}
                                className="rounded"
                            />
                            <div className="d-flex flex-column ms-3 justify-content-between">
                                <h6 className="m-0">
                                    <strong>{title}</strong>
                                </h6>

                                <div className="d-flex flex-column">
                                    <p className="m-0">{createdBy}</p>
                                    <small className="text-muted m-0">
                                        {fromDate} - {toDate}
                                    </small>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <div className="list-attribute justify-content-start">
                            <div>
                                <CampaignBadge status={status} />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="list-attribute">
                            {recipients.toLocaleString()}
                        </div>
                    </Col>
                    <Col>
                        <div className="list-attribute">
                            {results.toLocaleString()}
                        </div>
                    </Col>
                    <Col>
                        <div className="list-attribute">
                            {leads.toLocaleString()}
                        </div>
                    </Col>
                    <Col sm={2}>
                        <div className="list-attribute">
                            {formattedAmount}
                            <Ellipsis className="ms-2" color={'#acacac'} />
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

const CampaignBadge = ({ status }: { status: StatusType }) => {
    let icon = <Zap size={15} className="me-2" />

    switch (status) {
        case 'error':
            icon = <Info size={15} className="me-2" />
            break

        case 'scheduled':
            icon = <Calendar size={15} className="me-2" />
            break
    }
    return (
        <Badge className={`campaign-badge ${status}`}>
            {icon}
            {status}
        </Badge>
    )
}
