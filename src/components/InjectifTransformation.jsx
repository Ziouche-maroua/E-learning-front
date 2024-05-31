import React from 'react';
import { Mafs, Circle, Transform, Vector } from 'mafs';

export default function Injectif() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {/* One-to-One Linear Transformation */}
      <div style={{ width: '45%', padding: '10px' }}>
        <h3 style={{ textAlign: 'center' }} className=' font-semibold mb-4'>One-to-One Linear Transformation</h3>
        <Mafs height={200} background={null}>
          <Transform>
            <Circle center={[-2.1, 0]} radius={1.5} color="yellow" opacity={1} /> {/* Blue circle */}
            <Circle center={[2.1, 0]} radius={1.5} color="yellow" opacity={1} /> {/* Orange circle */}
            <Vector tail={[-2.6, -0.5]} tip={[3, -0.5]} color="#FF8A08" opacity={1} /> {/* Pink vector */}
            <Vector tail={[-2.6, 0.5]} tip={[3.2, -0.2]} color="#FF8A08" opacity={1} /> {/* Pink vector */}
            <Vector tail={[-2.6, 0.8]} tip={[2.5, 0.3]} color="#FF8A08" opacity={1} /> {/* Pink vector */}
            <Vector tail={[-2.6, 1.3]} tip={[3, 1]} color="#FF8A08" opacity={1} /> {/* Pink vector */}
          </Transform>
        </Mafs>
      </div>

      {/* Not One-to-One Linear Transformation */}
      <div style={{ width: '45%', padding: '10px' }}>
        <h3 style={{ textAlign: 'center' }}  className=' font-semibold mb-4'>Not One-to-One Linear Transformation</h3>
        <Mafs height={200} background={null}>
          <Transform>
            <Circle center={[-2.1, 0]} radius={1.5} color="yellow" opacity={1} /> {/* Blue circle */}
            <Circle center={[2.1, 0]} radius={1.5}color="yellow" opacity={1} /> {/* Orange circle */}
            <Vector tail={[-2.6, -0.5]} tip={[3, -0.5]} color="#40A578" opacity={1} /> {/* Pink vector */}
            <Vector tail={[-2.6, 0.5]} tip={[3.2, -0.2]} color="#40A578" opacity={1} /> {/* Pink vector */}
            <Vector tail={[-2.6, 0.8]} tip={[3.2, -0.15]} color="#40A578" opacity={1} /> {/* Pink vector */}
            <Vector tail={[-2.6, 1.3]} tip={[3, 1]} color="#40A578" opacity={1} /> {/* Pink vector */}
          </Transform>
        </Mafs>
      </div>
    </div>
  );
}