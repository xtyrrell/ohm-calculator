import { useEffect, useState } from "react";
import { map } from "ramda";

export const fetchTotalLockedPositions = async (marketSymbol) => {
  const API_URL =
    "https://api.thegraph.com/subgraphs/name/float-capital/float-capital-alpha";

  const query = `{
    "query":
      "query { syntheticMarkets(where: {symbol: \\"${marketSymbol}\\"}) { id symbol latestSystemState { id timestamp blockNumber totalLockedLong totalLockedShort } } }"
  }`;

  const response = await fetch(API_URL, {
    method: "POST",
    body: query,
    headers: {
      accept: "application/json",
      "content-type": "application/json"
    }
  });
  const data = await response.json();

  if (!data || !data.data) throw new Error("NO_DATA");

  const market = data.data.syntheticMarkets.find(
    (market) => market.symbol === marketSymbol
  );

  if (market.length === 0) throw new Error(`MARKET_NOT_FOUND: ${marketSymbol}`);

  const { totalLockedLong, totalLockedShort } = market.latestSystemState;

  return {
    totalLockedLong: BigInt(totalLockedLong),
    totalLockedShort: BigInt(totalLockedShort)
  };
};

export const calculateMarketExposures = ({
  totalLockedLong,
  totalLockedShort
}) => {
  const isLongUnderBalanced = totalLockedLong < totalLockedShort;

  const underBalancedSide = isLongUnderBalanced
    ? totalLockedLong
    : totalLockedShort;
  const overBalancedSide = isLongUnderBalanced
    ? totalLockedShort
    : totalLockedLong;

  console.log("underBalancedSide", underBalancedSide.toString());
  console.log("overBalancedSide", overBalancedSide.toString());

  const underBalancedSideExposure = 100;
  const overBalancedSideExposure =
    Number((underBalancedSide * 10000n) / overBalancedSide) / 100;

  const longExposure = isLongUnderBalanced
    ? underBalancedSideExposure
    : overBalancedSideExposure;
  const shortExposure = isLongUnderBalanced
    ? overBalancedSideExposure
    : underBalancedSideExposure;

  return {
    longExposure,
    shortExposure
  };
};

export const useExposuresForMarket = (marketSymbol) => {
  const [exposures, setExposures] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const totalLockedPositionsByMarket = await fetchTotalLockedPositions(marketSymbol);

      const exposures = calculateMarketExposures(totalLockedPositionsByMarket)

      console.log("exposuresByMarket", exposures);

      setExposures(exposures);
    };

    loadData();
  }, []);

  return exposures;
};

export const calculateDeltaNeutralShortSize = (
  holdings,
  shortExposure,
  leverage
) => {
  return Number(holdings) / (leverage * (shortExposure / 100));
};

export const formatDollars = (dollars) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(dollars);
