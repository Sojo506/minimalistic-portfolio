import ProjectCard from './ProjectCard';
import projectsData from '../assets/projects';

function ProjectsSection() {
  return (
    <section id='projects' className='mb-20'>
      <h2 className='text-3xl font-bold mb-8 text-purple-400'>
        Some of my projects...
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
