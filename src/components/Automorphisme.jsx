import React from 'react';
import { Mafs, Circle, Transform, Vector } from 'mafs';

export default function AutomorphismVisualization() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {/* Domain and Codomain Circles */}
      <div style={{ width: '45%', padding: '10px' }}>
        <h3 style={{ textAlign: 'center' }}>Automorphism</h3>
        <Mafs background={null}>
          <Transform>
            <Circle center={[-2, 0]} radius={1.5} color="#60a5fa" opacity={1} /> {/* Blue circle for domain */}
            <Circle center={[2, 0]} radius={1.5} color="#60a5fa" opacity={1} /> {/* Blue circle for codomain */}
            <Vector tail={[-2, 0]} tip={[2, 0]} color="ORANGE" opacity={1} /> {/* Pink vector */}
            <Vector tail={[-2, 1]} tip={[1.5, 1]} color="ORANGE" opacity={1} /> {/* Additional vector */}
            <Vector tail={[-1.2, -1]} tip={[2, -1]} color="ORANGE" opacity={1} /> {/* Additional vector */}
            <text x="110" y="-30"  textAnchor="left" alignmentBaseline="middle" style={{ fontSize: 17, fontWeight: 'bold', fill: 'white' }}>E</text>
            <text x="-110" y="-30"  textAnchor="middle" alignmentBaseline="middle"style={{ fontSize: 17, fontWeight: 'bold', fill: 'white' }}>E</text>
          </Transform>
        </Mafs>
      </div>
    </div>
  );
}
