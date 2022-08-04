import React, { useEffect, useState } from 'react';

const App = () => {
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => {
        setBackendData(data)
      })
  }, []);

  if (!backendData) return;

  const { tweets } = backendData;
  return (
    <div className="App">
      {tweets.map(tweet => (<div key={tweet.id} > {tweet.title}</div>))
      }
    </div >
  );
}

export default App;
