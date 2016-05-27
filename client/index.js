import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import App from "../src/App";
import Home from "../src/Home";
import Wow from "../src/Wow";
import Much from "../src/Much";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="wow" component={Wow}/>
      <Route path="much" component={Much}/>
    </Route>
  </Router>,
  document.getElementById("root")
);
