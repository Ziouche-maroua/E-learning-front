import React from 'react';
import  { useState } from 'react';
import Kernel from '../components/LinearTransformation/Kernal';
import Image from '../components/LinearTransformation/Image';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Chatbox from '../components/ChatBox';

const KernelImg = () => {
  const [showSections, setShowSections] = useState(false);

  const toggleSections = () => {
    setShowSections(!showSections);
  };
  return (
    <div className="h-screen flex flex-col ">
      <TopBar />
      <div className="flex flex-1 pt-16">
      <div className={`fixed top-16 left-0 w-full lg:w-1/3 p-4 lg:ml-4 my-5 border border-blue-800 shadow-blue-800 rounded-md  ${showSections ? '' : 'hidden lg:block'}`}>
      <h2 className="text-3xl font-serif font-extrabold text-center mb-4 relative" style={{color:'var(--section-title)'}}>  LINEAR TRANSFORMATION
            <span className="absolute w-full h-1 bg-gray-600 bottom-0 left-0"></span></h2>
    <ul className="space-y-8">
      <li className="  bg-gray-300  p-2   text-black rounded-md flex items-center justify-center text-center">
        <Link to="/chapter2/definition">Definition</Link>
      </li>
      <li className=" bg-gray-300 p-2  text-black rounded-md flex items-center justify-center text-center">
        <Link to="/chapter2/properties">Properties</Link>
      </li>
      <li className=" bg-blue-200  text-blue-600 p-2 rounded-md flex items-center justify-center text-center">
        <Link to="/chapter2/KernalImg">Image and Kernel</Link>
      </li>
      <li className="bg-gray-300  p-2  text-black rounded-md flex items-center justify-center text-center">
        <Link to="/chapter2/InjectifSurjectif">Bijectif, Surjectif, Injectif</Link>
      </li>
      <li className="bg-gray-300  p-2 text-black rounded-md flex items-center justify-center text-center">
        <Link to="/chapter2/Morphisme">Endomorphism and Isomorphism</Link>
      </li>
      <li className="bg-yellow-200 text-black  p-2 rounded-md flex items-center justify-center text-center">
        <Link to="/chapter2/Quiz">Take a quiz about linear transformation</Link>
      </li>
      
    </ul>
    </div> 
    <div className="w-full lg:w-2/3 p-4 mx-4 my-5 lg:ml-[36%] border border-blue-800 shadow-blue-800 rounded-md"> 
          <div className="mb-8">
            <h3 className="text-2xl poetsen-font mt-4 mb-8">Kernel of Linear Transformation</h3>
            <p className=" mb-4 font-semibold">
              In linear algebra, the kernel (also known as null space) of a linear transformation represents the set of vectors that map to the zero vector in the codomain (red circle).
              <br />
              Let T : V → W be a linear transformation:
              <br />
              The kernel of T (denoted ker T) is defined by:
              <br />
              ker T = [v in V | T(v) = 0]
              <br />
              The kernel of T is often called the nullspace of T because it consists of all vectors v in V satisfying the condition that T(v) = 0.
            </p>
            <Kernel />
          </div>
          <div className="mb-8">
            <h3 className="text-2xl poetsen-font mt-4 mb-10">Image of Linear Transformation</h3>
            <p className=" mb-4 font-semibold">
              In linear algebra, the image of a linear transformation is the set of all vectors that can be obtained by applying the transformation to the vectors in the domain. It represents the range of the transformation.
            </p>
            <Image />
          </div>
        </div>
      </div>
      <div className="fixed bottom-16 right-4 lg:hidden">
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded-md shadow-md"
          onClick={toggleSections}
        >
          {showSections ? 'Hide Sections' : 'Show Sections'}
        </button>
      </div>
      <Chatbox />
    </div>
  );
};

export default KernelImg;