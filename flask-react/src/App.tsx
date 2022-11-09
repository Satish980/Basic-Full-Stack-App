import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({
    Name: '',
    Description: '',
    Date: '',
    Author: '',
  });
  useEffect(() => {
    fetch('/data').then((res) => 
      res.json().then((data) => {
        setData({
          Name: data.Name,
          Description: data.Description,
          Date: data.Date,
          Author: data.Author
        });
      })
      .catch((err) => console.log(err))
    );
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{data.Name}</h1>
        <p>{data.Description}</p>
        <p>{data.Date}</p>
        <p>{data.Author}</p>
      </header>
    </div>
  );
}

export default App;
