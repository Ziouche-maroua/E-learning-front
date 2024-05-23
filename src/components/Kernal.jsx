
import React, { useState, useEffect } from 'react';
import { Mafs, Circle, Transform, Vector } from 'mafs';

export default function Kernel() {
  const [vectors, setVectors] = useState([
    { startX: -2, startY: 0, endX: 2, endY: 0, color: "#f43f5e" },
    { startX: -2, startY: 0.5, endX: 2, endY: 0, color: "#f43f5e" },
    { startX: -2, startY: 1, endX: 2, endY: 1, color: "yellow" },
    { startX: -2, startY: -1, endX: 2, endY: -1, color: "#f43f5e" },
  ]); // Array of vectors for animation

  const [steps, setSteps] = useState([
    "Step 1: Define the linear transformation T: ℝ² → ℝ² as T(x, y) = (x, -x)",
    "Step 2: Determine the transformation's null space by solving the equation T(v) = 0",
    "Step 3: Find vectors v = (x, y) such that T(v) = (x, -x) = (0, 0)",
    "Step 4: Solve the equation x = 0 and y = 0 to find the null space vectors",
    "Step 5: The kernel of T consists of all vectors of the form (0, y), where y is any real number"
  ]); // Steps of the kernel calculation

  // Effect to animate the vectors
  useEffect(() => {
    const interval = setInterval(() => {
      setVectors(prevVectors =>
        prevVectors.map(vector =>
          vector.endX < 2
            ? { ...vector, endX: vector.endX + 0.1 }
            : { ...vector, endX: -2 }
        )
      );
    }, 50);
      
    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {/* Example of Linear Transformation and Steps */}
      <div style={{ width: '30%', padding: '10px' }}>
        <h3 style={{ textAlign: 'center' }}>Example of Linear Transformation</h3>
        <div style={{ textAlign: 'left', marginTop: '20px' }}>
          <h3>Steps to Calculate Kernel:</h3>
          <ol>
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      {/* Kernel of Linear Transformation */}
      <div style={{ width: '60%', padding: '10px' }}>
        <h3 style={{ textAlign: 'center' }}>Kernel of Linear Transformation</h3>
        <Mafs background={null}>
          <Transform>
            {vectors.map((vector, index) => (
              <Vector
                key={index}
                tail={[vector.startX, vector.startY]}
                tip={[vector.endX, vector.endY]}
                color={vector.color}
                opacity={1}
              />
            ))}
            <Circle center={[2, 0]} radius={1.5} color="blue" opacity={1} />
            <Circle center={[-2, 0]} radius={1.5} color="blue" opacity={1} />
            <Circle center={[2, 0]} radius={0.05} color="red" opacity={1} />
            <text x="01" y="-85" textAnchor="middle" alignmentBaseline="middle" style={{ fontSize: 17, fontWeight: 'bold', fill: 'white' }}>T: ℝ² → ℝ²</text>
          </Transform>
        </Mafs>
      </div>
    </div>
  );
}
