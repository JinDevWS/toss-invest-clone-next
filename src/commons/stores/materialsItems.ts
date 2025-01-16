export interface IMaterialsItem {
  title: string;
  price: number;
  changedPrice: number;
  changedRate: number;
}

export const materialsItemIds: string[] = [
  "materialsGold",
  "materialsSilver",
  "materialsWti",
  "materialsGas",
  "materialsCopper",
  "materialsWheat",
];

export const materialsItems: { [id: string]: IMaterialsItem } = {};
materialsItems["materialsGold"] = {
  title: "금",
  price: 2724.5,
  changedPrice: 6.7,
  changedRate: 0.2,
};
materialsItems["materialsSilver"] = {
  title: "은",
  price: 31.67,
  changedPrice: 0.14,
  changedRate: 0.4,
};
materialsItems["materialsWti"] = {
  title: "WTI",
  price: 78.91,
  changedPrice: 0.2,
  changedRate: 0.2,
};
materialsItems["materialsGas"] = {
  title: "천연가스",
  price: 4.06,
  changedPrice: -0.02,
  changedRate: 0.4,
};
materialsItems["materialsCopper"] = {
  title: "구리",
  price: 4.41,
  changedPrice: 0.02,
  changedRate: 0.4,
};
materialsItems["materialsWheat"] = {
  title: "밀",
  price: 544.0,
  changedPrice: -3,
  changedRate: 0.5,
};
