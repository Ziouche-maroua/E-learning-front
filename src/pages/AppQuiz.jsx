import React from 'react';
import  { useState } from 'react';
import Chap2quiz from '../components/LinearTransformation/Chap2quiz';
import Chatbox from '../components/ChatBox'; 
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import SectionMenu from '../components/SectionMenu';

const Quiz = () => {
  const sections = [
    { name: 'Definition', link: '/chapter2/definition' },
    { name: 'Properties', link: '/chapter2/properties' },
    { name: 'Image and Kernel', link: '/chapter2/KernalImg' },
    { name: 'Bijectif, Surjectif, Injectif', link: '/chapter2/InjectifSurjectif' },
    { name: 'Endomorphism and Isomorphism', link: '/chapter2/Morphisme' },
    { name: 'Quiz', link: '/chapter2/Quiz' },
  ];
  
  return (
    <div className="h-screen flex flex-col  overflow-x-hidden">{/* Added overflow-x-hidden to avoid horizontal scrolling */} 

    <TopBar />
      <div className="flex flex-1 pt-16  "> 
      <SectionMenu chapter="Linear Transformation" sections={sections} />
      <div className="w-full lg:w-2/3 lg:ml-[37%] p-4 lg:my-5 lg:border lg:border-blue-800 lg:shadow-blue-800 rounded-md ">
     
      <Chap2quiz/>
      
  </div>
  </div>

  <Chatbox/>
  </div>
  );
  };
  export default Quiz;