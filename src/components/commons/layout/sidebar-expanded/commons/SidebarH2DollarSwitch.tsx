import { ISidebarH2DollarSwitchProps } from "@/src/commons/types/types";
import styled from "@emotion/styled";

const H2Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const H2 = styled.h2`
  font-size: 17px;
  color: #333d4b;
`;

const DollarSwitch = styled.button`
  width: 46px;
  height: 26px;
  font-size: 12px;
  font-weight: bold;
  border: 0;
  border-radius: 5px;
  background-color: #e9ecef;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const DollarBtn = styled.span`
  width: 50%;
  height: 100%;
  border: 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const DollarToggleBtn = styled.span<{
  isDollar: boolean;
}>`
  isolation: isolate;
  width: 23px;
  height: 24px;
  border-radius: 5px;
  transform: scale(0.85);
  position: absolute;
  background-color: white;
  box-shadow: -1px 1px 3px #ccd1d5;
  left: ${(props): string => (props.isDollar ? "0px" : "23px")};
  transition: left 100ms linear;
  z-index: 0;
`;

export default function SidebarH2DollarSwitch(
  props: ISidebarH2DollarSwitchProps,
): React.ReactElement {
  return (
    <H2Wrapper>
      <H2>{props.h2Text}</H2>
      <DollarSwitch type="button">
        <DollarToggleBtn isDollar={props.isDollar}></DollarToggleBtn>
        <DollarBtn id="dollar" onClick={props.dollarBtnHandleClick}>
          $
        </DollarBtn>
        <DollarBtn id="won" onClick={props.dollarBtnHandleClick}>
          원
        </DollarBtn>
      </DollarSwitch>
    </H2Wrapper>
  );
}
