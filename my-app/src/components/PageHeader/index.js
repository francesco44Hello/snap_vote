import './index.css';

function PageHeader({pageType}) {
	if (pageType === 'inputOptions') {
		return <input>Test</input>
	} else {
		return <h1>Test</h1>
	}
}