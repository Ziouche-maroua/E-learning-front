import React from 'react';
import TopBar from '../components/TopBar'; 
import LeftPart from '../components/LeftPart';
import RightPart from '../components/RightPart';

const Chapter2 = () => {
  return (
    <div className="h-screen flex flex-col ">
      <TopBar />
      <div className="flex flex-1 pt-15">
        <LeftPart />
        <RightPart />
      </div>
    </div>
  );
};

export default Chapter2;
