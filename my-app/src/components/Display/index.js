import Header from '../Header/index';
import Body from '../Body/index';
import { pageTypes } from '../../data/pageTypes';
import { useState, useEffect } from 'react';

export default function Display() {

	const [decisionTitle, setDecisionTitle] = useState("");
	const [index, setIndex] = useState(0);
	const [pageType, setPageType] = useState(pageTypes[index]);
	const [voters, setVoters] = useState(0);
	const [votersArr, setVotersArr] = useState([]);
	// const [votes, setVotes] = useState([]);
	const [votesArr, setVotesArr] = useState([])
	const [options, setOptions] = useState([])
	const [inputArr, setInputArr] = useState([])
	const [optionsArr, setOptionsArr] = useState([])
	const [proCon, setProCon] = useState([])
	// const [proOrConInput, setProOrConInput] = useState([])
	// const [proOrConSelect, setProOrConSelect] = useState([])
	const [winner, setWinner] = useState("")

	// useEffect(() => {
	//  	console.log("proCon: ", proCon)
	//  }, [proCon])
	
	//  useEffect(() => {
	// 	console.log("proOrConInput: ", proOrConInput)
	// }, [proOrConInput])

	// useEffect(() => {
	// 	console.log("proOrConSelect: ", proOrConSelect)
	// }, [proOrConSelect])

	// useEffect(() => {
	// 	console.log("voters: ", voters)
	// }, [voters])

	// useEffect(() => {
	// 	console.log("votersArr", votersArr)
	// }, [votersArr])

	// useEffect(() => {
	// 	console.log("pageType", pageType)
	// }, [pageType])

	// useEffect(() => {
	// 	console.log("inputArr", inputArr)
	// }, [inputArr])

	// useEffect(() => {
	// 	console.log("votesArr", votesArr)
	// }, [votesArr])

	// useEffect(() => {
	// 	console.log("options", options)
	// }, [options])

	// useEffect(() => {
	// 	console.log("optionsArr", optionsArr)
	// }, [optionsArr])

	function changePage() {
		setPageType(pageTypes[index + 1]);
		setIndex(index+1)
	}

	function numberOfUsers(event){
		setVoters(Number(event.target.value))
	}

	function inputNumberOfUsers(){
		let newArr = [];
		for (let i = 0; i < voters; i++){
			newArr = [...newArr, {name: i + 1, vote: "", voted: false}]
		}
		setVotersArr(newArr);
	}

	function inputDecisionName(event){
		setDecisionTitle(event.target.value)
	}

	function inputOptions(event){
		let myObj = {};
		myObj[event.target.name] = event.target.value;
		setInputArr([...inputArr, myObj]);
	}

	useEffect(() => {
		let map1 = new Map ();	
		inputArr.map(object => map1.set(Object.keys(object)[0], Object.values(object)[0]));
		console.log("map1", map1)
		const arr = Array.from(map1, (key, value) => {
		 	return key[1];
		});
		console.log(arr)
		setOptions(arr);
	}, [inputArr])

	function handleOptionsClick(){
		let newArr = [];
		for (let i = 0; i < options.length; i++){
			newArr = [...newArr, {
				option: options[i],
				votes: 0,
				eliminated: false,
				options: {
					pros: [],
					cons: []
				}
			}]
			setOptionsArr(newArr)
		}
	}

	function countVotes(){
		console.log("countVotes", votesArr)
	}

	let proOrConInput = []

	function proOrCon(event){
		let myObj = {};
		myObj[event.target.name] = event.target.value;
		proOrConInput = [...proOrConInput, myObj]
		const map2 = new Map();
		proOrConInput.map(object => map2.set(Object.keys(object)[0], Object.values(object)[0]))
		proOrConInput = Array.from(map2, (key, value) => {
		  	return {[key[0]]:key[1]};
		});
	}

	let proConContent = [];

	function inputProCon(event){
		// console.log(event.target.value)
		let myObj = {};
		myObj[event.target.name] = event.target.value
		console.log(myObj)
		proConContent = [...proConContent, myObj]
		const map2 = new Map();
		proConContent.map(object => map2.set(Object.keys(object)[0], Object.values(object)[0]))
		proConContent = Array.from(map2, (key, value) => {
		  	return {[key[0]]:key[1]};
		});
	}

	function handleProConClick(){
		console.log(proOrConInput)
		console.log(proConContent)
		let newOptions = [...optionsArr]
		console.log("new options", newOptions)
		for (let i = 0; i < proOrConInput.length; i++){
			for (let j = 0; j < proConContent.length; j++){
				if (Object.keys(proOrConInput[i])[0] === Object.keys(proConContent[j])[0]){
					console.log("match")
					let proOrCon = Object.values(proOrConInput[i])[0]
					let compare = Object.keys(proOrConInput[i])[0].replace(/["0-9"]/g, "")
					for (let k = 0; k < newOptions.length; k++){
						if (newOptions[k].option === compare){
							console.log(proOrCon)
							if (proOrCon === "Pro"){
								let newPro = Object.values(proConContent[j])[0]
								let newPros = [...newOptions[k].options.pros, newPro]
								let newObj = {...newOptions[k].options, pros: newPros}
								let newOption = {...newOptions[k], options: newObj}
								newOptions = [...newOptions.slice(0, k), newOption, ...newOptions.slice(k + 1)]
								console.log("newOptions", newOptions)
							}
							if (proOrCon === "Con"){
								let newCon = Object.values(proConContent[j])[0]
								let newCons = [...newOptions[k].options.cons, newCon]
								let newObj = {...newOptions[k].options, cons: newCons}
								let newOption = {...newOptions[k], options: newObj}
								newOptions = [...newOptions.slice(0, k), newOption, ...newOptions.slice(k + 1)]
								console.log("newOptions", newOptions)
							}
						}
					}
				}
			}
		}
		setOptionsArr(newOptions)
	}

	let votes = [];

	function proConVote(event){
		let myObj = {};
		myObj[event.target.name] = event.target.value;
		votes = [...votes, myObj]
		const map2 = new Map();
		votes.map(object => map2.set(Object.keys(object)[0], Object.values(object)[0]))
		votes = Array.from(map2, (key, value) => {
		  	return {[key[0]]:key[1]};
		});
	}

	function proConSubmitVote(){
		let newArr = [...optionsArr];
		console.log("newArr", newArr)
		for (let i = 0; i < votes.length; i++){
			for (let j = 0; j < newArr.length; j++){
				console.log("Object.values(votes[i])[0]", Object.values(votes[i])[0])
				console.log("newArr[j].option", newArr[j].option)
				if (Object.values(votes[i])[0] === newArr[j].option){
					const newObj = {...newArr[j], votes: newArr[j].votes + 1}
					newArr = [...newArr.slice(0, j), newObj, ...newArr.slice(j + 1)]
				}
			}
		}
		setOptionsArr(newArr)
	}

	return (
		<div className='Display' data-testid='Display-components'>
			<Header 
			decisionTitle={decisionTitle}
			pageType={pageType}
			/>
			<Body 
				decisionTitle={decisionTitle}
				pageType={pageType} 
				changePage={changePage}  
				inputDecisionName={inputDecisionName}
				numberOfUsers={numberOfUsers}
				inputNumberOfUsers={inputNumberOfUsers} 
				inputOptions={inputOptions}
				inputProCon={inputProCon}
				handleProConClick={handleProConClick}
				handleOptionsClick={handleOptionsClick}
				optionsArr={optionsArr}
				votersArr={votersArr}
				proConVote={proConVote}
				proConSubmitVote={proConSubmitVote}
				countVotes={countVotes}
				proOrCon={proOrCon}
			/>
		</div>    
	);
}