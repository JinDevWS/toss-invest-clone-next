import { DownOutlined, CheckOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { useState } from "react";

const SelectWrapper = styled.div`
  width: 150px;
  height: 26px;
  display: flex;
  align-items: center;
  z-index: 10;
`;

const StyledSelectButton = styled.button`
  width: auto;
  height: 100%;
  font-size: 14px;
  color: #333d4b;
  border: 0;
  position: relative;
  background-color: transparent;
  text-align: left;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const SelectBtnIcon = styled.span`
  font-size: 10px;
  margin: 0px 5px;
`;

const StyledSelectMenu = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  position: absolute;
  top: 100px;
  padding: 7px;
  background: white;
  border-radius: 10px;
`;

const SelectOption = styled.span`
  border-radius: 10px;
  padding: 10px;
  &:hover {
    background-color: #e9ecef;
  }
  &.clicked {
    color: #3182f6;
  }
`;

const SelectOptionIcon = styled(SelectOption)`
  font-size: 10px;
  padding: 5px 0 5px 5px;
`;

export default function SidebarSelect(props): React.ReactElement {
  const [selected, setSelected] = useState(props.selectedInitValue);
  const [selectBtnText, setSelectBtnText] = useState(props.selectBtnInitText);

  const optionHandleClick = (e: React.MouseEvent<HTMLSpanElement>): void => {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    setSelected((): string => {
      return currentTarget.id ? currentTarget.id : props.selectedInitValue;
    });
    setSelectBtnText(currentTarget.textContent);
  };

  return (
    <SelectWrapper>
      <StyledSelectButton
        onClick={props.selectBtnHandleClick}
        id={props.selectBtnId}
      >
        {selectBtnText}
        <SelectBtnIcon>
          <DownOutlined />
        </SelectBtnIcon>
      </StyledSelectButton>
      {props.disp && (
        <StyledSelectMenu id={props.selectMenuId}>
          {props.optionList.map(
            (el: string, index: number): React.ReactElement => {
              return (
                <SelectOption
                  key={index}
                  id={el.value}
                  label={el.label}
                  onClick={optionHandleClick}
                >
                  {el.label}
                  {selected === el.value && (
                    <SelectOptionIcon>
                      <CheckOutlined />
                    </SelectOptionIcon>
                  )}
                </SelectOption>
              );
            },
          )}
        </StyledSelectMenu>
      )}
    </SelectWrapper>
  );
}
