import React, { useState } from "react";
import axios from "axios";

function asynchronousSample() {
  const [data, setData] = useState(null);

  //promise
  // const onClick = () => {
  //   axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
  //     setData(response.data);
  //     console.log(response.data);
  //   });
  // };

  //async await
  const onClick = async () => {
    try {
      const response = await axios.get(
        "http://newsapi.org/v2/top-headlines?country=kr&apiKey=4ea023ac5c22420794c820b56d70ba80"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  );
}

export default asynchronousSample;
