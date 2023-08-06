import React from 'react';
import { RiCelsiusFill } from "react-icons/ri";

const Info = ({ info }) => {
  return (
    <div className='info'>
      {info ? (
        <>
          <p className='city'>{info.name}, {info.sys.country}</p>
          <div className='w-value'>
            <p className='temperature'>{info.main.temp}</p>
            <RiCelsiusFill className='icon' />
          </div>
          <p className='weather'>{info.weather[0].description}</p>
          <div className='feels-temp'>
            <p className='feel'>Hissedilen: {info.main.feels_like} </p>
            <RiCelsiusFill className='icon' />
          </div>
        </>
      ) : (
        null
      )}
    </div>
  );
};

export default Info;

