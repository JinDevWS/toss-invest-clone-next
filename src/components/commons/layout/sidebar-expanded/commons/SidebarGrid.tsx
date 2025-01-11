import { HeartFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { sidebarClickBtnState } from "@/src/commons/atom/sidebarClickBtnState.tsx";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  margin: 0 -10px;
  padding-top: 18px;
  overflow: scroll;
  scrollbar-width: none;
  overscroll-behavior-y: none;
`;

const H3 = styled.h3`
  font-size: 15px;
  margin-bottom: 3px;
  color: #2c3646;
  margin-left: 10px;
`;

const H4 = styled.h4`
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 10px;
  margin-left: 10px;
`;

const ListGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: 1fr;
`;

const ListGridItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e9ecef;
  }
  transition: background-color 0.1s linear;
`;

const IndexNumBox = styled.div`
  color: #3182f6;
  font-size: 15px;
  padding-right: 10px;
`;

const ImgBox = styled.div`
  width: 30px;
  height: 30px;
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
`;

const Price = styled.div`
  margin-bottom: 3px;
`;

const UpDownPrice = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: red;
`;

const IconBox = styled.div`
  font-size: 18px;
  margin-left: 10px;
`;

const HeartFilledHover = styled(HeartFilled)`
  color: #dde1e5;
  &:hover {
    color: #acb2bd;
  }
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

const EXCHANGE_RATE = 0.0006816; // 환율 상수
const dollarCalc = (won: number): string => {
  return (won * EXCHANGE_RATE).toFixed(2);
};

const upOrDownPercentCalc = (
  isDollar: boolean,
  priceWon: number,
  upOrDownPercent: number,
): string => {
  const value = isDollar
    ? Number(dollarCalc(priceWon)) * (upOrDownPercent / 100)
    : priceWon * (upOrDownPercent / 100);
  return value.toFixed(isDollar ? 2 : 0); // 달러는 소수점 2자리, 원화는 정수 처리
};

export default function SidebarGrid(props): React.ReactElement {
  const clickBtnState = useRecoilValue(sidebarClickBtnState);

  return (
    <Article>
      {clickBtnState === "interest" && (
        <>
          <H3>관심 주식 TOP 10</H3>
          <H4>관심 그룹에 담아보세요</H4>
        </>
      )}
      <ListGrid>
        {props.itemList.map(
          (el: IlistItemsData, index: number): React.ReactElement => {
            return (
              <ListGridItem key={el.id}>
                {clickBtnState === "realtime" && (
                  <IndexNumBox>{index + 1}</IndexNumBox>
                )}
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
                      ? `$${dollarCalc(el.priceWon)}`
                      : `${el.priceWon.toLocaleString("ko-KR")}원`}
                  </Price>
                  <UpDownPrice>
                    {props.isDollar
                      ? `+$${upOrDownPercentCalc(
                          props.isDollar,
                          el.priceWon,
                          el.upOrDownPercent,
                        )}`
                      : `+${Number(
                          upOrDownPercentCalc(
                            props.isDollar,
                            el.priceWon,
                            el.upOrDownPercent,
                          ),
                        ).toLocaleString("ko-KR")}원`}
                    {` (${el.upOrDownPercent}%)`}
                  </UpDownPrice>
                </NumberBox>
                {clickBtnState === "interest" && (
                  <IconBox>
                    <HeartFilledHover />
                  </IconBox>
                )}
              </ListGridItem>
            );
          },
        )}
        <ListGridItem>
          {clickBtnState === "interest" && (
            <>
              <ImgBox>
                <ImgIcon
                  src={`./assets/images/icon-plus-grey-fill.png`}
                  alt="더하기 아이콘"
                />
              </ImgBox>
              <ItemTitle>추가하기</ItemTitle>
            </>
          )}
        </ListGridItem>
      </ListGrid>
    </Article>
  );
}
