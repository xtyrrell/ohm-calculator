import styled from "@emotion/styled";

import Calculator from "../../components/Calculator";

import Explainer from "./Explainer";
import Instructions from "./Instructions";
import Credits from "./Credits";

const HomePage = () => {
  return (
    <div>
      <h1>Delta Neutral OHM Calculator</h1>
      <Instructions />
      <Calculator />
      <Explainer />
      <Credits />
    </div>
  );
};

export default HomePage;
