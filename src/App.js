import React from 'react';
import {BrowserRouter as Router,Route, Switch,Link} from "react-router-dom";
import Home from "./Home";
import Favourite from "./Favourite";


function App() {
  return (
    <Router>
    <div>
    <h1 className="header">News App 📰</h1>
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favourite">Favourite</Link></li>
        </ul>
    </div>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/favourite" component={Favourite}/>
    </Switch>
</div>
</Router>
  );
}

export default App;
