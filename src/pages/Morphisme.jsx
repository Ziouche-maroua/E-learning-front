import React from 'react';
import  { useState } from 'react';
import Automorphisme from '../components/LinearTransformation/Automorphisme';
import Isomorphisme from '../components/LinearTransformation/Isomorphisme';
import Endomorphisme from '../components/LinearTransformation/Endomorphisme';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Chatbox from '../components/ChatBox';
import SectionMenu from '../components/SectionMenu';

const Morphisme = () => {
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
          <div className="text-2xl kanit-font  mt-4 mb-8">
               In linear transformations, a morphism refers to a structure-preserving map between vector spaces, crucial for understanding how these spaces can be transformed and related.
          </div>


          <div className="mb-8">
            <h3 className="text-2xl poetsen-font mb-4">Endomorphism</h3>
            <p className="text-justify font-semibold leading-relaxed mb-4">
              A linear transformation is called an endomorphism when it maps a vector space onto itself.
              In other words, it is a linear transformation from a vector space E to itself (E → E).
              In the visualization below, the pink circle represents the domain E,
              the pink circle represents the codomain E, and the blue vector illustrates the linear transformation,
              showing how vectors from the domain are mapped to vectors in the codomain within the same vector space.
            </p>
            <Endomorphisme />
          </div>

          <div className="mb-8">
            <h3 className="text-2xl poetsen-font mb-4">Isomorphism</h3>
            <p className="text-justify font-semibold leading-relaxed mb-4">
              An isomorphism is a bijective linear transformation between two vector spaces that preserves the structure of the vector space.
              In other words, it is a linear transformation that is both injective and surjective, meaning it is one-to-one and onto.
              In the visualization below, the blue circle represents the domain E, the orange circle represents the codomain F,
              and the vector illustrates the bijective linear transformation, showing how vectors from the domain are mapped to vectors in the codomain
              in a one-to-one and onto manner, preserving the structure of the vector space.
            </p>
            <Isomorphisme />
          </div>

          <div className="mb-8">
            <h3 className="text-2xl poetsen-font mb-4">Automorphism</h3>
            <p className="text-justify  font-semibold leading-relaxed mb-4">
              In mathematics, an automorphism is a bijective (one-to-one and onto) transformation of a mathematical object onto itself.
              In the context of linear algebra, an automorphism refers to a bijective linear transformation of a vector space onto itself.
            </p>
            <Automorphisme />
          </div>
        </div>
      </div>
     
      <Chatbox />
    </div>
  );
};

export default Morphisme;
