import React, { useState, useEffect } from 'react';
import { Mafs, Circle, Transform, Vector } from 'mafs';

export default function Kernel() {
  const [radius, setRadius] = useState(1.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setRadius((prev) => (prev >= 2 ? 1.5 : prev + 0.05));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return ( 
    <div style={{ display: 'flex', justifyContent: 'space-around' }}> 
      {/* Domain and Codomain Circles */} 
      <div style={{ width: '45%', padding: '10px' }}> 
        
        <Mafs height={200} background={null}>  {/* Adjusted height */}
          <Transform> 
            <Circle center={[-2, 0]} radius={1.5} color="blue" opacity={1} /> {/* Domain Circle (Blue) */} 
            <Circle center={[2, 0]} radius={1.5} color="#ff7f0e" opacity={1} /> {/* Codomain Circle (Orange) */}
            <Circle center={[2, 0]} radius={radius} color="blue" opacity={1} /> {/* Adjusting radius dynamically */}
        
            <Vector tail={[-2, 0]} tip={[2, 0]} color="#60a5fa" opacity={1} /> {/* Pink vector */}
            <text x="110" y="-30" textAnchor="left" alignmentBaseline="middle" style={{ fontSize: 17, fontWeight: 'bold', fill: 'white' }}>F</text>
            <text x="-110" y="-30" textAnchor="middle" alignmentBaseline="middle" style={{ fontSize: 17, fontWeight: 'bold', fill: 'white' }}>E</text>
          </Transform> 
        </Mafs> 
      </div> 
    </div> 
  );
}
