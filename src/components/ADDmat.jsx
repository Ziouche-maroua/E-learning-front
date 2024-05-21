/*import React, { useState, useEffect } from 'react';

const MatrixAdditionAnimation = () => {
    const [matrixA, setMatrixA] = useState([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]);
    const [matrixB, setMatrixB] = useState([
        [9, 8, 7],
        [6, 5, 4],
        [3, 2, 1]
    ]);
    const [step, setStep] = useState(0);
    const [running, setRunning] = useState(false);

    const colors = [
        '#FFB3BA', '#FFDFBA', '#FFFFBA',
        '#BAFFC9', '#BAE1FF', '#E0BBE4',
        '#FF9CEE', '#B5EAD7', '#FFDAC1'
    ];

    const handleMatrixInputChange = (e, row, col, matrix, setMatrix) => {
        const updatedMatrix = matrix.map((r, i) =>
            r.map((cell, j) => (i === row && j === col ? parseFloat(e.target.value) : cell))
        );
        setMatrix(updatedMatrix);
    };

    const resultMatrix = matrixA.map((row, i) =>
        row.map((_, j) => matrixA[i][j] + matrixB[i][j])
    );

    useEffect(() => {
        if (running) {
            if (step < 9) {
                const timer = setTimeout(() => {
                    setStep(prevStep => prevStep + 1);
                }, 1000);
                return () => clearTimeout(timer);
            } else {
                setRunning(false);
            }
        }
    }, [step, running]);

    const animateAddition = () => {
        setStep(0);
        setRunning(true);
    };

    return (
        <div className="flex flex-col justify-center items-center mt-10 space-y-4">
            <div className="flex justify-center items-center space-x-6">
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
                                        className={`w-10 h-10 border border-gray-300 flex items-center justify-center transition-all duration-500`}
                                        style={{
                                            backgroundColor: step >= i * 3 + j ? colors[i * 3 + j] : 'transparent'
                                        }}
                                        onChange={e => handleMatrixInputChange(e, i, j, matrixA, setMatrixA)}
                                    />
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="flex items-center text-2xl">+</div>
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
                                        className={`w-10 h-10 border border-gray-300 flex items-center justify-center transition-all duration-500`}
                                        style={{
                                            backgroundColor: step >= i * 3 + j ? colors[i * 3 + j] : 'transparent'
                                        }}
                                        onChange={e => handleMatrixInputChange(e, i, j, matrixB, setMatrixB)}
                                    />
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="flex items-center text-2xl">=</div>
                <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">Result</h3>
                    <div className="grid grid-cols-3 gap-1">
                        {resultMatrix.map((row, i) => (
                            <React.Fragment key={i}>
                                {row.map((cell, j) => (
                                    <div
                                        key={j}
                                        className={`w-10 h-10 border border-gray-300 flex items-center justify-center transition-all duration-500`}
                                        style={{
                                            backgroundColor: step >= i * 3 + j ? colors[i * 3 + j] : 'transparent'
                                        }}
                                    >
                                        {step >= i * 3 + j && cell}
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={animateAddition}
                >
                    Animate Addition
                </button>
            </div>
        </div>
    );
};

export default MatrixAdditionAnimation;*/

import React, { useState, useEffect } from 'react';

const MatrixAdditionAnimation = () => {
    const [matrixA, setMatrixA] = useState([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]);
    const [matrixB, setMatrixB] = useState([
        [9, 8, 7],
        [6, 5, 4],
        [3, 2, 1]
    ]);
    const [step, setStep] = useState(0);
    const [running, setRunning] = useState(false);

    const colors = [
        '#FFB3BA', '#FFDFBA', '#FFFFBA',
        '#BAFFC9', '#BAE1FF', '#E0BBE4',
        '#FF9CEE', '#B5EAD7', '#FFDAC1'
    ];

    const handleMatrixInputChange = (e, row, col, matrix, setMatrix) => {
        const updatedMatrix = matrix.map((r, i) =>
            r.map((cell, j) => (i === row && j === col ? parseFloat(e.target.value) : cell))
        );
        setMatrix(updatedMatrix);
    };

    const resultMatrix = matrixA.map((row, i) =>
        row.map((_, j) => matrixA[i][j] + matrixB[i][j])
    );

    useEffect(() => {
        if (running) {
            if (step < 9) {
                const timer = setTimeout(() => {
                    setStep(prevStep => prevStep + 1);
                }, 1000);
                return () => clearTimeout(timer);
            } else {
                setRunning(false);
            }
        }
    }, [step, running]);

    const animateAddition = () => {
        setStep(0);
        setRunning(true);
    };

    return (
        <div className="flex flex-col justify-center items-center mt-10 space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Addition of Matrices</h2>
            <p className="text-lg text-center">
                Matrix addition is a mathematical operation that defines how to add two matrices. It involves adding corresponding elements of two matrices to generate a new matrix.
            </p>
            
            <div className="flex justify-center items-center space-x-6">
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
                                        className={`w-10 h-10 border border-gray-300 flex items-center justify-center transition-all duration-500`}
                                        style={{
                                            backgroundColor: step >= i * 3 + j ? colors[i * 3 + j] : 'transparent'
                                        }}
                                        onChange={e => handleMatrixInputChange(e, i, j, matrixA, setMatrixA)}
                                    />
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="flex items-center text-2xl">+</div>
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
                                        className={`w-10 h-10 border border-gray-300 flex items-center justify-center transition-all duration-500`}
                                        style={{
                                            backgroundColor: step >= i * 3 + j ? colors[i * 3 + j] : 'transparent'
                                        }}
                                        onChange={e => handleMatrixInputChange(e, i, j, matrixB, setMatrixB)}
                                    />
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="flex items-center text-2xl">=</div>
                <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">Result</h3>
                    <div className="grid grid-cols-3 gap-1">
                        {resultMatrix.map((row, i) => (
                            <React.Fragment key={i}>
                                {row.map((cell, j) => (
                                    <div
                                        key={j}
                                        className={`w-10 h-10 border border-gray-300 flex items-center justify-center transition-all duration-500`}
                                        style={{
                                            backgroundColor: step >= i * 3 + j ? colors[i * 3 + j] : 'transparent'
                                        }}
                                    >
                                        {step >= i * 3 + j && cell}
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={animateAddition}
                >
                    Animate Addition
                </button>
            </div>
            <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Addition Steps</h3>
                <div className="grid grid-cols-3 gap-1">
                    {matrixA.map((rowA, i) => (
                        <React.Fragment key={i}>
                            {rowA.map((_, j) => (
                                <div
                                    key={j}
                                    className={`w-10 h-10 border border-gray-300 flex items-center justify-center transition-all duration-500`}
                                    style={{
                                        backgroundColor: step >= i * 3 + j ? colors[i * 3 + j] : 'transparent'
                                    }}
                                >
                                    {step >= i * 3 + j ? `${matrixA[i][j]} + ${matrixB[i][j]}` : ''}
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MatrixAdditionAnimation;