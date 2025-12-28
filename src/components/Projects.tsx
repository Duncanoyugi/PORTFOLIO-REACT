import  { useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  tagline: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
}

export const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const projectData: Project[] = [
      {
        id: 1,
        title: 'Savory Bites',
        tagline: 'A comprehensive restaurant management system for ordering food, booking rooms, reserving tables, and managing multiple restaurants with staff and drivers.',
        image: 'https://via.placeholder.com/300x200?text=Savory+Bites',
        techStack: ['NestJS', 'React', 'TailwindCSS', 'MSSQL', 'TypeORM', 'Git'],
        liveUrl: '#',
        githubUrl: 'https://github.com/Duncanoyugi/Restaurant-Frontend.git',
      },
      {
        id: 2,
        title: 'Courier Sendit System',
        tagline: 'Real-time parcel tracking system for sending and receiving packages across destinations.',
        image: 'https://via.placeholder.com/300x200?text=Courier+Sendit',
        techStack: ['NestJS', 'Angular', 'PostgreSQL', 'Prisma'],
        liveUrl: '#',
        githubUrl: 'https://github.com/Duncanoyugi/SENDIT-COURIER.git',
      },
      {
        id: 3,
        title: 'Shoppie App',
        tagline: 'Online shopping platform with product delivery services.',
        image: 'https://via.placeholder.com/300x200?text=Shoppie+App',
        techStack: ['NestJS', 'Angular', 'PostgreSQL'],
        liveUrl: '#',
        githubUrl: 'https://github.com/Duncanoyugi/Shopie-Project.git',
      },
      {
        id: 4,
        title: 'Car-Rental Management System',
        tagline: 'System for managing car rental operations efficiently.',
        image: 'https://via.placeholder.com/300x200?text=Car+Rental',
        techStack: ['NestJS', 'React', 'PostgreSQL'],
        liveUrl: '#',
        githubUrl: 'https://github.com/Duncanoyugi/Car-Rental-Project.git',
      },
      {
        id: 5,
        title: 'Class Attendance System',
        tagline: 'Automated attendance system using facial recognition to capture and compare student faces.',
        image: 'https://via.placeholder.com/300x200?text=Attendance+System',
        techStack: ['Python', 'TensorFlow', 'Dlib', 'NumPy', 'PyTorch', 'MySQL'],
        liveUrl: '#',
        githubUrl: 'https://github.com/Duncanoyugi/Class-Attendance-System-Using-Facial-Recognition.git',
      },
    ];
    setProjects(projectData);
  }, []);

  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 text-center">
          <span className="text-primary">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="gradient-border p-8 card-hover bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.tagline}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground active:bg-primary active:text-primary-foreground transition-all duration-300 font-semibold"
                  >
                    View Project
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground active:bg-primary active:text-primary-foreground transition-all duration-300 font-semibold"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
