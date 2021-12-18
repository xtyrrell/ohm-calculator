import ScrollExplainer from "../../../components/ScrollExplainer";
import Instructions from "../../../components/Instructions";
import Subtitle from "../../../components/Subtitle";
import Calculator from "../../../components/Calculator";

const Page = () => {
  return (
    <div>
      <Subtitle>Hedged OHM Farming</Subtitle>
      <p>The APY for staking <a href="https://www.olympusdao.finance/">OlympusDAO's OHM</a> is around 7000% at the time of writing. That's massive, and investors would be wise to get exposure to this! But there's a catch: the returns are in OHM. So if the price of OHM goes down (which it is expected to), your profits are eroded.</p>
      <p>To mitigate this, you can short OHM. <a href="https://float.capital">Float Capital</a> offers a leveraged OHM market, where you can open a 2x-leveraged short position. If you size this position perfectly you will have negative price exposure equal to your positive price exposure, equating to a delta-neutral position: if the price of OHM increases, you will not make any money from that movement, and if the price of OHM decreases you will not lose any money from that movement.</p>
      <p>That leaves you with a risk-free exposure to just the OHM staking rewards. So you can farm OHM confidently, knowing that your bags won't be affected if the price of OHM decreases.</p>
      <Instructions
        title="Guide"
        steps={
          [
            <>Get and stake OHM. You can buy OHM on a <abbr title="Decentralised EXchange, such as Uniswap">DEX</abbr> and then stake it yourself, or you can buy and stake OHM in one transaction directly in the <a href="https://app.olympusdao.finance/#/zap">Olympus DAO app</a>.</>,
            "Once you've got staked OHM, work out the dollar value of your OHM holdings by multiplying the price of OHM by the amount of OHM you've staked.",
            <>Enter that dollar value into the <a href="#calculator">calculator on this page.</a></>,
            <>See the calculated dollar value output. This is amount to mint and hold in a Float Capital short position. Make sure you have DAI on the Polygon network of at least this amount (ideally more, so you can keep your position adjusted as exposure changes — see the final step). If you don't have Polygon DAI, you can bridge Ethereum mainnet assets over to Polygon and use a <abbr title="Decentralised EXchange">DEX</abbr> such as <a href="https://quickswap.exchange">Quickswap</a> to swap them for DAI, or buy it from a <abbr title="Centralised EXchange">CEX</abbr> like <a href="https://ramp.network">Ramp</a></>,
            <>Mint a short postion of that size (or adjust it, if you already have a short position) here:{" "}
              <a href="https://float.capital/app/markets?marketIndex=2&actionOption=short">
                mint short position
              </a>.</>,
              "Because the position size you need is calculated based off the total amount of long and short positions in the market, it will change frequently. Use the calculator regularly to see if you need to update your position to your bags secured."

          ]
        }
      />
      <Calculator floatMarketSymbol="2OHM" leverage={2} currencySymbol="OHM" howWasThisCalculatedLink="https://docs.float.capital/blog/hedge-your-ohm-position" mintShortPositionLink="https://float.capital/app/markets?marketIndex=2&actionOption=short" />
      <ScrollExplainer title="Huh?" explainer={<>
        <p>
          OHM's four-figure APY is awesome. But, holding OHM comes with price risk.
          What if the price of OHM drops? By holding OHM, you're effectively betting
          on the price of OHM going up. If it goes down, you lose money.
        </p>
        <p>
          Well, the legends at{" "}
          <a href="https://float.capital" target="_blank">
            Float Capital
          </a>{" "}
          let you bet on the price of OHM <em>going down</em> by minting a{" "}
          <a href="https://float.capital/app/markets?marketIndex=2&actionOption=short">
            <em>short position</em> on the OHM market
          </a>. If you put just the right
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
      </>} />
    </div>
  );
};

export default Page;
