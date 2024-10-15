import { useState, useEffect } from "react";
import Element from "./components/element";

export default function HistoryElements() {
  const [listItems, SetListItems] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        let token = localStorage.getItem("token");
        const response = await fetch("http://localhost:5000/profile", {
          method: "GET",
          headers: { Authorization: token },
        });
        const data = await response.json();
        const dataList = data.message;
        const items = dataList.map((item, index) => {
          if (index < 4) {
            return (
              <div className="history__item">
                <Element
                  key={index}
                  number={index + 1}
                  difficulty={item.gameplaymode}
                  time={item.time}
                />
              </div>
            );
          } else {
            return <></>;
          }
        });
        SetListItems(items);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);
  return <>{listItems}</>;
}
