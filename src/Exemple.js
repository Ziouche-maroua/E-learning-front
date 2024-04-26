import React, { useEffect, useState } from 'react'

function Exemple({list}) {
    const[inputPoints,setInputPoints]=useState([-2, -1, 0, 1, 2])
    useEffect(()=>{  
        setInputPoints(prev => [...prev, 3]);
          console.log(inputPoints);
        },[]);

  return (
    <div>
      <div style={{display:"flex"}}></div>
      <div></div>
    </div>
  )
}

export default Exemple
