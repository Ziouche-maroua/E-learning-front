import React from 'react';
import { Line } from 'react-chartjs-2';

const LinearTransformationChart = () => {
  // Define the original data points
  const originalData = {
    labels: ['Point 1', 'Point 2', 'Point 3', 'Point 4'],
    datasets: [
      {
        label: 'Original Data',
        data: [
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 4 },
          { x: 4, y: 5 },
        ],
        borderColor: 'blue',
        fill: false,
      },
    ],
  };

  // Define the transformed data points (linear transformation)
  const transformedData = {
    labels: ['Point 1', 'Point 2', 'Point 3', 'Point 4'],
    datasets: [
      {
        label: 'Transformed Data',
        data: [
          { x: 2, y: 3 },
          { x: 3, y: 4 },
          { x: 4, y: 5 },
          { x: 5, y: 6 },
        ],
        borderColor: 'green',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>Linear Transformation Chart</h2>
      <div style={{ width: '600px', height: '400px' }}>
        <Line data={originalData} />
      </div>
      <div style={{ width: '600px', height: '400px' }}>
        <Line data={transformedData} />
      </div>
    </div>
  );
};

export default LinearTransformationChart;