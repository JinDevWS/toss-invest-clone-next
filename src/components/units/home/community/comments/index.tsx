import { ICommentsProps } from "@/src/commons/types/types";
import styled from "@emotion/styled";
import moment from "moment";
import "moment/locale/ko";
import { useEffect } from "react";

const ICON_PATH = "./assets/images/community/";

const Wrapper = styled.article`
  width: 100%;
  height: 800px;
  border: 1px solid #e5e8ea;
  border-radius: 10px;
`;
const Ul = styled.div`
  padding: 15px;
  overflow-y: scroll;
  scrollbar-width: none;
  &:hover {
    scrollbar-width: thin;
  }
`;
const Li = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px;
  border-bottom: 1px solid #ededed;
`;
const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Icon = styled.img`
  display: block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;
const Stockholder = styled.div`
  color: #dd7d00;
  font-size: 12px;
  margin-top: 5px;
`;
const ContentsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const NicknameBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin: 8px 0;
`;
const Nickname = styled.div`
  font-weight: bold;
`;
const Class = styled.div`
  color: #4e5968;
  background-color: #dfe0e3;
  border-radius: 10px;
  font-size: 11px;
  padding: 3px 5px;
  margin-left: 5px;
`;
const Dot = styled.div`
  width: 2px;
  height: 2px;
  border-radius: 50px;
  background-color: #8b95a1;
  margin: 0 8px;
`;
const DateTime = styled.div`
  color: #4e5968;
`;
const CommentBox = styled.div`
  font-size: 15px;
  line-height: 1.5;
`;
const CommentTitle = styled.div`
  font-weight: bold;
`;
const Comment = styled.div``;
const CommentWriter = styled.div``;

export default function Comments({
  commentList,
}: ICommentsProps): React.ReactElement {
  useEffect(() => {
    moment.locale("ko");
  }, []);

  return (
    <Wrapper>
      <Ul>
        {commentList.map((el) => (
          <Li key={el._id}>
            <IconBox>
              <Icon src={`${ICON_PATH}${el.icon}`} alt="프로필 이미지" />
              {el.isStockholder && <Stockholder>주주</Stockholder>}
            </IconBox>
            <ContentsBox>
              <NicknameBox>
                <Nickname>{el.nickname}</Nickname>
                <Class>{el.class}</Class>
                <Dot />
                <DateTime>
                  {new Date().getDate() - new Date(el.dateTime).getDate() > 3
                    ? moment(new Date(el.dateTime)).format("LL")
                    : moment(new Date(el.dateTime)).startOf("day").fromNow()}
                </DateTime>
              </NicknameBox>
              <CommentBox>
                <CommentTitle>{el.commentTitle}</CommentTitle>
                <Comment>{el.comment}</Comment>
              </CommentBox>
            </ContentsBox>
          </Li>
        ))}
      </Ul>
      <CommentWriter></CommentWriter>
    </Wrapper>
  );
}
