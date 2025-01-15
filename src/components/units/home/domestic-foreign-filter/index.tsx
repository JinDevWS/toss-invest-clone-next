import { domesticForeignState } from "@/src/commons/atom/domesticForeignState";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";

const FilterWrapper = styled.div`
  display: flex;
  position: relative;
`;
const FilterToggle = styled.span<{
  domesticForeignAll: string;
}>`
  display: inline-block;
  width: ${(props): string =>
    props.domesticForeignAll === "allFilter"
      ? "45px"
      : props.domesticForeignAll === "domesticFilter"
        ? "100px"
        : "115px"};
  height: 4px;
  border: 0;
  border-radius: 10px;
  position: absolute;
  background-color: black;
  left: ${(props): string =>
    props.domesticForeignAll === "allFilter"
      ? "0px"
      : props.domesticForeignAll === "domesticFilter"
        ? "65px"
        : "185px"};
  bottom: -5px;
  transition: all 200ms linear;
`;

const Filter = styled.button<{
  domesticForeignAll: string;
  id: string;
}>`
  font-size: 25px;
  font-weight: bold;
  border: 0;
  background-color: transparent;
  color: ${(props): string =>
    props.domesticForeignAll === props.id ? "black" : "#8b95a1"};
  display: flex;
  align-items: center;
  margin-right: 20px;
  line-height: 1.5;
  cursor: pointer;
`;

const FilterSignal = styled.span`
  font-size: 13px;
  font-weight: normal;
  display: flex;
  align-items: center;
  color: #4e5968;
  margin-left: 10px;
`;

const Signal = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border: 0;
  border-radius: 50%;
  background-color: #18d628;
  margin-right: 5px;
`;

export default function DomesticForeignFilter(): React.ReactElement {
  const [domesticForeignAll, setDomesticForeignAll] =
    useRecoilState(domesticForeignState);

  const filterHandleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const currentTarget = e.currentTarget;
    setDomesticForeignAll(currentTarget.id);
  };

  return (
    <FilterWrapper>
      <FilterToggle domesticForeignAll={domesticForeignAll} />
      <Filter
        id="allFilter"
        domesticForeignAll={domesticForeignAll}
        onClick={filterHandleClick}
      >
        전체
      </Filter>
      <Filter
        id="domesticFilter"
        domesticForeignAll={domesticForeignAll}
        onClick={filterHandleClick}
      >
        국내
        <FilterSignal>
          <Signal />
          정규장
        </FilterSignal>
      </Filter>
      <Filter
        id="foreignFilter"
        domesticForeignAll={domesticForeignAll}
        onClick={filterHandleClick}
      >
        해외
        <FilterSignal>
          <Signal />
          데이마켓
        </FilterSignal>
      </Filter>
    </FilterWrapper>
  );
}
