export const checkImgFileValidation = (file?: File) => {
  // 이미지 파일의 사이즈가 없으면 경고띄워주기
  if (!file?.size) {
    alert("파일이 존재하지 않습니다.");
    return false;
  }

  // 이미지 파일의 사이즈가 있지만, 5MB보다 클경우 경고를 띄우고 함수를 종료합니다.
  if (file?.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다.(제한: 5MB)");
    return false;
  }

  // 이미지 파일의 확장자 검증
  if (!file.type.includes("png") && !file.type.includes("jpeg")) {
    alert("jpeg 파일 또는 png 파일만 업로드 가능합니다.");
    return false;
  }
  return true;
};
