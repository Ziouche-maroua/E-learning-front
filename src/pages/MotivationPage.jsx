import computerVision from "../assets/images/computerVision.webp";
import chemistry from "../assets/images/chemistry.webp";
import gps from "../assets/images/gps.png";
import React, { useState } from "react";
import axios from "axios";
import TopBar from "../components/TopBar";
import vectorImage from "../assets/images/vectorSpace.png";
import linearAppImage from "../assets/images/linearApp.png";
import matrixImage from "../assets/images/matrix.png";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import "../index.css";

const MotivationPage = () => {
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const id = query.get("id");
  
  const handleGoToChapters = async () => {
    try {
      const token = Cookies.get("token");

      if (token) {
        navigate("/GeneralAlgebra?id=" + id);
      } else {
        Cookies.set("redirectAfterSignup", "/GeneralAlgebra?id=" + id);
        toast.error("You must register first !");
        console.log(token);
        return navigate("/signup");
      }
    } catch (error) {
      console.error("Erreur lors de la vérification du sign up:", error);
      toast.error(
        "Une erreur s'est produite lors de la vérification du sign up. Veuillez réessayer plus tard."
      );
    }
  };

  return (
    <div>
      <TopBar />

      <div className="pt-16 mx-12 flex flex-col items-center">
        <p className="text-4xl poetsen-font text-blue-300 mb-4">Motivation</p>
        
        <span className="text-2xl poetsen-font text-blue-700 mt-4 mb-6">
          Real-world Use Cases
        </span>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md border w-full md:w-80 h-96 flex flex-col items-center">
            <img
              src={computerVision}
              alt="Vector Spaces"
              className="w-32 h-32"
            />
            <span className="text-lg font-semibold text-blue-500 mt-4 text-center">
              Computer Vision
            </span>
            <p className="text-sm text-gray-700 mt-2 text-center leading-relaxed">
              Matrices help describe object positions and movements in images
              (seen as pixels).
              <br />
              Image projection determines object distance and position.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md border w-full md:w-80 h-96 flex flex-col items-center">
            <img
              src={chemistry}
              alt="Linear Transformations"
              className="w-32 h-32"
            />
            <span className="text-lg font-semibold text-blue-500 mt-4 text-center">
              Chemistry
            </span>
            <p className="text-sm text-gray-700 mt-2 text-center leading-relaxed">
              It utilizes matrices to organize chemical data and linear
              transformations to analyze how properties change, enabling
              chemists to model reactions and understand complex systems more
              effectively.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md border w-full md:w-80 h-96 flex flex-col items-center">
            <img src={gps} alt="Matrix" className="w-32 h-32" />
            <span className="text-lg font-semibold text-blue-500 mt-4 text-center">
              GPS
            </span>
            <p className="text-sm text-gray-700 mt-2 text-center leading-relaxed">
              GPS systems use linear algebra concepts like matrices and
              transformations to pinpoint locations accurately. Matrices
              organize satellite data, while transformations convert signals
              into precise coordinates, enabling navigation with accuracy.
            </p>
          </div>
        </div>

        {/* Bouton "Go to chapters" */}
        <div className="flex justify-end mt-4 mb-3 w-full">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 text-lg rounded-full"
            onClick={handleGoToChapters}
          >
            Go to Chapters
          </button>
        </div>
      </div>
    </div>
  );
};

export default MotivationPage;
