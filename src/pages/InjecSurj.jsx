import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Bijective from '../components/Bijective';
import Injectif from '../components/InjectifTransformation';
import Surjectif from '../components/SurjectifTransformation';
import Chatbox from '../components/ChatBox'; 

const InjecSurj = () => {
  return (
    <div className="h-screen flex flex-col">

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
      <li className="bg-gray-300 p-2 rounded-md">
        <Link to="/chapter2/KernalImg">Image and Kernel</Link>
      </li>
      <li className="bg-blue-200  text-blue-600 p-2 rounded-md">
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
    <div className="w-2/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5">
      
    <div className="text-2xl font-bold text-blue-300 mb-4">
            Understanding injective, surjective, and bijective linear transformations is key to grasping the relationships between different vector spaces and how these spaces can be mapped onto each other.
    </div>

    <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">Injective Transformation</h3>
            <p className="text-justify text-gray-700 leading-relaxed mb-4">
              An injective (or one-to-one) linear transformation maps distinct vectors in the domain to distinct vectors in the codomain. This means that no two different vectors in the domain are mapped to the same vector in the codomain. 
              In the visualization below, the vectors from the domain are uniquely mapped to the codomain, ensuring a one-to-one relationship.
            </p>
            <Injectif />
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">Surjective Transformation</h3>
            <p className="text-justify text-gray-700 leading-relaxed mb-4">
              A surjective (or onto) linear transformation maps the domain onto the entire codomain, meaning every vector in the codomain is an image of at least one vector in the domain. 
              This ensures that the transformation covers the entire codomain. 
              In the visualization below, you can see how the transformation ensures that every vector in the codomain is reached.
            </p>
            <Surjectif />
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">Bijective Transformation</h3>
            <p className="text-justify text-gray-700 leading-relaxed mb-4">
              A bijective linear transformation is both injective and surjective, meaning it is a one-to-one correspondence between the domain and the codomain. 
              Every vector in the domain maps to a unique vector in the codomain, and every vector in the codomain is mapped from a unique vector in the domain. 
              This makes the transformation invertible. In the visualization below, observe how the bijective transformation maintains this one-to-one and onto relationship.
            </p>
            <Bijective />
          </div>
        

  </div>
  </div>
  <Chatbox/>
  </div>
  );
  };
  export default InjecSurj;