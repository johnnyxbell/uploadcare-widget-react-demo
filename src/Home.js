import React from "react";
import { Link } from "react-router";
import Uploader from "./components/Uploader";

const Home = () => (
  <div>
    <h1>Home</h1>
    <Uploader />
    <Link to="/much">Much</Link>
    <Link to="/wow">Wow</Link>
  </div>
);

export default Home;
