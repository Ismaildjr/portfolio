import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaChartLine, FaEye, FaComments, FaImage, FaCode, FaRocket, FaDownload } from 'react-icons/fa';

const AIModels = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Models', icon: FaBrain },
    { id: 'nlp', name: 'NLP', icon: FaComments },
    { id: 'vision', name: 'Computer Vision', icon: FaEye },
    { id: 'generative', name: 'Generative AI', icon: FaImage },
    { id: 'predictive', name: 'Predictive', icon: FaChartLine },
  ];

  const models = [
    
  ];

  const filteredModels = activeCategory === 'all' 
    ? models 
    : models.filter(model => model.category === activeCategory);

  return (
    <section id="ai-models" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI <span className="gradient-text">Models</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my collection of cutting-edge AI models, each designed to solve specific 
            problems and deliver exceptional results across various domains.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-500 border-primary-500 text-white'
                  : 'border-primary-500/30 text-primary-400 hover:border-primary-500 hover:bg-primary-500/10'
              }`}
            >
              <category.icon className="text-lg" />
              <span className="font-medium">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredModels.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-100/50 backdrop-blur-sm rounded-xl border border-primary-500/30 overflow-hidden card-hover"
            >
              {/* Model Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-primary-700/20 flex items-center justify-center">
                <div className="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center">
                  <FaBrain className="text-4xl text-primary-400" />
                </div>
              </div>

              {/* Model Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{model.name}</h3>
                  <div className="flex items-center space-x-2">
                    <FaRocket className="text-primary-400" />
                    <span className="text-sm text-primary-400 font-medium">{model.accuracy}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {model.description}
                </p>

                {/* Model Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-2 bg-dark-200/50 rounded-lg">
                    <div className="text-xs text-gray-400">Parameters</div>
                    <div className="text-sm font-semibold text-white">{model.parameters}</div>
                  </div>
                  <div className="text-center p-2 bg-dark-200/50 rounded-lg">
                    <div className="text-xs text-gray-400">Accuracy</div>
                    <div className="text-sm font-semibold text-primary-400">{model.accuracy}</div>
                  </div>
                </div>

                {/* Use Case */}
                <div className="mb-4">
                  <div className="text-xs text-gray-400 mb-2">Use Cases:</div>
                  <div className="text-sm text-gray-300">{model.useCase}</div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="text-xs text-gray-400 mb-2">Technologies:</div>
                  <div className="flex flex-wrap gap-2">
                    {model.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <FaRocket className="text-sm" />
                    <span>Try Model</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border border-primary-500/30 text-primary-400 hover:bg-primary-500/10 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                  >
                    <FaDownload className="text-sm" />
                  </motion.button>
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
            Interested in custom AI model development or collaboration?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Build Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AIModels;
