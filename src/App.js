import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dash from './components/Dash';

const App = () => {
  return (
    <HashRouter>
        <Switch>
          <Route path="/login" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/app" component={Dash} />
          <Redirect from='/' to='/app' />
        </Switch>
    </HashRouter>
  );
}

export default App;
