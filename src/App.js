import { useState } from 'react';
import './App.css';
import Form from './componenets/Form';
import Info from './componenets/Info';

function App() {
 const [info,setInfo]= useState(null)
  
  return (
    <div className="App">
      <Form setInfo={setInfo} info={info} />
      <Info info={info} />
    </div>
  );
}

export default App;
