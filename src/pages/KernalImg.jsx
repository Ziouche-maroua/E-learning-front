import React from 'react';
import Kernel from '../components/Kernal';
import Image from '../components/Image';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Chatbox from '../components/ChatBox';

const KernelImg = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <TopBar />
      <div className="flex flex-1 pt-16">
      <div className="w-1/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5 rounded-md">
    <h2 className="text-3xl font-serif font-extrabold text-center mb-4 relative text-yellow-900 ">  LINEAR TRANSFORMATION
            <span className="absolute w-full h-1 bg-gray-600 bottom-0 left-0"></span></h2>
    <ul className="space-y-9">
      <li className="  bg-gray-300  p-2   rounded-md">
        <Link to="/chapter2/definition">Definition</Link>
      </li>
      <li className=" bg-gray-300 p-2  rounded-md">
        <Link to="/chapter2/properties">Properties</Link>
      </li>
      <li className=" bg-blue-200  text-blue-600 p-2 rounded-md">
        <Link to="/chapter2/KernalImg">Image and Kernel</Link>
      </li>
      <li className="bg-gray-300  p-2 rounded-md">
        <Link to="/chapter2/InjectifSurjectif">Bijectif, Surjectif, Injectif</Link>
      </li>
      <li className="bg-gray-300  p-2 rounded-md">
        <Link to="/chapter2/Morphisme">Endomorphism and Isomorphism</Link>
      </li>
      <li className="bg-yellow-200 text-gray-800 p-2 rounded-md">
        <Link to="/chapter2/Quiz">Take a quiz about linear transformation</Link>
      </li>
      
    </ul>
    </div> 
        <div className="w-2/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5 bg-white">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">Kernel of Linear Transformation</h3>
            <p className="text-gray-700 mb-4">
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
            <h3 className="text-2xl font-semibold mb-2">Image of Linear Transformation</h3>
            <p className="text-gray-700 mb-4">
              In linear algebra, the image of a linear transformation is the set of all vectors that can be obtained by applying the transformation to the vectors in the domain. It represents the range of the transformation.
            </p>
            <Image />
          </div>
        </div>
      </div>
      <Chatbox />
    </div>
  );
};

export default KernelImg;
