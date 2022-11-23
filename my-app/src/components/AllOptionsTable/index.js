import './index.css';
import { optionsArr } from '../../data/optionsArr';

export default function AllOptionsTable({pageType}) {
    switch (pageType) {
		case "pros-cons-vote":
			return (<>
                <h1>{optionsArr[0].option}</h1>
                <table className={optionsArr[0].option}>
                    <tr>
                        <th>Pros</th> 
                        <th>Cons</th>
                    </tr>
                    <tr>
                        <td>{optionsArr[0].options.pros[0]}</td>
                        <td>{optionsArr[0].options.cons[0]}</td>
                    </tr>
                    <tr>
                        <td>{optionsArr[0].options.pros[1]}</td>
                        <td>{optionsArr[0].options.cons[1]}</td>
                    </tr>
                </table>
                <h1>{optionsArr[1].option}</h1>
                <table>
                    <tr>
                        <th>Pros</th> 
                        <th>Cons</th>
                    </tr>
                    <tr>
                        <td>{optionsArr[1].options.pros[0]}</td>
                        <td>{optionsArr[1].options.cons[0]}</td>
                    </tr>
                    <tr>
                        <td>{optionsArr[1].options.pros[1]}</td>
                        <td>{optionsArr[1].options.cons[1]}</td>
                    </tr>
                </table>
                {/*NEED ONE VOTING SELECT FOR EACH VOTER*/}
                <h2>Vote:</h2>
                <select>
                    <option>{optionsArr[0].option}</option>
                    <option>{optionsArr[1].option}</option>
                </select>
            </>)
		default:
			break;
	}
}