import './index.css';
import AllOptionsPicker from '../AllOptionsPicker/index';
import AllOptionsTable from '../AllOptionsTable/index';

export default function AllOptions({pageType}) {
    return <div>
        <AllOptionsPicker pageType={pageType} />
        <AllOptionsTable pageType={pageType} />
    </div>
}