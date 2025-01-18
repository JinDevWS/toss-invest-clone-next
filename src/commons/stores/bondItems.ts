import { IBondItem } from "../types/types";

export const bondItemIdsUs: string[] = [
  "bond2Years",
  "bond5Years",
  "bond10Years",
  "bond30Years",
  "bond2YearsKr",
  "bond3YearsKr",
  "bond5YearsKr",
  "bond10YearsKr",
  "bond20YearsKr",
  "bond30YearsKr",
];
export const bondItemIdsKr: string[] = [
  "bond2YearsKr",
  "bond3YearsKr",
  "bond5YearsKr",
  "bond10YearsKr",
  "bond20YearsKr",
  "bond30YearsKr",
  "bond2Years",
  "bond5Years",
  "bond10Years",
  "bond30Years",
];

export const bondItems: { [id: string]: IBondItem } = {};
bondItems["bond2Years"] = {
  title: "미국 국채 2년",
  krOrUs: "us",
  price: 4.28,
  changedPrice: 0.02,
  changedRate: 0.4,
};
bondItems["bond5Years"] = {
  title: "미국 국채 5년",
  krOrUs: "us",
  price: 4.45,
  changedPrice: 0.01,
  changedRate: 0.2,
};
bondItems["bond10Years"] = {
  title: "미국 국채 10년",
  krOrUs: "us",
  price: 4.65,
  changedPrice: 0,
  changedRate: 0.0,
};
bondItems["bond30Years"] = {
  title: "미국 국채 30년",
  krOrUs: "kr",
  price: 4.86,
  changedPrice: -0.02,
  changedRate: 0.4,
};
bondItems["bond2YearsKr"] = {
  title: "한국 국채 2년",
  krOrUs: "kr",
  price: 2.73,
  changedPrice: 0.017,
  changedRate: 0.6,
};
bondItems["bond3YearsKr"] = {
  title: "한국 국채 3년",
  krOrUs: "kr",
  price: 2.67,
  changedPrice: 0.025,
  changedRate: 0.9,
};
bondItems["bond5YearsKr"] = {
  title: "한국 국채 5년",
  krOrUs: "kr",
  price: 2.77,
  changedPrice: 0.031,
  changedRate: 1.1,
};
bondItems["bond10YearsKr"] = {
  title: "한국 국채 10년",
  krOrUs: "kr",
  price: 2.85,
  changedPrice: 0.018,
  changedRate: 0.6,
};
bondItems["bond20YearsKr"] = {
  title: "한국 국채 20년",
  krOrUs: "kr",
  price: 2.74,
  changedPrice: 0.012,
  changedRate: 0.4,
};
bondItems["bond30YearsKr"] = {
  title: "한국 국채 30년",
  krOrUs: "kr",
  price: 2.68,
  changedPrice: 0.002,
  changedRate: 0.07,
};
