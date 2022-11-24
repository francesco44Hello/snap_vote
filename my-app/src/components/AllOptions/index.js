import './index.css';

import AllOptionsTable from '../AllOptionsTable/index';

export default function AllOptions({pageType, optionsArr, votersArr, proConVote}) {
    return <div data-testid='AllOptions'>
        
        <AllOptionsTable pageType={pageType} optionsArr={optionsArr} votersArr={votersArr} proConVote={proConVote} />
    </div>
}