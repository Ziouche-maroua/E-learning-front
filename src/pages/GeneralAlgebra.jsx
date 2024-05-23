import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import vectorImage from '../assets/images/vectorSpace.png';
import linearAppImage from '../assets/images/linearApp.png';
import matrixImage from '../assets/images/matrix.png';
import Chatbox from '../components/ChatBox';

function GeneralAlgebra() {
  return (
    <div>
      <TopBar className="fixed top-0 left-0 right-0 z-10" />
      <div className="container mx-auto px-4 pt-12 lg:pt-16">
        <h1 className="text-4xl font-bold my-4 text-center lg:text-left text-blue-300">Explore Linear Algebra Visually</h1>
        <p className="text-lg mb-4 text-center lg:text-left text-black">There are 3 chapters in Linear Algebra</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md border w-full h-96 flex flex-col items-center justify-between">
            <div className="flex flex-col items-center">
              <img
                src={vectorImage}
                alt="Vector Spaces"
                className="w-32 h-32 mx-auto"
              />
              <span className="text-lg font-medium text-blue-500 mt-4 text-center">Vector Spaces</span>
              <p className="text-sm text-gray-700 mt-2 text-center">
                Explore the structure and operations of vector spaces.
              </p>
            </div>
            <div className="mb-4">
              <Link to="/chapter1" className="bg-blue-100 text-blue-500 px-4 py-2 rounded-lg">View</Link>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md border w-full h-96 flex flex-col items-center justify-between">
            <div className="flex flex-col items-center">
              <img
                src={linearAppImage}
                alt="Linear Transformations"
                className="w-32 h-32 mx-auto"
              />
              <span className="text-lg font-medium text-blue-500 mt-4 text-center">Linear Transformations</span>
              <p className="text-sm text-gray-700 mt-2 text-center">
                Understand how linear maps transform vector spaces.
              </p>
            </div>
            <div className="mb-4">
              <Link to="/chapter2" className="bg-blue-100 text-blue-500 px-4 py-2 rounded-lg">View</Link>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md border w-full h-96 flex flex-col items-center justify-between">
            <div className="flex flex-col items-center">
              <img
                src={matrixImage}
                alt="Matrix"
                className="w-32 h-32 mx-auto"
              />
              <span className="text-lg font-medium text-blue-500 mt-4 text-center">Matrix</span>
              <p className="text-sm text-gray-500 mt-2 text-center">
              In the realm of linear algebra, matrices serve as powerful tools for solving systems of equations, representing transformations, and much more.
              </p>
            </div>
            <div className="mb-4">
              <Link to="/chapter3" className="bg-blue-100 text-blue-500 px-4 py-2 rounded-lg">View</Link>
            </div>
          </div>
        </div>
      </div>
      <Chatbox />
    </div>
  );
}

export default GeneralAlgebra;
