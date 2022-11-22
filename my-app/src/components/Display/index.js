import { useState } from "react";
function Display() {

	const [pageType, setPageType] = useState('Start'); 

	function changePage(whatPage) {
		setPageType(whatPage);
	}

	return (
		<div>
			
		</div>    
	);
}


function DisplayOptionVote({pageType}) {

	function randomiser() {

	}

	function weightedVoting() {

	}

	if (pageType === 'intro') {
		return <div>

		</div>
	}
}

function PageHeader({pageType}) {
	if (pageType === 'inputOptions') {
		return <input>Test</input>
	} else {
		return <h1>Test</h1>
	}
}

function AddFieldButton({pageType}) {
	if (pageType === 'optionsProsConsInput') {
		
	}
}

export default Display;