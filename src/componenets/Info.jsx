import {WiSunset} from "react-icons/wi";

import React from 'react'

const Info = () => {
  return (
    <div className='info'>
      <p className="city">Şehir, Ülke</p>
      <div className="w-value">
        <p className="temperature">40</p><WiSunset className="icon"/>
      </div>
      <p className="weather">Hava Durumu</p>
      <div className="feels-temp">
        <p className="feel"> Hissedilen: </p><WiSunset className="icon"/>
      </div>
     
    </div>
  )
}

export default Info;
