import { useEffect, useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './Message'
import ListGroup from './components/ListGroup'
import Alert from './components/Alert'

function App() {

  //let cities = ['London','Rome','Paris','Berlin','New York', 'Canberra', 'Wellington'];
  
  const [selectedListItem, setSelectedListItem] = useState(-1);

  const handleSelectedItem = (item: number) => {
    console.log("Selected Item number passed back to App = " + item);
    setSelectedListItem(item);
  }

  // Get data from API
  const [data, setData] = useState<any>([]);


  // https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5

  useEffect(() => {
    // Make an API request when the component mounts
    {console.log("Calling API")}
    fetch('http://localhost:8080/listusers')
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      {console.log("Rendering App")}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="/public/icons/security/10433-icon-service-User-Settings.svg" width="40px" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="/public/icons/databases/10121-icon-service-Azure-Cosmos-DB.svg" width="40px" />
        </a>
      </div>

      <Message />

      <ListGroup items={data} heading='Some things returned from the API' onSelectItem={handleSelectedItem} />

      {selectedListItem === 2 &&  
        <Alert>
          <h2>Warning: Try to avoid selecting item with index 2!</h2>
        </Alert> 
      }
    </>
  )
}

export default App




