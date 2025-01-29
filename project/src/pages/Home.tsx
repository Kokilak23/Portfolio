import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Code, Database, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const skills = [
    { name: 'Python', category: 'Languages' },
    { name: 'Java', category: 'Languages' },
    { name: 'C', category: 'Languages' },
    { name: 'Machine Learning', category: 'Technologies' },
    { name: 'AI', category: 'Technologies' },
    { name: 'MySQL', category: 'Databases' },
    { name: 'GitHub', category: 'Tools' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Book House',
      description: 'A web application for purchasing books online with features like search, shopping cart, and secure payment processing.',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?fit=crop&w=800&h=400',
      link: '#',
    },
    {
      id: 2,
      title: 'CyberBulling Detection',
      description: 'Advanced system using Pytesseract and BERT for detecting cyberbullying in text and image content.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?fit=crop&w=800&h=400',
      link: '#',
    },
    {
      id: 3,
      title: 'House Price Prediction',
      description: 'Machine learning model for predicting house prices based on various features using Python.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?fit=crop&w=800&h=400',
      link: '#',
    },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="lg:flex lg:items-center lg:justify-between">
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Hi, I'm{' '}
              <motion.span 
                className="text-blue-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Kokila K
              </motion.span>
            </h1>
            <motion.p 
              className="mt-3 text-xl text-gray-500 sm:mt-5 sm:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Software Engineer & AI Enthusiast
            </motion.p>
            <motion.p 
              className="mt-5 text-lg text-gray-600 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Currently pursuing Computer Science Engineering with a focus on AI and Machine Learning.
              Software Engineer Trainee at WebXela with experience in Frontend, Backend, and AI development.
            </motion.p>
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              >
                Get in touch
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </motion.span>
              </Link>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                Download Resume
                <Download className="ml-2 -mr-1 h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-10 lg:mt-0 lg:w-1/2"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=crop&w=800&h=800"
              alt="Kokila K"
              className="rounded-full w-64 h-64 mx-auto object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.section
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-900"
            variants={fadeInUpVariants}
          >
            Skills
          </motion.h2>
          <motion.div 
            className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
            variants={staggerChildren}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={scaleInVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <p className="font-medium text-gray-900">{skill.name}</p>
                <p className="text-sm text-gray-500">{skill.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Featured Projects Section */}
        <motion.section
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-900"
            variants={fadeInUpVariants}
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            className="mt-6 grid gap-8 lg:grid-cols-3"
            variants={staggerChildren}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={scaleInVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {project.description}
                  </p>
                  <Link
                    to={`/projects/${project.id}`}
                    className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-500"
                  >
                    Learn more
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-900"
            variants={fadeInUpVariants}
          >
            Certifications
          </motion.h2>
          <motion.div 
            className="mt-6 space-y-4"
            variants={staggerChildren}
          >
            {[
              { title: 'Salesforce Certified AI Specialist', date: 'January 2025' },
              { title: 'Salesforce Certified AI Associate', date: 'October 2024' },
              { title: 'GitHub Foundations', date: 'November 2024' }
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                variants={scaleInVariants}
                whileHover={{ x: 10 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-gray-600">{cert.date}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;