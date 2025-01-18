import { realtimeChartTimeState } from "@/src/commons/atom/realtimeChartTimeState";
import { useGetItems } from "@/src/commons/hooks/useGetItems";
import styled from "@emotion/styled";
import { useState } from "react";
import { useRecoilState } from "recoil";

const Wrapper = styled.div`
  margin: 10px 0;
`;
const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  position: relative;
`;
const Li = styled.li`
  height: 40px;
  margin-right: 30px;
`;
const Button = styled.button<{
  id: string;
  timeActiveFilter: string;
}>`
  display: block;
  height: 100%;
  font-size: 15px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  font-weight: ${(props) =>
    props.id === props.timeActiveFilter ? "bold" : "normal"};
`;
const ToggleBar = styled.span<{
  width: number;
  left: number;
}>`
  width: calc(${(props) => props.width}px + 30px);
  height: 100%;
  background-color: #f3f4f5;
  position: absolute;
  z-index: -1;
  left: calc(${(props) => props.left}px - 15px);
  top: 0;
  border-radius: 20px;
  transition: all 200ms ease-in-out;
`;

export default function TimeFilter(): React.ReactElement {
  const [timeActiveFilter, setTimeActiveFilter] = useRecoilState(
    realtimeChartTimeState,
  );
  const [width, setWidth] = useState<number>(40);
  const [left, setLeft] = useState<number>(0);

  const btnHandleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const currentTarget = e.currentTarget;
    setTimeActiveFilter(currentTarget.id);
    setWidth(currentTarget.offsetWidth);
    setLeft(currentTarget.offsetLeft);
  };

  // useGetItems 훅을 호출하여 데이터를 가져오기
  const itemList = useGetItems(
    "sidebar-realtime-filter-time-option-list",
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
              timeActiveFilter={timeActiveFilter}
              onClick={btnHandleClick}
            >
              {label}
            </Button>
          </Li>
        ))}
        <ToggleBar width={width} left={left} />
      </Ul>
    </Wrapper>
  );
}
