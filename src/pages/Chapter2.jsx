import React, { useEffect } from 'react';
import TopBar from '../components/TopBar'; 
import DefApp from './DefApp'; 
import { useNavigate } from 'react-router-dom';

const Chapter2 = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem("utilisateurs")){
      navigate("/login")
    }
  })
  return (
    <div className="h-screen flex flex-col">
      <TopBar />
      <div className="flex flex-1 pt-16">
        <DefApp/>


      </div>
    </div>
  );
};

export default Chapter2;
