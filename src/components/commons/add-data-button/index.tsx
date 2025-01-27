// 파이어스토어 데이터 추가용 소스코드(버튼 클릭 시 업로드)

import { tradingInquiryItemsKr } from "@/src/commons/stores/tradingInquiryItemsKr";
import { usEtfItems } from "@/src/commons/stores/usEtfItems";

export default function AddDataButton(): React.ReactElement {
  const addData = async () => {
    const data = usEtfItems;

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

  return <button onClick={addData}>데이터 추가</button>;
}
