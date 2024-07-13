import React, { useState } from 'react';
import AppProps from '../components/LinearTransformation/PropsOfLinearTransformation';
import Chatbox from '../components/ChatBox'; 
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import SectionMenu from '../components/SectionMenu';
const AppProperties = () => {


  const sections = [
    { name: 'Definition', link: '/chapter2/definition' },
    { name: 'Properties', link: '/chapter2/properties' },
    { name: 'Image and Kernel', link: '/chapter2/KernalImg' },
    { name: 'Bijectif, Surjectif, Injectif', link: '/chapter2/InjectifSurjectif' },
    { name: 'Endomorphism and Isomorphism', link: '/chapter2/Morphisme' },
    { name: 'Quiz', link: '/chapter2/Quiz' },
  ];

  return (
    <div className="h-screen flex flex-col">
      <TopBar />
      <div className="flex flex-1 pt-16  overflow-x-hidden"> {/* Added overflow-x-hidden to avoid horizontal scrolling */}
      
      <SectionMenu chapter="Linear Transformation" sections={sections} />
        <div className="w-full lg:w-2/3 lg:ml-[37%] p-4 lg:my-5 lg:border lg:border-blue-800 lg:shadow-blue-800 rounded-md ">
          <p className="text-2xl kanit-font  mt-4 mb-8">
            A linear transformation between two vector spaces is a mapping that preserves vector addition and scalar multiplication. 
          </p>
        
          <h1 className="text-xl font-bold mt-4">T(u + v) = T(u) + T(v)</h1>
          <h1 className="text-xl font-bold mt-4">T(c x u) = c x T(u)</h1>
          <AppProps/>
        </div>
      </div>
   
      <Chatbox/>
    </div>
  );
};

export default AppProperties;
