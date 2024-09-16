import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import "../../assets/styles/custom.css";

const AnimatedSubspaceVisualization = () => {
  const [toggle, setToggle] = useState(false);

  // Large rectangle animation
  const bigRectProps = useSpring({
    from: { width: '0%', height: '0%' },
    to: { width: toggle ? '100%' : '0%', height: toggle ? '100%' : '0%' },
    config: { duration: 1000 },
  });

  // Small rectangle animation
  const smallRectProps = useSpring({
    from: { width: '0%', height: '0%' },
    to: { width: toggle ? '50%' : '0%', height: toggle ? '50%' : '0%' },
    config: { duration: 1000 },
    delay: 1000,
  });

  // Arrow animations
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
      <div className="bg-blue-200 p-4 rounded-md">
        <p className="text-gray-700">
          <b className='text-black '>Definition:</b> A subspace is a subset of a vector space that is also a vector space.
        </p>
      </div>
      <div className="bg-green-200 p-4 rounded-md mt-4 mb-4">
        <p className="text-gray-700">
          <b>Example:</b> Consider the set of all vectors of the form (x, 0) in R².
        </p>
        <ul className="text-gray-700 mt-2">
          <li>The zero vector (0, 0) is in the set.</li>
          <li>If (x1, 0) and (x2, 0) are in the set, their sum (x1 + x2, 0) is also in the set.</li>
          <li>If (x, 0) is in the set and c is a scalar, c * (x, 0) = (cx, 0) is also in the set.</li>
        </ul>
      </div>

      {/* Animation Container */}
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
            zIndex: '0',  // Ensure this is behind the button
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
            zIndex: '1',  // Ensure this is behind the button
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
            zIndex: '2',
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
            zIndex: '2',
          }}
        />
        <div style={{ position: 'absolute', top: '45%', left: '57.5%', fontWeight: 'bold', zIndex: '1' }}>
          Subspace
        </div>
        <div style={{ position: 'absolute', top: '12.5%', left: '12.5%', fontWeight: 'bold', zIndex: '1' }}>
          Espace Vectoriel
        </div>
      </div>

      {/* Updated Button */}
      <button
  onClick={handleReanimate}
  style={{
    zIndex: 10,  // Ensure it's on top of other elements
    position: 'relative',  // Control the button's positioning
    padding: '8px 16px',  // Adjusted padding for smaller button
    backgroundColor: '#ffb366',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '16px',
    fontSize: '14px',  // Reduced font size
    width: 'auto',  // Width adjusted to fit content
    display: 'inline-block',  // Ensure it's treated as a block element but fits its content
    textAlign: 'center',  // Center the text
    outline: 'none',  // Remove default focus outline
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',  // Add shadow for better visibility
    pointerEvents: 'auto',  // Ensure pointer events are enabled
  }}
>
  Reanimate
</button>




    </div>
  );
};

export default AnimatedSubspaceVisualization;
