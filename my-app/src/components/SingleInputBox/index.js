import './index.css';

export default function SingleInputBox ({pageType, inputDecisionName, numberOfUsers}) {
    switch (pageType) {
		case "start": 
            return <input placeholder="Enter the number of voters..." onChange={numberOfUsers}></input>
		case "decision-input":
			return <input placeholder="What are you deciding on?" onChange={inputDecisionName}></input>
		default:
			break;
	}
}


