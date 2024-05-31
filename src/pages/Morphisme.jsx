import React from 'react';
import Automorphisme from '../components/Automorphisme';
import Isomorphisme from '../components/Isomorphisme';
import Endomorphisme from '../components/Endomorphisme';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Chatbox from '../components/ChatBox';

const Morphisme = () => {
  return (
    <div className="h-screen flex flex-col">
      <TopBar />
      <div className="flex flex-1 pt-16">
        <div className="w-1/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5 rounded-md">
          <h2 className="text-3xl font-serif font-extrabold text-center mb-4 relative text-yellow-900">
            LINEAR TRANSFORMATION
            <span className="absolute w-full h-1 bg-gray-600 bottom-0 left-0"></span>
          </h2>
          <ul className="space-y-9">
            <li className="bg-gray-300 p-2 rounded-md flex items-center justify-center text-center">
              <Link to="/chapter2/definition">Definition</Link>
            </li>
            <li className="bg-gray-300 p-2 rounded-md flex items-center justify-center text-center">
              <Link to="/chapter2/properties">Properties</Link>
            </li>
            <li className="bg-gray-300 p-2 rounded-md flex items-center justify-center text-center">
              <Link to="/chapter2/KernalImg">Image and Kernel</Link>
            </li>
            <li className="bg-gray-300 p-2 rounded-md flex items-center justify-center text-center">
              <Link to="/chapter2/InjectifSurjectif">Bijectif, Surjectif, Injectif</Link>
            </li>
            <li className="bg-blue-200 text-blue-600 p-2 rounded-md flex items-center justify-center text-center">
              <Link to="/chapter2/Morphisme">Endomorphism and Isomorphism</Link>
            </li>
            <li className="bg-yellow-200 text-gray-800 p-2 rounded-md flex items-center justify-center text-center">
              <Link to="/chapter2/Quiz">Take a quiz about linear transformation</Link>
            </li>
          </ul>
        </div>
        <div className="w-2/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5">
          <div className="text-2xl kanit-font text-gray-700 mt-4 mb-8">
               In linear transformations, a morphism refers to a structure-preserving map between vector spaces, crucial for understanding how these spaces can be transformed and related.
          </div>


          <div className="mb-8">
            <h3 className="text-2xl poetsen-font mb-4">Endomorphism</h3>
            <p className="text-justify text-gray-700 font-semibold leading-relaxed mb-4">
              A linear transformation is called an endomorphism when it maps a vector space onto itself.
              In other words, it is a linear transformation from a vector space E to itself (E → E).
              In the visualization below, the pink circle represents the domain E,
              the pink circle represents the codomain E, and the blue vector illustrates the linear transformation,
              showing how vectors from the domain are mapped to vectors in the codomain within the same vector space.
            </p>
            <Endomorphisme />
          </div>

          <div className="mb-8">
            <h3 className="text-2xl poetsen-font mb-4">Isomorphism</h3>
            <p className="text-justify text-gray-700 font-semibold leading-relaxed mb-4">
              An isomorphism is a bijective linear transformation between two vector spaces that preserves the structure of the vector space.
              In other words, it is a linear transformation that is both injective and surjective, meaning it is one-to-one and onto.
              In the visualization below, the blue circle represents the domain E, the orange circle represents the codomain F,
              and the vector illustrates the bijective linear transformation, showing how vectors from the domain are mapped to vectors in the codomain
              in a one-to-one and onto manner, preserving the structure of the vector space.
            </p>
            <Isomorphisme />
          </div>

          <div className="mb-8">
            <h3 className="text-2xl poetsen-font mb-4">Automorphism</h3>
            <p className="text-justify text-gray-700 font-semibold leading-relaxed mb-4">
              In mathematics, an automorphism is a bijective (one-to-one and onto) transformation of a mathematical object onto itself.
              In the context of linear algebra, an automorphism refers to a bijective linear transformation of a vector space onto itself.
            </p>
            <Automorphisme />
          </div>
        </div>
      </div>
      <Chatbox />
    </div>
  );
};

export default Morphisme;