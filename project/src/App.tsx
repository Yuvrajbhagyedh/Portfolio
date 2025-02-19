import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User2, ChevronDown, Terminal, Sparkles, Menu, X } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center space-x-2">
              <Terminal className={`w-6 h-6 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
              <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Yuv Raj</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                  isScrolled
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <div className={`pt-4 pb-2 space-y-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 hover:opacity-80 transition-opacity"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 px-4 rounded-lg text-center font-medium mt-4 transition-colors duration-300 ${
                  isScrolled
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <header className="bg-gradient-animated bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 pt-32 pb-48">
          <div className="max-w-4xl mx-auto relative">
            <div className="flex items-center space-x-3 mb-6 animate-fade-in">
              <Terminal className="w-8 h-8" />
              <span className="text-lg font-medium text-blue-200">Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-6xl font-bold mb-6 animate-fade-in">
              Hi, I'm Yuvraj
              <Sparkles className="inline-block ml-4 w-8 h-8 text-yellow-300 animate-float" />
            </h1>
            
            <p className="text-2xl mb-8 text-blue-100 animate-fade-in-delay-1 leading-relaxed">
            A student and web development enthusiast passionate about building creative and user-friendly digital experiences.
            </p>
            
            <div className="flex space-x-6 mb-16 animate-fade-in-delay-2">
              <a 
                href="#contact" 
                className="group bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center space-x-2"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Contact Me</span>
              </a>
              <a 
                href="#projects" 
                className="group border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center space-x-2"
              >
                <Code2 className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>View Projects</span>
              </a>
            </div>

            <div className="flex space-x-6 animate-fade-in-delay-2">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold">5+</span>
                <span className="text-blue-200">Months Experience</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold">5+</span>
                <span className="text-blue-200">Projects Completed</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold">2+</span>
                <span className="text-blue-200">Internships</span>
              </div>
            </div>

            <button 
              onClick={() => setIsVisible(!isVisible)}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white text-blue-600 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isVisible ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      <div className={`transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'} overflow-hidden bg-white`}>
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Frontend Expertise</h3>
              <p className="text-gray-600">I have experience in frontend development with HTML, CSS, JavaScript, React, and Tailwind CSS.</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Programming Skills</h3>
              <p className="text-gray-600">Proficient in Java (OOP), C, and Python (OOP), with a strong foundation in problem-solving and software development.</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Design Tools</h3>
              <p className="text-gray-600">Experienced with Canva and Freepik for creating visually appealing designs and graphics.</p>
            </div>
          </div>
        </div>
      </div>

      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-2 mb-12">
            <User2 className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/profile.jpg" 
                alt="Developer workspace" 
                className="rounded-lg shadow-lg "
              />
            </div>
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
              As a web development enthusiast, I focus on building user-friendly applications using modern technologies. I'm passionate about clean code, design, and creating seamless user experiences.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Frontend</h3>
                  <p className="text-gray-600">React, JavaScript, Tailwind CSS</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Ui</h3>
                  <p className="text-gray-600">Wix,Canva,Freepik </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <div className="flex items-center space-x-2 mb-12">
      <Code2 className="w-6 h-6 text-blue-600" />
      <h2 className="text-3xl font-bold">Featured Projects</h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { 
          id: 1, 
          title: "Portfolio Website", 
          img: "/image.png", 
          description: "I built my portfolio using React, showcasing my skills, projects, and experience with a clean and modern UI. It highlights my expertise in frontend development and design." 
        },
        { 
          id: 2, 
          title: "Data Analysis Dashboard", 
          img: "/image1.png", 
          description: "This project utilizes Node.js for the backend to process and analyze data efficiently. It features interactive visualizations and analytics tools to help users make data-driven decisions." 
        },
        { 
          id: 3, 
          title: "Piston Hub – Bike Accessories Store", 
          img: "/piston.png", 
          description: "Piston Hub is an e-commerce platform for motorcycle accessories, designed with a responsive UI and smooth user experience. It enables easy browsing and purchasing of bike accessories." 
        }
      ].map((project) => (
        <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
          <img 
            src={project.img} 
            alt={project.title} 
            className="w-full h-58 object-cover" 
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex space-x-2">
              <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center">
                <Github className="w-5 h-5 mr-1" /> Code
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center ml-4">
                <ExternalLink className="w-5 h-5 mr-1" /> Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-2 mb-12">
            <Briefcase className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                role: "Software Development Intern",
                company: "Ekkennis Software",
                period: "2023 - 2024",
                description: "Led the development of multiple high-impact web applications using Wix and Javascript."
              },
              {
                role: "Web Development Intern",
                company: "V-tech Integerated Solutions",
                period: "2024 - 2025",
                description: "Developed and maintained front end  web applications using React and Javascript."
              }
            ].map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-1">{job.role}</h3>
                <p className="text-blue-600 mb-2">{job.company} • {job.period}</p>
                <p className="text-gray-600">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
            <div className="flex justify-center space-x-6">
              <a href="mailto:Yuvrajbhagyedh@gmail.com" target='blank' className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="w-6 h-6 mr-2" />
                Email
              </a>
              <a href="https://github.com/Yuvrajbhagyedh" target='blank' className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="w-6 h-6 mr-2" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/yuvraj-k-7521b824a/" target='blank' className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin className="w-6 h-6 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2025 Yuvraj. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
