import React, { useEffect, useState } from 'react';

const App = () => {
  const [backendData, setBackendData] = useState({});
  const apiRoute = window.location.pathname;

  useEffect(() => {
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "hashtag": apiRoute })
    })
      .then(res => res.json())
      .then(data => {
        setBackendData(JSON.parse(data))
      })
  }, []);


  if (!backendData) return <></>;
  const { tweets = [], hashtag = '' } = backendData;

  return (
    <div className="App">
      <h1>hashtag: {hashtag}</h1>
      {backendData && tweets.map(tweet => (<div key={tweet.id} > {tweet.title}</div>))}
    </div>
  );
}

export default App;
