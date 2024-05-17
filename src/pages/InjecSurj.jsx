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
    <div className="w-1/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5">
    <ul className="space-y-5">
      <li className="bg-gray-200 ">
        <Link to="/chapter2/definition">Definition</Link>
      </li>
      <li className="bg-gray-300 ">
        <Link to="/chapter2/properties">Properties</Link>
      </li>
      <li className="bg-gray-300">
        <Link to="/chapter2/Properties">Image and Kernel</Link>
      </li>
      <li className="bg-gray-300 text-blue-400">
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
      <h2>Bijectif, Surjectif, Injectif</h2>
      <h3>Bijectif :</h3>
      <p>this </p>
      <Bijective/>
      <h3>Injective :</h3>
      <p>thos </p>
      <Injectif/>
      <h3>Surjective</h3>
      <p>whome </p>
      <Surjectif/>

  </div>
  </div>
  </div>
  );
  };
  export default InjecSurj;