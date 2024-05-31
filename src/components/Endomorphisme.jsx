import React, { useState, useEffect } from 'react';
import { Mafs, Circle, Transform, Vector } from 'mafs';

export default function Endomorphisme() {
  const [position, setPosition] = useState(-2);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev >= 2 ? -2 : prev + 0.05));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ width: '50%', padding: '10px' }}>
        <h3 style={{ textAlign: 'center' }}></h3>
        <Mafs height={200} background="white">
          <Transform>
            <Circle center={[-2, 0]} radius={1.5} color="pink" opacity={1} />
            <text x="-110" y="-30" textAnchor="middle" alignmentBaseline="middle" style={{ fontSize: 17, fontWeight: 'bold', fill: 'white' }}>E</text>
            <Circle center={[2, 0]} radius={1.5} color="pink" opacity={1} />
            <Vector tail={[-2, 0]} tip={[position, 0]} color="#60a5fa" />
            <text x="110" y="-30" textAnchor="left" alignmentBaseline="middle" style={{ fontSize: 17, fontWeight: 'bold', fill: 'white' }}>E</text>
          </Transform>
        </Mafs>
      </div>
    </div>
  );
}