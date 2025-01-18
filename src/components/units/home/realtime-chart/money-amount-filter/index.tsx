import { realtimeChartTossState } from "@/src/commons/atom/realtimeChartTossState";
import { useGetItems } from "@/src/commons/hooks/useGetItems";
import styled from "@emotion/styled";
import { useState } from "react";
import { useRecoilState } from "recoil";
import DangerHideIcon from "@/public/assets/images/svgs/check.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  align-items: center;
`;
const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  position: relative;
`;
const Li = styled.li`
  height: 45px;
  margin-right: 30px;
`;
const Button = styled.button<{
  id: string;
  tossActiveFilter: string;
}>`
  display: block;
  height: 100%;
  font-size: 17px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  font-weight: ${(props) =>
    props.id === props.tossActiveFilter ? "bold" : "normal"};
`;
const ToggleBar = styled.span<{
  width: number;
  left: number;
}>`
  width: ${(props) => props.width}px;
  height: 2px;
  background-color: black;
  position: absolute;
  left: ${(props) => props.left}px;
  bottom: 0;
  transition: all 200ms ease-in-out;
`;
const DangerHideButton = styled.button`
  display: flex;
  align-items: center;
  color: #2371eb;
  background-color: white;
  border: 0;
  cursor: pointer;
`;
const DangerHideText = styled.span`
  margin-left: 5px;
  font-size: 14px;
  font-weight: bold;
`;

export default function MoneyAmountFilter(): React.ReactElement {
  const [tossActiveFilter, setTossActiveFilter] = useRecoilState(
    realtimeChartTossState,
  );
  const [width, setWidth] = useState<number>(123);
  const [left, setLeft] = useState<number>(0);

  const btnHandleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const currentTarget = e.currentTarget;
    setTossActiveFilter(currentTarget.id);
    setWidth(currentTarget.offsetWidth);
    setLeft(currentTarget.offsetLeft);
  };

  // useGetItems 훅을 호출하여 데이터를 가져오기
  const itemList = useGetItems(
    "sidebar-realtime-filter-option-list",
    "order",
    "asc",
  );

  return (
    <Wrapper>
      <Ul>
        {itemList.map(({ _id, value, label }) => (
          <Li key={_id}>
            <Button
              type="button"
              id={value}
              tossActiveFilter={tossActiveFilter}
              onClick={btnHandleClick}
            >
              {label}
            </Button>
          </Li>
        ))}
        <ToggleBar width={width} left={left} />
      </Ul>
      <DangerHideButton type="button">
        <DangerHideIcon style={{ width: "15px" }} />
        <DangerHideText>투자위험 주식 숨기기</DangerHideText>
      </DangerHideButton>
    </Wrapper>
  );
}
