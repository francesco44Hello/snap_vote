import './index.css';

export default function SubmitFunction({pageType, changePage, inputNumberOfUsers, handleOptionsClick, handleProConClick}) {

	function optionsSubmit(){
		handleOptionsClick();
		changePage();
	}

	function numberOfUsersSubmit(){
		inputNumberOfUsers();
		changePage();
	}

	function proConSubmit(){
		handleProConClick();
		changePage();
	}

    switch (pageType) {
		case "start": 
			return <button onClick={numberOfUsersSubmit}>Submit</button>
		case "decision-input":
			return <button onClick={changePage}>Submit</button>
        case "options-input":
            return <button onClick={optionsSubmit}>Submit</button>
		case "pros-cons-input":
			return <button onClick={proConSubmit}>Submit</button>
		case "pros-cons-comment":
			return <button onClick={changePage}>Submit</button>
		case "pros-cons-vote":
			return <button onClick={changePage}>Submit</button>
		case "pros-cons-results":
			return <button onClick={changePage}>Submit</button>
		case "weighted-vote-input":
			return <button onClick={changePage}>Submit</button>
		case "weighted-vote-results":
			return <button onClick={changePage}>Submit</button>
		case "randomiser":
			return <button onClick={changePage}>Submit</button>
		case "final-results":
			return <button onClick={changePage}>Submit</button>		
        default:
			break;
	}
    
}
