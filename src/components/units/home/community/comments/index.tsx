import { checkImgFileValidation } from "@/src/commons/libraries/checkImgFileValidation";
import { ICommentsProps } from "@/src/commons/types/types";
import styled from "@emotion/styled";
import moment from "moment";
import "moment/locale/ko";
import { useEffect, useRef } from "react";
import Dompurify from "dompurify";

const ICON_PATH = "./assets/images/community/";

const Wrapper = styled.article`
  width: 100%;
  height: 800px;
  border: 1px solid #e5e8ea;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
const CommentWrapper = styled.div`
  margin: 20px;
  padding: 10px;
`;
const CommentProfileForm = styled.form`
  display: flex;
`;
const ProfileImgBox = styled.div`
  margin-right: 10px;
`;
const ProfileImg = styled.img`
  display: block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
`;
const CommentSubmitBox = styled.div`
  flex-grow: 1;
  background-color: #ededed;
  padding: 15px;
  border-radius: 10px;
`;
const CommentTextareaBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const CommentTitleTextarea = styled.textarea`
  resize: none;
  border: 0;
  border-radius: 10px;
  background-color: transparent;
  font-weight: bold;
  padding: 5px;
  &:focus {
    outline: none;
    background-color: #f7f7f7;
  }
`;
const CommentTextarea = styled(CommentTitleTextarea)`
  font-weight: normal;
  margin-top: 5px;
`;
const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
`;
const SubmitBtn = styled.button`
  border: 0;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
  color: white;
  background-color: #2470eb;
  padding: 5px 10px;
  cursor: pointer;
`;

export default function Comments({
  commentTitleRef,
  commentRef,
  commentList,
  handleSubmit,
}: ICommentsProps): React.ReactElement {
  const profileFileInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    moment.locale("ko");
  }, []);

  // 이미지 미리보기 함수(업로드 함수는 firestore 스토리지 요금제 때문에 미구현)
  const readProfileImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;

    // 인풋 태그에 파일이 있는 경우
    if (input.files && input.files[0]) {
      //이미지 검증 함수를 끌어옴
      const isValid = checkImgFileValidation(input.files[0]);
      //이미지 검증의 결과값에 따라 업로드를 진행하거나 함수를 종료
      if (!isValid) return;

      // FileReader 인스턴스 생성
      const reader = new FileReader();
      // reader가 이미지 읽도록 하기
      reader.readAsDataURL(input.files[0]);
      // 이미지가 로드가 된 경우
      reader.onload = (e) => {
        const previewImage = document.getElementById(
          "commentProfileImg",
        ) as HTMLImageElement;
        if (previewImage) {
          // e.target을 명시적으로 FileReader로 캐스팅
          const result = (e.target as FileReader).result;
          if (result) previewImage.src = result as string; // result가 string | ArrayBuffer이므로 string으로 명시
        }
      };
    }
  };

  // 이미지를 클릭했을 때 숨김처리한 파일 input 이 클릭되도록 함
  const fileHandleClick = () => {
    profileFileInput.current?.click();
  };

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
                {el.class && <Class>{el.class}</Class>}
                <Dot />
                <DateTime>
                  {new Date().getDate() - new Date(el.dateTime).getDate() > 3
                    ? moment(new Date(el.dateTime)).format("LL")
                    : moment(new Date(el.dateTime)).fromNow()}
                </DateTime>
              </NicknameBox>
              <CommentBox>
                {process.browser && (
                  <CommentTitle
                    dangerouslySetInnerHTML={{
                      __html: Dompurify.sanitize(
                        String(el.commentTitle).replaceAll("\n", "<br />"),
                      ),
                    }}
                  />
                )}
                {process.browser && (
                  <Comment
                    dangerouslySetInnerHTML={{
                      __html: Dompurify.sanitize(
                        String(el.comment).replaceAll("\n", "<br />"),
                      ),
                    }}
                  />
                )}
              </CommentBox>
            </ContentsBox>
          </Li>
        ))}
      </Ul>
      <CommentWrapper>
        <CommentProfileForm method="post" onSubmit={handleSubmit}>
          <ProfileImgBox>
            <ProfileImg
              id="commentProfileImg"
              onClick={fileHandleClick}
              src="./assets/images/community/icon-user-circle.png"
              alt="댓글 프로필 이미지"
            />
            <input
              hidden={true}
              accept="image/png, image/jpeg"
              ref={profileFileInput}
              id="profileFileInputId"
              type="file"
              onChange={readProfileImg}
            />
          </ProfileImgBox>
          <CommentSubmitBox>
            <CommentTextareaBox>
              <CommentTitleTextarea
                ref={commentTitleRef}
                name="commentTitle"
                maxLength={30}
                placeholder={"제목을 입력하세요."}
              />
              <CommentTextarea
                ref={commentRef}
                name="comment"
                maxLength={300}
                placeholder={"내용을 입력하세요."}
              />
            </CommentTextareaBox>
            <Footer>
              <SubmitBtn type="submit">등록</SubmitBtn>
            </Footer>
          </CommentSubmitBox>
        </CommentProfileForm>
      </CommentWrapper>
    </Wrapper>
  );
}
