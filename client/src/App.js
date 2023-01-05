import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/nav/Nav';
import ActivitiesPage from './components/pages/ActivitiesPage';
import CartPage from './components/pages/CartPage';
import HomePage from './components/pages/HomePage';
import LandingPage from './components/pages/LandingPage';
import ShopPage from './components/pages/ShopPage' ;
import UserPage from './components/pages/UserPage';
import Dashboard from './components/pages/Dashboard';
import Success from "./components/pages/Success";


function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/home' component={HomePage}/>
          <Route exact path='/activities' component={ActivitiesPage}/>
          <Route exact path='/shop' component={ShopPage}/>   
          <Route exact path='/profile' component={UserPage}/>
          <Route exact path='/cart' component={CartPage}/>
          <Route exact path='/admin' component={Dashboard}/>
          <Route exact path='/success' component={Success}/>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
