import "./index.css";
import { v4 as uuidv4 } from 'uuid';
import AddFieldButton from "../AddFieldButton/index";

export default function MultipleChoiceInput({
  pageType,
  changePage,
  inputOptions,
  inputProCon,
  optionsArr,
  proOrCon
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
      return <div className='pros-cons-input1'>{optionsArr.map((el) =>
        <div key={uuidv4()}>
        <h1>{el.option}</h1>
         <div className="pro-con">
           <select 
            onChange={proOrCon}
            name={el.option + 1}
           >
             <option>Pro or con?</option>
             <option>Pro</option>
             <option>Con</option>
           </select>
           <input
             placeholder="Enter a pro or con..."
             name={el.option + 1}
             onChange={inputProCon}
           ></input>
         </div>
         <div className="pro-con">
         <select 
            onChange={proOrCon}
            name={el.option + 2}
           >
             <option>Pro or con?</option>
             <option>Pro</option>
             <option>Con</option>
           </select>
           <input
            placeholder="Enter a pro or con..."
            name={el.option + 2}
            onChange={inputProCon}
           ></input>
         </div>
         <div className="pro-con">
         <select 
            onChange={proOrCon}
            name={el.option + 3}
           >
             <option>Pro or con?</option>
             <option>Pro</option>
             <option>Con</option>
           </select>
           <input
            placeholder="Enter a pro or con..."
            name={el.option + 3}
             onChange={inputProCon}
           ></input>
         </div>
         <div className="pro-con">
         <select 
            onChange={proOrCon}
            name={el.option + 4}
           >
             <option>Pro or con?</option>
             <option>Pro</option>
             <option>Con</option>
           </select>
           <input
            placeholder="Enter a pro or con..."
             name={el.option + 4}
             onChange={inputProCon}
           ></input>
         </div>
    </div>)}
    </div>;
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