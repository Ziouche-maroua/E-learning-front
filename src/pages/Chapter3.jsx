import React from 'react';
import TopBar from '../components/TopBar'; 
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Chapter3 = () => {
  
const navigate = useNavigate();
useEffect(()=>{
  if(!localStorage.getItem("utilisateurs")){
    navigate("/login")
  }
})
  return (
    <div className="h-screen flex flex-col ">
    <TopBar />

    <div className="flex flex-1 pt-16">
     
    </div>
  </div>
  );
};

export default Chapter3;
