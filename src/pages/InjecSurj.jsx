import React from 'react';
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Bijective from '../components/LinearTransformation/Bijective';
import Injectif from '../components/LinearTransformation/InjectifTransformation';
import Surjectif from '../components/LinearTransformation/SurjectifTransformation';
import Chatbox from '../components/ChatBox'; 
import SectionMenu from '../components/SectionMenu';
const InjecSurj = () => {
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
      
    <div className="text-2xl kanit-font   mt-4 mb-8">
            Understanding injective, surjective, and bijective linear transformations is key to grasping the relationships between different vector spaces and how these spaces can be mapped onto each other
    </div>

    <div className="mb-8">
            <h3 className="text-2xl poetsen-font mb-4">Injective Transformation</h3>
            <p className="text-justify  leading-relaxed mb-8 font-semibold">
              An injective (or one-to-one) linear transformation maps distinct vectors in the domain to distinct vectors in the codomain. This means that no two different vectors in the domain are mapped to the same vector in the codomain. 
              In the visualization below, the vectors from the domain are uniquely mapped to the codomain, ensuring a one-to-one relationship.
            </p>
            <Injectif />
          </div>

          <div className="mb-8">
            <h3 className="text-2xl poetsen-font mb-4">Surjective Transformation</h3>
            <p className="text-justify  leading-relaxed mb-8 font-semibold">
              A surjective (or onto) linear transformation maps the domain onto the entire codomain, meaning every vector in the codomain is an image of at least one vector in the domain. 
              This ensures that the transformation covers the entire codomain. 
              In the visualization below, you can see how the transformation ensures that every vector in the codomain is reached.
            </p>
            <Surjectif />
          </div>

          <div className="mb-8">
            <h3 className="text-2xl poetsen-font mb-4">Bijective Transformation</h3>
            <p className="text-justify  leading-relaxed mb-8 font-semibold">
              A bijective linear transformation is both injective and surjective, meaning it is a one-to-one correspondence between the domain and the codomain. 
              Every vector in the domain maps to a unique vector in the codomain, and every vector in the codomain is mapped from a unique vector in the domain. 
              This makes the transformation invertible. In the visualization below, observe how the bijective transformation maintains this one-to-one and onto relationship.
            </p>
            <Bijective />
          </div>
        

  </div>
  </div>
  
  <Chatbox/>
  </div>
  );
  };
  export default InjecSurj;