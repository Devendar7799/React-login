import  {useEffect, useState} from 'react'
import './App.css';


function MainApp() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people').then(res => {
          res.json().then(response => {
            console.log('response ', response.results);
            setData(response.results);
          });
        });
      }, []);

      return (      
<div className="App">
        <ul>
          {data && data.length && data.map(li => (
            <li key={li.url}> {li.name}</li>
          ))}
        </ul>
    </div>      
      );
}

export default MainApp;