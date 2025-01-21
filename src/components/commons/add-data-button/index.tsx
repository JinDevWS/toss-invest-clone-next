// 파이어스토어 데이터 추가용 소스코드(버튼 클릭 시 업로드)

import { stockData } from "@/src/commons/stores/stockData";
import { stockDataKr } from "@/src/commons/stores/stockDataKr";
import { risingCategoryItems } from "@/src/commons/stores/risingCategoryItems";

const addData = async () => {
  const data = risingCategoryItems;

  try {
    const response = await fetch("/api/addData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });

    const result = await response.json();
    if (response.ok) {
      console.log(result.message);
    } else {
      console.error(result.error);
    }
  } catch (error) {
    console.error("Error sending data:", error);
  }
};

const AddDataButton = () => {
  return <button onClick={addData}>데이터 추가</button>;
};

export default AddDataButton;
