import React, { useState } from 'react';
import { Mafs, Vector, Coordinates } from 'mafs';
import 'mafs/core.css';
import 'mafs/font.css';

const checkSpanningSet = (vectors) => {
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

const FamilleGeneratrice = () => {
  const [numVectors, setNumVectors] = useState(2);
  const [vectors, setVectors] = useState([]);
  const [inputVectors, setInputVectors] = useState([{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }]);
  const [isSpanning, setIsSpanning] = useState(null);

  const handleInputChange = (index, axis, value) => {
    const newVectors = [...inputVectors];
    newVectors[index][axis] = parseFloat(value);
    setInputVectors(newVectors);
  };

  const handleSubmit = () => {
    const enteredVectors = inputVectors.slice(0, numVectors).map(v => [v.x, v.y]);
    setVectors(enteredVectors);
    const spanning = checkSpanningSet(enteredVectors);
    setIsSpanning(spanning);
  };

  return (
    <div className="flex flex-col items-center mt-4 mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 mt-4">Visualization of a Spanning Set of Vectors</h2>
      
      <div className="max-w-3xl text-left mt-5 font-sans">
        <h3 className=" text-2xl poetsen-font text-gray-800 mt-8 mb-2">Definition:</h3>
        <p className="text-gray-800  font-bold mt-2 mb-4">
        &nbsp;  A set of vectors {`{v₁, v₂, ..., vₙ}`} in a vector space E is said to span the space if every vector in the space can be written as a linear combination of these vectors. This means that for any vector v in E, there exist scalars c₁, c₂, ..., cₙ such that v = c₁v₁ + c₂v₂ + ... + cₙvₙ.
        </p>
      </div>

      <div className=" max-w-3xl text-left mt-5 font-sans bg-blue-200 p-4 rounded mt-8 mb-12">
       
        <p  className="text-gray-800 font-bold"> <b>Example :</b> &nbsp;
          Consider the vectors v₁ = [1, 0] and v₂ = [0, 1] in ℝ². This set of vectors spans ℝ² because any vector in ℝ² can be expressed as a linear combination of these vectors. For example, the vector [a, b] can be written as a * [1, 0] + b * [0, 1].
        </p>
      </div>
      
      <div className=" max-w-3xl text-left mt-5 font-sans mb-8" >
         <p className="text-gray-800 text 2xl font-bold" >
         &nbsp;   In this visualization, the vectors provided span the entire ℝ² space, meaning any point in the plane can be reached using a combination of these vectors.
        </p>
      </div>

    

      <Mafs>
        <Coordinates.Cartesian />
        <Vector color="lightblue" tail={[0, 0]} tip={[1, 2]} label="v₁" />
        <Vector color="lightgreen" tail={[0, 0]} tip={[2, 3]} label="v₂" />
        <Vector color="lightcoral" tail={[0, 0]} tip={[3, 1]} label="v₃" />
      </Mafs>


      <div className=" max-w-3xl text-left mt-5 font-sans mt-8">
        <h3 className="font-bold  mb-4" > Check Your Own Vectors :</h3>
        <p className="font-bold mt-4"> Choose the number of vectors and enter their components to verify if they form a spanning set :</p>
        
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

        <button onClick={handleSubmit} className= "mt-4 mb-4 font-bold  px-4 py-2 bg-yellow-200 rounded cursor-pointer border-none transition-all hover:border-2 hover:border-black">Check Spanning Set </button>

        
        {isSpanning !== null && (
          <div style={{ marginTop: '20px', padding: '10px', borderRadius: '5px', backgroundColor: isSpanning ? 'lightgreen' : 'lightcoral' }}>
            {isSpanning ? 'The vectors form a spanning set for ℝ².' : 'The vectors do not form a spanning set for ℝ².'}
          </div>
        )}

        {vectors.length > 0 && (
          <div className=" mt-4 mb-4">
          <h4 className="font-bold text 2xl mb-4"> &nbsp; &nbsp;Entered Vectors :</h4>
            <Mafs>
              <Coordinates.Cartesian />
              {vectors.map((vec, index) => (
                <Vector key={index} color={index === 0 ? 'lightblue' : index === 1 ? 'lightgreen' : 'lightcoral'} tail={[0, 0]} tip={vec} label={`v${index + 1}`} />
              ))}
            </Mafs>
          </div>
        )}

        {isSpanning !== null && (
          <div style={{ marginTop: '20px', padding: '10px', borderRadius: '5px', backgroundColor: 'lightyellow' }}>
            <h4 className="font-bold text 2xl mb-4">Explanation:</h4>
            <p style= {{backgroundColor: '#f6fff6' }}  className="text-gray-800 font-bold">
              To determine if the vectors form a spanning set, we check if any vector in ℝ² can be written as a linear combination of the given vectors. This involves setting up the equation c₁v₁ + c₂v₂ + ... + cₙvₙ = v for an arbitrary vector v in ℝ². If we can solve this equation for any v, then the vectors span ℝ².
            </p>
            {numVectors === 2 && (
              <p style= {{backgroundColor: '#f6fff6' }}  className="text-gray-800 font-bold">
                For the two vectors you entered, we calculate the determinant of the matrix formed by these vectors. If the determinant is non-zero, the vectors span ℝ².
              </p>
            )}
            {numVectors === 3 && (
              <p style= {{backgroundColor: '#f6fff6' }} className="text-gray-800 font-bold">
                For the three vectors you entered, we calculate the determinant of the matrix formed by these vectors. If the determinant is non-zero, the vectors span ℝ².
              </p>
            )}
            <p style= {{backgroundColor: '#f6fff6' }}  className="text-gray-800 font-bold">
              In this case, the calculation shows that {isSpanning ? 'the determinant is non-zero, confirming that the vectors form a spanning set.' : 'the determinant is zero, indicating that the vectors do not form a spanning set.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FamilleGeneratrice;