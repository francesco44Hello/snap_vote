import './index.css';
import AllOptionsPicker from '../AllOptionsPicker/index';
import AllOptionsTable from '../AllOptionsTable/index';

export default function AllOptions({pageType, optionsArr, votersArr, proConVote}) {
    return <div>
        <AllOptionsPicker pageType={pageType} />
        <AllOptionsTable pageType={pageType} optionsArr={optionsArr} votersArr={votersArr} proConVote={proConVote} />
    </div>
}