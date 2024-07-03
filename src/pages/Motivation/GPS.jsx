import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import TopBar from "../../components/TopBar";
import computerVision from "../../assets/images/GPS.jpg";
import "../../index.css";
import "../../assets/styles/custom.css"
import FloatingImage from '../../components/Animations/FloatingImage';

const GPS = () => {
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
        return navigate("/signup");
      }
    } catch (error) {
      console.error("Error during signup verification:", error);
      toast.error(
        "An error occurred during signup verification. Please try again later."
      );
    }
  };

  return (
    <div>
      <TopBar />
      <div className="pt-16 mx-4 flex flex-col items-center">
        <span className="flex w-full justify-center font-['Inter'] text-[48px] font-medium leading-[56px] varblue-text mt-2">
          Motivation
        </span>
        <span className="flex w-full justify-center font-['Inter'] text-[28px] font-medium leading-[32px] text-[#ffc107] mt-3">
          Real-world Use Cases
        </span>
        <FloatingImage
          src={computerVision}
          alt="Computer Vision"
          className="w-[300px] h-[173px] bg-cover bg-no-repeat mt-6 rounded "
        />
        <span className="flex w-full justify-center font-['Inter'] text-[24px] font-medium leading-[28px] varblue-text  mt-4">
          GPS
        </span>
        <div className="w-full max-w-[500px] flex justify-center mt-4">
          <span className="w-full text-center font-['Istok_Web'] text-[20px]  leading-[30px] vargray-text ">
           GPS systems use linear algebra concepts like matrices and transformations to pinpoint locations accurately. Matrices organize satellite data, while transformations convert signals into precise coordinates, enabling navigation with accuracy
            
          </span>
        </div>
        <div className="w-full max-w-[512px] flex justify-between items-center mt-6">
         
          <span  onClick={handleGoToChapters} className="font-['Istok_Web'] text-[20px] font-normal leading-[28px] vargray-text cursor-pointer">
            SKIP
          </span>
          <div className="flex space-x-2">
            <Link to="/computervision">
            <div className="w-4 h-4  bg-gray-400 rounded-full cursor-pointer"></div>
            </Link>
            <Link to ="/chemistry">
            <div className="w-4 h-4 bg-gray-400 rounded-full cursor-pointer"></div>
            </Link>
            <Link to="/gps">
            <div className="w-4 h-4 bg-[#ffc107] rounded-full cursor-pointer"></div>
            </Link>
            
          </div>
          <span onClick={handleGoToChapters}  className="font-['Istok_Web'] text-[20px] font-normal leading-[28px] text-[#ffc107] cursor-pointer">
            NEXT
          </span>
        </div>
      
      </div>
    </div>
  );
};

export default GPS;
