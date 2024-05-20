import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';

import computerVision from '../assets/images/computerVision.webp';
import chemistry from '../assets/images/chemistry.webp';
import gps from '../assets/images/gps.png';



const MotivationPage = () => {
  return (
    <div>
      <TopBar />

      <div className="pt-16 mx-12">
        <p className="text-4xl font-medium text-yellow-500 ml-12">Motivation</p>
        
        <span className="text-xl font-medium text-blue-700 ml-12 mt-8">Real-world Use Cases:</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-12 mt-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md border w-full md:w-80 h-96 flex flex-col items-center">
            <img src={computerVision} alt="Vector Spaces" className="w-32 h-32" />
            <span className="text-lg font-medium text-blue-500 mt-4 text-center">Computer Vision</span>
            <p className="text-sm text-gray-700 mt-2 text-center">

              Matrices help describe object positions and movements in images (seen as pixels).
              <br />
              Image projection determines object distance and position.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md border w-full md:w-80 h-96 flex flex-col items-center">
            <img src={chemistry} alt="Linear Transformations" className="w-32 h-32" />
            <span className="text-lg font-medium text-blue-500 mt-4 text-center">Chemistry</span>
            <p className="text-sm text-gray-700 mt-2 text-center">
              It utilizes matrices to organize chemical data and linear transformations to analyze how properties change, enabling chemists to model reactions and understand complex systems more effectively.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md border w-full md:w-80 h-96 flex flex-col items-center">
            <img src={gps} alt="Matrix" className="w-32 h-32" />
            <span className="text-lg font-medium text-blue-500 mt-4 text-center">GPS</span>
            <p className="text-sm text-gray-700 mt-2 text-center">

              GPS systems use linear algebra concepts like matrices and transformations to pinpoint locations accurately. Matrices organize satellite data, while transformations convert signals into precise coordinates, enabling navigation with accuracy.
            </p>
          </div>
        </div>

        <div className="flex justify-end mt-3 mb-3 mr-12">
          <Link to="/GeneralAlgebra">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Go to Chapters
            </button>
          </Link>
        </div>

      </div>
     
    </div>
  );
};

export default MotivationPage;
