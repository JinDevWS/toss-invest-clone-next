import styled from "@emotion/styled";

export const GridUl = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  width: max-content;
  list-style-type: none;
`;
export const GridLi = styled.li`
  padding-right: 10px;
  &:last-child {
    padding: 0;
  }
`;
export const GridBtn = styled.a`
  display: grid;
  grid-auto-columns: max-content;
  grid-auto-flow: column;
  grid-template-columns: minmax(104px, max-content);
  column-gap: 8px;
  padding: 20px;
  background-color: #f3f4f5;
  border-radius: 10px;
  font-size: 14px;
  align-items: center;
  &:hover {
    background-color: #e5e8eb;
  }
  transition: background-color 200ms ease-in-out;
`;
export const GridItemBox = styled.span`
  display: flex;
  flex-direction: column;
`;
export const GridItemTitle = styled.span`
  display: flex;
`;
export const ImgIcon = styled.img`
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-left: 5px;
`;
export const GridItemPrice = styled.span`
  font-size: 18px;
  font-weight: bold;
  padding: 5px 0;
`;
export const GridItemChangedBox = styled.span<{
  changedPrice: number;
}>`
  color: ${(props) =>
    props.changedPrice > 0
      ? "#ef293a"
      : props.changedPrice < 0
        ? "#3182F6"
        : "black"};
`;
export const Graph = styled.div<{
  changedPrice: number;
}>`
  --adaptiveColor: ${(props) =>
    props.changedPrice > 0
      ? "#ef293a"
      : props.changedPrice < 0
        ? "#3182F6"
        : "black"};
`;
