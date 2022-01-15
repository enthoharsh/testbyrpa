import React from 'react'
import './App.css';
import Card from './component/Card';
import Api from './localApi/api';
import { useState } from 'react';
import moduleName from './component/Moviebox'
import Moviebox from './component/Moviebox';


function App() {

  const [modal, setModal] = useState('none');

  return (
    <>
     <section>

          <div className='heading'><h1>Top 8 Movies !!</h1></div>
            {
              Api.map((elem)=>{
                return (
                  <Card key ={elem.id} title ={elem.title} image ={elem.img} rating={elem.rating} duration ={elem.duration} setModal={setModal}/>
                 )
              })
            }

         
            <Moviebox modal={modal} setModal={setModal}/>
 
      </section>
    </>
  );
}

export default App;
