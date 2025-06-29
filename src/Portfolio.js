import React, { useState, useEffect } from 'react';
import { Github, Mail, Phone, MapPin, ExternalLink, Calendar, Award, Code, User, Briefcase, GraduationCap, FolderOpen } from 'lucide-react';
import chatImage from './images/chat.png';
const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navigation = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const projects = [
    {
      title: "Gatorides",
      description: "Full-stack Ride Sharing Platform with React,GOLANG, and MongoDB",
      tech: ["React", "GOLANG", "MongoDB", "Stripe"],
      github: "https://github.com/shahid-43/SE-Gatorides",
      image:"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
    },
    {
      title: "FitTrack",
      description: "Fitness Tracking App with Django, React, and PostgreSQL with AI-powered chatbot",
      tech: ["Django", "React", "PostgreSQL", "AI", "HuggingFace"],
      github: "https://github.com/shahid-43/fit_track",
    //   demo: "https://demo.com",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
  },
    {
      title: "Messaging App",
      description: "Messaging App with React, springboot, and PostgreSQL",
      tech: ["React", "springboot", "PostgreSQL"],
      github: "https://github.com/shahid-43/FitTrack",
    //   github: "https://github.com/shahid-43/AI-Powered-Chatbot",
    //   demo: "https://demo.com",
      image: chatImage
  },
    {
        title: "data structure and algorithm visualizer",
        description: "Data structure and algorithm visualizer with React",
        tech: ["React"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/800px-Binary_tree.svg.png"

      //   github: "https://github.com/shahid-43/AI-Powered-Chatbot",
      //   demo: "https://demo.com",
      },
      
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company: "Riskcovry",
      period: "2022 - 2024",
      description: "Built web applications from concept to deployment, developed various API services for Partner requirements, worked with cross-functional teams.",
      skills: ["JavaScript", "Python","Nodejs","Django", "React", "PostgreSQL", "Docker", "Git"]
    },
    {
      title: "ML Intern",
      company: "Verzeo",
      period: "2020",
      description: "Developed a machine learning model to predict the resale value of second-hand vehicles based on features like brand, mileage, fuel type, and age. Collected and cleaned data, performed exploratory analysis, and evaluated multiple regression algorithms to optimize prediction accuracy.",
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter Notebook"]
    }
    
  ];

  const education = [
    {
        degree: "MS in Compute and Information Science",
        school: "University of Florida",
        period: "2024 - 2026",
        gpa: "4.0/4.0",
        description: "Focused on Software Engineering and AI and Data Science"
      },
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Indian Institute of Technology, Gandhinagar",
      period: "2018 - 2022",
      gpa: "7/10",
      description: "Specialized in core computer science topics like algorithms, data structures, and computer architecture"
    }
    
  ];

  const Navbar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Portfolio
          </div> */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-800 ${
                    currentPage === item.id ? 'bg-gray-800 text-blue-400' : 'text-gray-300'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
          <a
            href="https://github.com/shahid-43"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-white"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1) 0%, transparent 30%)`
        }}
      />
      <div className={`text-center z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-400 p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
              <User size={50} className="text-gray-300" />
            </div>
          </div>
        </div>
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
         Shahid Shareef Mohammad
        </h1>
        <p className="text-2xl text-gray-300 mb-8 animate-fade-in-up">
          Full Stack Developer & AI Enthusiast
        </p>
        <div className="flex justify-center space-x-6 mb-12">
          {['React', 'Node.js', 'DJANGO', 'SpringBoot', 'Python', 'Java', 'Javascript','GOLANG','AWS', 'AI', 'SQL', 'Docker', 'AI', 'ML'].map((tech, index) => (
            <div
              key={tech}
              className={`px-4 py-2 bg-gray-800 rounded-full text-sm transition-all duration-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transform hover:scale-105`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </div>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage('projects')}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          View My Work
        </button>
      </div>
    </div>
  );

  const ProjectsPage = () => (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700 text-xs rounded-full text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                   {/* <a
                    href={project.demo}
                    className="flex items-center space-x-1 text-gray-300 hover:text-blue-400 transition-colors"
                  > 
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ExperiencePage = () => (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all duration-500 transform hover:scale-102"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-blue-400 font-semibold">{exp.company}</p>
                </div>
                <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                  <Calendar size={16} className="mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const EducationPage = () => (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-purple-400 font-semibold">{edu.school}</p>
                </div>
                <div className="flex flex-col items-end mt-2 md:mt-0">
                  <div className="flex items-center text-gray-400 mb-1">
                    <Calendar size={16} className="mr-2" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <Award size={16} className="mr-2" />
                    <span>{edu.gpa}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        {/* <div className="grid md:grid-cols-2 gap-12"> */}
        <div className="grid md:grid-cols-1 text-center gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
            <p className="text-gray-300 mb-8">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
            {/* <div className="space-y-4"> */}
            <div className="text-center">
              <div className="flex items-center space-x-4 text-gray-300 ">
                <Mail size={25} />
                <span>shahidshareef0102@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300">
                <Phone size={25} />
                <span>+1 (352) 246-2892</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300 ">
                <MapPin size={25} />
                <span>Gainesville, Florida</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors">
                <Github size={25} />
                <a href="https://github.com/shahid-43" target="_blank" rel="noopener noreferrer">
                  github
                </a>
              </div>
            </div>
          </div>
          {/* <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                onClick={() => alert('Message functionality would be implemented with backend')}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'experience':
        return <ExperiencePage />;
      case 'education':
        return <EducationPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10" />
      <Navbar />
      <main className="relative z-10">
        {renderPage()}
      </main>
      <div className="fixed bottom-6 right-6 md:hidden">
        <select
          value={currentPage}
          onChange={(e) => setCurrentPage(e.target.value)}
          className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
        >
          {navigation.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Portfolio;