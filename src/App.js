import React from "react";
import { Link } from "react-router";

const App = ({
  children
}) => (
  <div>
    <h1>Try Uploadcare</h1>
    <hr/>
    {children}
  </div>
);

export default App;
