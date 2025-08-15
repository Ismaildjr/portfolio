import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode, FaUsers, FaCalendar, FaTag } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'api', name: 'APIs' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Cardiac Disease Prediction',
      category: 'ai',
      description: 'A machine learning model that predicts cardiac disease risk using patient data and medical indicators. Built with Python and scikit-learn, featuring data preprocessing, model training, and prediction capabilities.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      technologies: ['Python', 'Scikit-learn', 'Machine Learning', 'Data Analysis', 'Joblib'],
      github: 'https://github.com/Ismaildjr/cardiac-disease-prediction',
      live: 'https://cardiac-disease-prediction.onrender.com',
      stars: 0,
      forks: 0,
      featured: true,
    },
    {
      id: 2,
      title: 'Software Error Prediction API',
      category: 'api',
      description: 'AI-powered API for predicting software errors from log files. Containerized with Docker and designed for easy deployment and integration with existing systems.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      technologies: ['Python', 'AI/ML', 'Docker', 'FastAPI', 'Deep Learning' , 'API', 'Log Analysis'],
      github: 'https://github.com/Ismaildjr/software-failure-predictor',
      live: 'https://software-error-prediction.onrender.com/model/load',
      stars: 0,
      forks: 0,
      featured: true,
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my portfolio of AI and machine learning projects that showcase 
            innovative problem-solving approaches and technical expertise.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-500 border-primary-500 text-white'
                  : 'border-primary-500/30 text-primary-400 hover:border-primary-500 hover:bg-primary-500/10'
              }`}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-dark-100/50 backdrop-blur-sm rounded-xl border overflow-hidden card-hover ${
                project.featured ? 'border-primary-500/50 ring-2 ring-primary-500/20' : 'border-primary-500/30'
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-primary-700/20">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100/80 to-transparent"></div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-dark-200/80 hover:bg-primary-500 p-2 rounded-lg transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-white text-lg" />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-dark-200/80 hover:bg-primary-500 p-2 rounded-lg transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="text-white text-lg" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <FaStar className="text-yellow-400" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaCode className="text-blue-400" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaTag className="text-primary-400" />
                    <span className="capitalize">{project.category}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-dark-200 hover:bg-primary-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-sm" />
                    <span>View Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>{project.category === 'api' ? 'View Details' : 'Live Demo'}</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Want to see more projects or discuss potential collaborations?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
