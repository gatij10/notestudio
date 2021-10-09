import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../src/components/header/Header';
import LoginPage from './pages/loginpage/LoginPage';
import HomePage from './pages/homepage/Homepage';
import PrivateRoute from './pages/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <hr />
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <PrivateRoute exact path='/home' component={HomePage} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
