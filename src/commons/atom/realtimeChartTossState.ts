import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

export const realtimeChartTossState = atom<string>({
  key: `realtimeChartTossState/${uuidv4()}`,
  default: "tossMoney",
});
