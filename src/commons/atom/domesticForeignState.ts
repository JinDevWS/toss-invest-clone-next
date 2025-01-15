import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

export const domesticForeignState = atom<string>({
  key: `domesticForeignState/${uuidv4()}`,
  default: "allFilter",
});
