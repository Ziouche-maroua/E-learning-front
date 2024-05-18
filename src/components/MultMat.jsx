
import React, { useState } from 'react';

const MatrixAnimation = () => {
    const [matrixA, setMatrixA] = useState([[1, 2], [3, 4]]);
    const [matrixB, setMatrixB] = useState([[5, 6], [7, 8]]);
    const [step, setStep] = useState(0);
    const [animationMatrix, setAnimationMatrix] = useState([]);
    const [stepColors, setStepColors] = useState([]);

    const handleMatrixInputChange = (e, row, col, matrix) => {
        const updatedMatrix = [...matrix];
        updatedMatrix[row][col] = parseFloat(e.target.value);
        if (matrix === matrixA) {
            setMatrixA(updatedMatrix);
        } else {
            setMatrixB(updatedMatrix);
        }
    };

    const multiplyMatrices = (a, b) => {
        return a.map((rowA, i) =>
            rowA.map((_, j) => rowA.reduce((acc, _, k) => acc + a[i][k] * b[k][j], 0))
        );
    };

    const resultMatrix = multiplyMatrices(matrixA, matrixB);

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
                const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`;
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

    return (
        <div className="flex flex-col justify-center items-center mt-10 space-y-5">
            <div className="flex justify-center items-center space-x-10">
                <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">Matrix A</h3>
                    <div className="grid grid-cols-2 gap-1">
                        {matrixA.map((row, i) => (
                            <React.Fragment key={i}>
                                {row.map((cell, j) => (
                                    <input
                                        key={j}
                                        type="number"
                                        value={cell}
                                        className="w-10 h-10 border border-gray-300 flex items-center justify-center transition-all duration-500 bg-transparent"
                                        onChange={e => handleMatrixInputChange(e, i, j, matrixA)}
                                    />
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">Matrix B</h3>
                    <div className="grid grid-cols-2 gap-1">
                        {matrixB.map((row, i) => (
                            <React.Fragment key={i}>
                                {row.map((cell, j) => (
                                    <input
                                        key={j}
                                        type="number"
                                        value={cell}
                                        className="w-10 h-10 border border-gray-300 flex items-center justify-center transition-all duration-500 bg-transparent"
                                        onChange={e => handleMatrixInputChange(e, i, j, matrixB)}
                                    />
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">Result</h3>
                    <div className="grid grid-cols-2 gap-1">
                        {resultMatrix.map((row, i) => (
                            <React.Fragment key={i}>
                                {row.map((cell, j) => (
                                    <div
                                        key={j}
                                        className={`w-10 h-10 border border-gray-300 flex items-center justify-center transition-all duration-500 bg-transparent ${
                                            step >= i * resultMatrix[0].length + j ? 'bg-yellow-200' : ''
                                        }`}
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
                {animationMatrix.map((row, i) => (
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
