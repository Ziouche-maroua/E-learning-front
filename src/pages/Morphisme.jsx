import React from 'react';
import Automorphisme from '../components/Automorphisme';
import Isomorphisme from '../components/Isomorphisme';
import Endomorphisme from '../components/Endomorphisme'
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Chatbox from '../components/ChatBox';
const Morphisme = () => {
  return (
    <div className="h-screen flex flex-col">

    <TopBar />
      <div className="flex flex-1 pt-16">   
      <div className="w-1/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5 rounded-md">
    <h2 className="text-3xl font-serif font-extrabold text-center mb-4 relative text-purple-900 ">  ALGEBRA
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
      <li className="bg-gray-300  p-2 rounded-md">
        <Link to="/chapter2/InjectifSurjectif">Bijectif, Surjectif, Injectif</Link>
      </li>
      <li className="bg-blue-200  text-blue-600  p-2 rounded-md">
        <Link to="/chapter2/Morphisme">Endomorphism and Isomorphism</Link>
      </li>
      <li className="bg-yellow-200 text-gray-800 p-2 rounded-md">
        <Link to="/chapter2/Quiz">Take a quiz about linear transformation</Link>
      </li>
      
    </ul>
    </div> 
    <div className="w-2/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5">
      <h1>Linear Transformation</h1>
      <h2>Endomorphisme and Isomorphisme</h2>
      <Endomorphisme/>
      <p>A linear transformation is called an endomorphism when it maps a vector space onto itself.
         In other words, it is a linear transformation from a vector space E to itself (E → E). 
         In the visualization below, the pink circle represents the domain E,
          the pink circle represents the codomain E, and the blue vector illustrates the linear transformation,
           showing how vectors from the domain are mapped to vectors in the codomain within the same vector space</p>
           <Isomorphisme/>
      <p>An isomorphism is a bijective linear transformation between two vector spaces that preserves the structure of the vector space. In other words, it is a linear transformation that is both injective and surjective, meaning it is one-to-one and onto. In the visualization below, the blue circle represents the domain E, the orange circle represents the codomain F
        , and the vector illustrates the bijective linear transformation, showing how vectors from the domain are mapped to vectors in the codomain in a one-to-one and onto manner, preserving the structure of the vector space</p>
        <Automorphisme/>
      
       <p>In mathematics, an automorphism is a bijective (one-to-one and onto) transformation of a mathematical object onto itself. In the context of linear algebra, an automorphism refers to a bijective linear transformation of a vector space onto itself.</p>


      </div>
      </div>
      <Chatbox/>
      </div>
  );
};
export default Morphisme;