import "./index.css";
import { v4 as uuidv4 } from 'uuid';

export default function AllOptionsTable({ pageType, optionsArr, votersArr, proConVote }) {
  switch (pageType) {
    case "pros-cons-vote":
      return (
        <div className='AllOptionsTable'>
          {optionsArr.map((option) => (
            <div key={uuidv4()}>
              <h1>{option.option}</h1>
              <div className={option.option}>
                <div>
                  <p>Pros</p>
                  <p>Cons</p>
                </div>
                <div>
                  <p>{option.options.pros[0]}</p>
                  <p>{option.options.cons[0]}</p>
                </div>
                <div>
                  <p>{option.options.pros[1]}</p>
                  <p>{option.options.cons[1]}</p>
                </div>
              </div>
            </div>))}
            <div>
            <div>
                {votersArr.map(el => {
                    return <div>
                        <h2>{el.name}</h2>
                        <select onChange={proConVote} name={el.name}>
                          <option>Place your vote</option>
                        {optionsArr.map(option => 
                            <option>{option.option}</option>)}
                            </select>
                    </div>
                })}
            </div>                
            </div>
            </div>);
    default:
      break;
  }
}
