import styled from "@emotion/styled";
import { CopyFilled } from "@ant-design/icons";

const Article = styled.article`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoItemIcon = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  font-size: 40px;
  color: #c7cccd;
`;

const NoItemText = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export default function SidebarNoItem(props): React.ReactElement {
  return (
    <Article>
      <NoItemIcon>
        <CopyFilled />
      </NoItemIcon>
      <NoItemText>{props.noItemText}</NoItemText>
    </Article>
  );
}
