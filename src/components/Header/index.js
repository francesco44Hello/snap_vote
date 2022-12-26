import './index.css';
import PageHeader from '../PageHeader/index';

export default function Header({pageType, decisionTitle}) {
    return <>
        <PageHeader pageType={pageType} decisionTitle={decisionTitle} />
    </>
}