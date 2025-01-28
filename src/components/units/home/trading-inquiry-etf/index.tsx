import { domesticForeignState } from "@/src/commons/atom/domesticForeignState";
import moment from "moment";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import NetBuySellList from "./net-buy-sell-list";
import styled from "@emotion/styled";
import UsEtfList from "./us-etf-list";
import Pagination from "@/src/components/commons/pagination";
import { usePagination } from "@/src/commons/hooks/usePagination";

const WrapperSection = styled.section`
  margin-top: 100px;
  line-height: 1.5;
`;
const H2 = styled.h2`
  font-size: 20px;
  margin: 0 0 20px 10px;
`;
const BuyOrSellFilter = styled.div`
  border-bottom: 1px solid #ececec;
  margin-bottom: 10px;
  position: relative;
`;
const FilterButton = styled.button<{
  id: string;
  buyOrSell: string;
}>`
  font-size: 17px;
  background-color: transparent;
  border: 0;
  font-weight: ${(props) => (props.id === props.buyOrSell ? "bold" : "normal")};
  padding: 10px 3px;
  margin-right: 10px;
  cursor: pointer;
`;
const Toggle = styled.div<{
  btnLeft: number;
}>`
  width: 50px;
  height: 2px;
  background-color: black;
  position: absolute;
  left: ${(props) => props.btnLeft}px;
  bottom: 0;
  transition: left 200ms ease-in-out;
`;
const H2Box = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  & > h2 {
    padding-right: 10px;
    margin: 0;
  }
`;
const StandardTime = styled.div`
  font-size: 14px;
  color: #6b7684;
`;
const UsEtfSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export default function TradingInquiryEtf(): React.ReactElement {
  const domesticForeign = useRecoilValue(domesticForeignState);
  const [buyOrSell, setBuyOrSell] = useState<string>("buyFilter");
  const [btnLeft, setBtnLeft] = useState<number>(0);

  const buySellBtnHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const currentTarget = e.currentTarget;
    setBuyOrSell(currentTarget.id);
    setBtnLeft(currentTarget.offsetLeft);
  };

  const totalLimitNum = 5;
  const limitNum = 3;

  const {
    currentPage,
    prevActive,
    nextActive,
    goToPage,
    goToPrevPage,
    goToNextPage,
  } = usePagination(totalLimitNum, limitNum);

  return (
    <WrapperSection>
      <header>
        {(domesticForeign === "allFilter" ||
          domesticForeign === "domesticFilter") && (
          <div>
            <H2>국내 투자자별 거래 현황</H2>
            <BuyOrSellFilter>
              <FilterButton
                type="button"
                id="buyFilter"
                buyOrSell={buyOrSell}
                onClick={buySellBtnHandler}
              >
                순매수
              </FilterButton>
              <FilterButton
                type="button"
                id="sellFilter"
                buyOrSell={buyOrSell}
                onClick={buySellBtnHandler}
              >
                순매도
              </FilterButton>
              <Toggle btnLeft={btnLeft} />
            </BuyOrSellFilter>
          </div>
        )}
        {domesticForeign === "foreignFilter" && (
          <H2Box>
            <H2>해외 ETF 모아보기</H2>
            <StandardTime>오늘 {moment().format("HH:mm")} 기준</StandardTime>
          </H2Box>
        )}
      </header>
      {(domesticForeign === "allFilter" ||
        domesticForeign === "domesticFilter") && (
        <NetBuySellList buyOrSell={buyOrSell} />
      )}
      {domesticForeign === "foreignFilter" && (
        <UsEtfSection>
          <UsEtfList currentPage={currentPage} />
          <Pagination
            currentPage={currentPage}
            prevActive={prevActive}
            nextActive={nextActive}
            totalLimitNum={totalLimitNum}
            limitNum={limitNum}
            goToPage={goToPage}
            goToPrevPage={goToPrevPage}
            goToNextPage={goToNextPage}
          />
        </UsEtfSection>
      )}
    </WrapperSection>
  );
}
