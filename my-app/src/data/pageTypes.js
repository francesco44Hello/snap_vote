export const pageTypes = [
	"start",
	"decision-input",
	"options-input",
	"pros-cons-input",
	"pros-cons-comment",
	"pros-cons-vote",
	"pros-cons-results",
	"weighted-vote-input",
	"weighted-vote-results",
	"randomiser",
	"final-results"
]

export const optionsArr = [{
    option: "This is an option",
    votes: 0,
    eliminated: false,
    options: {
        pros: ["pro1", "pro2"],
        cons: ["con1", "con2"]
    }
}]

export const votersArr = [{
    name: "John Smith",
    vote: "This is the option they voted for",
    voted: false,     
}]