import styled from "@emotion/styled";

const InstructionsContainer = styled.div`
  margin: 56px 0;
`;

const Instructions = () => (
  <InstructionsContainer>
    <h2>How to use this calculator</h2>
    <p>
      <em>
        These instructions assume you're already starting off with an existing
        OHM holding.
      </em>
    </p>
    <ol>
      <li>Enter the dollar value of your OHM holdings into the calculator.</li>
      <li>
        See the calculated dollar value to hold in a Float Capital short
        position.
      </li>
      <li>
        Mint a short postion of that size (or adjust your existing short
        position to match that size) here:{" "}
        <a href="https://float.capital/app/markets?selected=2&actionOption=short">
          mint short position
        </a>
      </li>
    </ol>
  </InstructionsContainer>
);

export default Instructions;
