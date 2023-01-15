import Display from '../Display/index';
import { useEffect } from 'react';
import './index.css';

function App() {
   useEffect(() => {
    document.title = 'Snap-vote';
  }, []);
  return (
      < >
          <img className='logo' src="https://i.ibb.co/sjwZvkv/SN2.png" alt="img"></img>
          <Display />
      </>
  );
}
export default App;