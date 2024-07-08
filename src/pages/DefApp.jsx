import React, { useState } from 'react';
import Chatbox from '../components/ChatBox';
import Def from '../components/LinearTransformation/DefOfLinearTransformation';
import DefDynamic from '../components/LinearTransformation/TransformationDynamicExample';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import SectionMenu from '../components/SectionMenu';
import { color } from 'd3';

const DefApp = () => {
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
      <div className="flex flex-1 pt-16"> {/* Adjusted for responsive design */}
      
      <SectionMenu chapter="Linear transformation" sections={sections} />
      
      <div className="w-full lg:w-2/3 lg:ml-[37%] p-4 border border-blue-800 shadow-blue-800 rounded-md mx-4 my-5">
          <p className="text-2xl kanit-font  mt-4 mb-8">
            A linear transformation is a mathematical function between two vector spaces that respects vector addition
            and scalar multiplication. It describes how vectors in one space are transformed into vectors in another
            while preserving the structure of the spaces involved.
          </p>
          <Def />
          <p className="text-2xl  kanit-font mt-4"  style={{color:'var(--section-title)'}}>Try it yourself!</p>
          <DefDynamic />
        </div>
      </div>
    
      <Chatbox />
    </div>
  );
};

export default DefApp;
