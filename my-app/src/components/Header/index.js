import './index.css';
import CountdownTimer from '../CountdownTimer/index';
import PageHeader from '../PageHeader/index';
import UsernameIndicator from '../UsernameIndicator/index';

export default function Header({pageType}) {
    return (<div>
        <CountdownTimer pageType={pageType} />
        <PageHeader pageType={pageType} />
        <UsernameIndicator pageType={pageType} />
    </div>)
}