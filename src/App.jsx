import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const { data } = axios.post('https://sycret.ru/service/api/api', {
      ApiKey: '011ba11bdcad4fa396660c2ec447ef14',
      MethodName: 'OSGetGoodList',
    });
    if (data) {
      setData(data.data);
    }
  }, []);
  return <>{data && data.map((item) => data.NAME)}</>;
}

export default App;
