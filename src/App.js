import logo from './logo.svg';
import './App.css';
import Veg from './Veg';
import Fruit from './Fruit';
import Dryfruit from './Dryfruit';

import {useEffect, useState} from 'react';
import Batata from './Batata';

function App() {
  const [loading, setloading ] = useState('');

  
  
  return (
    <>
    <div className="App">
        <input type="button" value="dryfruits" onClick={()=>(setloading('dryfruits'))} />
        <input type="button" value="fruit" onClick={()=>(setloading('fruit'))} />
        <input type="button" value="veg" onClick={()=>(setloading('veg'))} />
        {/* <input type="button" value="batata" onClick={()=>(setloading('batata'))} /> */}
        {
          loading==('fruit') ? <Fruit/> : loading==('veg') ? <Veg/> : loading==('batata')? <Batata/> :<Dryfruit/>
        }
       
    </div>
    </>
  );
}

export default App;
