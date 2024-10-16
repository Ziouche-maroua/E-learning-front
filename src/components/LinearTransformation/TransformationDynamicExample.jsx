import React, { useState, useEffect } from 'react';
import { Mafs, Coordinates, Vector } from "mafs";
import "mafs/core.css";
import "mafs/font.css";
import "../../assets/styles/custom.css"
const start = [0, 0]; // Start point

const styles = {
  container: {
    padding: '20px',
    width: '50vw',
    margin: '0 auto',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: '10px',
  },
  mafsContainer: {
    marginTop: '20px',
  },
};

const DefDynamic = () => {
  const [initialEnd, setInitialEnd] = useState([0, 0]); // Initial endpoint in ℝ² (y-coordinate is 0)
  const [finalEnd, setFinalEnd] = useState([0, 0]); // Final endpoint in ℝ² (y-coordinate is 0)
  const [end, setEnd] = useState([0, 0]); // Endpoint for the moving vector
  const [dimension, setDimension] = useState(""); // Dimension choice: "R1-R2" or "R2-R2"

  useEffect(() => {
    if (dimension === "R1-R2") {
      // R1-R2 dimension logic
      const distanceX = finalEnd[0] - initialEnd[0];
      const distanceY = finalEnd[1] - initialEnd[1];
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
      const stepSizeX = (distanceX / distance) * 0.1;
      const stepSizeY = (distanceY / distance) * 0.1;

      const interval = setInterval(() => {
        if (Math.abs(end[0] - finalEnd[0]) < Math.abs(stepSizeX) && Math.abs(end[1] - finalEnd[1]) < Math.abs(stepSizeY)) {
          setEnd(initialEnd);
        } else {
          setEnd([end[0] + stepSizeX, end[1] + stepSizeY]);
        }
      }, 100);

      return () => clearInterval(interval);
    } else if (dimension === "R2-R2") {
      // R2-R2 dimension logic
      const distanceX = finalEnd[0] - initialEnd[0];
      const distanceY = finalEnd[1] - initialEnd[1];
      const stepSizeX = (distanceX / 10);
      const stepSizeY = (distanceY / 10);

      const interval = setInterval(() => {
        if (Math.abs(end[0] - finalEnd[0]) < Math.abs(stepSizeX) && Math.abs(end[1] - finalEnd[1]) < Math.abs(stepSizeY)) {
          setEnd(initialEnd);
        } else {
          setEnd([end[0] + stepSizeX, end[1] + stepSizeY]);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [dimension, end, initialEnd, finalEnd]);

  const handleInitialEndChange = (event) => {
    const value = event.target.value;
    const coords = value ? value.split(',').map(coord => parseFloat(coord.trim())) : [0];
    setInitialEnd(coords.some(isNaN) ? [0] : coords);
  };

  const handleFinalEndChange = (event) => {
    const value = event.target.value;
    const coords = value ? value.split(',').map(coord => parseFloat(coord.trim())) : [0];
    setFinalEnd(coords.some(isNaN) ? [0] : coords);
  };

  const handleDimensionChange = (event) => {
    setDimension(event.target.value);
  };

  const updateVisualization = () => {
    setEnd(initialEnd); // Resetting end to initialEnd to trigger re-render
  };

  return (
    <div style={styles.container}>
      <div >
        <label>
          Choose dimension:
          <select className=' varback-color varwhite-text mb-2'   value={dimension} onChange={handleDimensionChange}>
            <option  className=' varback-color varwhite-text'  value="">Select dimension</option>
            <option className=' varback-color varwhite-text  ' value="R1-R2">R1-R2</option>
            <option className=' varback-color varwhite-text'  value="R2-R2">R2-R2</option>
          </select>
        </label>
      </div>
      {dimension && (
        <div className='kanit-font' >
          <div className='kanit-font' >
            <label>
              Initial endpoint:
              <input type="text" className='varwhite-text varback-color mb-2'  value={initialEnd.join(',')} onChange={handleInitialEndChange} />
            </label>
          </div>
          <div className='kanit-font'>
            <label>
              Final endpoint:
              <input type="text" className=' varback-color varwhite-text  '  value={finalEnd.join(',')} onChange={handleFinalEndChange} />
            </label>
          </div>
          <div style={styles.buttonContainer}>
            <button onClick={updateVisualization}>Update Visualization</button>
          </div>
          <div style={styles.mafsContainer}>
            <Mafs viewBox={{ x: [-3, 3], y: [-3, 3] }}>
              <Coordinates.Cartesian />
              <Vector tail={start} tip={end} color="yellow" animate />
            </Mafs>
          </div>
        </div>
      )}
    </div>
  );
};

export default DefDynamic;