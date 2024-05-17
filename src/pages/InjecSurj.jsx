import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Bijective from '../components/Bijective';
import Injectif from '../components/InjectifTransformation';
import Surjectif from '../components/SurjectifTransformation';

const InjecSurj = () => {
  return (
    <div className="h-screen flex flex-col">

    <TopBar />
      <div className="flex flex-1 pt-16">   
    <div className="w-1/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5 rounded-md ">
    <h2 className="text-3xl font-serif font-extrabold text-center mb-4 relative text-purple-900 "> ALGEBRA
            <span className="absolute w-full h-1 bg-gray-600 bottom-0 left-0"></span></h2>
    <ul className="space-y-9">
      <li className="bg-gray-200 p-2 rounded-md ">
        <Link to="/chapter2/definition">Definition</Link>
      </li>
      <li className="bg-gray-300 p-2  rounded-md">
        <Link to="/chapter2/properties">Properties</Link>
      </li>
      <li className="bg-gray-300 p-2 rounded-md ">
        <Link to="/chapter2/KernalImg">Image and Kernel</Link>
      </li>
      <li className="bg-blue-200 text-blue-600 p-2 rounded-md">
        <Link to="/chapter2/InjectifSurjectif">Bijectif, Surjectif, Injectif</Link>
      </li>
      <li className="bg-gray-300 p-2 rounded-md ">
        <Link to="/chapter2/Morphisme">Endomorphism and Isomorphism</Link>
      </li>
      <li className="bg-yellow-200 text-gray-800 p-2 rounded-md ">
        <Link to="/chapter2/Quiz">Take a quiz about linear trasformation</Link>
      </li>
      
    </ul>
    </div> 
    <div className="w-2/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5 rounded-md ">
      <h1>Linear Transformation</h1>
      <h2>Bijectif, Surjectif, Injectif</h2>
      <h3>Bijectif :</h3>
      <p> </p>
      <Bijective/>
      <h3>Injective :</h3>
      <p></p>
      <Injectif/>
      <h3>Surjective</h3>
      <p>Given two sets X and Y, a binary relation
     f between X and Y is a function (from X to Y) if for every element  x in X there is exactly one y in Y such that f relates x to y.
      The sets Xand Y are called the domain and codomain of f, respectively. 
      The image of the function f is the subset of Y consisting of only those elements y of Y such that there is at least one x in X with f(x) = y. </p>
      <Surjectif/>

  </div>
  </div>
  </div>
  );
  };
  export default InjecSurj;