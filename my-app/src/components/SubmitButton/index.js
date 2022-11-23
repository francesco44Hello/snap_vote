import './index.css';

export default function SubmitButton({pageType, changePage}) {

    switch (pageType) {
		case "start": 
			return <button className='submit' onClick={changePage}>Submit</button>
		case "decision-input":
			return <button className='submit' onClick={changePage}>Submit</button>
        case "options-input":
            return <button className='submit' onClick={changePage}>Submit</button>
		case "pro-cons-input":
			return <button className='submit' onClick={changePage}>Submit</button>
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
