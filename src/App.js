// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SmileyFaceToggle from './components/SmileyFaceToggle';
import ShopPage from './components/ShopPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {/* Home Page */}
          <div>
            <h1>Welcome to the Home Page!</h1>
            <SmileyFaceToggle />
          </div>
        </Route>
        <Route path="/shop">
          {/* Shop Page */}
          <ShopPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
