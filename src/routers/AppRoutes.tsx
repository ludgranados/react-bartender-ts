import { Switch, Route } from 'react-router-dom';
// page components
import Home from '../pages/Home';
import SingleDrink from '../pages/SingleDrink';
// Components
import Navbar from '../components/Navbar';

const AppRoutes = () => {
  return (
    <div>
      <Navbar />
      <div className='container-fluid'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cocktails/:cocktailId' component={SingleDrink} />
        </Switch>
      </div>
    </div>
  );
};

export default AppRoutes;