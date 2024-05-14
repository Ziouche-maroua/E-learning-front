import React from 'react'; 
import { Mafs, Circle, Transform, Vector } from 'mafs'; 
 
export default function Kernel() { 
  return ( 
    <div style={{ display: 'flex', justifyContent: 'space-around' }}> 
      
      {/* Kernel of Linear Transformation */} 
      <div style={{ width: '60%', padding: '10px' }}> 
        <h3 style={{ textAlign: 'center' }}>Kernel of Linear Transformation</h3> 
        <Mafs background={null}> 
          <Transform> 
            <Circle center={[2, 0]} radius={1.5} color="blue" opacity={1} /> {/* Blue circle */}
            <Circle center={[-2, 0]} radius={1.5} color="BLUE" opacity={1} /> {/* Blue circle */}
            <Circle center={[2, 0]} radius={0.05} color="red" opacity={1} /> {/* Red circle at the start of the vector */}
            <Vector tail={[-2, 0]} tip={[2, 0]} color="#f43f5e" opacity={1} /> {/* Pink vector */} 
            <Vector tail={[-2, 0.5]} tip={[2, 0]} color="#f43f5e" opacity={1} /> {/* Pink vector */} 
            <Vector tail={[-2, 1]} tip={[2, 1]} color="yellow" opacity={1} /> {/* Pink vector */} 
            <Vector tail={[-2, -1]} tip={[2,- 1]} color="#f43f5e" opacity={1} /> {/* Pink vector */} 
           
            <text x="01" y="-85" textAnchor="middle" alignmentBaseline="middle" style={{ fontSize: 17, fontWeight: 'bold', fill: 'white' }}>T:V-W</text>
          </Transform> 
        </Mafs> 
      </div> 
    </div> 
  ); 
}
