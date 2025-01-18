import Pagination from "@/src/components/commons/pagination";
import styled from "@emotion/styled";
import MoneyAmountFilter from "./money-amount-filter";
import TimeFilter from "./time-filter";
import RealtimeChartTable from "./realtime-chart-table";

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
      <RealtimeChartTable />
      <Pagination />
    </Section>
  );
}
