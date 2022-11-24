import './index.css';

export default function SingleInputBox ({pageType, inputDecisionName, numberOfUsers}) {
    switch (pageType) {
		case "start": 
            return <input className='start-input' placeholder="0" onChange={numberOfUsers}></input>
		case "decision-input":
			return <input placeholder="What are you deciding on?" onChange={inputDecisionName}></input>
		default:
			break;
	}
}


