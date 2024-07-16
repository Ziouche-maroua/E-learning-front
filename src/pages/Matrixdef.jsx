import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import MatrixDef from '../components/Matrices/Matrixdefinition'; // Import the new component
import Chatbox from '../components/ChatBox';
import SectionMenu from '../components/SectionMenu';
const DefinitionMatrixPage = () => {
  const sections = [
    { name: 'Definition', link: '/chapter3/Matdefinition' },
    { name: 'Elementary matrices', link: '/chapter3/Elementary' },
    { name: 'Operations on matrices', link: '/chapter3/operations' },
    { name: 'Matrix inverse', link: '/chapter3/MatrixInverse' },
    { name: 'Take a quiz about matrix', link: '/chapter3/Quiz3' },
  ];
  return (
    <div className="h-screen flex flex-col  overflow-x-hidden">{/* Added overflow-x-hidden to avoid horizontal scrolling */}
      <TopBar className="fixed top-0 left-0 right-0 z-10" />
      <div className="flex flex-1 pt-16  ">    
      <SectionMenu chapter="matrices" sections={sections} />
      <div className="w-full lg:w-2/3 lg:ml-[37%] p-4 lg:my-5 lg:border lg:border-blue-800 lg:shadow-blue-800 rounded-md ">
          <h1 className="text-4xl font-bold font-serif my-3 text-center ">Definition</h1>
          <div className="border border-blue-800 border-solid p-2 mx-auto rounded-md w-full">
            <p className="text-base mb-3 text-center"> {/* Adjusted font size to text-base */}
              A matrix is a rectangular array of numbers, symbols, or expressions arranged in rows and columns. It is typically denoted by an uppercase letter, such as <em>A</em>. The dimensions of a matrix are given by <em>m</em> &times; <em>n</em>, where <em>m</em> is the number of rows and <em>n</em> is the number of columns. Each element of the matrix, denoted by <em>a<sub>ij</sub></em>, represents the entry located at the intersection of the <em>i</em>-th row and the <em>j</em>-th column.
            </p>
          </div>
          <MatrixDef />
        </div>
      </div>
      <Chatbox />
    </div>
  );
};

export default DefinitionMatrixPage;