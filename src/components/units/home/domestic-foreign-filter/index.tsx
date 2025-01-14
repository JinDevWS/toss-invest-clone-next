import styled from "@emotion/styled";

const FilterWrapper = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const FilterToggle = styled.span``;

const Filter = styled.div``;

const FilterSignal = styled.div``;

const Signal = styled.span``;

export default function DomesticForeignFilter(): React.ReactElement {
  return (
    <FilterWrapper>
      <FilterToggle />
      <Filter>전체</Filter>
      <Filter>
        국내
        <FilterSignal>
          <Signal />장 닫힘
        </FilterSignal>
      </Filter>
      <Filter>
        해외
        <FilterSignal>
          <Signal />
          프리마켓
        </FilterSignal>
      </Filter>
    </FilterWrapper>
  );
}
