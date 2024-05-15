import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import vectorImage from '../assets/images/vectorSpace.png';
import linearAppImage from '../assets/images/linearApp.png';
import matrixImage from '../assets/images/matrix.png';

function GeneralAlgebra() {
  return (
    <div>
    <TopBar />
    
    <div className="container mx-auto px-4 pt-10">
      <h1 className="text-4xl font-bold my-8">Explore Linear Algebra Visually</h1>
      <p className="text-lg mb-8">There are 3 chapters in Linear Algebra</p>
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md border">
          <img
            src={vectorImage}
            alt="Vector Spaces"
            className="w-24 h-24 mx-auto"
          />
          <p className="text-xl font-semibold my-4">Vector Spaces</p>
          <div className="flex justify-between items-center">
            <button className=" text-black px-4 py-2 rounded-lg">10 Lessons</button>
            <Link to="/chapter1" className="bg-blue-400 text-gray-900 px-4 py-2 rounded-lg">View</Link>
          </div>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md border">
          <img
            src={linearAppImage}
            alt="Linear Transformations"
            className="w-24 h-24 mx-auto"
          />
          <p className="text-xl font-semibold my-4">Linear Transformations</p>
          <div className="flex justify-between items-center">
            <button className=" text-black px-4 py-2 rounded-lg">8 Lessons</button>
            <Link to="/chapter2" className="bg-blue-400 text-gray-900 px-4 py-2 rounded-lg">View</Link>
          </div>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md border">
          <img
            src={matrixImage}
            alt="Matrix"
            className="w-24 h-24 mx-auto"
          />
          <p className="text-xl font-semibold my-4">Matrix</p>
          <div className="flex justify-between items-center">
            <button className=" text-black px-4 py-2 rounded-lg">12 Lessons</button>
            <Link to="/chapter3" className="bg-blue-400 text-gray-900 px-4 py-2 rounded-lg">View</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default GeneralAlgebra