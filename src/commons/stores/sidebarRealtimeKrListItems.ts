import { v4 as uuidv4 } from "uuid";

export interface ISidebarRealtimeKrListItems {
  id: string;
  img: string;
  krOrUs: string;
  title: string;
  priceWon: number;
  upOrDownPercent: number;
}

export const sidebarRealtimeKrListItems: ISidebarRealtimeKrListItems[] = [
  {
    id: `${uuidv4()}`,
    img: "icn-ecopro.png",
    krOrUs: "kr",
    title: "에코프로",
    priceWon: 14257,
    upOrDownPercent: 50,
  },
  {
    id: `${uuidv4()}`,
    img: "icn-hanhwa.png",
    krOrUs: "kr",
    title: "한화",
    priceWon: 120856,
    upOrDownPercent: 17,
  },
  {
    id: `${uuidv4()}`,
    img: "icn-hanmi.png",
    krOrUs: "kr",
    title: "한미",
    priceWon: 6689,
    upOrDownPercent: 12,
  },
  {
    id: `${uuidv4()}`,
    img: "icn-hyundai.png",
    krOrUs: "kr",
    title: "현대",
    priceWon: 56890,
    upOrDownPercent: 5,
  },
  {
    id: `${uuidv4()}`,
    img: "icn-inbus.png",
    krOrUs: "kr",
    title: "인버스",
    priceWon: 9977,
    upOrDownPercent: 9,
  },
  {
    id: `${uuidv4()}`,
    img: "icn-ionq.png",
    krOrUs: "kr",
    title: "아이온큐",
    priceWon: 4957,
    upOrDownPercent: 10,
  },
  {
    id: `${uuidv4()}`,
    img: "icn-kb.png",
    krOrUs: "kr",
    title: "케이비",
    priceWon: 3390,
    upOrDownPercent: 8,
  },
  {
    id: `${uuidv4()}`,
    img: "icn-lg.png",
    krOrUs: "kr",
    title: "엘지",
    priceWon: 88964,
    upOrDownPercent: 11,
  },
  {
    id: `${uuidv4()}`,
    img: "icn-naver.png",
    krOrUs: "kr",
    title: "네이버",
    priceWon: 98211,
    upOrDownPercent: 3,
  },
  {
    id: `${uuidv4()}`,
    img: "icn-navi.png",
    krOrUs: "kr",
    title: "경동나비엔",
    priceWon: 104780,
    upOrDownPercent: 7,
  },
];
