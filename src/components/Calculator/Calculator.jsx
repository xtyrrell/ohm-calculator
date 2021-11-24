import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { map } from "ramda";
import c from "classnames";

import {
  useExposuresByMarket,
  calculateAmountToShortOhm,
  formatDollars
} from "./utils";

import TokenAmountInput from "./TokenAmountInput";

const CalculatorContainer = styled.div`
  border: 1px solid transparent;
  padding: 0 1rem 2rem;
  background-color: #2e2edc;
  color: white;
  margin: 56px 0;
  position: relative;
  overflow: hidden;

  * {
    transition: 200ms opacity ease;
  }

  &.loading * {
    opacity: 0;
    cursor: default;
  }

  &::before {
    content: "";
    overflow: hidden;
    pointer-events: none;
    background: no-repeat center / 25% url(./assets/images/star.png);

    position: absolute;
    inset: 0;
    transition: opacity 200ms ease;

    opacity: 0;

    animation: spin 1s infinite;
  }

  &.loading::before {
    opacity: 1;
  }

  @keyframes spin {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

const Calculator = () => {
  const OHM_MARKET_LEVERAGE = 2;

  const exposures = useExposuresByMarket();

  const [ohmHoldings, setOhmHoldings] = useState("");

  console.log("exposures", exposures);

  const shortOhmExposure = exposures?.["2OHM"]?.shortExposure;

  const amountToShortOhm =
    ohmHoldings &&
    !isNaN(ohmHoldings) &&
    shortOhmExposure &&
    calculateAmountToShortOhm(
      ohmHoldings,
      shortOhmExposure,
      OHM_MARKET_LEVERAGE
    ).toFixed(2);

  const explainerText = `Using short exposure of ${shortOhmExposure}% and leverage of ${OHM_MARKET_LEVERAGE}:
short position = ohm holdings / ( leverage * short exposure)`;

  return (
    <CalculatorContainer
      className={c({ loading: !Object.keys(exposures).length })}
    >
      <h2>Calculator</h2>

      <InputOutputSections>
        <HalfCell>
          <p>What is the total dollar value of your OHM holdings?</p>

          <TokenAmountInput
            symbol={"$"}
            onChange={(e) => setOhmHoldings(e.target.value)}
            value={ohmHoldings}
            autoFocus
          />
          {/* {" "}<span>--OR--</span> <button>Connect Wallet</button> */}
        </HalfCell>
        <HalfCell>
          <p>Put this into a Float Capital OHM short position.</p>
          <TokenAmountInput
            symbol="$"
            value={amountToShortOhm || "_"}
            disabled
          />
        </HalfCell>
      </InputOutputSections>

      <PrimaryAnchor
        target="_blank"
        href="https://float.capital/app/markets?selected=2&actionOption=short"
        className={c({
          disabled: !amountToShortOhm
        })}
      >
        Mint short position{" "}
        {amountToShortOhm && ` for ${formatDollars(amountToShortOhm)}`}
      </PrimaryAnchor>

      <SecondaryAnchor
        target="_blank"
        href="https://docs.float.capital/blog/hedge-your-ohm-position"
        title={explainerText}
      >
        How is this amount calculated?
      </SecondaryAnchor>
    </CalculatorContainer>
  );
};

const HalfCell = styled.div`
  flex: 0 1 50%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
`;

const InputOutputSections = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: row;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const PrimaryAnchor = styled.a`
  padding: 0.25em;
  margin-top: 42px;

  color: white;
  background-color: #e92f41;
  border: 1px solid transparent;

  display: block;
  width: 100%;

  text-decoration: none;

  font-size: 24px;

  transition: all 200ms ease;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &.disabled {
    color: #310f0f;
    border: 1px solid currentColor;
    background: transparent;
  }

  &::after {
    content: " →";
  }

  &:focus {
    background-color: #eee;
    outline: 2px solid black;
  }
`;

const SecondaryAnchor = styled.a`
  display: block;
  color: currentColor;

  margin-top: 16px;

  text-align: right;
`;

export default Calculator;
