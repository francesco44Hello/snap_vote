import Header from '../Header/index';
import Body from '../Body/index';
import useState from 'react';

export default function Display() {

	const [pageType, setPageType] = useState('Start'); 

	function changePage(whatPage) {
		setPageType(whatPage);
	}

	return (
		<div>
			<Header />
			<Body />
		</div>    
	);
}