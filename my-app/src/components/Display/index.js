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

	function inputDecisionName(event){
		setDecisionTitle(event.target.value)
	}

	// Type of page
	const [pageType, setPageType] = useState(pageTypes[0]); 

	function changePage() {
		setPageType(pageType + 1);

	}

	return (
		<div>
			<Header decisionTitle={decisionTitle}/>
			<Body decisionTitle={decisionTitle} inputDecisionName={inputDecisionName} pageType={pageType} changePage={changePage} />
		</div>    
	);
}