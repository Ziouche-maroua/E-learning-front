import React from 'react';
import AppProps from '../components/PropsOfLinearTransformation';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';

const AppProperties = () => {
  return (
    <div className="h-screen flex flex-col">

    <TopBar />
      <div className="flex flex-1 pt-16">   
    <div className="w-1/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5">
    <ul className="space-y-5">
      <li className="bg-gray-200 ">
        <Link to="/chapter2/definition">Definition</Link>
      </li>
      <li className="bg-gray-300 text-blue-400">
        <Link to="/chapter2/properties">Properties</Link>
      </li>
      <li className="bg-gray-300">
        <Link to="/chapter2/Properties">Image and Kernel</Link>
      </li>
      <li className="bg-gray-300">
        <Link to="/chapter2/InjectifSurjectif">Bijectif, Surjectif, Injectif</Link>
      </li>
      <li className="bg-gray-300">
        <Link to="/chapter2/InjectifSurjectif">Endomorphism and Isomorphism</Link>
      </li>
      
    </ul>
  </div>
    <div className="w-2/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5">
      <h1>Linear Transformation</h1>
      <h2>Properties</h2>
      <p>
      A linear transformation between two vector spaces and is a map such that the following hold: 
      </p>
      <span>Let T:U to V the linear transfomation u in U and v in V and let a scaller c in R, we have : </span>
        <h1>T(u+v)=T(u)+T(v)</h1>
        <h1>T(c*u)=c * T(u)</h1>

      <AppProps/>
      
     
    </div>
    </div>
    </div>
  );
};

export default AppProperties;
