import React from 'react';
import TopBar from '../components/TopBar'; 

import Matrixoperation from './Matrixoperation';

const Chapter3 = () => {
  return (
    <div className="h-screen flex flex-col ">
    <TopBar />

    <div className="flex flex-1 pt-16">
     <Matrixoperation/>
    

    </div>
  </div>
  );
};

export default Chapter3;
