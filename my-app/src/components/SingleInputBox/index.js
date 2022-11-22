import './index.css';

export default function SingleInputBox ({pageType, inputDecisionName}) {
    if (pageType === "decision-input"){
        return <input placeholder="What are you deciding on?" onChange={inputDecisionName}></input>
    }
}


