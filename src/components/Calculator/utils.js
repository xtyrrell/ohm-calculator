import { useEffect, useState } from "react";
import { map } from "ramda";

export const fetchTotalLockedPositions = async () => {
  const API_URL =
    "https://api.thegraph.com/subgraphs/name/float-capital/float-capital-alpha";

  const query = `{
    "query":
      "query { syntheticMarkets(where: {id: 3}) { id symbol latestSystemState { id timestamp blockNumber totalLockedLong totalLockedShort } } }"
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

  // console.log("response data", data);

  const ohmMarket = data.data.syntheticMarkets.find(
    (market) => market.symbol === "2OHM"
  );

  if (ohmMarket.length === 0) throw new Error("NO_2OHM_MARKET");

  // console.log("ohmMarket", ohmMarket);

  const { totalLockedLong, totalLockedShort } = ohmMarket.latestSystemState;

  return {
    "2OHM": {
      totalLockedLong: BigInt(totalLockedLong),
      totalLockedShort: BigInt(totalLockedShort)
    }
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

export const useExposuresByMarket = () => {
  const [exposures, setExposures] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const totalLockedPositionsByMarket = await fetchTotalLockedPositions();

      const exposuresByMarket = map(
        calculateMarketExposures,
        totalLockedPositionsByMarket
      );

      console.log("exposuresByMarket", exposuresByMarket);

      setExposures(exposuresByMarket);
    };

    loadData();
  }, []);

  return exposures;
};

export const calculateAmountToShortOhm = (
  ohmHoldings,
  shortOhmExposure,
  leverage
) => {
  return Number(ohmHoldings) / (leverage * (shortOhmExposure / 100));
};

export const formatDollars = (dollars) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(dollars);
