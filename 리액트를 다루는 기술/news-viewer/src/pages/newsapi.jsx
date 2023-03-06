import React, { useState } from 'react';
import axios from 'axios';
import { newAPIKey } from '../key/api';

const NewsAPI = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        `/v2/top-headlines?country=kr&apiKey=${newAPIKey}`,
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
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
    </div>
  );
};

export default NewsAPI;
