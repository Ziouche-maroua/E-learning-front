import React, { useState } from 'react';

const MatrixCalculator = () => {
  const [matrix, setMatrix] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);
  const [inverseMatrix, setInverseMatrix] = useState([]);
  const [augmentedMatrix, setAugmentedMatrix] = useState([]);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (row, col, value) => {
    const newMatrix = [...matrix];
    newMatrix[row][col] = parseFloat(value) || 0;
    setMatrix(newMatrix);
  };

  const isSquareMatrix = (mat) => {
    return mat.length === mat[0].length;
  };

  const isZeroMatrix = (mat) => {
    return mat.every(row => row.every(value => value === 0));
  };

  const createIdentityMatrix = (size) => {
    const identity = [];
    for (let i = 0; i < size; i++) {
      identity[i] = [];
      for (let j = 0; j < size; j++) {
        identity[i][j] = i === j ? 1 : 0;
      }
    }
    return identity;
  };

  const augmentMatrixWithIdentity = (mat) => {
    const size = mat.length;
    const identity = createIdentityMatrix(size);
    const augmented = mat.map((row, i) => [...row, ...identity[i]]);
    return augmented;
  };

  const performGaussianElimination = () => {
    setErrorMessage(''); // Clear previous error messages
    if (!isSquareMatrix(matrix)) {
      setErrorMessage('Matrix must be square to find the inverse.');
      return;
    }
    if (isZeroMatrix(matrix)) {
      setErrorMessage('Matrix is a zero matrix, no inverse exists.');
      return;
    }

    let mat = augmentMatrixWithIdentity(matrix);
    const steps = [];
    const size = mat.length;

    // Forward elimination to get Echelon Form
    for (let i = 0; i < size; i++) {
      // Pivot if the diagonal element is zero
      if (mat[i][i] === 0) {
        let swapped = false;
        for (let j = i + 1; j < size; j++) {
          if (mat[j][i] !== 0) {
            [mat[i], mat[j]] = [mat[j], mat[i]];
            swapped = true;
            break;
          }
        }
        if (!swapped) {
          setErrorMessage('Matrix is singular and cannot be inverted.');
          return;
        }
      }

      // Make the diagonal contain all 1's
      let factor = mat[i][i];
      for (let j = 0; j < mat[i].length; j++) {
        mat[i][j] /= factor;
      }
      steps.push({ matrix: JSON.parse(JSON.stringify(mat)), changedCells: [[i, i]] }); // Store the step

      // Make all rows below this one 0 in the current column
      for (let k = i + 1; k < size; k++) {
        factor = mat[k][i];
        const changedCells = [];
        for (let l = 0; l < mat[k].length; l++) {
          mat[k][l] -= factor * mat[i][l];
          changedCells.push([k, l]);
        }
        steps.push({ matrix: JSON.parse(JSON.stringify(mat)), changedCells }); // Store the step
      }
    }

    // Backward elimination to get Reduced Row Echelon Form (RREF)
    for (let i = size - 1; i >= 0; i--) {
      for (let k = i - 1; k >= 0; k--) {
        const factor = mat[k][i];
        const changedCells = [];
        for (let l = 0; l < mat[k].length; l++) {
          mat[k][l] -= factor * mat[i][l];
          changedCells.push([k, l]);
        }
        steps.push({ matrix: JSON.parse(JSON.stringify(mat)), changedCells }); // Store the step
      }
    }

    const inverse = mat.map(row => row.slice(size));
    setInverseMatrix(inverse);
    setAugmentedMatrix(mat);
    setSteps(steps);
    setCurrentStep(0);
  };

  const renderMatrix = (mat, changedCells = []) => {
    return (
      <table className="table-auto mx-auto mb-4">
        <tbody>
          {mat.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((value, colIndex) => {
                const isChanged = changedCells.some(
                  ([changedRow, changedCol]) =>
                    changedRow === rowIndex && changedCol === colIndex
                );
                return (
                  <td key={colIndex}>
                    <input
                      type="text"
                      value={isNaN(value) || !isFinite(value) ? '' : value.toFixed(2)}
                      readOnly
                      className={`border border-gray-300 w-12 h-10 text-center p-2 m-1 ${isChanged ? 'bg-yellow-100' : 'bg-blue-100'}`}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const handleReset = () => {
    setMatrix([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]);
    setInverseMatrix([]);
    setAugmentedMatrix([]);
    setSteps([]);
    setCurrentStep(-1);
    setErrorMessage('');
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl mx-auto mt-8 border border-blue-200">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">Fill the Matrix</h1>
        <div className="flex justify-center">
          <div className="mr-4">
            <h2 className="text-xl font-bold mb-4 text-center text-blue-600">Input Matrix</h2>
            <table className="table-auto">
              <tbody>
                {matrix.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((value, colIndex) => (
                      <td key={colIndex}>
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                          className="border border-gray-300 w-12 h-10 text-center p-2 m-1"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {inverseMatrix.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-center text-blue-600">Inverse Matrix</h2>
              {renderMatrix(inverseMatrix)}
            </div>
          )}
        </div>
        {errorMessage && (
          <div className="text-center text-red-500 font-bold mb-4">{errorMessage}</div>
        )}
      </div>
      {inverseMatrix.length > 0 && (
        <div className="mb-8">
          <button
            onClick={() => setCurrentStep(currentStep >= 0 ? -1 : 0)}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded shadow-lg mt-4`}
          >
            {currentStep >= 0 ? 'Hide Steps' : 'Show Steps'}
          </button>

          {currentStep >= 0 && (
            <div className="mt-4">
              <div className="flex justify-center mt-4 mb-4">
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className={`bg-${currentStep <= 0 ? 'gray' : 'blue'}-500 hover:bg-${currentStep <= 0 ? 'gray' : 'blue'}-700 text-white font-bold py-1 px-2 rounded mr-2`}
                  disabled={currentStep <= 0}
                >
                  Previous Step
                </button>
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className={`bg-${currentStep >= steps.length - 1 ? 'gray' : 'blue'}-500 hover:bg-${currentStep >= steps.length - 1 ? 'gray' : 'blue'}-700 text-white font-bold py-1 px-2 rounded`}
                  disabled={currentStep >= steps.length - 1}
                >
                  Next Step
                </button>
              </div>
              {steps[currentStep] && (
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2 text-blue-600">Step {currentStep + 1}</h3>
                  {renderMatrix(steps[currentStep].matrix, steps[currentStep].changedCells)}
                </div>
              )}
              {currentStep === 0 && (
                <div className="text-center text-gray-600 font-bold">Initial Matrix</div>
              )}
              {currentStep === steps.length - 1 && (
                <div className="text-center text-gray-600 font-bold">Final Inverse Matrix</div>
              )}
            </div>
          )}
        </div>
      )}
      <div className="text-center">
        <button
          onClick={performGaussianElimination}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded shadow-lg mr-4"
        >
          Calculate Inverse
        </button>
        {inverseMatrix.length > 0 && (
          <button
            onClick={handleReset}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded shadow-lg"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default MatrixCalculator;
