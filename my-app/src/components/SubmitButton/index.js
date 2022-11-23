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
        return <button className='submit' onClick={changePage}>Submit</button>
      case "options-input":
        return <button className='submit' onClick={optionsSubmit}>Submit</button>
      case "pros-cons-input":
        return <button className='submit' onClick={proConSubmit}>Submit</button>
      case "pros-cons-comment":
        return <button className='submit' onClick={changePage}>Submit</button>
      case "pros-cons-vote":
        return <button className='submit' onClick={changePage}>Submit</button>
      case "pros-cons-results":
        return <button className='submit' onClick={changePage}>Submit</button>
      case "weighted-vote-input":
        return <button className='submit' onClick={changePage}>Submit</button>
      case "weighted-vote-results":
        return <button className='submit' onClick={changePage}>Submit</button>
      case "randomiser":
        return <button className='submit' onClick={changePage}>Submit</button>
      case "final-results":
        return <button className='submit' onClick={changePage}>Submit</button>		
      default:
        break;
	  }
    
}
