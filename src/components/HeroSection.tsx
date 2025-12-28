import { ChevronDown } from 'lucide-react';

export const HeroSection = () => {
    return (
        <section id="home"
        className="relative min-h-screen flex items-center justify-center px-4">
            <div className="container max-w-7xl mx-auto z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6 animate-fade-in">
                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                            <span className="block text-foreground animate-fade-in-delay-1">Hi, I'm</span>
                            <span className="block text-blue-500 dark:text-blue-400 animate-fade-in-delay-2">Ochieng Duncan Oyugi</span>
                            <span className="block text-foreground animate-fade-in-delay-3">A Fullstack Web Developer</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl animate-fade-in-delay-4">
                            I am a Full-stack developer transforming product
                             ideas into digital experiences that drive innovation and user engagement.
                        </p>
                        <div className="pt-4">
                            <a href="#projects" className="cosmic-button inline-flex items-center gap-2">
                                View My Work
                            </a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center lg:justify-end animate-fade-in-delay-2">
                        <div className="relative">
                            <img
                                src="/images/my_image.jpg"
                                alt="Ochieng Duncan Oyugi"
                                className="w-80 h-80 lg:w-96 lg:h-96 object-cover object-[50%_0%] rounded-full shadow-2xl border-4 border-primary/20"
                            />
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse-subtle"></div>
                        </div>
                    </div>
                </div>

                {/* Scroll Arrow */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown className="h-8 w-8 text-foreground" />
                </div>
            </div>
        </section>
    );
};
