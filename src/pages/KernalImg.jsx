import React from 'react';
import  { useState } from 'react';
import Kernel from '../components/LinearTransformation/Kernal';
import Image from '../components/LinearTransformation/Image';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Chatbox from '../components/ChatBox';
import SectionMenu from '../components/SectionMenu';
const KernelImg = () => {
  const sections = [
    { name: 'Definition', link: '/chapter2/definition' },
    { name: 'Properties', link: '/chapter2/properties' },
    { name: 'Image and Kernel', link: '/chapter2/KernalImg' },
    { name: 'Bijectif, Surjectif, Injectif', link: '/chapter2/InjectifSurjectif' },
    { name: 'Endomorphism and Isomorphism', link: '/chapter2/Morphisme' },
    { name: 'Quiz', link: '/chapter2/Quiz' },
  ];
 
  return (
    <div className="h-screen flex flex-col   overflow-x-hidden">{/* Added overflow-x-hidden to avoid horizontal scrolling */} 
      <TopBar />
      <div className="flex flex-1 pt-16  ">  
      <SectionMenu chapter="Linear Transformation" sections={sections} />
      
      <div className="w-full lg:w-2/3 lg:ml-[37%] p-4 lg:my-5 lg:border lg:border-blue-800 lg:shadow-blue-800 rounded-md ">
          <div className="mb-8">
            <h3 className="text-2xl poetsen-font mt-4 mb-8">Kernel of Linear Transformation</h3>
            <p className=" mb-4 font-semibold">
              In linear algebra, the kernel (also known as null space) of a linear transformation represents the set of vectors that map to the zero vector in the codomain (red circle).
              <br />
              Let T : V → W be a linear transformation:
              <br />
              The kernel of T (denoted ker T) is defined by:
              <br />
              ker T = [v in V | T(v) = 0]
              <br />
              The kernel of T is often called the nullspace of T because it consists of all vectors v in V satisfying the condition that T(v) = 0.
            </p>
            <Kernel />
          </div>
          <div className="mb-8">
            <h3 className="text-2xl poetsen-font mt-4 mb-10">Image of Linear Transformation</h3>
            <p className=" mb-4 font-semibold">
              In linear algebra, the image of a linear transformation is the set of all vectors that can be obtained by applying the transformation to the vectors in the domain. It represents the range of the transformation.
            </p>
            <Image />
          </div>
        </div>
      </div>
    
      <Chatbox />
    </div>
  );
};

export default KernelImg;