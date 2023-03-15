import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('http://localhost:3030/api/players')
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log('Data set:', data);
      })
      .catch(err => console.error(err));
  }, []);

  //Display data to screen
  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.position}</p>
      <p>{data.number}</p>
    </div>
  );
}
