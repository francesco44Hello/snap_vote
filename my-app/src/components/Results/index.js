import './index.css';
import { v4 as uuidv4 } from 'uuid';

export default function Results({pageType, optionsArr}) {
	switch (pageType) {
		case "pros-cons-results":
			const newArr = optionsArr.sort((a,b) => (b.votes - a.votes))
			return <div className="results-container" data-testid="results-container" >{newArr.map(option => <div key={uuidv4()} className="results">
			<h1>{option.option}</h1>
			<h1>{option.votes}</h1>
		</div>)}</div>
		default:
			break;
	}
}