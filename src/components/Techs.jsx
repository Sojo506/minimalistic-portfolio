import React from 'react';
import technologies from '../assets/techs';

function Techs() {
  return (
    <section id='technologies' className='space-y-8 mb-20'>
      <h2 className='text-3xl text-purple-400 font-bold text-center'>Technologies</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center'>
        {technologies.map((tech) => (
          <div
            key={tech}
            className='w-full bg-gray-900 p-4 rounded-lg text-center hover:bg-gray-800 transition-colors'
          >
            <span className='text-green-400 font-semibold'>{tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Techs;
