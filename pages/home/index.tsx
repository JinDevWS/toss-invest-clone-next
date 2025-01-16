import DomesticForeignFilter from "@/src/components/units/home/domestic-foreign-filter";
import FloatingFilter from "@/src/components/units/home/floating-filter";
import GraphGrid from "@/src/components/units/home/graph-grid";
import { CalendarFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

const HomeWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 5000px;
  max-width: 1280px;
  padding: 0 40px;
  overflow: visible;
`;

const FilterCalendarWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
`;

const CalendarBtn = styled.button`
  width: 110px;
  font-size: 14px;
  border: 1px solid #dadee1;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #f3f4f5;
  }
  transition: background-color 200ms ease;
`;

const CalendarIcon = styled.span`
  margin-right: 5px;
`;

export default function HomePage() {
  return (
    <HomeWrapper>
      <FloatingFilter />
      <FilterCalendarWrapper>
        <DomesticForeignFilter />
        <CalendarBtn>
          <CalendarIcon>
            <CalendarFilled style={{ color: "#FFAE00" }} />
          </CalendarIcon>
          증시 캘린더
        </CalendarBtn>
      </FilterCalendarWrapper>
      <GraphGrid />
    </HomeWrapper>
  );
}
