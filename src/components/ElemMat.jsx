


import React, { useState } from 'react';

const MatrixVisualizations = () => {
    const [nullMatrixRows, setNullMatrixRows] = useState(3);
    const [nullMatrixCols, setNullMatrixCols] = useState(3);

    // Define other matrices
    const squareMatrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    const rowMatrix = [[1, 2, 3]];

    const columnMatrix = [
        [1],
        [2],
        [3]
    ];

    const diagonalMatrix = [
        [1, 0, 0],
        [0, 2, 0],
        [0, 0, 3]
    ];

    const identityMatrix = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ];

    const upperTriangularMatrix = [
        [1, 2, 3],
        [0, 4, 5],
        [0, 0, 6]
    ];

    const lowerTriangularMatrix = [
        [1, 0, 0],
        [2, 3, 0],
        [4, 5, 6]
    ];

    // Function to generate a null matrix of given size
    const generateNullMatrix = (rows, cols) => {
        return Array(rows).fill().map(() => Array(cols).fill(0));
    };

    // Rendering function
    const renderMatrix = (matrix, gridCols, colors = []) => (
        <div className={`grid grid-cols-${gridCols} gap-0`}>
            {matrix.flat().map((cell, index) => (
                <div
                    key={index}
                    className="w-10 h-10 border border-gray-300 flex items-center justify-center"
                    style={{
                        backgroundColor: colors[index] || 'transparent'
                    }}
                >
                    {cell}
                </div>
            ))}
        </div>
    );

    // Colors for matrices
    const squareColors = squareMatrix.flat().map((_, index) => '#BAE1FF');
    const rowColors = rowMatrix.flat().map((_, index) => '#FFDFBA');
    const columnColors = columnMatrix.flat().map((_, index) => '#FFB3BA');

    const diagonalColors = diagonalMatrix.flat().map((_, index) => (Math.floor(index / 3) === index % 3 ? '#BAE1FF' : 'transparent'));
    const identityColors = identityMatrix.flat().map((_, index) => (Math.floor(index / 3) === index % 3 ? '#BAFFC9' : 'transparent'));
    const upperTriangularColors = upperTriangularMatrix.flat().map((_, index) => (Math.floor(index / 3) <= index % 3 ? '#FFDFBA' : 'transparent'));
    const lowerTriangularColors = lowerTriangularMatrix.flat().map((_, index) => (Math.floor(index / 3) >= index % 3 ? '#FFB3BA' : 'transparent'));

    return (
        <div className="flex flex-col justify-center items-center mt-10 space-y-10">
            <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Square and Null Matrices</h3>
                <div className="mb-2">
                    <p className="inline-block mr-10">A square matrix has the same number of rows and columns.</p>
                    <p className="inline-block">A null matrix has all elements equal to zero.</p>
                </div>
                <div className="flex justify-center items-center space-x-10">
                    <div className="mr-10">
                        {renderMatrix(squareMatrix, 3, squareColors)}
                    </div>
                    <div>
                        <div className="flex space-x-4 mb-4">
                            <div>
                                <label className="block mb-2">Rows</label>
                                <select
                                    value={nullMatrixRows}
                                    onChange={(e) => setNullMatrixRows(parseInt(e.target.value))}
                                    className="p-2 border border-gray-300 rounded"
                                >
                                    {[2, 3, 4, 5].map(size => (
                                        <option key={size} value={size}>{size}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block mb-2">Columns</label>
                                <select
                                    value={nullMatrixCols}
                                    onChange={(e) => setNullMatrixCols(parseInt(e.target.value))}
                                    className="p-2 border border-gray-300 rounded"
                                >
                                    {[2, 3, 4, 5].map(size => (
                                        <option key={size} value={size}>{size}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        {renderMatrix(generateNullMatrix(nullMatrixRows, nullMatrixCols), nullMatrixCols)}
                    </div>
                </div>
            </div>

            <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Row and Column Matrices</h3>
                <div className="mb-2">
                    <p className="inline-block mr-10">A row matrix has a single row with multiple columns.</p>
                    <p className="inline-block">A column matrix has a single column with multiple rows.</p>
                </div>
                <div className="flex justify-center items-center space-x-10">
                    <div className="mr-10">
                        {renderMatrix(rowMatrix, rowMatrix[0].length, rowColors)}
                    </div>
                    <div>
                        {renderMatrix(columnMatrix, 1, columnColors)}
                    </div>
                </div>
            </div>

            <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Diagonal and Identity Matrices</h3>
                <div className="mb-2">
                    <p className="inline-block mr-10">A diagonal matrix has non-zero elements only on its main diagonal.</p>
                    <p className="inline-block">An identity matrix is a square matrix with ones on the main diagonal and zeros elsewhere.</p>
                </div>
                <div className="flex justify-center items-center space-x-10">
                    <div className="mr-10">
                        {renderMatrix(diagonalMatrix, 3, diagonalColors)}
                    </div>
                    <div>
                        {renderMatrix(identityMatrix, 3, identityColors)}
                    </div>
                </div>
            </div>

            <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Upper and Lower Triangular Matrices</h3>
                <div className="mb-2">
                    <p className="inline-block mr-10">An upper triangular matrix has non-zero elements only on and above the main diagonal.</p>
                    <p className="inline-block">A lower triangular matrix has non-zero elements only on and below the main diagonal.</p>
                </div>
                <div className="flex justify-center items-center space-x-10">
                    <div className="mr-10">
                        {renderMatrix(upperTriangularMatrix, 3, upperTriangularColors)}
                    </div>
                    <div>
                        {renderMatrix(lowerTriangularMatrix, 3, lowerTriangularColors)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatrixVisualizations;