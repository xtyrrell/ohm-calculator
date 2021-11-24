import styled from "@emotion/styled";

import ScrollContainer from "../../components/ScrollContainer";

const Title = styled.h2`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 400px) {
    ::before {
      content: "☙";
      margin-right: 0.5rem;
      flex: 0 0;
    }

    ::after {
      content: "❧";
      margin-left: 0.5rem;
      flex: 0 0;
    }
  }
`;

const Explainer = () => (
  <ScrollContainer>
    <Title>Huh?</Title>
    <p>
      $OHM's four-figure APY is awesome. But, holding OHM comes with price risk.
      What if the price of OHM drops? By holding OHM, you're effectively betting
      on the price of OHM going up. If it goes down, you lose money. Because
      when you sell it you'll get less than you originally paid.
    </p>
    <p>
      Well, the legends at{" "}
      <a href="https://float.capital" target="_blank">
        Float Capital
      </a>{" "}
      let you bet on the price of OHM <em>going down</em>. By minting a{" "}
      <a href="https://float.capital/app/markets?selected=2&actionOption=short">
        <em>short position</em> on the OHM market
      </a>
      , you can bet on the price of OHM going down. If you put just the right
      amount into betting on the price of OHM going down, your two bets going in
      opposite directions will cancel out! Then, you will be financially
      unaffected by the price of OHM. This is called being "delta neutral". When
      you're delta neutral, you can just enjoy the sweet APY rewards of holding
      staked OHM, without ever having to worry about the price of OHM.
    </p>
    <p>
      This calculator computes the exact right size of the short position you
      should mint on Float Capital to be delta neutral.
    </p>
  </ScrollContainer>
);

export default Explainer;
