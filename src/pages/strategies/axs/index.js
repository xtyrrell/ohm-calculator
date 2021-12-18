import Instructions from "../../../components/Instructions";
import Subtitle from "../../../components/Subtitle";
import Calculator from "../../../components/Calculator";

const Page = () => {
  return (
    <div>
      <Subtitle>Hedged AXS Farming</Subtitle>
      <p>Staking <a href="https://stake.axieinfinity.com">Axie Infinity's AXS</a> has an APR around 110% at the time of writing. That's a great return, and investors would be wise to get exposure to this! But the price of AXS might go down. And if it does, the profitability of your investment will go down.</p>
      <p>To mitigate this, you can bet on the price of AXS going down. <a href="https://float.capital">Float Capital</a> offers a leveraged AXS market, where you can open a 2x-leveraged short position. Sizing this position correctly will get you delta-neutral exposure to AXS staking rewards. This means you can farm AXS confidently, knowing that your bags won't be affected if the price of AXS decreases.</p>
      <Instructions
        title="Guide"
        steps={
          [
            <>Get AXS. You'll want to create a <a href="https://roninwallet.io">Ronin wallet</a> first. Then, to get AXS, either play Axie Infinity, swap your other assets for AXS, or buy AXS through a <abbr title="Centralised EXchange">CEX</abbr> like <a href="https://ramp.network">Ramp</a>.</>,
            <>Once you've got AXS, <a href="https://stake.axieinfinity.com">stake it</a>.</>,
            "Once you've got staked AXS, work out the dollar value of your AXS holdings by multiplying the price of AXS by the amount of AXS you've staked.",
            <>Enter that dollar value into the <a href="#calculator">calculator on this page.</a></>,
            <>See the calculated dollar value output. This is amount to mint and hold in a Float Capital short position. Make sure you have DAI on the Polygon network of at least this amount (ideally more, so you can keep your position adjusted as exposure changes — see the final step). If you don't have Polygon DAI, you can bridge Ethereum mainnet assets over to Polygon and use a <abbr title="Decentralised EXchange">DEX</abbr> such as <a href="https://quickswap.exchange">Quickswap</a> to swap them for DAI, or buy it from a <abbr title="Centralised EXchange">CEX</abbr> like <a href="https://ramp.network">Ramp</a></>,
            <>Mint a short postion of that size (or adjust it, if you already have a short position) here:{" "}
              <a href="https://float.capital/app/markets?selected=3&actionOption=short">
                mint short position
              </a>.</>,
              "Because the position size you need is calculated based off the total amount of long and short positions in the market, it will change frequently. Use the calculator regularly to see if you need to update your position to your bags secured."
          ]
        }
      />
      <Calculator floatMarketSymbol="2AXS" leverage={2} currencySymbol="AXS" howWasThisCalculatedLink="https://docs.float.capital/blog/hedging-staked-axs/#minting-a-short-in-float-capital" mintShortPositionLink="https://float.capital/app/markets?marketIndex=4&actionOption=short" />
    </div>
  );
};

export default Page;
