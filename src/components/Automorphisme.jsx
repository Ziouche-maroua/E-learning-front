import React, { useState, useEffect } from 'react';
import { Mafs, Circle, Transform, Vector } from 'mafs';

export default function Automorphisme() {
  const [position, setPosition] = useState(-2);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev >= 2 ? -2 : prev + 0.05));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ width: '45%', padding: '10px' }}>
        <h3 style={{ textAlign: 'center' }}>Automorphism</h3>
        <Mafs height={200} background={null}>
          <Transform>
            <Circle center={[-2, 0]} radius={1.5} color="#60a5fa" opacity={1} />
            <Circle center={[2, 0]} radius={1.5} color="#60a5fa" opacity={1} />
            <Vector tail={[-2, 0]} tip={[position, 0]} color="orange" />
            <Vector tail={[-2, 1]} tip={[position / 1.33, 1]} color="orange" />
            <Vector tail={[-1.2, -1]} tip={[position, -1]} color="orange" />
          </Transform>
        </Mafs>
      </div>
    </div>
  );
}
