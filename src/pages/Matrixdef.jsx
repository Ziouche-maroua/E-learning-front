import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import MatrixDef from '../components/Matrixdefinition'; // Import the new component

const DefinitionMatrixPage = () => {
  return (
    <div>
      <TopBar className="fixed top-0 left-0 right-0 z-10" />
      <div className="flex flex-1 pt-16">   
        <div className="w-1/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5 rounded-md">
          <h2 className="text-3xl font-serif font-extrabold text-center mb-4 relative text-yellow-900">
            MATRIX
            <span className="absolute w-full h-1 bg-gray-600 bottom-0 left-0"></span>
          </h2>
          <ul className="space-y-9">
            <li className="bg-blue-200 p-2 text-blue-600 rounded-md">
              <Link to="/chapter3/Matdefinition">Definition</Link>
            </li>
            <li className="bg-gray-300 p-2 rounded-md">
              <Link to="/chapter3/Elementary">Elementary matrices</Link>
            </li>
            <li className="bg-gray-300 p-2 rounded-md">
              <Link to="/chapter3/Operations">Operations on matrices</Link>
            </li>
            <li className="bg-gray-300 p-2 rounded-md">
              <Link to="/chapter3/MatrixInverse">Matrix inverse</Link>
            </li>
            <li className="bg-yellow-200 text-gray-800 p-2 rounded-md">
              <Link to="/chapter3/Quiz3">Take a quiz about matrix</Link>
            </li>
          </ul>
        </div>

        <div className="w-2/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5 rounded-md">
          <h1 className="text-4xl font-bold font-serif my-3 text-center text-yellow-900">Definition</h1>
          <div className="border border-blue-800 border-solid p-2 mx-auto rounded-md w-full">
            <p className="text-base mb-3 text-center"> {/* Adjusted font size to text-base */}
              A matrix is a rectangular array of numbers, symbols, or expressions arranged in rows and columns. It is typically denoted by an uppercase letter, such as <em>A</em>. The dimensions of a matrix are given by <em>m</em> &times; <em>n</em>, where <em>m</em> is the number of rows and <em>n</em> is the number of columns. Each element of the matrix, denoted by <em>a<sub>ij</sub></em>, represents the entry located at the intersection of the <em>i</em>-th row and the <em>j</em>-th column.
            </p>
          </div>
          <MatrixDef />
        </div>
      </div>
    </div>
  );
};

export default DefinitionMatrixPage;
