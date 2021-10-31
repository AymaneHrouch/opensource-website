import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import LandingPage from './views/LandingPage';
import NotFound from './views/404';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/404'>
          <NotFound />
        </Route>
        <Redirect to='/404' />
      </Switch>
    </Router>
  );
}

export default App;
