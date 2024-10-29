import '@scss/components/campaigns-list.scss'
import CampaignListItem from './campaign-list-item'

export default function CampaignsList() {
    const list = [1, 2, 3, 4, 5]

    return (
        <div className="campaigns-list mt-4">
            <Header />
            {list.map((item) => (
                <CampaignListItem item={item} />
            ))}
        </div>
    )
}

const Header = () => {
    return (
        <div className="row header text-muted">
            <div className="col-5">
                <small>Campaign Name</small>
            </div>
            <div className="col-2">
                <small>Status</small>
            </div>
            <div className="col-1">
                <small>Recipients</small>
            </div>
            <div className="col-1">
                <small>Results</small>
            </div>
            <div className="col-1">
                <small>Leads</small>
            </div>
            <div className="col-2">
                <small>Amount Spent</small>
            </div>
        </div>
    )
}
