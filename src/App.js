import React, { Suspense } from 'react';
import './App.scss';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Loading from './components/Loading';
import Layout from './containers/Layout';
const App = () => {
  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route 
            path="/"
            name="Home"
            render={props => <Layout {...props} />}
          />
        </Switch>
      </Suspense>
    </HashRouter>
  ); 
}

export default App;
