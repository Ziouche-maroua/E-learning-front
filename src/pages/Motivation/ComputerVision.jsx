import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import TopBar from "../../components/TopBar";
import computerVision from "../../assets/images/computerVision.png";
import "../../index.css";
import "../../assets/styles/custom.css"
import FloatingImage from '../../components/Animations/FloatingImage';

const CSvision = () => {
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
        <span className="flex w-full justify-center font-['Inter'] text-[32px] sm:text-[40px] md:text-[48px] font-medium leading-[38px] sm:leading-[44px] md:leading-[56px] varblue-text mt-2">
          Motivation
        </span>
        <span className="flex w-full justify-center font-['Inter'] text-[20px] sm:text-[24px] md:text-[28px] font-medium leading-[24px] sm:leading-[28px] md:leading-[32px] text-[#ffc107] mt-3">
          Real-world Use Cases
        </span>
        <FloatingImage
          src={computerVision}
          alt="Computer Vision"
          className="w-[200px] sm:w-[250px] md:w-[300px] h-[115px] sm:h-[144px] md:h-[173px] bg-cover bg-no-repeat mt-6 rounded"
        />
        <span className="flex w-full justify-center font-['Inter'] text-[16px] sm:text-[20px] md:text-[24px] font-medium leading-[20px] sm:leading-[24px] md:leading-[28px] varblue-text mt-4">
          Computer Vision
        </span>
        <div className="w-full max-w-[500px] flex justify-center mt-4">
          <span className="w-full text-center font-['Istok_Web'] text-[14px] sm:text-[16px] md:text-[20px] leading-[22px] sm:leading-[26px] md:leading-[30px] vargray-text">
            Matrices help describe object positions and movements in images (seen as pixels).
            <br />
            Image projection determines object distance and position.
          </span>
        </div>
        <div className="w-full max-w-[512px] flex justify-between items-center mt-6">
          <span onClick={handleGoToChapters} className="font-['Istok_Web'] text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[22px] sm:leading-[26px] md:leading-[28px] vargray-text cursor-pointer">
            SKIP
          </span>
          <div className="flex space-x-2">
            <Link to="/computervision">
              <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-[#ffc107] rounded-full cursor-pointer"></div>
            </Link>
            <Link to="/chemistry">
              <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-gray-400 rounded-full cursor-pointer"></div>
            </Link>
            <Link to="/gps">
              <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-gray-400 rounded-full cursor-pointer"></div>
            </Link>
          </div>
          <span onClick={handleGoToChapters} className="font-['Istok_Web'] text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[22px] sm:leading-[26px] md:leading-[28px] text-[#ffc107] cursor-pointer">
            NEXT
          </span>
        </div>
      </div>
    </div>
  );
};

export default CSvision;
