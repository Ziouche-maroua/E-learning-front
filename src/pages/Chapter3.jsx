import React from 'react';
import TopBar from '../components/TopBar'; 
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';




const Chapter3 = () => {
  const navigate = useNavigate();
useEffect(()=>{
  if(!localStorage.getItem("student")){
    navigate("/login")
  }
});

  return (
    <div className="h-screen flex flex-col ">
    <TopBar />

    <div className="flex flex-1 pt-16">
     
    </div>
  </div>
  );
};

export default Chapter3;
