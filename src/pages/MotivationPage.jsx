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

const MotivationPage = () => {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const id = query.get("id");
  // Gérer le clic sur le bouton "Go to chapters"
  // Vous pouvez ajouter ici le comportement souhaité lorsque l'utilisateur clique sur le bouton.
  const handleGoToChapters = async () => {
    try {
      // Vérifier si l'utilisateur a déjà effectué le sign up
      const token = Cookies.get("token");

      if (token) {
        // L'utilisateur a déjà effectué le sign up, rediriger vers la page des chapitres
        navigate("/GeneralAlgebra");
      } else {
        // Afficher une fenêtre modale demandant à l'utilisateur de s'inscrire d'abord
        toast.error("Vous devez d'abord vous inscrire !");
        console.log(token);
        // Rediriger vers la page de sign up
        return navigate("/signup");
      }
    } catch (error) {
      console.error("Erreur lors de la vérification du sign up:", error);
      // Afficher un message d'erreur à l'utilisateur
      toast.error(
        "Une erreur s'est produite lors de la vérification du sign up. Veuillez réessayer plus tard."
      );
    }
  };

  useEffect(() => {
    // Function to fetch modules information from the backend
    const fetch = async () => {
      try {
        setLoading(true);
        // Send HTTP GET request to the backend to retrieve modules information
        const response = await axios.get(
          `http://localhost:3001/api/modules/${id}/chapters`,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`, // Replace with your actual token
              "Content-Type": "application/json",
              // Add other headers as needed
            },
          }
        );

        // Update the state with the retrieved data
        await setChapters(response.data);
        console.log(response);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des informations utilisateur:",
          error
        );
      } finally {
        // Set loading to false after data is fetched or an error occurs
        setLoading(false);
        console.log(chapters);
      }
    };

    // Call the function to fetch modules information when the component mounts
    fetch();
  }, []);
  return (
    <div>
      <TopBar />
      <div className="pt-16 ml-5 mr-15">
        <p className="text-4xl font-medium text-blue-500 ml-12 mt-16">
          Motivation
        </p>

        <span className="text-xl font-medium text-blue-700 ml-12 mt-4">
          Real-world Use Cases:
        </span>
        <div className="grid grid-cols-3 gap-8 ml-12 mt-8">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md border">
            <img
              src={vectorImage}
              alt="Vector Spaces"
              className="w-24 h-24 mx-auto"
            />
            <span className="text-lg font-medium text-blue-500 mt-4">
              Computer Vision
            </span>
            <p className="text-sm text-gray-700 mt-2">
              Matrices help describe object positions and movements in images
              (seen as pixels).
              <br />
              Image projection determines object distance and position.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md border">
            <img
              src={linearAppImage}
              alt="Linear Transformations"
              className="w-24 h-24 mx-auto"
            />
            <span className="text-lg font-medium text-blue-500 mt-4">
              Chemistry
            </span>
            <p className="text-sm text-gray-700 mt-2">
              It utilizes matrices to organize chemical data and linear
              transformations to analyze how properties change, enabling
              chemists to model reactions and understand complex systems more
              effectively.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md border">
            <img src={matrixImage} alt="Matrix" className="w-24 h-24 mx-auto" />
            <span className="text-lg font-medium text-blue-500 mt-4">GPS</span>
            <p className="text-sm text-gray-700 mt-2">
              GPS systems use linear algebra concepts like matrices and
              transformations to pinpoint locations accurately. Matrices
              organize satellite data, while transformations convert signals
              into precise coordinates, enabling navigation with accuracy.
            </p>
          </div>
        </div>

        {/* Bouton "Go to chapters" */}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-8 ml-12"
          onClick={handleGoToChapters}
        >
          Go to Chapters
        </button>
      </div>
    </div>
  );
};

export default MotivationPage;
