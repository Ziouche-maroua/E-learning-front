import React from 'react';
import TopBar from '../components/TopBar'; 
import LeftPart from '../components/LeftPart';
import RightPart from '../components/RightPart';
const Chapter3 = () => {
  return (
    <div className="h-screen flex flex-col">
    <TopBar />
    <div className="flex flex-1">
      <LeftPart />
      <RightPart />
    </div>
  </div>
  );
};

export default Chapter3;
