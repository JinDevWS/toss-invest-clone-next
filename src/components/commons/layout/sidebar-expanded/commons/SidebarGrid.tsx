import { HeartFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { sidebarClickBtnState } from "@/src/commons/atom/sidebarClickBtnState";
import { ISidebarGridProps } from "@/src/commons/types/types";

const BASE_IMAGE_PATH = "./assets/images";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  margin: 0 -10px;
  overflow: scroll;
  scrollbar-width: none;
  overscroll-behavior-y: none;
`;

const H3 = styled.h3`
  font-size: 15px;
  margin-bottom: 3px;
  padding-top: 18px;
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

export default function SidebarGrid({
  isDollar,
  itemList,
}: ISidebarGridProps): React.ReactElement {
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
        {itemList.map((el, index): React.ReactElement => {
          return (
            <ListGridItem key={el.id}>
              {clickBtnState === "realtime" && (
                <IndexNumBox>{index + 1}</IndexNumBox>
              )}
              <ImgBox>
                <ImgIcon
                  src={`${BASE_IMAGE_PATH}/${el.img}`}
                  alt="주식 아이콘"
                />
                {el.krOrUs === "us" && (
                  <ImgIconKrOrUs
                    src={`${BASE_IMAGE_PATH}/us.png`}
                    alt="미국 주식"
                  />
                )}
              </ImgBox>
              <ItemTitle>{el.title}</ItemTitle>
              <NumberBox>
                <Price>
                  {isDollar
                    ? `$${dollarCalc(el.priceWon)}`
                    : `${el.priceWon.toLocaleString("ko-KR")}원`}
                </Price>
                <UpDownPrice>
                  {isDollar
                    ? `+$${upOrDownPercentCalc(
                        isDollar,
                        el.priceWon,
                        el.upOrDownPercent,
                      )}`
                    : `+${Number(
                        upOrDownPercentCalc(
                          isDollar,
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
        })}
        <ListGridItem>
          {clickBtnState === "interest" && (
            <>
              <ImgBox>
                <ImgIcon
                  src={`${BASE_IMAGE_PATH}/icon-plus-grey-fill.png`}
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
