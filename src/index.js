import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles.scss";

import HomePage from "./pages/index"
import AxsStrategyPage from "./pages/strategies/axs";
import OhmStrategyPage from "./pages/strategies/ohm";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="strategies">
            <Route path="hedged-axs-farming" element={<AxsStrategyPage />} />
            <Route path="hedged-ohm-farming" element={<OhmStrategyPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
  rootElement
);
