import Header from '../Header/index';
import Body from '../Body/index';
import { pageTypes } from '../../data/pageTypes';
import {useState} from 'react';

export default function Display() {
	// Type of page
	let option1 = "";
	let option2 = "";
	let option3 = "";
	let option4 = "";
	const [index, setIndex] = useState(0);
	const [pageType, setPageType] = useState(pageTypes[0]); 
	const [decisionTitle, setDecisionTitle] = useState("");
	const [voters, setVoters] = useState(0);
	const options = [];
	const [proCon, setProCon] = useState([]);

	function inputDecisionName(event){
		setDecisionTitle(event.target.value)
	}

	function inputNumberOfUsers(event){
		setVoters(event.target.value)
	}

	function inputOptions(event){
		if (event.target.name === "input-1"){
			option1 = event.target.value;
		}
		if (event.target.name === "input-2"){
			option2 = event.target.value;
		}
		if (event.target.name === "input-3"){
			option3 = event.target.value;
		}
		if (event.target.name === "input-4"){
			option4 = event.target.value;
		}
	}

	function handleOptionsClick(){
		options.push(option1, option2, option3, option4)
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

	function changePage() {
		setPageType(pageTypes[index + 1]);
		setIndex(index+1)
		console.log(pageType)
	}

	return (
		<div>
			<Header decisionTitle={decisionTitle} pageType={pageType}/>
			<Body 
				decisionTitle={decisionTitle} 
				inputDecisionName={inputDecisionName} inputNumberOfUsers={inputNumberOfUsers} 
				pageType={pageType} 
				changePage={changePage} 
				inputOptions={inputOptions}
				inputProCon={inputProCon}
				handleOptionsClick={handleOptionsClick}
				options={options}
			/>
		</div>    
	);
}