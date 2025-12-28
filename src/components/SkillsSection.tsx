import { useState, useEffect } from 'react';
import {
    Code,
    Palette,
    Database,
    Globe,
    FileText,
    Layers,
    Zap,
    Server,
    Cpu,
    GitBranch,
    Figma,
    Code2,
    Cloud,
    Package,
    Send,
    TestTube
} from 'lucide-react';

interface Skill {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    proficiency: number;
    category: string;
}

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [skills, setSkills] = useState<Skill[]>([]);

    useEffect(() => {
        const allSkills: Skill[] = [
            // Frontend
            { name: 'HTML5', icon: Globe, proficiency: 95, category: 'Frontend' },
            { name: 'CSS3', icon: Palette, proficiency: 90, category: 'Frontend' },
            { name: 'JavaScript (ES6+)', icon: Code, proficiency: 92, category: 'Frontend' },
            { name: 'TypeScript', icon: FileText, proficiency: 88, category: 'Frontend' },
            { name: 'React', icon: Layers, proficiency: 90, category: 'Frontend' },
            { name: 'Angular', icon: Zap, proficiency: 85, category: 'Frontend' },
            { name: 'TailwindCSS', icon: Palette, proficiency: 93, category: 'Frontend' },

            // Backend
            { name: 'Node.js', icon: Server, proficiency: 88, category: 'Backend' },
            { name: 'NestJS', icon: Cpu, proficiency: 82, category: 'Backend' },
            { name: 'RESTful API Design', icon: Send, proficiency: 90, category: 'Backend' },
            { name: 'NextJS', icon: Layers, proficiency: 85, category: 'Backend' },
            { name: 'Python', icon: Code2, proficiency: 80, category: 'Backend' },
            { name: 'Java', icon: Code, proficiency: 75, category: 'Backend' },
            { name: 'Express', icon: Server, proficiency: 87, category: 'Backend' },

            // Databases
            { name: 'MS SQL Server', icon: Database, proficiency: 85, category: 'Databases' },
            { name: 'MySQL', icon: Database, proficiency: 88, category: 'Databases' },
            { name: 'PostgreSQL', icon: Database, proficiency: 82, category: 'Databases' },

            // Tools and Platforms
            { name: 'Git & GitHub', icon: GitBranch, proficiency: 95, category: 'Tools and Platforms' },
            { name: 'Figma', icon: Figma, proficiency: 80, category: 'Tools and Platforms' },
            { name: 'VS Code', icon: Code2, proficiency: 92, category: 'Tools and Platforms' },
            { name: 'Azure', icon: Cloud, proficiency: 78, category: 'Tools and Platforms' },
            { name: 'npm/yarn', icon: Package, proficiency: 90, category: 'Tools and Platforms' },
            { name: 'Postman', icon: Send, proficiency: 85, category: 'Tools and Platforms' },
            { name: 'Jest', icon: TestTube, proficiency: 80, category: 'Tools and Platforms' },
        ];
        setSkills(allSkills);
    }, []);

    const categories = ['All', 'Frontend', 'Backend', 'Databases', 'Tools and Platforms'];

    const filteredSkills = activeCategory === 'All'
        ? skills
        : skills.filter(skill => skill.category === activeCategory);

    return (
        <section id="skills" className="py-32 px-4 relative">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                                activeCategory === category
                                    ? 'bg-primary text-primary-foreground shadow-lg'
                                    : 'border-2 border-primary text-muted-foreground hover:text-primary hover:bg-primary/10'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredSkills.map((skill, index) => (
                        <div
                            key={`${skill.name}-${index}`}
                            className="gradient-border p-6 card-hover bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="p-4 rounded-full bg-primary/10 shadow-lg">
                                    <skill.icon className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg">{skill.name}</h3>
                                <div className="w-full">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>Proficiency</span>
                                        <span>{skill.proficiency}%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-3">
                                        <div
                                            className="bg-primary h-3 rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${skill.proficiency}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
