/*import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimatedSubspaceVisualization = () => {
  const [toggle, setToggle] = useState(false);

  const bigRectProps = useSpring({
    from: { width: 0, height: 0 },
    to: { width: 400, height: 400 },
    reset: toggle,
    config: { duration: 1000 },
  });

  const smallRectProps = useSpring({
    from: { width: 0, height: 0 },
    to: { width: 200, height: 200 },
    reset: toggle,
    config: { duration: 1000 },
    delay: 1000,
  });

  const arrowProps = useSpring({
    from: { x: 50, y: 50, opacity: 0 },
    to: { x: 150, y: 150, opacity: 1 },
    reset: toggle,
    config: { duration: 1000 },
    delay: 2000,
  });

  const arrowProps2 = useSpring({
    from: { x: 200, y: 200, opacity: 0 },
    to: { x: 300, y: 300, opacity: 1 },
    reset: toggle,
    config: { duration: 1000 },
    delay: 2000,
  });

  const handleReanimate = () => {
    setToggle(!toggle);
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: '#3d3d3d' }}>Animated Visualization of a Vector Subspace</h2>
      <div className="bg-orange-200 p-4 rounded mt-2">
        <p className="text-gray-800">
          <b>Definition:</b> A subspace is a subset of a vector space that is also a vector space.
        </p>
      </div>
      <div className="bg-white-100 p-4 rounded mt-2">
        <p className="text-gray-800">
          <b>Example:</b> Consider the set of all vectors of the form (x, 0) in R².
        </p>
        <ul className="text-gray-700 leading-relaxed mt-2">
          <li>The zero vector (0, 0) is in the set.</li>
          <li>If (x1, 0) and (x2, 0) are in the set, then their sum (x1 + x2, 0) is also in the set.</li>
          <li>If (x, 0) is in the set and c is a scalar, then c * (x, 0) = (cx, 0) is also in the set.</li>
        </ul>
      </div>
      <div style={{ position: 'relative', width: '400px', height: '400px', margin: '0 auto' }}>
        <animated.div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: bigRectProps.width,
            height: bigRectProps.height,
            backgroundColor: '#ffcc66',
            border: '2px solid #ffb366',
          }}
        />
        <animated.div
          style={{
            position: 'absolute',
            top: '120px',
            left: '100px',
            width: smallRectProps.width,
            height: smallRectProps.height,
            backgroundColor: '#ccffcc',
            border: '2px solid #66cc99',
          }}
        />
        <animated.div
          style={{
            position: 'absolute',
            top: arrowProps.y,
            left: arrowProps.x,
            opacity: arrowProps.opacity,
            width: '0',
            height: '0',
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderBottom: '20px solid #ff3333',
            transform: 'rotate(45deg)',
          }}
        />
        <animated.div
          style={{
            position: 'absolute',
            top: arrowProps2.y,
            left: arrowProps2.x,
            opacity: arrowProps2.opacity,
            width: '0',
            height: '0',
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderBottom: '20px solid #3399ff',
            transform: 'rotate(45deg)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '180px',
            left: '230px',
            fontWeight: 'bold',
            color: '#3d3d3d',
          }}
        >
          Subspace
        </div>
        <div
          style={{
            position: 'absolute',
            top: '50px',
            left: '50px',
            fontWeight: 'bold',
            color: '#3d3d3d',
          }}
        >
          Espace Vectoriel
        </div>
      </div>
      <button
        onClick={handleReanimate}
        style={{
          padding: '10px 20px',
          backgroundColor: '#ffb366',
          color: '#fff',
        }}
        >
          Reanimate
        </button>
      </div>
    
  );
};

const SubspaceVisualization = () => {
  const [visualizationType, setVisualizationType] = useState('animated');

  return (
    <div>
      
      

      {visualizationType === 'animated' && <AnimatedSubspaceVisualization />}
    </div>
  );
};

export default SubspaceVisualization;*/