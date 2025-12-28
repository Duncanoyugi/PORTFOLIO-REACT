import { Briefcase, CodeIcon, User } from "lucide-react";

export const AboutMe = () => {
    return <section id="about" className="py-32 px-4 relative">
     <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 text-center">
            About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="gradient-border p-8 card-hover bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="space-y-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        Passionate Full-Stack Developer & Tech Enthusiast
                    </h3>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        With 3 years of experience in full-stack development,
                         I specialize in creating dynamic and responsive web applications.
                         My expertise spans both front-end and back-end technologies,
                         allowing me to build seamless user experiences and robust server-side solutions.
                    </p>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        I'm passionate about leveraging technology to solve real-world problems
                         and continuously learning new skills to stay at the forefront of the industry.
                         When I'm not coding, you can find me exploring the latest tech trends or contributing to open-source projects.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-8">
                <div className="gradient-border p-8 card-hover bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-start gap-6">
                        <div className="p-4 rounded-full bg-primary/10 shadow-lg">
                           <CodeIcon className="h-8 w-8 text-primary" />
                        </div>
                        <div className="text-left">
                            <h4 className="font-bold text-xl mb-2">Web Development</h4>
                            <p className="text-muted-foreground leading-relaxed">
                                Proficient in building responsive and dynamic web applications
                                 using modern frameworks and technologies.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-8 card-hover bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-start gap-6">
                        <div className="p-4 rounded-full bg-primary/10 shadow-lg">
                           <User className="h-8 w-8 text-primary" />
                        </div>
                        <div className="text-left">
                            <h4 className="font-bold text-xl mb-2">UI/UX Design</h4>
                            <p className="text-muted-foreground leading-relaxed">
                                Skilled in designing intuitive user interfaces and engaging user experiences
                                 that enhance usability and satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-8 card-hover bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-start gap-6">
                        <div className="p-4 rounded-full bg-primary/10 shadow-lg">
                           <Briefcase className="h-8 w-8 text-primary" />
                        </div>
                        <div className="text-left">
                            <h4 className="font-bold text-xl mb-2">Project Management</h4>
                            <p className="text-muted-foreground leading-relaxed">
                                Experienced in managing development projects, coordinating teams,
                                 and ensuring timely delivery of high-quality software solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Education Subsection */}
        <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Education
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Chuka University Card */}
                <div className="gradient-border p-8 card-hover bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className="flex flex-col items-center text-center space-y-6">
                        <div className="w-32 h-32 flex items-center justify-center">
                            <img
                                src="/images/chuka-uni-logo-HD-1.jpg"
                                alt="Chuka University Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-bold text-xl">Bachelor's Degree</h4>
                            <p className="text-muted-foreground">Chuka University</p>
                            <p className="text-sm text-muted-foreground">
                                Completed my undergraduate studies with a focus on foundational knowledge in computer science and related fields.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Teach2Give Card */}
                <div className="gradient-border p-8 card-hover bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className="flex flex-col items-center text-center space-y-6">
                        <div className="w-120 h-32 flex items-center justify-center">
                            <img
                                src="/images/Teach2Give-logo.jpg"
                                alt="Teach2Give Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-bold text-xl">Fullstack Software Development</h4>
                            <p className="text-muted-foreground">Teach2Give Intensive Training</p>
                            <p className="text-sm text-muted-foreground">
                                Intensive hands-on training in fullstack development, mastering modern technologies and best practices for professional software development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-6 pt-12 justify-center">
            <a href="#contact" className="px-8 py-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground active:bg-primary active:text-primary-foreground transition-all duration-300 font-semibold text-lg">
                Get In Touch
            </a>
            <a href="/My Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground active:bg-primary active:text-primary-foreground transition-all duration-300 font-semibold text-lg">
                Download CV
            </a>
        </div>
     </div>
    </section>;
};
