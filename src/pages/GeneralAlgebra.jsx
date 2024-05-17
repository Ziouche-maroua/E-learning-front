import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import vectorImage from '../assets/images/vectorSpace.png';
import linearAppImage from '../assets/images/linearApp.png';
import matrixImage from '../assets/images/matrix.png';

function GeneralAlgebra() {
  return (
    <div>

      <TopBar className="fixed top-0 left-0 right-0 z-10" />
      <div className="container mx-auto px-4 pt-16 lg:pt-24">
        <h1 className="text-4xl font-bold my-8">Explore Linear Algebra Visually</h1>
        <p className="text-lg mb-8">There are 3 chapters in Linear Algebra</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-12 rounded-lg shadow-md border relative">
            <img
              src={vectorImage}
              alt="Vector Spaces"
              className="w-24 h-24 mx-auto"
            />
            <p className="text-xl font-semibold mt-4">Vector Spaces</p>
            <div className="absolute bottom-0 right-0 mb-4 mr-4">
              <Link to="/chapter1" className="bg-blue-100 text-blue-500 px-4 py-2 rounded-lg">View</Link>
            </div>
          </div>
          <div className="bg-gray-100 p-12 rounded-lg shadow-md border relative">
            <img
              src={linearAppImage}
              alt="Linear Transformations"
              className="w-24 h-24 mx-auto"
            />
            <p className="text-xl font-semibold mt-4">Linear Transformations</p>
            <div className="absolute bottom-0 right-0 mb-4 mr-4">
              <Link to="/chapter2" className="bg-blue-100 text-blue-500 px-4 py-2 rounded-lg">View</Link>
            </div>
          </div>
          <div className="bg-gray-100 p-12 rounded-lg shadow-md border relative">
            <img
              src={matrixImage}
              alt="Matrix"
              className="w-24 h-24 mx-auto"
            />
            <p className="text-xl font-semibold mt-4">Matrix</p>
            <div className="absolute bottom-0 right-0 mb-4 mr-4">
              <Link to="/chapter3" className="bg-blue-100 text-blue-500 px-4 py-2 rounded-lg">View</Link>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
}

export default GeneralAlgebra;

