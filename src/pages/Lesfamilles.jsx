import React from 'react';

import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import FamLib  from '../components/VectorSpace/FML';
import Chatbox from '../components/ChatBox';
import SectionMenu from '../components/SectionMenu';
const Lesfamilles = () => {
  const sections = [
    { name: 'Definition', link: '/chapter1/definition' },
    { name: 'Subspace', link: '/chapter1/Subspace' },
    { name: 'Linearly Independent Family', link: '/chapter1/Lesfamilles' },
    { name: 'Generating Family', link: '/chapter1/FamilleG' },
    { name: 'Base and dimension', link: '/chapter1/BaseDim' },
    { name: 'Take a quiz about vector space', link: '/chapter1/VSQuiz' },
  ];
  return (
    <div className="h-screen flex flex-col  overflow-x-hidden">{/* Added overflow-x-hidden to avoid horizontal scrolling */} 

    <TopBar />
    <div className="flex flex-1 pt-16  "> 
      <SectionMenu chapter="vectors" sections={sections} />
      <div className="w-full lg:w-2/3 lg:ml-[37%] p-4 lg:my-5 lg:border lg:border-blue-800 lg:shadow-blue-800 rounded-md ">
      
    <FamLib/>
      
    </div>
    </div>
    <Chatbox />
    </div>
  );
};
export default Lesfamilles;