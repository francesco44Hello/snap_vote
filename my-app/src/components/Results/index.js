import './index.css';
import { v4 as uuidv4 } from 'uuid';

export default function Results({pageType, optionsArr}) {
	switch (pageType) {
		case "final-results":
			return <h1>TEST</h1>
		case "pros-cons-results":
			console.log(optionsArr)
			const newArr = optionsArr.sort((a,b) => (b.votes - a.vote))
			return newArr.map(option => <div key={uuidv4()}>
				<h1>{option.option}</h1>
				<p>{option.votes}</p>
			</div>)
		default:
			break;
	}
	// function randomiser() {

	// }

	// function weightedVoting() {

	// }

	// if (pageType === 'intro') {
	// 	return <div>

	// 	</div>
	// }
}