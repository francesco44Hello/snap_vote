import './index.css';
import {optionsArr} from '../../data/pageTypes';

export default function AllOptionsTable({pageType}) {
    console.log(`AllOptionsTable:`, pageType);

    // switch (pageType) {
	// 	case "pros-cons-vote":
    //         console.log(`AllOptionsTable:`, pageType);
	// 		return (<>
    //             <h1>{optionsArr[0].option}</h1>
    //             <table className={optionsArr[0].option}>
    //                 <tr>
    //                     <th>Pros</th> 
    //                     <th>Cons</th>
    //                 </tr>
    //                 <tr>
    //                     <td>{optionsArr[0].options.pros[0]}</td>
    //                     <td>{optionsArr[0].options.cons[0]}</td>
    //                 </tr>
    //                 <tr>
    //                     <td>{optionsArr[0].options.pros[1]}</td>
    //                     <td>{optionsArr[0].options.cons[1]}</td>
    //                 </tr>
    //             </table>

    //             <h1>{optionsArr[1].option}</h1>
    //             <table>
    //                 <tr>
    //                     <th>Pros</th> 
    //                     <th>Cons</th>
    //                 </tr>
    //                 <tr>
    //                     <td>{optionsArr[1].options.pros[0]}</td>
    //                     <td>{optionsArr[1].options.cons[0]}</td>
    //                 </tr>
    //                 <tr>
    //                     <td>{optionsArr[1].options.pros[1]}</td>
    //                     <td>{optionsArr[1].options.cons[1]}</td>
    //                 </tr>
    //             </table> 
    //         </>)
	// 	default:
	// 		break;
	// }
}