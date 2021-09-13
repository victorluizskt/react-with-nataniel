import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import User from './component/User';
import Photo from './assets/profile.png';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
