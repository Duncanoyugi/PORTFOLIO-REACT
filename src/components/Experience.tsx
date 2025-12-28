import { Calendar, Award } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  dates: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      title: "Fullstack Development Training",
      company: "Teach2Give",
      dates: "Sep 2025 - Dec 2025",
      description: "Intensive training in modern web technologies and development best practices.",
      achievements: [
        "Built fullstack applications with NestJS backend and React frontend, implementing MSSQL databases with TypeORM for efficient data management."
      ],
      technologies: ["NestJS", "React", "Tailwind CSS", "MSSQL", "TypeORM"]
    },
    {
      title: "Fullstack Development Training",
      company: "Teach2Give",
      dates: "May 2025 - Aug 2025",
      description: "Comprehensive backend and frontend development training with modern frameworks.",
      achievements: [
        "Mastered Node.js and NestJS for backend solutions, developed Angular applications with Tailwind CSS, and implemented PostgreSQL with Prisma ORM."
      ],
      technologies: ["Node.js", "NestJS", "Angular", "Tailwind CSS", "PostgreSQL", "Prisma ORM"]
    },
    {
      title: "IT Attachment",
      company: "ICT Authority of Kenya - Siaya County",
      dates: "May 2024 - Aug 2024",
      description: "Practical training in information and communication technology.",
      achievements: [
        "Gained hands-on networking experience, implemented LAN solutions, and learned network security protocols in a government setting."
      ],
      technologies: ["Networking", "LAN", "Network Security", "ICT Systems"]
    },
    {
      title: "Community Member",
      company: "Africa's Talking Software Development Community",
      dates: "2023 - Present",
      description: "Active member of a developer community focused on collaboration and innovation.",
      achievements: [
        "Collaborated with regional developers, participated in hackathons, and contributed to open-source projects while expanding technical knowledge."
      ],
      technologies: ["Collaboration Tools", "Open Source", "Community Development", "Hackathons"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {experiences.map((exp, index) => (
            <div key={index} className="gradient-border p-6 card-hover bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-lg font-semibold text-primary">{exp.company}</p>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.dates}</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                <span className="font-semibold text-foreground">Key Achievement: </span>
                {exp.achievements[0]}
              </p>

              <div>
                <span className="font-semibold text-foreground">Technologies: </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
