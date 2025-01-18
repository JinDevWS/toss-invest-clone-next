import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

export const realtimeChartTimeState = atom<string>({
  key: `realtimeChartTimeState/${uuidv4()}`,
  default: "realtime",
});
