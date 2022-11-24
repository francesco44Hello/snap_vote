import "./index.css";
import { v4 as uuidv4 } from "uuid";

export default function AllOptionsTable({
  pageType,
  optionsArr,
  votersArr,
  proConVote,
}) {
  switch (pageType) {
    case "pros-cons-vote":
      return (
        <div className="AllOptionsTable">
          {optionsArr.map((option) => (
            <div key={uuidv4()}>
              <h1>{option.option}</h1>
              <div className={option.option}>
                <div>
                  <h2>Pros</h2>
                  {option.options.pros.map(pro => <p key={uuidv4()}>{pro}</p>)}
                  <h2>Cons</h2>
                  {option.options.cons.map(con => <p key={uuidv4()}>{con}</p>)}
                </div>
              </div>
            </div>
          ))}
          <div>
            <div>
              {votersArr.map((el) => {
                return (
                  <div key={uuidv4()}>
                    <h2>{"User" + el.name}</h2>
                    <select onChange={proConVote} name={el.name}>
                      <option>Place your vote</option>
                      {optionsArr.map((option) => (
                        <option key={uuidv4()}>{option.option}</option>
                      ))}
                    </select>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    default:
      break;
  }
}
