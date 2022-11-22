import '../App';
import Display from '../Display/index';
import './index.css';

function App() {
  return (
    <>
  <Display />
    <div className='mainDiv'>
    <div className='imgDiv'>
    <img src='../../../../../TaylorPersona.png' alt='img'></img>
    </div>
      
      <div className='BtnNumbVoters'>
        <button></button>
        
        <div></div>
        <button></button>
        
      </div>
      <div>
        <h1>how many voters?</h1>
      </div>
    </div>

    </>
  
  );
}

export default App;

// body{
//   background-image: url('../../../../spaceBackground.jpeg');
//   background-size: cover;
// }