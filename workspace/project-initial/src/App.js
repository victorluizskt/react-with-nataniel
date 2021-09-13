import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import User from './component/User';
import Photo from './assets/profile.png';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("Victor");
  const changeState = () => {
    if(name === "Victor"){
      setName("Victor Luiz")
    } else {
      setName("Victor")
    }
  }
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <div> {name} </div>
      <button 
        onClick={changeState}> 
        Alter state 
      </button>
      <User 
        name="Victor Luiz"
        picture={Photo}
      /> 
      <Header/>
      </header>
    </div>
    </>
  );
}

export default App;
