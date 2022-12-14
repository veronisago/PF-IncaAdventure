import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/nav/Nav';
import ActivitiesPage from './components/pages/ActivitiesPage';
import CartPage from './components/pages/CartPage';
import HomePage from './components/pages/HomePage';
import LandingPage from './components/pages/LandingPage';
import ShopPage from './components/pages/ShopPage' ;
import UserPage from './components/pages/UserPage';
import CreateActivities from './components/adminComponents/CreateActivities';
import CreateProduct from './components/adminComponents/CreateProduct';


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
          <Route exact path='/create' component={CreateActivities}/>
          <Route exact path='/product' component={CreateProduct}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
