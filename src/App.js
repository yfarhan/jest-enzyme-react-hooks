import React, { useEffect, useState } from 'react';
import fetchData from './fetchData';

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return (
    <div className="App">
      {data ? (
        <h2>
          Hi {data.firstName} {data.lastName} {data.nickName}!
        </h2>
      ) : (
        'No data yet'
      )}
    </div>
  );
};

export default App;
