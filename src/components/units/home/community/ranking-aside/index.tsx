import { IRankingAsideProps } from "@/src/commons/types/types";
import styled from "@emotion/styled";

const ICON_IMG_PATH = "./assets/images/community/";
const US_IMG_PATH = "./assets/images/";

const Aside = styled.aside`
  min-width: 320px;
`;
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-self: stretch;
`;
const Li = styled.li`
  margin-bottom: 5px;
`;
const Button = styled.button<{
  id: string;
  activeCommunity: string;
}>`
  width: 320px;
  display: grid;
  grid-template-columns: 20px 35px 1fr;
  gap: 5px;
  align-items: center;
  border: 0;
  border-radius: 15px;
  background-color: ${(props) =>
    props.id === props.activeCommunity ? "#F3F4F5" : "transparent"};
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.id === props.activeCommunity ? "#F3F4F5" : "#fafafb"};
  }
`;
const RankIndex = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #3182f6;
`;
const IconBox = styled.div`
  width: 35px;
  height: 35px;
  position: relative;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
const UsIcon = styled.img`
  display: block;
  width: 12px;
  height: 10px;
  position: absolute;
  bottom: 0;
  right: 0;
  border-left: 1px solid white;
  background-color: white;
`;
const TitleRate = styled.div`
  display: grid;
  grid-template-columns: minmax(0px, 1fr) minmax(0px, 1fr);
  padding: 8px 4px;
`;
const TitleBlock = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const Title = styled.div`
  font-size: 15px;
  color: #4e5968;
  overflow: hidden;
  white-space: nowrap;
  word-break: break-all;
  text-overflow: ellipsis;
`;
const Rate = styled.div<{
  changedRate: number;
}>`
  display: flex;
  justify-content: flex-end;
  font-size: 15px;
  font-weight: bold;
  color: ${(props) =>
    props.changedRate > 0
      ? "#f04351"
      : props.changedRate < 0
        ? "#3182F6"
        : "#4E5968"};
`;

export default function RankingAside({
  activeCommunity,
  ulRef,
  itemList,
  commuBtnHandleClick,
}: IRankingAsideProps): React.ReactElement {
  return (
    <Aside>
      <Ul ref={ulRef}>
        {itemList.map((el, index) => (
          <Li key={el._id}>
            <Button
              type="button"
              id={el.id}
              activeCommunity={activeCommunity}
              onClick={commuBtnHandleClick}
            >
              <RankIndex>{index + 1}</RankIndex>
              <IconBox>
                <Img src={`${ICON_IMG_PATH}${el.img}`} alt="주식 종목 이미지" />
                {el.krOrUs === "us" && (
                  <UsIcon src={`${US_IMG_PATH}us.png`} alt="미국 주식" />
                )}
              </IconBox>
              <TitleRate>
                <TitleBlock>
                  <Title>{el.title}</Title>
                </TitleBlock>
                <Rate changedRate={el.changedRate}>
                  {el.changedRate > 0 ? "+" : ""}
                  {el.changedRate}%
                </Rate>
              </TitleRate>
            </Button>
          </Li>
        ))}
      </Ul>
    </Aside>
  );
}
