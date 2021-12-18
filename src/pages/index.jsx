// import { Link } from "react-router-dom";

import styled from "@emotion/styled";
import Nav from "../components/Nav";

export default function HomePage() {
  return (
    <div>
      <h1>Outearn the normies</h1>
      <p>Float Strategies is where smart crypto wizards learn and share strategies that put them ahead of normie traders. These strategies take advantage of <a href="https://float.capital">Float Capital</a>'s unique markets and mechanics to achieve investments with better risk/reward profiles than previously possible in web3 space.</p>
      <p>Get started with a strategy:</p>
      <Nav />
    </div>
  );
}
