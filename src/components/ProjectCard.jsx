import { Github, ExternalLink } from 'lucide-react';

function ProjectCard({ project }) {
  return (
    <div className='bg-gray-900 rounded-lg overflow-hidden shadow-lg'>
      <img
        src={project.image}
        alt={project.name}
        className='w-full h-48 object-cover'
      />
      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2 text-purple-400'>
          {project.name}
        </h3>
        <p className='text-gray-300 mb-4'>{project.description}</p>
        <div className='flex justify-between'>
          <a
            href={project.github}
            className='flex items-center text-green-400 hover:text-green-300 transition-colors'
            target='_blank'
          >
            <Github className='w-5 h-5 mr-2' />
            GitHub
          </a>
          <a
            href={project.livepreview}
            className='flex items-center text-green-400 hover:text-green-300 transition-colors'
            target='_blank'
          >
            <ExternalLink className='w-5 h-5 mr-2' />
            Live Preview
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
