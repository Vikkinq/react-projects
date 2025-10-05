import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((serverData) => {
        setData(serverData);
      });
  }, []);

  return (
    <>
      <h1>Express React</h1>
      <hr />
      {typeof data.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        data.users.map((user, index) => <h3 key={index}>{user}</h3>)
      )}
    </>
  );
}

export default App;
