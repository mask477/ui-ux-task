type StatusType = 'running' | 'scheduled' | 'error'
type TagType = 'green' | 'purple' | 'yellow' | 'red' | 'gray'
type CampaignType = {
    id: number
    title: string
    createdBy: string
    fromDate: string
    toDate: string
    status: StatusType
    recipients: number
    results: number
    leads: number
    amountSpent: number
    tag: TagType
}
