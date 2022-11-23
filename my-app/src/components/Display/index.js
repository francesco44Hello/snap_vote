import Header from '../Header/index';
import Body from '../Body/index';
import { pageTypes } from '../../data/pageTypes';
import { useState } from 'react';

export default function Display() {

	const [decisionTitle, setDecisionTitle] = useState("");
	const [index, setIndex] = useState(0);
	const [pageType, setPageType] = useState(pageTypes[index]);
	const [voters, setVoters] = useState(0);
	const [votersArr, setVotersArr] = useState([]);

	function numberOfUsers(event){
		setVoters(Number(event.target.value))
	}

	function inputNumberOfUsers(){
		console.log(voters)
		let newArr = [];
		for (let i = 0; i < voters; i++){
			let newVoter = {name: i + 1, vote: "", voted: false}
			newArr.push(newVoter)
		}
		setVotersArr([...votersArr, ...newArr]);
		console.log(votersArr);
		// console.log(newVoter);
		// setVotersArr([...votersArr, newVoter])
		// console.log(votersArr)
	}

	// // Type of page
	// let option1 = "";
	// let option2 = "";
	// let option3 = "";
	// let option4 = "";
	// let procon1 = "";
	// let procon2 = "";
	// let procon3 = "";
	// let procon4 = "";
	// // const [voters, setVoters] = useState(0);
	// let votersArr = [];
	// const [votersArray, setVotersArray] = useState([]);
	// const [optionsArr, setOptionsArr] = useState([])
	 const options = []
	// const [option, setOption] = useState("")
	// const [proCon, setProCon] = useState([]);

	function inputDecisionName(event){
		setDecisionTitle(event.target.value)
	}

	function inputOptions(event){
		
	}

	function handleOptionsClick(){
		// options.push(option1, option2, option3, option4)
	}

	function inputProCon(event){
		// if (event.target.name === "pro-con-1"){
		// 	procon1 = event.target.value;
		// }
		// if (event.target.name === "pro-con-2"){
		// 	procon2 = event.target.value;
		// }
		// if (event.target.name === "pro-con-3"){
		// 	procon3 = event.target.value;
		// }
		// if (event.target.name === "pro-con-4"){
		// 	procon4 = event.target.value;
		// }
		// setProCon([...procon1, ...procon2, ...procon3, ...procon4])
	}

	function changePage() {
		setPageType(pageTypes[index + 1]);
		setIndex(index+1)
	}

	return (
		<div>
			<Header decisionTitle={decisionTitle} pageType={pageType}/>
			<Body 
				decisionTitle={decisionTitle}
				pageType={pageType} 
				changePage={changePage}  
				inputDecisionName={inputDecisionName}
				numberOfUsers={numberOfUsers}
				inputNumberOfUsers={inputNumberOfUsers} 
				inputOptions={inputOptions}
				inputProCon={inputProCon}
				handleOptionsClick={handleOptionsClick}
				options={options}
			/>
		</div>    
	);
}