import "./index.css";
import AddFieldButton from "../AddFieldButton/index";

export default function MultipleChoiceInput({
  pageType,
  changePage,
  inputOptions,
  inputProCon,
  optionsArr,
}) {
  switch (pageType) {
    case "options-input":
      return (
        <div className="MultipleChoiceInput">
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
      console.log(optionsArr)
      return <div>TEST</div>
      // console.log("HI", optionsArr)
      // return (<div>{optionsArr.map((el) => {
      //   console.log(el)
      //   return <div className="pro-con-container">
      //     <h1>TEST</h1>
      //     <div className="pro-con">
      //       <select>
      //         <option>Pro</option>
      //         <option>Con</option>
      //       </select>
      //       <input
      //         placeholder="Enter a pro or con..."
      //         name="pro-con-1"
      //         onChange={inputProCon}
      //       ></input>
      //     </div>
      //   <div className="pro-con">
      //       <select>
      //         <option>Pro</option>
      //         <option>Con</option>
      //       </select>
      //       <input
      //         placeholder="Enter a pro or con..."
      //         name="pro-con-1"
      //         onChange={inputProCon}
      //       ></input>
      //     </div>
      //   <div className="pro-con">
      //       <select>
      //         <option>Pro</option>
      //         <option>Con</option>
      //       </select>
      //       <input
      //         placeholder="Enter a pro or con..."
      //         name="pro-con-1"
      //         onChange={inputProCon}
      //       ></input>
      //     </div>
      //   <div className="pro-con">
      //       <select>
      //         <option>Pro</option>
      //         <option>Con</option>
      //       </select>
      //       <input
      //         placeholder="Enter a pro or con..."
      //         name="pro-con-1"
      //         onChange={inputProCon}
      //       ></input>
      //     </div>
      //   </div>;
      // })}</div>
      // );
    case "pros-cons-comment":
      return <h1>To do if time</h1>;
    case "weighted-vote-input":
      //   return <select>{options.map(option => <option>{option}</option>)}</select>;
      return <h1>To do if time</h1>;
    default:
      break;
  }
}
          /* <AddFieldButton pageType={pageType} onClick={makeNewInput} /> */