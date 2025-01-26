import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [city, setCity] = useState([]);

  useEffect(() => {
    axios
      .get("https://jhgww7-3000.csb.app/city")
      .then((response) => {
        setCity(response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  });

  return (
    <>
      <h1>yash deshpande</h1>
      <p>CITY: {city.length}</p>

      {city.map((city, index) => (
        <div key={city.id}>
          <h2>{city.title}</h2>
        </div>
      ))}
    </>
  );
}

export default App;
