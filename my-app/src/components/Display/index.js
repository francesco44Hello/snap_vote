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
	const [voters, setVoters] = useState(0);
	const [options, setOptions] = useState([]);
	const [proCon, setProCon] = useState([]);

	function inputDecisionName(event){
		setDecisionTitle(event.target.value)
	}

	function inputNumberOfUsers(event){
		setVoters(event.target.value)
	}

	function inputOptions(event){
		if (event.target.name === "input-1"){
			setOptions([...options, event.target.value]);
		}
		if (event.target.name === "input-2"){
			setOptions([...options, event.target.value]);
		}
		if (event.target.name === "input-3"){
			setOptions([...options, event.target.value]);
		}
		if (event.target.name === "input-4"){
			setOptions([...options, event.target.value]);
		}
	}

	function inputProCon(event){
		if (event.target.name === "pro-con-1"){
			setProCon([...proCon, event.target.value]);
		}
		if (event.target.name === "pro-con-2"){
			setProCon([...proCon, event.target.value]);
		}
		if (event.target.name === "pro-con-3"){
			setProCon([...proCon, event.target.value]);
		}
		if (event.target.name === "pro-con-4"){
			setProCon([...proCon, event.target.value]);
		}
	}

	// Type of page
	const [pageType, setPageType] = useState(pageTypes[0]); 

	function changePage() {
		setPageType(pageType + 1);
	}

	return (
		<div>
			<Header decisionTitle={decisionTitle}/>
			<Body 
				decisionTitle={decisionTitle} 
				inputDecisionName={inputDecisionName} inputNumberOfUsers={inputNumberOfUsers} 
				pageType={pageType} 
				changePage={changePage} 
				inputOptions={inputOptions}
				inputProCon={inputProCon}
				options={options}
			/>
		</div>    
	);
}