import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  // 브라우저단에서만 라우터 작동하게 함.
  useEffect(() => {
    router.push("./home");
  }, []);

  return (
    <>
      <Head>
        <title>토스증권 클론코딩</title>
        <meta
          name="description"
          content="react17과 nextjs12를 사용한 토스증권 UI 클론코딩 개인프로젝트입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  );
}
