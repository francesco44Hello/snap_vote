import './index.css';

export default function AddFieldButton({pageType}) {

	switch (pageType) {
		case "options-input":
			return <button>+1</button>
		case "pro-cons-input":
			return <button>+1</button>
		case "pros-cons-comment":
			return <button>+1</button>
		default:
			break;
	}
}