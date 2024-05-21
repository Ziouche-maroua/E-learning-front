import React from 'react';

import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';


const Matrixdef = () => {
  return (
    <div className="h-screen flex flex-col">

    <TopBar />
      <div className="flex flex-1 pt-16">   
    <div className="w-1/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5 rounded-md">
    <h2 className="text-3xl font-serif font-extrabold text-center mb-4 relative text-purple-900 ">  ALGEBRA
            <span className="absolute w-full h-1 bg-gray-600 bottom-0 left-0"></span></h2>
    <ul className="space-y-9">
      <li className=" bg-blue-200   p-2  text-blue-600 rounded-md">
        <Link to="/chapter3/Matdefinition">Definition</Link>
      </li>
      <li className="bg-gray-300  p-2  rounded-md">
        <Link to="/chapter3/Elementary">Elementary matrices</Link>
      </li>
      <li className="bg-gray-300 p-2 rounded-md">
        <Link to="/chapter3/Operations">Operations on matrices</Link>
      </li>
      <li className="bg-gray-300  p-2 rounded-md">
        <Link to="/chapter3/MatrixInverse">matrix inverse</Link>
      </li>
      
      <li className="bg-yellow-200 text-gray-800 p-2 rounded-md">
        <Link to="/chapter3/Quiz3">Take a quiz about matrix</Link>
      </li>
      
    </ul>
  </div>
    <div className="w-2/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5 rounded-md">
    <h1 className="text-center text-3xl font-bold mb-4">Matrices</h1>
      <h2 className="text-2xl font-semibold mb-4">Definition</h2>
      <div className="text-center m-5">
            
            <p className="mb-4">
                Matrices are fundamental mathematical objects used to represent data and relationships between entities. In the realm of linear algebra, matrices serve as powerful tools for solving systems of equations, representing transformations, and much more.
            </p>
            <div className="border-2 border-blue-500 p-4 inline-block">
                <p>
                A matrix is typically denoted by an uppercase letter, with its elements arranged in rows and columns. For instance, consider a matrix \( A \) with dimensions \( m \times n \), where \( m \) represents the number of rows and \( n \) represents the number of columns. Each element of the matrix, denoted by \( a_ij \), corresponds to the entry in the \( i \)th row and \( j \)th column.
                </p>
            </div>
            <div className="border-2 border-blue-500 mt-4 p-4 inline-block">
                <p>
                Visualizing matrices can aid in understanding their structure and operations. By representing matrices as grids of numbers, it becomes easier to grasp their properties and relationships. In the following visualization, we'll demonstrate how matrices can be displayed in a tabular format using React components.
                </p>
            </div>
  
       </div>

      
     
    </div>
    </div>
    </div>
  );
};

export default Matrixdef;