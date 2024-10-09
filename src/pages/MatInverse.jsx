import React from 'react';
import MatInverse from '../components/Matrices/MatInverse';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Chatbox from '../components/ChatBox';
import SectionMenu from '../components/SectionMenu';

const MatrixInverse = () => {
  const sections = [
    { name: 'Definition', link: '/chapter3/Matdefinition' },
    { name: 'Elementary matrices', link: '/chapter3/Elementary' },
    { name: 'Operations on matrices', link: '/chapter3/operations' },
    { name: 'Matrix inverse', link: '/chapter3/MatrixInverse' },
    { name: 'Take a quiz about matrix', link: '/chapter3/Quiz3' },
  ];
  return (
    <div className="h-screen flex flex-col  overflow-x-hidden">{/* Added overflow-x-hidden to avoid horizontal scrolling */} 

    <TopBar />
    <div className="flex flex-1 pt-16  "> 
      <SectionMenu chapter="Matrices" sections={sections} />
      <div className="w-full lg:w-2/3 lg:ml-[37%] p-4 lg:my-5 lg:border lg:border-blue-800 lg:shadow-blue-800 rounded-md ">
    
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