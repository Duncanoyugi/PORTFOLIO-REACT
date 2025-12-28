import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Initialize EmailJS (replace with your actual service ID, template ID, and public key)
  emailjs.init('your_public_key_here');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await emailjs.send(
        'your_service_id_here', // Replace with your EmailJS service ID
        'your_template_id_here', // Replace with your EmailJS template ID
        {
          from_name: formData.fullName,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'duncanoyugi2001@gmail.com', // Your email
        }
      );
      setSubmitMessage('Message sent successfully!');
      setFormData({ fullName: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 relative bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 text-center">
          Contact <span className="text-primary">Me</span>
        </h2>
        <div className="text-center mb-12 md:mb-16">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities. Reach out through the form or find me on social media.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Social Media Handles */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative gradient-border p-8 card-hover bg-card/80 backdrop-blur-md shadow-2xl hover:shadow-primary/25 transition-all duration-500 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold mb-8 text-foreground bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300 transform hover:scale-105">
                  <div className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 shadow-lg">
                    <svg className="w-7 h-7 text-primary animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">Location</p>
                    <p className="text-muted-foreground">Chuka, Kenya</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300 transform hover:scale-105">
                  <div className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 shadow-lg">
                    <svg className="w-7 h-7 text-primary animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">Email</p>
                    <p className="text-muted-foreground">duncanoyugi2001@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300 transform hover:scale-105">
                  <div className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 shadow-lg">
                    <svg className="w-7 h-7 text-primary animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">Phone</p>
                    <p className="text-muted-foreground">(+254) 711 592 572</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300 transform hover:scale-105">
                  <div className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 shadow-lg">
                    <svg className="w-7 h-7 text-primary animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/duncan-ochieng1/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors duration-300 hover:underline">
                      linkedin.com/in/duncan-ochieng1/
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300 transform hover:scale-105">
                  <div className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 shadow-lg">
                    <svg className="w-7 h-7 text-primary animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">GitHub</p>
                    <a href="https://github.com/Duncanoyugi" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors duration-300 hover:underline">
                      github.com/Duncanoyugi
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative gradient-border p-8 card-hover bg-card/80 backdrop-blur-md shadow-2xl hover:shadow-primary/25 transition-all duration-500 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold mb-8 text-foreground bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-input rounded-xl bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-background/70"
                    placeholder="Your full name"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-input rounded-xl bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-background/70"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-input rounded-xl bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-background/70"
                    placeholder="Subject of your message"
                  />
                </div>
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-input rounded-xl bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-background/70 resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 active:from-primary active:to-primary/80 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
                {submitMessage && (
                  <div className={`text-center p-3 rounded-lg backdrop-blur-sm ${submitMessage.includes('successfully') ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'} animate-fade-in`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
