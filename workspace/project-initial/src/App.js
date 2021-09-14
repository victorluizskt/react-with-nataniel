import './App.css';
import Header from './component/Header';
import User from './component/User';
import List from './component/List';
import Photo from './assets/profile.png';
import { useState } from 'react';

function App() {

  const [person, setPerson] = useState({name: 'Victor Luiz', email: 'victorluizcefet@gmail.com'});
  const changeState = () => {
    if(person.name === "Victor"){
      setPerson({name: 'Victor Luiz'})
    } else {
      setPerson({name: 'Victor'})
    }
  }

  const changeInputName = event => {
    let target = event.target;
    setPerson({name: target.value})
  }

  const changeInputEmail = event => {
    let target = event.target;
    setPerson({email: target.value})
  }

  return (
    <>
      <form> 
        <input type="text" value={person.name} onChange={event => changeInputName(event)}/>
        <input type="text" name="name" value={person.email} onChange={event => changeInputEmail(event)}/>
      </form>
      <div> {person.name} - {person.email} </div>
      <button 
        onClick={changeState}> 
        Alter state 
      </button>
      <User 
        name="Victor Luiz"
        picture={Photo}
      /> 
      <Header/>
      <List />
    </>
  );
}

export default App;
