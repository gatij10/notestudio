import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserProvider } from './context/usercontext/UserContext';
import Header from '../src/components/header/Header';
import LoginPage from './pages/loginpage/LoginPage';
import HomePage from './pages/homepage/Homepage'


function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Header />
          <hr />
          <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route exact path='/home' component={HomePage} />
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
