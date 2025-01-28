import { IEtfListProps } from "@/src/commons/types/types";
import styled from "@emotion/styled";

const IMG_PATH_US = "./assets/images/us-etf/";
const US_ICON_PATH = "./assets/images/us.png";

const Ul = styled.ul`
  list-style-type: none;
`;
const Li = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background-color: #f3f4f5;
  }
  transition: background-color 200ms ease-in-out;
`;
const Order = styled.div`
  padding-right: 15px;
  font-size: 15px;
  font-weight: bold;
  color: #2371eb;
`;
const IconImgBox = styled.div`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  position: relative;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
const UsIcon = styled.img`
  width: 12px;
  height: 10px;
  background-color: white;
  border-left: 1px solid white;
  border-radius: 3px;
  position: absolute;
  right: 0;
  bottom: 0;
`;
const TitleBox = styled.div`
  flex-grow: 1;
`;
const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
`;
const SubTitle = styled.div`
  font-size: 14px;
`;
const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  color: #6b7684;
`;
const ChangedRate = styled.div<{
  changedRate: number;
}>`
  color: ${(props) =>
    props.changedRate > 0
      ? "#F04351"
      : props.changedRate < 0
        ? "#2371eb"
        : "inherit"};
  font-size: 15px;
  font-weight: bold;
`;
const Price = styled.div`
  font-size: 14px;
`;

export default function EtfList({
  itemList,
}: IEtfListProps): React.ReactElement {
  return (
    <>
      {itemList.map((el) => (
        <Ul key={el._id}>
          <Li>
            <Order>{el.order}</Order>
            <IconImgBox>
              <Img src={`${IMG_PATH_US}${el.img}`} alt="ETF 아이콘" />
              <UsIcon src={US_ICON_PATH} alt="미국 ETF" />
            </IconImgBox>
            <TitleBox>
              <Title>{el.title}</Title>
              <SubTitle>{el.subTitle}</SubTitle>
            </TitleBox>
            <PriceBox>
              <ChangedRate changedRate={el.changedRate}>
                {el.changedRate.toFixed(1)}%
              </ChangedRate>
              <Price>{el.price.toLocaleString("ko-KR")}원</Price>
            </PriceBox>
          </Li>
        </Ul>
      ))}
    </>
  );
}
