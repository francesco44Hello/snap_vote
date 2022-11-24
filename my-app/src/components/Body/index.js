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
  optionsArr,
  votersArr,
  proConVote,
  proConSubmitVote
}) {
  return (
    <div className='body-component' data-testid='body-component' >
    
      <SingleInputBox
        pageType={pageType}
        inputDecisionName={inputDecisionName}
        numberOfUsers={numberOfUsers}
      />
      <MultipleChoiceInput 
        pageType={pageType} 
        inputOptions={inputOptions} 
        inputProCon={inputProCon}
        optionsArr={optionsArr}
      />
      <AllOptions 
        pageType={pageType} 
        optionsArr={optionsArr} 
        votersArr={votersArr} 
        proConVote={proConVote}
      />
      <Results 
        pageType={pageType} 
      />
      <SubmitButton 
        pageType={pageType} 
        changePage={changePage}
        inputNumberOfUsers={inputNumberOfUsers}
        handleOptionsClick={handleOptionsClick}
        handleProConClick={handleProConClick}
        proConSubmitVote={proConSubmitVote}
      />
    </div>
  );
}
