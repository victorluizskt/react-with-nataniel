import './App.css';
// import { Link, Route } from 'react-router-dom';
// import routes from './routes';
import UserForm from './pages/UserForm';
import NavBar from './component/navbar/index';

function App() {

  return (
    <>
      <NavBar />
      <UserForm/>
    </>
  );
}

export default App;
