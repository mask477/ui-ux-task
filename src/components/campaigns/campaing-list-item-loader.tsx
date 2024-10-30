import ContentLoader from 'react-content-loader'

export default function CampaignListItemLoader() {
    return (
        <ContentLoader
            speed={0.75}
            width={'100%'}
            height={91}
            viewBox="0 0 1500 100"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="0" ry="0" width="1920" height="91" />
        </ContentLoader>
    )
}
