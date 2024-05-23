
import React, { useState } from 'react';

const MatrixAnimation = () => {

    const [matrixA, setMatrixA] = useState([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    const [matrixB, setMatrixB] = useState([[9, 8, 7], [6, 5, 4], [3, 2, 1]]);
    const [step, setStep] = useState(0);
    const [animationMatrix, setAnimationMatrix] = useState([]);
    const [stepColors, setStepColors] = useState([]);

    const handleMatrixInputChange = (e, row, col, matrix, setMatrix) => {
        const updatedMatrix = [...matrix];
        updatedMatrix[row][col] = parseFloat(e.target.value);
        setMatrix(updatedMatrix);
    };

    const multiplyMatrices = (a, b) => {
        return a.map((rowA, i) =>
            rowA.map((_, j) => rowA.reduce((acc, _, k) => acc + a[i][k] * b[k][j], 0))
        );
    };

    const resultMatrix = multiplyMatrices(matrixA, matrixB);

    const getRandomPastelColor = () => {
        const r = Math.floor((Math.random() * 127) + 127);
        const g = Math.floor((Math.random() * 127) + 127);
        const b = Math.floor((Math.random() * 127) + 127);
        return `rgba(${r}, ${g}, ${b}, 0.7)`; // Increased opacity
    };

    const animateMultiplication = () => {
        const animationMatrix = [];
        const stepColors = [];
        for (let i = 0; i < matrixA.length; i++) {
            const rowA = matrixA[i];
            const animationRow = [];
            const colorRow = [];
            for (let j = 0; j < matrixB[0].length; j++) {
                const colB = matrixB.map(row => row[j]);
                const operationSteps = [];
                for (let k = 0; k < rowA.length; k++) {
                    operationSteps.push(`${rowA[k]} * ${colB[k]}`);
                }
                animationRow.push(operationSteps.join(' + '));
                const color = getRandomPastelColor();
                colorRow.push(color);
            }
            animationMatrix.push(animationRow);
            stepColors.push(colorRow);
        }
        setAnimationMatrix(animationMatrix);
        setStepColors(stepColors);
        setStep(0);
    };

    const handleNextStep = () => {
        if (step < resultMatrix.length * resultMatrix[0].length - 1) {
            setStep(prevStep => prevStep + 1);
        }
    };

    const handleLastStep = () => {
        if (step > 0) {
            setStep(prevStep => prevStep - 1);
        }
    };

    const getColorForCell = (i, j, matrix) => {
        if (!stepColors.length) return 'transparent';
        const row = Math.floor(step / matrixA.length);
        const col = step % matrixB[0].length;
        if (matrix === 'A' && i === row) {
            return stepColors[row][col];
        }
        if (matrix === 'B' && j === col) {
            return stepColors[row][col];
        }
        return 'transparent';
    };

    const getResultColor = (i, j) => {
        if (!stepColors.length) return 'transparent';
        const row = Math.floor(step / matrixA.length);
        const col = step % matrixB[0].length;
        return step === i * resultMatrix[0].length + j ? stepColors[row][col] : 'transparent';
    };

    return (
        <div className="flex flex-col justify-center items-center mt-10 space-y-5">
           <h1 className="text-2xl font-bold mb-4">Matrix Multiplication</h1>
            <p className="mb-4">Matrix multiplication is a binary operation that produces a matrix from two matrices. For two matrices A and B, the number of columns in A must be equal to the number of rows in B. The resulting matrix will have the dimensions of rows of A by columns of B.</p>
            <div className="flex justify-center items-center space-x-10">
                <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">Matrix A</h3>
                    <div className="grid grid-cols-3 gap-1">
                        {matrixA.map((row, i) => (
                            <React.Fragment key={i}>
                                {row.map((cell, j) => (
                                    <input
                                        key={j}
                                        type="number"
                                        value={cell}
                                        className="w-10 h-10 border border-gray-300 flex items-center justify-center transition-all duration-500 bg-transparent"
                                        onChange={e => handleMatrixInputChange(e, i, j, matrixA, setMatrixA)}
                                        style={{ backgroundColor: getColorForCell(i, j, 'A') }}
                                    />
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">Matrix B</h3>
                    <div className="grid grid-cols-3 gap-1">
                        {matrixB.map((row, i) => (
                            <React.Fragment key={i}>
                                {row.map((cell, j) => (
                                    <input
                                        key={j}
                                        type="number"
                                        value={cell}
                                        className="w-10 h-10 border border-gray-300 flex items-center justify-center transition-all duration-500 bg-transparent"
                                        onChange={e => handleMatrixInputChange(e, i, j, matrixB, setMatrixB)}
                                        style={{ backgroundColor: getColorForCell(i, j, 'B') }}
                                    />
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">Result</h3>
                    <div className="grid grid-cols-3 gap-1">
                        {resultMatrix.map((row, i) => (
                            <React.Fragment key={i}>
                                {row.map((cell, j) => (
                                    <div
                                        key={j}
                                        className={`w-10 h-10 border border-gray-300 flex items-center justify-center transition-all duration-500 bg-transparent`}
                                        style={{ backgroundColor: getResultColor(i, j) }}
                                    >
                                        {cell}
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
            <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Multiplication Steps</h3>
                {
                animationMatrix.map((row, i) => (
                    <div key={i} className="flex flex-col">
                        {row.map((operation, j) => (
                            <div
                                key={j}
                                className={`transition-all duration-500`}
                                style={{ backgroundColor: step === i * row.length + j ? stepColors[i][j] : 'transparent' }}
                            >
                                {operation}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center space-x-5">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={handleNextStep}
                >
                    Next Step
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={handleLastStep}
                >
                    Last Step
                </button>
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={animateMultiplication}
                >
                    Animate Multiplication
                </button>
            </div>
        </div>
    );
};

export default MatrixAnimation;




