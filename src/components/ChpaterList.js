



import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import vectorImage from '../assets/images/vectorSpace.png';
import linearAppImage from '../assets/images/linearApp.png';
import matrixImage from '../assets/images/matrix.png';
import { useEffect } from 'react';


const MotivationPage = () => {
    /* const navigate = useNavigate();
useEffect(()=>{
  if(!localStorage.getItem("student")){
    navigate("/SignUp")
  }
})*/
  return (
    <div>
      <TopBar />
      <div className="pt-16 ml-5 mr-15">
        <p className="text-4xl font-medium text-blue-500 ml-12 mt-16">Motivation</p>
        
        <span className="text-xl font-medium text-blue-700 ml-12 mt-4">Real-world Use Cases:</span>
        <div className="grid grid-cols-3 gap-8 ml-12 mt-8">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md border">
            <img src={vectorImage} alt="Vector Spaces" className="w-24 h-24 mx-auto" />
            <span className="text-lg font-medium text-blue-500 mt-4">Computer Vision</span>
            <p className="text-sm text-gray-700 mt-2">
              Matrices help describe object positions and movements in images (seen as pixels).
              <br />
              Image projection determines object distance and position.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md border">
            <img src={linearAppImage} alt="Linear Transformations" className="w-24 h-24 mx-auto" />
            <span className="text-lg font-medium text-blue-500 mt-4">Chemistry</span>
            <p className="text-sm text-gray-700 mt-2">
              It utilizes matrices to organize chemical data and linear transformations to analyze how properties change, enabling chemists to model reactions and understand complex systems more effectively.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md border">
            <img src={matrixImage} alt="Matrix" className="w-24 h-24 mx-auto" />
            <span className="text-lg font-medium text-blue-500 mt-4">GPS</span>
            <p className="text-sm text-gray-700 mt-2">
              GPS systems use linear algebra concepts like matrices and transformations to pinpoint locations accurately. Matrices organize satellite data, while transformations convert signals into precise coordinates, enabling navigation with accuracy.
            </p>
          </div>
        </div>
        <Link to="/GeneralAlgebra">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-8 ml-12">
            Go to Chapters
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MotivationPage;
s

