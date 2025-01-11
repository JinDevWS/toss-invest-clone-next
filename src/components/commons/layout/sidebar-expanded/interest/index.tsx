import { HeartFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import SidebarH2DollarSwitch from "../commons/SidebarH2DollarSwitch.tsx";
import SidebarHr from "../commons/SidebarHr.tsx";
import { Section, Header } from "@/styles/sidebar/SidebarExpandedSection.js";
import { v4 as uuidv4 } from "uuid";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  overflow: scroll;
  scrollbar-width: none;
`;

const H3 = styled.h3`
  font-size: 15px;
  margin-bottom: 3px;
  color: #2c3646;
`;

const H4 = styled.h4`
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 10px;
`;

const ListGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: 1fr;
`;

const ListGridItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  font-size: 14px;
  font-weight: bold;
`;

const ImgBox = styled.div`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  position: relative;
`;

const ImgIcon = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const ImgIconKrOrUs = styled.img`
  width: 14px;
  height: 13px;
  position: absolute;
  right: 0;
  bottom: 0;
  border: 1px solid white;
`;

const ItemTitle = styled.div`
  flex-grow: 1;
  word-break: keep-all;
  word-wrap: break-word;
`;

const NumberBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-right: 10px;
`;

const Price = styled.div`
  margin-bottom: 3px;
`;

const UpDownPrice = styled.div`
  font-size: 12px;
  font-weight: normal;
`;

const IconBox = styled.div`
  font-size: 18px;
`;

interface IlistItemsData {
  id: string;
  img: string;
  krOrUs: string;
  title: string;
  priceWon: number;
  priceDollar: number;
  upOrDownWon: number;
  upOrDownDollar: number;
  upOrDownPercent: number;
}

const dollarCalc = (won) => {
  return won * 0.0006816;
};

export default function SidebarExpandedMyInvest(props): React.ReactElement {
  const h2Text = "관심 종목";

  const listItems = [
    {
      id: `${uuidv4()}`,
      img: "icn-alux.png",
      krOrUs: "us",
      title: "알럭스",
      priceWon: 4257,
      upOrDownWon: 2216,
      upOrDownPercent: 50,
    },
    {
      id: `${uuidv4()}`,
      img: "icn-apple.png",
      krOrUs: "us",
      title: "애플",
      priceWon: 4257,
      upOrDownWon: 2216,
      upOrDownPercent: 10,
    },
    {
      id: `${uuidv4()}`,
      img: "icn-aton.png",
      krOrUs: "us",
      title: "에이톤",
      priceWon: 4257,
      upOrDownWon: 2216,
      upOrDownPercent: 10,
    },
    {
      id: `${uuidv4()}`,
      img: "icn-azn.png",
      krOrUs: "us",
      title: "에이젠",
      priceWon: 4257,
      upOrDownWon: 2216,
      upOrDownPercent: 10,
    },
    {
      id: `${uuidv4()}`,
      img: "icn-ben.png",
      krOrUs: "us",
      title: "벤",
      priceWon: 4257,
      upOrDownWon: 2216,
      upOrDownPercent: 10,
    },
    {
      id: `${uuidv4()}`,
      img: "icn-bp.png",
      krOrUs: "us",
      title: "비피",
      priceWon: 4257,
      upOrDownWon: 2216,
      upOrDownPercent: 10,
    },
    {
      id: `${uuidv4()}`,
      img: "icn-byon.png",
      krOrUs: "us",
      title: "비욘",
      priceWon: 4257,
      upOrDownWon: 2216,
      upOrDownPercent: 10,
    },
    {
      id: `${uuidv4()}`,
      img: "icn-caliber.png",
      krOrUs: "us",
      title: "칼리버",
      priceWon: 4257,
      upOrDownWon: 2216,
      upOrDownPercent: 10,
    },
    {
      id: `${uuidv4()}`,
      img: "icn-cat.png",
      krOrUs: "us",
      title: "캣",
      priceWon: 4257,
      upOrDownWon: 2216,
      upOrDownPercent: 10,
    },
    {
      id: `${uuidv4()}`,
      img: "icn-clearone.png",
      krOrUs: "us",
      title: "클리어원",
      priceWon: 10478,
      upOrDownWon: 2216,
      upOrDownPercent: 10,
    },
  ];

  return (
    <Section>
      <Header>
        <SidebarH2DollarSwitch
          h2Text={h2Text}
          isDollar={props.isDollar}
          dollarBtnHandleClick={props.dollarBtnHandleClick}
        />
        <SidebarHr />
      </Header>
      <Article>
        <H3>관심 주식 TOP 10</H3>
        <H4>관심 그룹에 담아보세요</H4>
        <ListGrid>
          {listItems.map((el: IlistItemsData): React.ReactElement => {
            return (
              <ListGridItem key={el.id}>
                <ImgBox>
                  <ImgIcon
                    src={`./assets/images/${el.img}`}
                    alt="주식 아이콘"
                  />
                  <ImgIconKrOrUs
                    src={`./assets/images/${el.krOrUs === "us" ? "us.png" : "kr.png"}`}
                    alt={el.krOrUs === "us" ? "미국 주식" : "한국 주식"}
                  />
                </ImgBox>
                <ItemTitle>{el.title}</ItemTitle>
                <NumberBox>
                  <Price>
                    {props.isDollar
                      ? dollarCalc(el.priceWon).toFixed(2)
                      : el.priceWon}
                  </Price>
                  <UpDownPrice>
                    {props.isDollar
                      ? dollarCalc(el.upOrDownWon).toFixed(2)
                      : el.upOrDownWon}
                    {el.upOrDownPercent}
                  </UpDownPrice>
                </NumberBox>
                <IconBox>
                  <HeartFilled />
                </IconBox>
              </ListGridItem>
            );
          })}
        </ListGrid>
      </Article>
    </Section>
  );
}
