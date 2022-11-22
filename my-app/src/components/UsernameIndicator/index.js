import './index.css';

export default function UsernameIndicator({pageType}) {
    switch (pageType) {
		case "pros-cons-input":
			return <p>User1</p>
		case "pros-cons-comment":
			return <p>User1</p>
		case "pros-cons-vote":
			return <p>User1</p>
		case "weighted-vote-input":
			return <p>User1</p>
		default:
			break;
	}
}