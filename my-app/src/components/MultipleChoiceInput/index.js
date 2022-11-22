import "./index.css";
import AddFieldButton from "../AddFieldButton/index";

export default function MultipleChoiceInput({
  pageType,
  changePage,
  inputOptions,
  inputProCon,
  options
}) {
  switch (pageType) {
    case "options-input":
      return (
        <div>
          <input
            placeholder="Enter an option..."
            name="input-1"
            onChange={inputOptions}
          ></input>
          <input
            placeholder="Enter an option..."
            name="input-2"
            onChange={inputOptions}
          ></input>
          <input
            placeholder="Enter an option..."
            name="input-3"
            onChange={inputOptions}
          ></input>
          <input
            placeholder="Enter an option..."
            name="input-4"
            onChange={inputOptions}
          ></input>
          {/* <AddFieldButton pageType={pageType} onClick={makeNewInput} /> */}
        </div>
      );
    case "pros-cons-input":
      return (
        <div>
          <input
            placeholder="Enter a pro or con..."
            name="pro-con-1"
            onChange={inputProCon}
          ></input>
          <input
            placeholder="Enter a pro or con..."
            name="pro-con-2"
            onChange={inputProCon}
          ></input>
          <input
            placeholder="Enter a pro or con..."
            name="pro-con-3"
            onChange={inputProCon}
          ></input>
          <input
            placeholder="Enter a pro or con..."
            name="pro-con-4"
            onChange={inputProCon}
          ></input>
          {/* <AddFieldButton pageType={pageType} onClick={makeNewInput} /> */}
        </div>
      );
    case "pros-cons-comment":
      return <h1>To do if time</h1>;
    case "weighted-vote-input":
      //   return <select>{options.map(option => <option>{option}</option>)}</select>;
      return <h1>To do if time</h1>;
    default:
      break;
  }
}
