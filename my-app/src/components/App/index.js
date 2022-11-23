import Display from '../Display/index';
import './index.css';

function App() {
  return (
      <div className="mainDiv">
          <img className='logo' src="https://i.ibb.co/mHWN0ZB/aa.png" alt="img"></img>
          <Display />
      </div>
  );
}

// <div className="mainDiv">
// <img className='logo' src="https://i.ibb.co/mHWN0ZB/aa.png" alt="img"></img>
//  <div className='header' >
//   How many voters?
//  </div>
//   <input placeholder='0'></input>
//   <button className="Btn">Select</button> 
// </div>

export default App;