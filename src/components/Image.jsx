import React from 'react'; 
import { Mafs, Circle, Transform, Vector } from 'mafs'; 
 
export default function Kernel() {
  return ( 
    <div style={{ display: 'flex', justifyContent: 'space-around' }}> 
      {/* Domain and Codomain Circles */} 
      <div style={{ width: '45%', padding: '10px' }}> 
        <h3 style={{ textAlign: 'center' }}>Domain and Codomain</h3> 
        <Mafs background={null}> 
          <Transform> 
            <Circle center={[-2, 0]} radius={1.5} color="blue" opacity={1} /> {/* Domain Circle (Blue) */} 
            <Circle center={[2, 0]} radius={1.5} color="#ff7f0e" opacity={1} /> {/* Codomain Circle (Orange) */}
            <Circle center={[2, 0]} radius={1} color="blue" opacity={1} /> {/* Codomain Circle (Orange) */}
        
            <Vector tail={[-2, 0]} tip={[2, 0]} color="#60a5fa" opacity={1} /> {/* Pink vector */}
          </Transform> 
        </Mafs> 
      </div> 
      </div> 
  );
}