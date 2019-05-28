import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from 'Features/Home';
import Counter from 'Features/Counter';
import NotFound from 'Features/NotFound';

function Routes() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
