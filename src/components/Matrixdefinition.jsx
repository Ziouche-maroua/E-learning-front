import React from 'react';

const MatrixVisualization = () => {
  return (
    <div className="flex justify-center items-center mt-8 flex-col">
      <div className="border border-blue-800 p-4 rounded-md shadow-lg">
        {/* Render a table to visually represent a 3x3 matrix */}
        <table className="border-collapse border border-gray-200 mx-auto">
          <tbody>
            {Array.from({ length: 3 }).map((_, i) => (
              <tr key={i}>
                {Array.from({ length: 3 }).map((_, j) => (
                  <td key={j} className="border border-gray-500 p-4 text-center rounded-md shadow-md">
                    {`a${i + 1}${j + 1}`}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Explanation of the matrix example */}
        <p className="text-base mt-4 text-center">
          In this example, the matrix has dimensions 3 &times; 3, meaning it has 3 rows and 3 columns.
          Each element in the matrix is denoted as <em>a<sub>ij</sub></em>, where <em>i</em> represents the row index and <em>j</em> represents the column index.
        </p>
        <p className="text-base mt-4 text-center">
          For example, <em>a<sub>11</sub></em> is the element in the first row and first column.
        </p>
      </div>
    </div>
  );
};

export default MatrixVisualization;
