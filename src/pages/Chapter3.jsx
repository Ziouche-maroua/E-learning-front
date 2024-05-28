import React from 'react';
import TopBar from '../components/TopBar'; 
import Chatbox from '../components/ChatBox'; 
import Matrixdef from './Matrixdef';

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