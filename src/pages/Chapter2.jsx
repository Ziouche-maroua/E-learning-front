import React from 'react';
import TopBar from '../components/TopBar'; 


import DefApp from './DefApp';


const Chapter2 = () => {
  
  return (
    <div className="h-screen flex flex-col">
      <TopBar />
     
        <DefApp/>
      
    </div>
  );
};

export default Chapter2;
