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
    {
      id: 1,
      name: 'Sentiment Analysis Engine',
      category: 'nlp',
      description: 'Advanced NLP model for real-time sentiment analysis with 95% accuracy',
      accuracy: '95%',
      parameters: '175M',
      useCase: 'Customer feedback analysis, social media monitoring',
      tech: ['BERT', 'Transformers', 'PyTorch'],
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Object Detection System',
      category: 'vision',
      description: 'Real-time object detection with YOLO architecture for autonomous systems',
      accuracy: '92%',
      parameters: '45M',
      useCase: 'Autonomous vehicles, security systems, retail analytics',
      tech: ['YOLO', 'OpenCV', 'TensorFlow'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'Text Generation Model',
      category: 'generative',
      description: 'Large language model for creative writing and content generation',
      accuracy: '88%',
      parameters: '1.5B',
      useCase: 'Content creation, chatbots, creative writing assistance',
      tech: ['GPT', 'Hugging Face', 'PyTorch'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      name: 'Demand Forecasting',
      category: 'predictive',
      description: 'Time series forecasting model for business demand prediction',
      accuracy: '89%',
      parameters: '25M',
      useCase: 'Inventory management, sales forecasting, resource planning',
      tech: ['LSTM', 'Prophet', 'Scikit-learn'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    },
    {
      id: 5,
      name: 'Image Style Transfer',
      category: 'generative',
      description: 'Neural style transfer model for artistic image transformation',
      accuracy: '91%',
      parameters: '68M',
      useCase: 'Digital art, content creation, design applications',
      tech: ['VGG', 'Neural Style', 'TensorFlow'],
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop',
    },
    {
      id: 6,
      name: 'Named Entity Recognition',
      category: 'nlp',
      description: 'Advanced NER model for extracting structured information from text',
      accuracy: '94%',
      parameters: '110M',
      useCase: 'Information extraction, document processing, data mining',
      tech: ['SpaCy', 'BERT', 'PyTorch'],
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    },
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
