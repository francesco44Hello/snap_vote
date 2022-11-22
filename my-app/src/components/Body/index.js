import './index.css';
import AddFieldButton from '../AddFieldButton/index';
import SubmitButton from '../SubmitButton/index';
import SingleInputBox from '../SingleInputBox/index';
import MultipleChoiceInput from '../MultipleChoiceInput/index';
import AllOptions from '../AllOptions/index';
import Results from '../Results/index';


export default function Body({pageType, inputDecisionName, inputNumberOfUsers, changePage}) {
    return (<div>
        <AddFieldButton pageType={pageType} />
        <SubmitButton pageType={pageType} changePage={changePage} />
        <SingleInputBox pageType={pageType} inputDecisionName={inputDecisionName} inputNumberOfUsers={inputNumberOfUsers} />
        <MultipleChoiceInput pageType={pageType} />
        <AllOptions pageType={pageType} />
        <Results pageType={pageType} />
    </div> )
}
