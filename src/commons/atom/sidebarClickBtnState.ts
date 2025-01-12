import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

export const sidebarClickBtnState = atom<boolean | string>({
  key: `sidebarClickBtnState/${uuidv4()}`,
  default: false,
});
