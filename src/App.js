import { Outlet, Link } from "react-router-dom";


import "./styles.scss";

import Nav from "./components/Nav"
import Credits from "./components/Credits";

export default function App() {
  return (
    <div className="App">
      <Link className="title" to="/">Float Strategies</Link>

      <Nav />

      <Outlet />

      <Credits />
    </div>
  );
}
