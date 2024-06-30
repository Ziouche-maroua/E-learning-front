import React from 'react';
import MatInverse from '../components/Matrices/MatInverse';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Chatbox from '../components/ChatBox';


const MatrixInverse = () => {
  return (
    <div className="h-screen flex flex-col">

    <TopBar />
      <div className="flex flex-1 pt-16">   
    <div className="w-1/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5 rounded-md">
    <h2 className="text-3xl font-serif font-extrabold text-center mb-4 relative text-yellow-900 "style={{color:'var(--section-title)'}}>  MATRIX
            <span className="absolute w-full h-1 bg-gray-600 bottom-0 left-0"></span></h2>
    <ul className="space-y-9">
      <li className="bg-gray-300 text-black p-2 rounded-md flex items-center justify-center text-center">
        <Link to="/chapter3/Matdefinition">Definition</Link>
      </li>
      <li className="bg-gray-300 text-black  p-2  rounded-md flex items-center justify-center text-center">
        <Link to="/chapter3/Elementary">Elementary matrices</Link>
      </li>
      <li className="bg-gray-300 text-black  p-2 rounded-md flex items-center justify-center text-center">
        <Link to="/chapter3/Operations">Operations on matrices</Link>
      </li>
      <li className="bg-blue-200  p-2 text-blue-600 rounded-md flex items-center justify-center text-center">
        <Link to="/chapter3/MatrixInverse">matrix inverse</Link>
      </li>
      
      <li className="bg-yellow-200 text-black p-2 rounded-md flex items-center justify-center text-center">
        <Link to="/chapter3/Quiz3">Take a quiz about matrix</Link>
      </li>
      
    </ul>
  </div>
    <div className="w-2/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5 rounded-md">
    
      <p className="mb-4 font-bold">
        We now define a matrix operation which in some ways plays the role of division. 
        We cannot divide by a matrix, but we can multiply by the inverse of a matrix, 
        which is almost as good.
      </p>
      <div className=" shadow-lg rounded-lg p-8 w-full max-w-4xl mx-auto mt-8 border border-blue-200 inline-block">
        <p>
          Let A and B be n×n matrices. We say that B is an inverse of A if B * A = I and A * B = I.
          If this is the case, we also write B = A<sup>−1</sup>.
          When a matrix has an inverse, it is called invertible.
        </p>
        </div>
        <div className=" shadow-lg rounded-lg p-8 w-full max-w-4xl mx-auto mt-8 border border-blue-200 inline-block">
        <p >
          There are two common methods to calculate the inverse of a matrix: the Adjoint method and Gaussian Elimination. 
          The Adjoint method involves finding the matrix of minors, cofactors, and the adjugate, followed by dividing by the determinant. 
          However, in this section, we will focus on the Gaussian Elimination method, which is a more straightforward and practical approach for larger matrices.
        </p>
      </div>

      
     <MatInverse/>
    </div>
    </div>
    <Chatbox />
    </div>
  );
};

export default MatrixInverse;