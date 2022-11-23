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
  handleProConClick,
  handleOptionsClick,
  options
}) {
  return (
    <div className='body-component'>
      <SubmitButton 
        pageType={pageType} 
        changePage={changePage}
        inputNumberOfUsers={inputNumberOfUsers}
        handleOptionsClick={handleOptionsClick}
        handleProConClick={handleProConClick}
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
      <SubmitButton pageType={pageType} changePage={changePage} />
    </div>
  );
}
