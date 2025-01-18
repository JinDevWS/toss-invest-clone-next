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
    const citiesCol = collection(db, "stock-index-items");
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    return cityList;
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
