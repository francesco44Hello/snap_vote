import "./index.css";
import SubmitButton from "../SubmitButton/index";
import SingleInputBox from "../SingleInputBox/index";
import MultipleChoiceInput from "../MultipleChoiceInput/index";
import AllOptions from "../AllOptions/index";
import Results from "../Results/index";

export default function Body({
  pageType,
  inputDecisionName,
  inputNumberOfUsers,
  changePage,
  inputOptions,
  inputProCon,
  options
}) {
  return (
    <div className='body-component'>
      <SingleInputBox
        pageType={pageType}
        inputDecisionName={inputDecisionName}
        inputNumberOfUsers={inputNumberOfUsers}
      />
      <MultipleChoiceInput 
        pageType={pageType} 
        inputOptions={inputOptions} 
        inputProCon={inputProCon}
        options={options}
        />
      <AllOptions pageType={pageType} />
      <Results pageType={pageType} />
      <SubmitButton pageType={pageType} changePage={changePage} />
    </div>
  );
}
