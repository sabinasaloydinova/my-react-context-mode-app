import { useContext } from 'react';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import { Context } from './Content/Context';

function App() {
  // const {mode} = useContext(Context)
  const {mode} = useContext(Context)
  console.log(mode);
  return (
    <div className={mode ? 'App' : 'app'} >
      
      <About/>
      <Home/>
      </div>
        
  );
}

export default App;
