import './index.css';
import {useState} from "react";

export default function PageHeader({decisionTitle, pageType}) {
	const [header, setHeader] = useState(decisionTitle)

	switch (pageType) {
		case "start": 
			return <h1>How many voters?</h1>
		case "decision-input":
			return <h1>What are you voting on?</h1>
		case "options-input":
			return <input defaultValue={header} onChange={handleChange}></input>
		case "pro-cons-input":
			return <h1>Pros/Cons</h1>
		case "pros-cons-comment":
			return <h1>Comment on any pros/cons</h1>
		case "pros-cons-vote":
			return <h1>Vote on options</h1>
		case "pros-cons-results":
			return <h1>Results</h1>
		case "weighted-vote-input":
			return <h1>Weighted vote input</h1>
		case "weighted-vote-results":
			return <h1>Weighted vote results</h1>
		case "randomiser":
			return <h1>Randomiser</h1>
		case "final-results":
			return <h1>Final results</h1>
		default:
			return <h1>DefaultPageHeader</h1>
	}

	function handleChange(event){
		setHeader(event.target.value);
	}
}