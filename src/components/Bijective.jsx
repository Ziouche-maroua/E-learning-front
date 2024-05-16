import React from 'react'; 
import { Mafs, Circle, Transform, Vector } from 'mafs'; 
 
export default function Bijective() { 
  return ( 
    <div style={{ display: 'flex', justifyContent: 'space-around' }}> 
      {/* Bijective Linear Transformation */} 
      <div style={{ width: '45%', padding: '10px' }}> 
        <h3 style={{ textAlign: 'center' }}>Bijective Linear Transformation</h3> 
        <Mafs background={null}> 
          <Transform> 
            <Circle center={[-2, 0]} radius={1.5} color="#60a5fa" opacity={1} /> {/* Blue circle */} 
            <Circle center={[2, 0]} radius={1.5}color="#ff7f0e" opacity={1} /> {/* Orange circle */} 
            <Vector tail={[-2, 0]} tip={[2, 0]} color="#F28585" opacity={1} /> {/* Pink vector */} 
            <Vector tail={[-1, 0.5]} tip={[1, 0.5]} color="#F28585" opacity={1} /> {/* Pink vector */} 
            <Vector tail={[-2.8, -0.5]} tip={[2.6, -1.05]} color="#F28585" opacity={1} /> {/* Pink vector */} 
            <Vector tail={[-2.6, -0.7]} tip={[2.8, 1]} color="#F28585" opacity={1} /> {/* Pink vector */} 
          </Transform> 
        </Mafs> 
      </div> 
      
      {/* Bijective Linear Transformation (Inverse) */} 
      <div style={{ width: '45%', padding: '10px' }}> 
        <h3 style={{ textAlign: 'center' }}>Bijective Linear Transformation (Inverse)</h3> 
        <Mafs background="white" > 
          <Transform> 
            <Circle center={[2, 0]} radius={1.5} color="#60a5fa" opacity={1} /> {/* Blue circle */} 
            <Circle center={[-2, 0]} radius={1.5} color="#ff7f0e" opacity={1} /> {/* Orange circle */} 
            <Vector tail={[2, 1]} tip={[-3, 1]} color="#F28585" opacity={1} /> {/* Pink vector */} 
            <Vector tail={[2, 0.8]} tip={[-2.5, 0]} color="#F28585" opacity={1} /> {/* Pink vector */} 

            <Vector tail={[2, 0]} tip={[-2.5, -0.5]} color="#F28585" opacity={1} /> {/* Pink vector */} 
            <Vector tail={[2, -1]} tip={[-1.5, -1]} color="#F28585" opacity={1} /> {/* Pink vector */} 
          </Transform> 
        </Mafs>
      </div> 
    </div> 
  ); 
}

