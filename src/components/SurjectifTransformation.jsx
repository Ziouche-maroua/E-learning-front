import React, { useState, useEffect } from 'react';
import { Mafs, Circle, Transform, Vector } from 'mafs';

export default function Surjectif() {
  const [vector1Position, setVector1Position] = useState([-2.1, 0]);
  const [vector2Position, setVector2Position] = useState([-2.5, 0]);

  useEffect(() => {
    const animateVectors = () => {
      setVector1Position([0.6, 0]);
      setTimeout(() => {
        setVector2Position([1.9, 0.8]);
      }, 500);
      setTimeout(() => {
        setVector1Position([-2.1, 0]);
        setVector2Position([-2.5, 0]);
        animateVectors();
      }, 1500);
    };

    animateVectors();

    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <div style={{ backgroundColor: 'transparent', display: 'flex', justifyContent: 'space-around' }}>
      <div className="p-4 w-1/2">
        <h3 className="text-center">ONTO Linear Transformation</h3>
        <div>
          <Mafs height={200}>
            <Transform>
              <Circle center={[-2.1, 0]} radius={1.5} color="yellow" opacity={1} />
              <Vector
                className="animate-move-vector2"
                color="blue"
                tail={[-2.5, 0]}
                tip={vector2Position}
                opacity={1}
                length={2}
              />
              <Circle center={[2.1, 0]} radius={1.5} color="yellow" opacity={1} />
            </Transform>
          </Mafs>
        </div>
      </div>

      <div className="p-4 w-1/2">
        <h3 className="text-center">NOT an ONTO Linear Transformation</h3>
        <div>
          <Mafs height={200}>
            <Transform>
              <Circle center={[-2.1, 0]} radius={1.5} color="#60a5fa" opacity={1} />
              <Vector
                className="animate-move-vector2 stroke-blue-500"
                tail={[-2.5, 0]}
                tip={vector2Position}
                opacity={1}
                length={2}
              />
              <Circle center={[2.1, 0]} radius={1.5} color="#60a5fa" opacity={1}/>
              <Circle center={[2.1, 0]} radius={1} color="#40A578" opacity={1}/>
                
            
      
            </Transform>
          </Mafs>
        </div>
      </div>
    </div>
  
  );
}   