import React from 'react';
import VS from '../components/VectorSpace/Vectorspace';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import SectionMenu from '../components/SectionMenu';
import Chatbox from '../components/ChatBox';

const DefVS = () => {
  const sections = [
    { name: 'Definition', link: '/chapter1/definition' },
    { name: 'Subspace', link: '/chapter1/Subspace' },
    { name: 'Linearly Independent Family', link: '/chapter1/Lesfamilles' },
    { name: 'Generating Family', link: '/chapter1/FamilleG' },
    { name: 'Base and dimension', link: '/chapter1/BaseDim' },
    { name: 'Take a quiz about vector space', link: '/chapter1/VSQuiz' },
  ];
  return (
    <div className="h-screen flex flex-col">

<TopBar />
<div className="flex flex-1 pt-16  overflow-x-hidden"> {/* Added overflow-x-hidden to avoid horizontal scrolling */} 
        <SectionMenu chapter="VECTORs" sections={sections} />
        <div className="w-full lg:w-2/3 lg:ml-[37%] p-4 lg:my-5 lg:border lg:border-blue-800 lg:shadow-blue-800 rounded-md ">
      <VS/>
      
    </div>
    </div>
    <Chatbox />
    </div>
  );
};
export default DefVS;