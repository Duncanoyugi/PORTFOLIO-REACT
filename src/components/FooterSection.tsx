import React from 'react';

export const FooterSection: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/duncan-ochieng1/',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
            ),
        },
        {
            name: 'GitHub',
            href: 'https://github.com/Duncanoyugi',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
            ),
        },
    ];

    return (
        <footer className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 relative bg-gradient-to-br from-background via-background to-primary/5">
            <div className="container mx-auto max-w-6xl">
                {/* Main Footer Card */}
                <div className="gradient-border p-8 md:p-12 card-hover bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl border border-primary/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Brand Section */}
                        <div className="gradient-border p-6 card-hover bg-card/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 rounded-xl border border-primary/10">
                            <h3 className="text-xl font-bold text-foreground mb-4">Duncan Ochieng</h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Full-Stack Developer passionate about creating innovative solutions and delivering exceptional user experiences.
                            </p>
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform p-2 rounded-full bg-primary/10 hover:bg-primary/20"
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="gradient-border p-6 card-hover bg-card/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 rounded-xl border border-primary/10">
                            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 transform inline-block flex items-center group"
                                        >
                                            <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="gradient-border p-6 card-hover bg-card/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 rounded-xl border border-primary/10">
                            <h4 className="text-lg font-semibold text-foreground mb-6">Get In Touch</h4>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 transform hover:scale-105">
                                    <div className="p-2 rounded-full bg-primary/20">
                                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <a
                                        href="mailto:duncanoyugi2001@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                                    >
                                        duncanoyugi2001@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 transform hover:scale-105">
                                    <div className="p-2 rounded-full bg-primary/20">
                                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-muted-foreground text-sm">(+254) 711 592 572</span>
                                </div>
                                <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 transform hover:scale-105">
                                    <div className="p-2 rounded-full bg-primary/20">
                                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-muted-foreground text-sm">Chuka, Kenya</span>
                                </div>
                            </div>
                        </div>

                        {/* Services/Expertise */}
                        <div className="gradient-border p-6 card-hover bg-card/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 rounded-xl border border-primary/10">
                            <h4 className="text-lg font-semibold text-foreground mb-6">Expertise</h4>
                            <ul className="space-y-3">
                                {['Full-Stack Development', 'React & Next.js', 'Node.js & Express', 'Database Design', 'UI/UX Design'].map((skill, index) => (
                                    <li key={index} className="flex items-center space-x-3 p-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 transform hover:scale-105">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span className="text-muted-foreground text-sm">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="gradient-border p-8 card-hover bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl border border-primary/20 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-muted-foreground text-sm">
                            © {currentYear} Duncan Ochieng. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-6 mt-4 md:mt-0">
                            <span className="text-muted-foreground text-sm flex items-center">
                                <span className="mr-2">Built with</span>
                                <span className="text-red-500 animate-pulse">❤️</span>
                                <span className="ml-2">using React & TypeScript</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
