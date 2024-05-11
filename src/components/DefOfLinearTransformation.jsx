import React, { useState, useEffect } from 'react';
import { Mafs, Coordinates, Vector } from "mafs";
import "mafs/core.css";
import "mafs/font.css";

const start = [0, 0]; // Start point
const initialEnd = [1, 3]; // Initial endpoint
const finalEnd = [4, 1]; // Final endpoint

const Def = () => {
  const [end, setEnd] = useState(initialEnd);

  useEffect(() => {
    // Calculate the step size based on the distance to final position
    const distanceX = finalEnd[0] - end[0];
    const distanceY = finalEnd[1] - end[1];
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    const stepSizeX = (distanceX / distance) * 0.1;
    const stepSizeY = (distanceY / distance) * 0.1;
  
    // Update endpoint gradually
    const interval = setInterval(() => {
      // Check if endpoint has reached final position
      if (Math.abs(end[0] - finalEnd[0]) < Math.abs(stepSizeX) && Math.abs(end[1] - finalEnd[1]) < Math.abs(stepSizeY)) {
        // Reset endpoint to initial position
        setEnd(initialEnd);
      } else {
        // Update endpoint coordinates
        setEnd([end[0] + stepSizeX, end[1] + stepSizeY]);
      }
    }, 100); // Update every 100 milliseconds (adjust as needed)
  
    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [end, initialEnd, finalEnd]);
  
  
  
  return (
    <div style={{ padding: '20px' , width: '50vw', margin: '0 auto' }}>
      <Mafs 
     viewBox={{ x: [-5, 5], y: [-5, 5] }}
      >
        <Coordinates.Cartesian    />
        <Vector tail={start} tip={end} color="yellow" animate />
      </Mafs>
    </div>
  );
};

export default Def;
