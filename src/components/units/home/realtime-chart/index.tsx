import Pagination from "@/src/components/commons/pagination";
import styled from "@emotion/styled";
import MoneyAmountFilter from "./money-amount-filter";
import TimeFilter from "./time-filter";
import RealtimeChartTable from "./realtime-chart-table";
import { useRecoilValue } from "recoil";
import { realtimeChartTossState } from "@/src/commons/atom/realtimeChartTossState";
import { useEffect, useState } from "react";
import { OrderByDirection } from "firebase/firestore";
import { useGetItemsPagination } from "@/src/commons/hooks/useGetItemsPagination";
import { domesticForeignState } from "@/src/commons/atom/domesticForeignState";

const Section = styled.section``;
const Header = styled.header`
  font-size: 13px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
const H2 = styled.h2`
  margin-right: 15px;
`;
const StandardTime = styled.div`
  font-size: 14px;
  color: #78828f;
`;
const Filter = styled.div``;

export default function RealTimeChart(): React.ReactElement {
  const tossActiveFilter = useRecoilValue(realtimeChartTossState);
  const domesticForeignFilter = useRecoilValue(domesticForeignState);
  const [order, setOrder] = useState<string>("transactionPrice");
  const [sort, setSort] = useState<OrderByDirection>("desc");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [prevActive, setPrevActive] = useState<boolean>(false);
  const [nextActive, setNextActive] = useState<boolean>(true);
  const totalLimitNum = 100;
  const limitNum = 10;
  const lastPageNum = Math.ceil(totalLimitNum / limitNum);

  const pageBtnHandleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newPage = Number(e.currentTarget.id.split("-")[1]); // 새 페이지 번호 가져오기
    setCurrentPage(newPage);

    setPrevActive(newPage > 1); // 첫 페이지가 아닌 경우 이전 버튼 활성화
    setNextActive(newPage < lastPageNum); // 마지막 페이지가 아닌 경우 다음 버튼 활성화
  };

  const prevBtnHandleClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => {
        const newPage = prev - 1;

        if (newPage <= 1)
          setPrevActive(false); // 첫 페이지일 때 비활성화
        else setPrevActive(true);

        setNextActive(newPage < 10); // 마지막 페이지 여부 업데이트

        return newPage;
      });
    }
  };

  const nextBtnHandleClick = () => {
    if (currentPage < lastPageNum) {
      setCurrentPage((prev) => {
        const newPage = prev + 1;

        if (newPage >= lastPageNum)
          setNextActive(false); // 마지막 페이지일 때 비활성화
        else setNextActive(true);

        setPrevActive(newPage > 1); // 첫 페이지 여부 업데이트

        return newPage;
      });
    }
  };

  useEffect(() => {
    if (tossActiveFilter === "tossMoney" || tossActiveFilter === "money") {
      setOrder("transactionPrice");
      setSort("desc");
    } else if (
      tossActiveFilter === "tossAmount" ||
      tossActiveFilter === "amount"
    ) {
      setOrder("amount");
      setSort("desc");
    } else if (tossActiveFilter === "down" || tossActiveFilter === "up") {
      setOrder("changedRate");
      setSort("desc");
      if (tossActiveFilter === "down") {
        setSort("asc");
      }
    } else {
      setOrder("title");
      setSort("asc");
    }
  }, [tossActiveFilter]);

  const itemList = useGetItemsPagination(
    "stocks",
    domesticForeignFilter,
    order,
    sort,
    totalLimitNum,
    limitNum,
    currentPage,
  );

  return (
    <Section>
      <Header>
        <H2>실시간 차트</H2>
        <StandardTime>어제 18:29 기준</StandardTime>
      </Header>
      <Filter>
        <MoneyAmountFilter />
        <TimeFilter />
      </Filter>
      <RealtimeChartTable itemList={itemList} />
      <Pagination
        currentPage={currentPage}
        prevActive={prevActive}
        nextActive={nextActive}
        totalLimitNum={totalLimitNum}
        limitNum={limitNum}
        pageBtnHandleClick={pageBtnHandleClick}
        prevBtnHandleClick={prevBtnHandleClick}
        nextBtnHandleClick={nextBtnHandleClick}
      />
    </Section>
  );
}
