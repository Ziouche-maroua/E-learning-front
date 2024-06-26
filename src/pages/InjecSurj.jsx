import React from 'react';
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Bijective from '../components/Bijective';
import Injectif from '../components/InjectifTransformation';
import Surjectif from '../components/SurjectifTransformation';
import Chatbox from '../components/ChatBox'; 

const InjecSurj = () => {
  const [showSections, setShowSections] = useState(false);

  const toggleSections = () => {
    setShowSections(!showSections);
  };
  return (
    <div className="h-screen flex flex-col">

    <TopBar />
      <div className="flex flex-1 pt-16">   
      <div className={`fixed top-16 left-0 w-full lg:w-1/3 p-4 lg:ml-4 my-5 border border-blue-800 shadow-blue-800 rounded-md  ${showSections ? '' : 'hidden lg:block'}`}>
      <h2 className="text-3xl font-serif font-extrabold text-center mb-4 relative" style={{color:'var(--section-title)'}}> LINEAR TRANSFORMATION
            <span className="absolute w-full h-1 bg-gray-600 bottom-0 left-0"></span></h2>
    <ul className="space-y-8">
      <li className="  bg-gray-300  p-2  text-black  rounded-md flex items-center justify-center text-center">
        <Link to="/chapter2/definition">Definition</Link>
      </li>
      <li className=" bg-gray-300 p-2  text-black rounded-md flex items-center justify-center text-center">
        <Link to="/chapter2/properties">Properties</Link>
      </li>
      <li className="bg-gray-300 p-2 text-black rounded-md flex items-center justify-center text-center">
        <Link to="/chapter2/KernalImg">Image and Kernel</Link>
      </li>
      <li className="bg-blue-200  text-blue-600 p-2 rounded-md flex items-center justify-center text-center">
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
      
    <div className="text-2xl kanit-font   mt-4 mb-8">
            Understanding injective, surjective, and bijective linear transformations is key to grasping the relationships between different vector spaces and how these spaces can be mapped onto each other
    </div>

    <div className="mb-8">
            <h3 className="text-2xl poetsen-font mb-4">Injective Transformation</h3>
            <p className="text-justify  leading-relaxed mb-8 font-semibold">
              An injective (or one-to-one) linear transformation maps distinct vectors in the domain to distinct vectors in the codomain. This means that no two different vectors in the domain are mapped to the same vector in the codomain. 
              In the visualization below, the vectors from the domain are uniquely mapped to the codomain, ensuring a one-to-one relationship.
            </p>
            <Injectif />
          </div>

          <div className="mb-8">
            <h3 className="text-2xl poetsen-font mb-4">Surjective Transformation</h3>
            <p className="text-justify  leading-relaxed mb-8 font-semibold">
              A surjective (or onto) linear transformation maps the domain onto the entire codomain, meaning every vector in the codomain is an image of at least one vector in the domain. 
              This ensures that the transformation covers the entire codomain. 
              In the visualization below, you can see how the transformation ensures that every vector in the codomain is reached.
            </p>
            <Surjectif />
          </div>

          <div className="mb-8">
            <h3 className="text-2xl poetsen-font mb-4">Bijective Transformation</h3>
            <p className="text-justify  leading-relaxed mb-8 font-semibold">
              A bijective linear transformation is both injective and surjective, meaning it is a one-to-one correspondence between the domain and the codomain. 
              Every vector in the domain maps to a unique vector in the codomain, and every vector in the codomain is mapped from a unique vector in the domain. 
              This makes the transformation invertible. In the visualization below, observe how the bijective transformation maintains this one-to-one and onto relationship.
            </p>
            <Bijective />
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
  <Chatbox/>
  </div>
  );
  };
  export default InjecSurj;