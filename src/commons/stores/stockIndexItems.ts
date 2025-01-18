import { IStockIndexItem } from "../types/types";

export const stockIndexItemIdsUs: string[] = [
  "stockIndexNasdaq",
  "stockIndexSP500",
  "stockIndexVix",
  "stockIndexKospi",
  "stockIndexKosdaq",
];
export const stockIndexItemIdsKr: string[] = [
  "stockIndexKospi",
  "stockIndexKosdaq",
  "stockIndexNasdaq",
  "stockIndexSP500",
  "stockIndexVix",
];

export const stockIndexItems: { [id: string]: IStockIndexItem } = {};
stockIndexItems["stockIndexNasdaq"] = {
  title: "나스닥",
  krOrUs: "us",
  price: 19511.23,
  changedPrice: 466.84,
  changedRate: 2.4,
  graph: "nasdaq-graph.svg",
};
stockIndexItems["stockIndexSP500"] = {
  title: "S&P 500",
  krOrUs: "us",
  price: 5949.91,
  changedPrice: 107,
  changedRate: 1.8,
  graph: "nasdaq-graph.svg",
};
stockIndexItems["stockIndexVix"] = {
  title: "VIX",
  krOrUs: "us",
  price: 16.12,
  changedPrice: -2.59,
  changedRate: 13.8,
  graph: "nasdaq-graph.svg",
};
stockIndexItems["stockIndexKospi"] = {
  title: "코스피",
  krOrUs: "kr",
  price: 2527.49,
  changedPrice: 30.68,
  changedRate: 1.2,
  graph: "nasdaq-graph.svg",
};
stockIndexItems["stockIndexKosdaq"] = {
  title: "코스닥",
  krOrUs: "kr",
  price: 724.24,
  changedPrice: 12.63,
  changedRate: 1.7,
  graph: "nasdaq-graph.svg",
};
