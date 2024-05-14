import React from 'react';
import Kernal from '../components/Kernal';
import Image from '../components/Image'
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';

const KernalImg = () => {
  return (
    <div className="h-screen flex flex-col">

    <TopBar />
      <div className="flex flex-1 pt-16">   
    <div className="w-1/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5">
    <ul className="space-y-5">
      <li className="bg-gray-200 ">
        <Link to="/chapter2/definition">Definition</Link>
      </li>
      <li className="bg-gray-300 ">
        <Link to="/chapter2/properties">Properties</Link>
      </li>
      <li className="bg-gray-300 text-blue-400 ">
        <Link to="/chapter2/KernalImg">Image and Kernel</Link>
      </li>
      <li className="bg-gray-300 ">
        <Link to="/chapter2/InjectifSurjectif">Bijectif, Surjectif, Injectif</Link>
      </li>
      <li className="bg-gray-300">
        <Link to="/chapter2/Morphisme">Endomorphism and Isomorphism</Link>
      </li>
      <li className="bg-gray-300">
        <Link to="/chapter2/Quiz">Take a quiz about linear trasformation</Link>
      </li>
      
    </ul>
    </div> 
    <div className="w-2/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5">
      <h1>Linear Transformation</h1>
      <h2>Image and Kernel</h2>
      <h3>Kernal of linear transformation </h3>
      <p>In linear algebra, the kernel (also known as null space) of a linear transformation represents the set of vectors that map to the zero vector in the codomain (red cyrcle ).
          <br/>Let T :V →W be a linear transformation :
          The kernel of T(denoted ker T)  is defined by :
          kerT=[v in V|T(v)=0 ]
         The kernel of T is often called the nullspace of T because it consists of all vectors v in V satisfying the condition that T(v) = 0.
</p>
      <Kernal/>
      <h3>Image of linear transformation </h3>
      <p></p>
      <Image/>


  </div>
  </div>
  </div>
  );
  };
  export default KernalImg;