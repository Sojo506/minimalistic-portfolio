import { Linkedin, Mail, Github } from 'lucide-react';

function AboutSection() {
  return (
    <section
      id='about'
      className='mb-20 flex flex-col md:flex-row items-center gap-12'
    >
      <div className='w-64 h-64 bg-purple-800 rounded-full overflow-hidden'>
        <img
          src='/rick_hippie.jpg'
          alt='Fabián Sojo'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='max-w-lg'>
        <h2 className='text-4xl font-bold mb-4 text-purple-400'>
          Hello, I'm Fabián Sojo
        </h2>
        <p className='text-lg mb-6'>
          A lifelong learner developer with a taste for minimalist design and
          love for the backend.
        </p>
        <div className='flex space-x-4'>
          <a
            href='https://github.com/Sojo506'
            className='text-green-400 hover:text-green-300 transition-colors'
            target='_blank'
          >
            <Github className='w-6 h-6' />
          </a>
          <a
            href='https://www.linkedin.com/in/fsojodev/'
            className='text-green-400 hover:text-green-300 transition-colors'
            target='_blank'
          >
            <Linkedin className='w-6 h-6' />
          </a>
          <a
            href='mailto:fsojodev@gmail.com'
            className='text-green-400 hover:text-green-300 transition-colors'
            target='_blank'
          >
            <Mail className='w-6 h-6' />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
