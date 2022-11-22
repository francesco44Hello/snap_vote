function Display() {

	const [pageType, setPageType] = useState('Start'); 

	function changePage(whatPage) {
		setPageType(whatPage);
	}

	return (
		<div>
			<Header />
				<PageHeader pageType={pageType} />
				<CountdownTimer pageType={pageType}/>
				<UsernameIndicator pageType={pageType} />
			<Body />
				<DisplayOptionVote pageType={pageType} />
				<MultipleChoiceInput pageType={pageType} />
				<TextInput pageType={pageType} />
				<MultipleChoiceInput pageType={pageType} />
				<AddFieldButton pageType={pageType} />
				<SubmitButton pageType={pageType} changePage={changePage} />
		</div>    
	);
}


function DisplayOptionVote({pageType}) {

	function randomiser() {

	}

	function weightedVoting() {

	}

	if (pageType === 'intro') {
		return <div>

		</div>
	}
}

function PageHeader({pageType}) {
	if (pageType === 'inputOptions') {
		return <input>Test</input>
	} else {
		return <h1>Test</h1>
	}
}

function AddFieldButton({pageType}) {
	if (pageType === 'optionsProsConsInput') {
		
	}
}

export default Display;