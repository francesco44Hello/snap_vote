import './index.css';
import {useState} from "react";

export default function PageHeader({decisionTitle, pageType}) {
	const [header, setHeader] = useState(decisionTitle)

	if (pageType === 'options-input') {
		return <input defaultValue={header} onChange={handleChange}></input>
	} else {
		return <h2>{decisionTitle}</h2>
	}

	function handleChange(event){
		setHeader(event.target.value);
	}
}

// if (pageType === 'inputOptions') {
// 	return <input value={headerName}>Test</input>
// } else {
// 	return <h1>Test</h1>
// }