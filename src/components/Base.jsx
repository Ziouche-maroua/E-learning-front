import React from 'react';
import { Mafs, Vector, Coordinates } from 'mafs';
import 'mafs/core.css';
import 'mafs/font.css';

const VectorSpaceBasisVisualization = () => {
  return (
    <div style={{ padding: '20px', width: '60vw', margin: '0 auto', fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f0f0' }}>
      <h2 style={{ color: '#333333' }}>Visualization of a Basis of a Vector Space</h2>
      
      <div style={{ marginBottom: '20px', color: '#333333' }}>
        <h3 style={{ color: '#4e6bff' }}>Definition:</h3>
        <p style={{ backgroundColor: '#e0eaff', padding: '10px', borderRadius: '5px' }}>
          In linear algebra, a <strong>basis</strong> of a vector space is a set of vectors that are linearly independent and span the vector space. The <strong>dimension</strong> of a vector space is the cardinality of its basis.
        </p>
      </div>



      <Mafs>
        <Coordinates.Cartesian />
        <Vector color="#a1c7ff" tail={[0, 0]} tip={[1, 0]} label="v₁" />
        <Vector color="#c0ffbc" tail={[0, 0]} tip={[0, 1]} label="v₂" />
      </Mafs>

      <div style={{ marginTop: '20px', marginBottom: '20px', color: '#333333' }}>
        <h3 style={{ color: '#4e6bff' }}>Explanation:</h3>
        <p style={{ backgroundColor: '#f6fff6', padding: '10px', borderRadius: '5px' }}>
          In this visualization, the vectors v₁ and v₂ form a basis for ℝ². Any vector in ℝ² can be expressed as a linear combination of these basis vectors. To determine the basis and dimension of a vector space, you can follow these steps:
          <ol>
            <li>Start with a set of vectors.</li>
            <li>Check if the vectors are linearly independent.</li>
            <li>If the vectors are linearly independent, check if they span the entire space.</li>
            <li>If they do, the set forms a basis, and the dimension is equal to the number of vectors in the basis.</li>
          </ol>
          For example, consider the vectors v₁ = [1, 0] and v₂ = [0, 1] in ℝ². These vectors are linearly independent and span the entire space. Therefore, they form a basis for ℝ², and the dimension of ℝ² is 2.
        </p>
      </div>

    </div>
  );
};

export default VectorSpaceBasisVisualization;