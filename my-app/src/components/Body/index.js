import "./index.css";
import SubmitButton from "../SubmitButton/index";
import SingleInputBox from "../SingleInputBox/index";
import MultipleChoiceInput from "../MultipleChoiceInput/index";
import AllOptions from "../AllOptions/index";
import Results from "../Results/index";

export default function Body({
  pageType,
  inputDecisionName,
  numberOfUsers,
  inputNumberOfUsers,
  changePage,
  inputOptions,
  inputProCon,
  handleOptionsClick,
  options
}) {
  return (
    <div>
      <SubmitButton 
        pageType={pageType} 
        changePage={changePage}
        inputNumberOfUsers={inputNumberOfUsers}
        handleOptionsClick={handleOptionsClick} 
      />
      <SingleInputBox
        pageType={pageType}
        inputDecisionName={inputDecisionName}
        numberOfUsers={numberOfUsers}
      />
      <MultipleChoiceInput 
        pageType={pageType} 
        inputOptions={inputOptions} 
        inputProCon={inputProCon}
        options={options}
        />
      <AllOptions pageType={pageType} />
      <Results pageType={pageType} />
    </div>
  );
}
