import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import algebra from "../assets/images/algebra.webp";
import algorithm from "../assets/images/algorithm.png";
import sfsd from "../assets/images/sfsd.webp";
import probability from "../assets/images/probability.webp";
import axios from "axios";
import Cookies from "js-cookie";

const Home = () => {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Function to fetch modules information from the backend
    const fetch = async () => {
      try {
        setLoading(true);
        // Send HTTP GET request to the backend to retrieve modules information
        const response = await axios.get("http://localhost:3001/api/modules", {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`, // Replace with your actual token
            "Content-Type": "application/json",
            // Add other headers as needed
          },
        });

        // Update the state with the retrieved data
        await setModules(response.data);
        console.log(response);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des informations utilisateur:",
          error
        );
      } finally {
        // Set loading to false after data is fetched or an error occurs
        setLoading(false);
        console.log(modules);
      }
    };

    // Call the function to fetch modules information when the component mounts
    fetch();
  }, []);
  return (
    <div>
      <TopBar />
      <div className="container mx-auto px-2 pt-16">
        <span className="text-4xl font-bold mt-20 text-blue-300 ">
          A New Way To Learn <br /> & Get Knowledge
        </span>
        <p className="text-lg my-4 text-[rgba(0,0,0,0.35)]">
          Learn new skills from the comfort of your home anywhere, anytime.
        </p>
        <p className="text-3xl mt-15 mb-3 text-black">Explore our courses:</p>
        {loading ? (
          <h1 className="w-full text-center">Loading...</h1>
        ) : (
          <div className="grid grid-cols-4 gap-8">
            {modules.map((module) => (
              <div className="h-87 bg-gray-100 p-8 rounded-lg shadow-md border">
                <img
                  src={`${module.imgLink}.webp`}
                  onError={(e) => (e.target.src = `${module.imgLink}.png`)}
                  alt={`${module.imgLink} module`}
                  className="w-24 h-24 mx-auto"
                />

                <div className="h-full flex flex-col justify-between">
                  <div>
                    <p className="text-xl font-semibold my-4">{module.name}</p>
                    <p className="text-sm font-semibold text-[rgba(103,117,183,0.55)]">
                      The branch of mathematics dealing with vector spaces and
                      linear mappings between these spaces, used to solve
                      systems of linear equations ...
                    </p>
                    <Link
                      to="/MotivationPage"
                      className="text-sm font-semibold text-blue-500 underline cursor-pointer"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
