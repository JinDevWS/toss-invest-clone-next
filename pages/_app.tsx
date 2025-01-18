import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Layout from "@/src/components/commons/layout";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "@/firebase";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const db = getFirestore(app);

  // Get a list of cities from your database
  async function getStockIndexItems(db) {
    const stocksCol = collection(db, "stocks");
    const stockSnapshot = await getDocs(stocksCol);
    const stockList = stockSnapshot.docs.map((doc) => doc.data());
    return stockList;
  }

  useEffect(() => {
    console.log(getStockIndexItems(db));
  }, []);

  return (
    <div>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </div>
  );
}
