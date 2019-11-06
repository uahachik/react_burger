import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Appnavbar from './layout/Appnavbar';
import BurgerMenu from './components/burgers/BurgerMenu';
import Constructor from './components/constructor/Constructor';
import CustomFinish from './components/finish/CustomFinish';
import RegularFinish from './components/finish/RegularFinish';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Appnavbar />
        <Switch>
          <Route exact path="/" component={BurgerMenu} />
          <Route exact path="/constructor/:id" component={Constructor} />
          <Route exact path="/custom/:burger" component={CustomFinish} />
          <Route exact path="/regular/:burger" component={RegularFinish} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
