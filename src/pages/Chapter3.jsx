import React from 'react';
import TopBar from '../components/TopBar'; 
import Chatbox from '../components/ChatBox'; 
import Matrixdef from './Matrixdef';
import SectionMenu from '../components/SectionMenu';

const Chapter3 = () => {
  return (
    <div className="h-screen flex flex-col ">
    <TopBar />

    
      <Matrixdef/>
    
    <Chatbox/>
  </div>
  );
};

export default Chapter3;