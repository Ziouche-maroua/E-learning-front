import React, { useState } from 'react';
import { Mafs, Vector, Coordinates } from 'mafs';
import 'mafs/core.css';
import 'mafs/font.css';

const checkLinearIndependence = (vectors) => {
  const [v1, v2, v3] = vectors;

  if (vectors.length === 2) {
    const [a, b] = v1;
    const [c, d] = v2;
    const determinant = a * d - b * c;
    return determinant !== 0;
  }

  if (vectors.length === 3) {
    const [a1, b1, c1] = v1;
    const [a2, b2, c2] = v2;
    const [a3, b3, c3] = v3;

    const determinant = a1 * (b2 * c3 - b3 * c2) - b1 * (a2 * c3 - a3 * c2) + c1 * (a2 * b3 - a3 * b2);
    return determinant !== 0;
  }

  return false;
};

const FamLib = () => {
  const [numVectors, setNumVectors] = useState(2);
  const [vectors, setVectors] = useState([]);
  const [inputVectors, setInputVectors] = useState([{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }]);
  const [isIndependent, setIsIndependent] = useState(null);

  const handleInputChange = (index, axis, value) => {
    const newVectors = [...inputVectors];
    newVectors[index][axis] = parseFloat(value);
    setInputVectors(newVectors);
  };

  const handleSubmit = () => {
    const enteredVectors = inputVectors.slice(0, numVectors).map(v => [v.x, v.y]);
    setVectors(enteredVectors);
    const independence = checkLinearIndependence(enteredVectors);
    setIsIndependent(independence);
  };

  return (
    <div style={{ padding: '20px', width: '60vw', margin: '0 auto', fontFamily: 'Arial, sans-serif', backgroundColor: 'white' }}>
      <h2>Visualization of a Linearly Independent Family of Vectors</h2>
      
      <div style={{ marginBottom: '20px', color: 'darkslategray' }}>
        <h3 style={{ color: 'darkcyan' }}>Definition:</h3>
        <p style={{ backgroundColor: 'lavender', padding: '10px', borderRadius: '5px' }}>
          A family of vectors {`{v₁, v₂, ..., vₙ}`} in a vector space E is said to be linearly independent if the only solution to the equation c₁v₁ + c₂v₂ + ... + cₙvₙ = 0 is c₁ = c₂ = ... = cₙ = 0, where 0 represents the zero vector.
        </p>
      </div>

      <div style={{ marginBottom: '20px', color: 'darkslategray' }}>
        <h3 style={{ color: 'darkcyan' }}>Example:</h3>
        <p style={{ backgroundColor: 'honeydew', padding: '10px', borderRadius: '5px' }}>
          Consider the vectors v₁ = [1, 0] and v₂ = [0, 1] in ℝ². This family of vectors is linearly independent because the only solution to the equation c₁v₁ + c₂v₂ = [0, 0] is c₁ = c₂ = 0. Each vector is necessary to span the entire vector space ℝ², and neither vector can be expressed as a scalar multiple of the other.
        </p>
      </div>

      <div style={{ marginBottom: '20px', color: 'darkslategray' }}>
        <h3 style={{ color: 'darkcyan' }}>Explanation:</h3>
        <p style={{ backgroundColor: 'mintcream', padding: '10px', borderRadius: '5px' }}>
          In this visualization, each vector is represented by an arrow. Notice that none of the vectors can be expressed as a combination of the others. They form a basis for ℝ². This property is crucial in many areas of mathematics and physics, as it allows us to uniquely describe points and transformations in vector spaces.
        </p>
      </div>

      <Mafs>
        <Coordinates.Cartesian />
        <Vector color="lightblue" tail={[0, 0]} tip={[1, 2]} label="v₁" />
        <Vector color="lightgreen" tail={[0, 0]} tip={[2, 3]} label="v₂" />
        <Vector color="lightcoral" tail={[0, 0]} tip={[3, 1]} label="v₃" />
      </Mafs>

      <div style={{ marginTop: '20px', marginBottom: '20px', color: 'darkslategray' }}>
        <h3 style={{ color: 'darkcyan' }}>Additional Explanation:</h3>
        <p style={{ backgroundColor: 'aliceblue', padding: '10px', borderRadius: '5px' }}>
          In this visualization, each vector is linearly independent of the others, meaning none can be written as a combination of the rest. They form a basis for ℝ².
        </p>
      </div>

      <div style={{ marginTop: '20px', color: 'darkslategray' }}>
        <h3 style={{ color: 'darkcyan' }}>Check Your Own Vectors:</h3>
        <p style={{ backgroundColor: 'lavenderblush', padding: '10px', borderRadius: '5px' }}>Choose the number of vectors and enter their components to verify if they are linearly independent:</p>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ marginRight: '10px' }}>Number of Vectors:</label>
          <select onChange={(e) => setNumVectors(parseInt(e.target.value))} value={numVectors} style={{ padding: '5px', borderRadius: '5px', border: '1px solid lightgray' }}>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          {inputVectors.slice(0, numVectors).map((vec, index) => (
            <div key={index} style={{ display: 'flex', gap: '10px' }}>
              <input
                type="number"
                placeholder={`v${index + 1} x`}
                value={vec.x}
                onChange={(e) => handleInputChange(index, 'x', e.target.value)}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid lightgray' }}
              />
              <input
                type="number"
                placeholder={`v${index + 1} y`}
                value={vec.y}
                onChange={(e) => handleInputChange(index, 'y', e.target.value)}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid lightgray' }}
              />
            </div>
          ))}
        </div>

        <button onClick={handleSubmit} style={{ padding: '10px', backgroundColor: 'lightcyan', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Check Independence</button>
        
        {isIndependent !== null && (
          <div style={{ marginTop: '20px', padding: '10px', borderRadius: '5px', backgroundColor: isIndependent ? 'lightgreen' : 'lightcoral' }}>
            {isIndependent ? 'The vectors are linearly independent.' : 'The vectors are not linearly independent.'}
          </div>
        )}

        {vectors.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <h4>Entered Vectors:</h4>
            <Mafs>
              <Coordinates.Cartesian />
              {vectors.map((vec, index) => (
                <Vector key={index} color={index === 0 ? 'lightblue' : index === 1 ? 'lightgreen' : 'lightcoral'} tail={[0, 0]} tip={vec} label={`v${index + 1}`} />
              ))}
            </Mafs>
          </div>
        )}

        {isIndependent !== null && (
          <div style={{ marginTop: '20px', padding: '10px', borderRadius: '5px', backgroundColor: 'lightyellow' }}>
            <h4>Explanation:</h4>
            <p>
              To determine if the vectors are linearly independent, we set up the equation c₁v₁ + c₂v₂ + ... + cₙvₙ =              0. For the vectors to be linearly independent, the only solution to this equation should be c₁ = c₂ = ... = cₙ = 0.
            </p>
            {numVectors === 2 && (
              <p>
                For the two vectors you entered, we calculate the determinant of the matrix formed by these vectors. If the determinant is non-zero, the vectors are linearly independent.
              </p>
            )}
            {numVectors === 3 && (
              <p>
                For the three vectors you entered, we calculate the determinant of the matrix formed by these vectors. If the determinant is non-zero, the vectors are linearly independent.
              </p>
            )}
            <p>
              In this case, the calculation shows that {isIndependent ? 'the determinant is non-zero, confirming that the vectors are linearly independent.' : 'the determinant is zero, indicating that the vectors are not linearly independent.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FamLib;