import React from 'react';

const MatrixVisualizations = () => {
  // Define the matrix
  const matrix = [
    [1, 2, 3],
    [4, 5, 6]
  ];

  // Function to transpose a matrix
  const transposeMatrix = (matrix) => {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
  };

  // Function to render a matrix with specified colors
  const renderMatrix = (matrix, gridCols, colors = []) => (
    <div className={`grid grid-cols-${gridCols} gap-1`}>
      {matrix.map((row, rowIndex) => (
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className="w-10 h-10 border border-gray-300 flex items-center justify-center"
            style={{
              backgroundColor: colors[rowIndex][colIndex] || 'transparent'
            }}
          >
            {cell}
          </div>
        ))
      ))}
    </div>
  );

  // Colors for the original matrix
  const originalColors = [
    ['#FFECB3', '#FFECB3', '#FFECB3'],
    ['#D7BDE2', '#D7BDE2', '#D7BDE2']
  ];

  // Colors for the transpose matrix
  const transposeColors = [
    ['#FFECB3', '#D7BDE2'],
    ['#FFECB3', '#D7BDE2'],
    ['#FFECB3', '#D7BDE2']
  ];

  return (
    <div className="flex flex-col justify-center items-center mt-10 space-y-10">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">Matrix Transpose</h3>
        <p className="mb-4">
          The transpose of a matrix is a new matrix obtained by swapping the rows and columns of the original matrix.
        </p>
        <div className="flex justify-center items-center space-x-10">
          <div className="mr-10 text-center">
            <p className="font-bold mb-2">A =</p>
            {renderMatrix(matrix, 3, originalColors)}
          </div>
          <div className="text-4xl font-semibold">→</div>
          <div className="text-center">
            <p className="font-bold mb-2">A<sup>T</sup> =</p>
            {renderMatrix(transposeMatrix(matrix), 2, transposeColors)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatrixVisualizations;