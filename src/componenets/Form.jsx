import axios from "axios";
import {useEffect, useState } from "react";

const Form = ({setInfo,info}) => {
  const [city, SetCity] = useState("");

  const handleChange = (e) => {
    SetCity(e.target.value);
  };

   useEffect(()=>{console.log(info)},[info])
  const handleClick = async () => {
      const api = "4aa318d6b7732a6f7fdc2a006196389e";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`;
      await axios(url).then(async data => {
        await setInfo(data.data)
    }).catch(err => console.log("Hatanız : ", err));
  }



    return (
      <>
        <div className="form">
          <input
            type="text"
            onChange={handleChange}
            className="inputText"
            placeholder="Şehir ara.."
          />
        </div>
        <div className="btn">
          <button className="submitBtn" onClick={handleClick}>Verileri Getir</button>
        </div>
      </>
    );
  };


export default Form;
