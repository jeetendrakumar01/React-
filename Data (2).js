import React, { useState } from 'react'
import datas from  './Data.json'
import './App.css'

const Data = () => {
    const[nData,SetnData]=useState(datas);
  return (
    <div>
         <ul>
            {
          nData.map(items=>
              <li key={items.id}>
                {items.name}
               </li>
          )
        }
         </ul>
         <button onClick={()=>SetnData([])}>Clear Items</button>
    </div>
  )
}

export default Data
