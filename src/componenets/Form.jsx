

import axios from 'axios'
import React, { useState } from 'react'

const Form = () => {
    const [change,setChange]= useState();
    const [data, setData]= useState()

    const handleClick= (e) =>{
      e.preventDefault()
      const api= "4aa318d6b7732a6f7fdc2a006196389e";
      const url= `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon=${change}&appid=${api}`;
      axios(url).then(res =>{console.log(res.data)
      })
    }
    console.log(data);
   
  return (
    <>
    <form>
        <div className="form">
            <input onChange={(e)=>{setChange(e.target.value)}} value={change} type="text" className="inputText" placeholder='Şehir ara..' />
        </div>
        <div className="btn">
            <button type='submit' className="submitBtn" onClick={handleClick}>Verileri Getir</button>
        </div>
    </form>
  
    
    </>
  )
}

export default Form
