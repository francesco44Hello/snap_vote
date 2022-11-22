import Header from '../Header/index';
import Body from '../Body/index';
import {useState} from 'react';

const pageTypes = [
	"start",
	"decision-input",
	"options-input",
	"pros-cons-input",
	"pros-cons-comment",
	"pros-cons-vote",
	"pros-cons-results",
	"weighted-vote-input",
	"weighted-vote-results",
	"randomiser",
	"final-results"
]

export default function Display() {
	const [decisionTitle, setDecisionTitle] = useState("");
	const pageType = "options-input";

	function inputDecisionName(event){
		setDecisionTitle(event.target.value)
	}

	// const [pageType, setPageType] = useState(pageTypes[0]); 

	// function changePage(whatPage) {
	// 	setPageType(whatPage);
	// }

	return (
		<div>
			<Header decisionTitle={decisionTitle}/>
			<Body decisionTitle={decisionTitle} inputDecisionName={inputDecisionName} pageType={pageType}/>
		</div>    
	);
}