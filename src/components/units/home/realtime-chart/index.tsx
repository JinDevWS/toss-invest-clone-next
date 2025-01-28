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
import { usePagination } from "@/src/commons/hooks/usePagination";
import PaginationEllipsis from "@/src/components/commons/pagination-ellipsis";

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

  const totalLimitNum = 100;
  const limitNum = 10;

  const {
    currentPage,
    prevActive,
    nextActive,
    goToPage,
    goToPrevPage,
    goToNextPage,
  } = usePagination(totalLimitNum, limitNum);

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
      <PaginationEllipsis
        currentPage={currentPage}
        prevActive={prevActive}
        nextActive={nextActive}
        totalLimitNum={totalLimitNum}
        limitNum={limitNum}
        goToPage={goToPage}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
      />
    </Section>
  );
}
