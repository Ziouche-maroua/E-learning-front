import React from 'react';
import TopBar from '../components/TopBar'; 
import Chatbox from '../components/ChatBox'; 
import DefApp from './DefApp';
import SectionMenu from '../components/SectionMenu';



import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



const Chapter2 = () => {
  
  return (
    <div className="h-screen flex flex-col">
      <TopBar />

     
        <DefApp/>
    <Chatbox/>
    </div>
  );
};

export default Chapter2;