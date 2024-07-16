import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import "../../assets/styles/custom.css";

const AnimatedSubspaceVisualization = () => {
  const [toggle, setToggle] = useState(false);

  const bigRectProps = useSpring({
    from: { width: '0px', height: '0px' },
    to: { width: toggle ? '100%' : '0px', height: toggle ? '100%' : '0px' },
    config: { duration: 1000 },
  });

  const smallRectProps = useSpring({
    from: { width: '0px', height: '0px' },
    to: { width: toggle ? '50%' : '0px', height: toggle ? '50%' : '0px' },
    config: { duration: 1000 },
    delay: 1000,
  });

  const arrowProps = useSpring({
    from: { x: '12.5%', y: '12.5%', opacity: 0 },
    to: { x: toggle ? '37.5%' : '12.5%', y: toggle ? '37.5%' : '12.5%', opacity: toggle ? 1 : 0 },
    config: { duration: 1000 },
    delay: 2000,
  });

  const arrowProps2 = useSpring({
    from: { x: '50%', y: '50%', opacity: 0 },
    to: { x: toggle ? '75%' : '50%', y: toggle ? '75%' : '50%', opacity: toggle ? 1 : 0 },
    config: { duration: 1000 },
    delay: 2000,
  });

  const handleReanimate = () => {
    setToggle(!toggle);
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h2 className='text-3xl md:text-3xl lg:text-4xl text-[#ffc107] font-bold mb-8 mt-4'>Animated Visualization of a Vector Subspace</h2>
      <div style={{ backgroundColor: '#bfdbfe', padding: '10px', borderRadius: '8px', marginTop: '8px' }}>
        <p style={{ color: '#3d3d3d' }}>
          <b className='text-black '>Definition:</b> A subspace is a subset of a vector space that is also a vector space.
        </p>
      </div>
      <div style={{ backgroundColor: '#9cc6ad', padding: '8px', borderRadius: '8px', marginTop: '8px', marginBottom: '8px' }}>
        <p style={{ color: '#3d3d3d' }}>
          <b>Example:</b> Consider the set of all vectors of the form (x, 0) in R².
        </p>
        <ul style={{ color: '#3d3d3d', lineHeight: '1.5', marginTop: '8px' }}>
          <li>The zero vector (0, 0) is in the set.</li>
          <li>If (x1, 0) and (x2, 0) are in the set, then their sum (x1 + x2, 0) is also in the set.</li>
          <li>If (x, 0) is in the set and c is a scalar, then c * (x, 0) = (cx, 0) is also in the set.</li>
        </ul>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '400px', margin: '0 auto' }}>
        <animated.div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: bigRectProps.width,
            height: bigRectProps.height,
            backgroundColor: '#ffcc66',
            border: '2px solid #ffb366',
            zIndex: '-5', // Adjust zIndex here
          }}
        />
        <animated.div
          style={{
            position: 'absolute',
            top: '30%',
            left: '25%',
            width: smallRectProps.width,
            height: smallRectProps.height,
            backgroundColor: '#ccffcc',
            border: '2px solid #66cc99',
            zIndex: '-5', // Adjust zIndex here
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
            zIndex: '-5', // Adjust zIndex here
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
            zIndex: '-5', // Adjust zIndex here
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '45%',
            left: '57.5%',
            fontWeight: 'bold',
            color: 'varwhite-text',
             zIndex: '-5'
          }}
        >
          Subspace
        </div>
        <div
          style={{
            position: 'absolute',
            top: '12.5%',
            left: '12.5%',
            fontWeight: 'bold',
            color: 'varwhite-text',
             zIndex: '-5'
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
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '16px',
         
          
        }}
      >
        Reanimate
      </button>
    </div>
  );
};

const SubspaceVisualization = () => {
  return (
    <div>
      <AnimatedSubspaceVisualization />
    </div>
  );
};

export default SubspaceVisualization;
