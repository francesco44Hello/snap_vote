import './index.css';
import AllOptionsPicker from '../AllOptionsPicker/index';
import AllOptionsTable from '../AllOptionsTable/index';
import AllOptionsTest from '../AllOptionsTest/index';

export default function AllOptions({pageType}) {
    console.log(`AllOptions`);
    <div>
        {/* <AllOptionsPicker pageType={pageType} /> */}
        <AllOptionsTable pageType={pageType} />
        <AllOptionsTest />
    </div>
}