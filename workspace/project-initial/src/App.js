import './App.css';
import { Link, Route } from 'react-router-dom';
import routes from './routes';
import UserForm from './pages/UserForm';

function App() {

  return (
    <>
      <UserForm/>
      <Link to="/"> Home </Link>
      <Link to="/user"> User </Link>
      <div>
        {routes.map = ((value, key) => {
          return (
          <Route 
            key={key} 
            path={value.path} 
            component={value.component} 
            exact={value.exact}/>
          )
        })}
      </div>
    </>
  );
}

export default App;
