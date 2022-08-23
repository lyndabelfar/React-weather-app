import { useEffect, useState } from "react";
import Form from "./Form";

let today = new Date();

let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

let time = today.getHours() + ":" + today.getMinutes();

let dateTime = date+' '+time;


function App() {
  const [city, setCity] = useState('paris')
  const [data, setData] = useState([])

  const [index, setIndex] = useState(0)
  const [weather, setWeather] = useState('')
  const [temperature, setTemperature] = useState('');






  const apiKey = "9779531e152defd5acddb19f1a9e58f4";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`


  const fetchData= async()=>{
    const response = await fetch(url)
    const result = await response.json();
    setData(result)
    console.log(result)
    setCity(data.name)
    setWeather(data.weather[0].main)
    setTemperature(data.main.temp)
  }

  useEffect(()=>{
    fetchData()

  },[index])

 




  

  return (
    <div className={(typeof data.main != "undefined")?((temperature >16)? 'container warm': 'container'): 'container'}>
      <Form city={city} setCity={setCity}  index={index} setIndex={setIndex} />


    {(typeof data.name != "undefined") ? (
      <>
        <div className="city">{data.name}, {data.sys.country}</div>
        <div className="date">{dateTime}</div>

        <div className="temperature">{Math.round(temperature)}°C</div>

        <div className="comment">{weather}</div>
      </>
    ):('')}
      </div>

    
  );
}

export default App;
