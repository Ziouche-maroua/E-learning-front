import React, { useState } from 'react';
import { Mafs, Coordinates, Vector } from 'mafs';
import 'mafs/core.css';
import 'mafs/font.css';

const LinearTransformationVisualization = () => {
  // Define initial vectors u and v
  const [u, setU] = useState([1, 1.5]); // Updated vector value
  const [v, setV] = useState([3, 1]);

  // Define the linear transformation functions
  const L_additivity = (vector) => [vector[0] + 1, vector[1] - 1]; // Linear transformation for additivity
  const L_homogeneity = (vector) => [2 * vector[0], 2 * vector[1]]; // Linear transformation for homogeneity

  return (
    <div style={{ padding: '20px', width: '100%', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px' }}>
        <h3>Additivity Property: L(u + v) = L(u) + L(v)</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ width: '45%' }}>
            <p>
              <span style={{ color: 'blue' }}>u</span>: {u.join(', ')}
              <br />
              <span style={{ color: 'green' }}>v</span>: {v.join(', ')}
            </p>
            <p style={{ color: 'red' }}>The red vector represents the transformed vector L(u + v).</p>
            <p style={{ color: 'purple' }}>The purple vector represents the sum of transformed vectors L(u) + L(v).</p>
            <Mafs height={300} width={350}>
              <Coordinates.Cartesian />
              {/* Input vectors u and v */}
              <Vector tail={[0, 0]} tip={u} color="blue" label={`u (${u.join(', ')})`} />
              <Vector tail={[0, 0]} tip={v} color="green" label={`v (${v.join(', ')})`} />
              {/* Transformed vectors L(u) and L(v) */}
              <Vector tail={[0, 0]} tip={L_additivity(u)} color="blue" label={`L(u) (${L_additivity(u).join(', ')})`} />
              <Vector tail={[0, 0]} tip={L_additivity(v)} color="green" label={`L(v) (${L_additivity(v).join(', ')})`} />
              {/* Sum of transformed vectors L(u) + L(v) */}
              <Vector tail={[0, 0]} tip={[L_additivity(u)[0] + L_additivity(v)[0], L_additivity(u)[1] + L_additivity(v)[1]]} color="purple" label={`L(u) + L(v) (${(L_additivity(u)[0] + L_additivity(v)[0])}, ${(L_additivity(u)[1] + L_additivity(v)[1])})`} />
              {/* Transformation of the sum L(u + v) */}
              <Vector tail={[0, 0]} tip={L_additivity([u[0] + v[0], u[1] + v[1]])} color="red" label={`L(u + v) (${L_additivity([u[0] + v[0], u[1] + v[1]]).join(', ')})`} />
            </Mafs>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h3>Homogeneity Property: L(2u) = 2L(u)</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ width: '45%' }}>
            <p>
              <span style={{ color: 'blue' }}>u</span>: {u.join(', ')}
            </p>
            <Mafs height={300} width={350}>
              <Coordinates.Cartesian />
              {/* Input vector u */}
              <Vector tail={[0, 0]} tip={u} color="blue" label={`u (${u.join(', ')})`} />
              {/* Transformed vector L(2u) */}
              <Vector tail={[0, 0]} tip={L_homogeneity([2 * u[0], 2 * u[1]])} color="green" label={`L(2u) (${L_homogeneity([2 * u[0], 2 * u[1]]).join(', ')})`} />
              {/* Transformation of the scaled vector 2L(u) */}
              <Vector tail={[0, 0]} tip={[2 * L_homogeneity(u)[0], 2 * L_homogeneity(u)[1]]} color="purple" label={`2L(u) (${(2 * L_homogeneity(u)[0])}, ${(2 * L_homogeneity(u)[1])})`} />
            </Mafs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinearTransformationVisualization;