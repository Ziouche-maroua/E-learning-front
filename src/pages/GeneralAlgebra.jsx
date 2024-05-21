import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import vectorImage from '../assets/images/vectorSpace.png';
import linearAppImage from '../assets/images/linearApp.png';
import matrixImage from '../assets/images/matrix.png';
import { useState ,useEffect } from 'react'; 
import  axios from 'axios';
import Cookies from "js-cookie";


function GeneralAlgebra() {
  const [chapters,setChapters]=useState([]);
  const [loadingChapters,setLoadingChapters]=useState(false);

  
  const fetchChapters = async () => {
    try {
      setLoadingChapters(true);
      const response = await axios.get("http://localhost:3001/api/chapters", {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`, // Replace with your actual token
          "Content-Type": "application/json",
          // Add other headers as needed
        },
      });

      setChapters(response.data);
      console.log(response);
    } catch (error) {
      console.error("Erreur lors de la récupération des informations utilisateur:", error);
    } finally {
      setLoadingChapters(false);
      console.log(chapters);
    }
  };

  // Call the fetchModules function when the component mounts
  useEffect(() => {
   
    fetchChapters(); // Fetch chapters when the component mounts
  }, []);
  
  
  
  
  
  
  
  
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
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">10 Lessons</button>
            <Link to="/chapter1" className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">View</Link>
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
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">8 Lessons</button>
            <Link to="/chapter2" className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">View</Link>
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
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">12 Lessons</button>
            <Link to="/chapter3" className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">View</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default GeneralAlgebra