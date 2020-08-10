import React from 'react';
import './App.css';
// import Weather from './components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './nav/navigation';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { AppProvider } from "./reducers/context";
import Login from './components/login/login';
import Create from './components/crud/create';
import List from './components/crud/list';
import { AuthProvider } from './reducers/AuthProvider';
function App() {
  return (
    <div>
      <AuthProvider>
        <AppProvider>
          <Router>
            <Switch>
              <Route exact path="/(login)" component={LoginContainer} />
              <Route component={Navigation} />
            </Switch>
          </Router>
        </AppProvider>
      </AuthProvider>
    </div>
  );
}

const LoginContainer = () => (
  <div className="container">
    <Route exact path="/" render={() => <Redirect to="/login" />} />
    <Route path="/login" component={Login} />
  </div>
)

export default App;
