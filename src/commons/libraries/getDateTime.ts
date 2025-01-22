export const getKrDateTime = () => {
  // 1. 현재 시간 (locale 시간) 가져오기
  // 이렇게 시간을 가져오면 사용자 PC에 설정된 시간대 기준으로 시간을 표시
  const curr = new Date();

  // 2. UTC 시간 계산
  // getTimezoneOffset() 이라는 함수를 이용하여 UTC 시간을 계산
  // getTimezoneOffset() 함수는 현재 사용자 PC 설정 시간대로부터 UTC 시간까지의 차이를 '분'단위로 리턴
  // 사용자 PC의 시간대 설정이 한국이라면 '-540'을 리턴
  // getTime() 함수는 '1970년 1월 1일 00:00:00 UTC'로부터 주어진 시간 사이의 경과시간(밀리초)를 리턴
  // 따라서, UTC 시간을 계산하기 위해 getTime()의 결과 값에 getTimezoneOffset() 함수에서 나온 분단위의 시간을 밀리초 단위로 변환하여 더해줌
  // 즉, 'utc'는 현재 시간을 utc 시간으로 변환한 밀리초 값
  const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;

  // 3. UTC to KST (UTC + 9시간)
  // 한국 시간(KST)은 UTC시간보다 9시간 더 빠름
  // 9시간을 밀리초 단위로 변환
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;

  // UTC 시간을 한국 시간으로 변환하기 위해 utc 밀리초 값에 9시간(밀리초 단위로 변환한 값)을 더해줌
  // 그리고, 'new Date()'를 사용하여, 밀리초값을 date로 변환
  const kr_curr = new Date(utc + KR_TIME_DIFF);

  return kr_curr;
};
