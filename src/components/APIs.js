import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaCloud, FaShieldAlt, FaRocket, FaExternalLinkAlt, FaCopy, FaCheck } from 'react-icons/fa';

const APIs = () => {
  const [copiedEndpoint, setCopiedEndpoint] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(id);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  const apis = [
    {
      id: 1,
      name: 'AI Text Analysis API',
      description: 'Comprehensive text analysis service with sentiment analysis, entity recognition, and language detection.',
      endpoint: 'https://api.example.com/v1/text/analyze',
      method: 'POST',
      status: 'live',
      responseTime: '150ms',
      uptime: '99.9%',
      features: ['Sentiment Analysis', 'Entity Recognition', 'Language Detection', 'Text Classification'],
      pricing: 'Free tier: 1000 requests/month',
      documentation: 'https://docs.example.com',
      featured: true,
    },
    {
      id: 2,
      name: 'Computer Vision API',
      description: 'Advanced image and video analysis with object detection, face recognition, and OCR capabilities.',
      endpoint: 'https://api.example.com/v1/vision/analyze',
      method: 'POST',
      status: 'live',
      responseTime: '200ms',
      uptime: '99.8%',
      features: ['Object Detection', 'Face Recognition', 'OCR', 'Image Classification'],
      pricing: 'Free tier: 500 requests/month',
      documentation: 'https://docs.example.com',
      featured: true,
    },
    {
      id: 3,
      name: 'Predictive Analytics API',
      description: 'Machine learning-powered forecasting and prediction services for business intelligence.',
      endpoint: 'https://api.example.com/v1/predict/forecast',
      method: 'POST',
      status: 'beta',
      responseTime: '300ms',
      uptime: '99.5%',
      features: ['Time Series Forecasting', 'Regression Analysis', 'Classification', 'Anomaly Detection'],
      pricing: 'Free tier: 200 requests/month',
      documentation: 'https://docs.example.com',
      featured: false,
    },
    {
      id: 4,
      name: 'Natural Language Generation API',
      description: 'AI-powered text generation for content creation, summarization, and language translation.',
      endpoint: 'https://api.example.com/v1/nlg/generate',
      method: 'POST',
      status: 'live',
      responseTime: '250ms',
      uptime: '99.7%',
      features: ['Text Generation', 'Summarization', 'Translation', 'Content Creation'],
      pricing: 'Free tier: 300 requests/month',
      documentation: 'https://docs.example.com',
      featured: false,
    },
    {
      id: 5,
      name: 'Data Processing API',
      description: 'High-performance data processing and transformation services for large datasets.',
      endpoint: 'https://api.example.com/v1/data/process',
      method: 'POST',
      status: 'live',
      responseTime: '400ms',
      uptime: '99.6%',
      features: ['Data Cleaning', 'Transformation', 'Aggregation', 'Validation'],
      pricing: 'Free tier: 100 requests/month',
      documentation: 'https://docs.example.com',
      featured: false,
    },
    {
      id: 6,
      name: 'Recommendation Engine API',
      description: 'Intelligent recommendation system for personalized content and product suggestions.',
      endpoint: 'https://api.example.com/v1/recommend/suggest',
      method: 'POST',
      status: 'live',
      responseTime: '180ms',
      uptime: '99.9%',
      features: ['Collaborative Filtering', 'Content-Based', 'Hybrid', 'Real-time Updates'],
      pricing: 'Free tier: 400 requests/month',
      documentation: 'https://docs.example.com',
      featured: false,
    },
  ];

  const statusColors = {
    live: 'bg-green-500',
    beta: 'bg-yellow-500',
    maintenance: 'bg-red-500',
  };

  const methodColors = {
    GET: 'bg-green-500',
    POST: 'bg-blue-500',
    PUT: 'bg-yellow-500',
    DELETE: 'bg-red-500',
  };

  return (
    <section id="apis" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI <span className="gradient-text">APIs</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover my collection of powerful AI APIs that provide easy access to cutting-edge 
            machine learning capabilities and intelligent services.
          </p>
        </motion.div>

        {/* APIs Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {apis.map((api, index) => (
            <motion.div
              key={api.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-dark-100/50 backdrop-blur-sm rounded-xl border overflow-hidden card-hover ${
                api.featured ? 'border-primary-500/50 ring-2 ring-primary-500/20' : 'border-primary-500/30'
              }`}
            >
              {/* API Header */}
              <div className="p-6 border-b border-primary-500/20">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-white">{api.name}</h3>
                      {api.featured && (
                        <span className="bg-primary-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {api.description}
                    </p>
                  </div>
                </div>

                {/* API Status and Method */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${statusColors[api.status]}`}></div>
                    <span className="text-sm text-gray-400 capitalize">{api.status}</span>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-mono font-semibold text-white ${methodColors[api.method]}`}>
                    {api.method}
                  </span>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <FaRocket />
                    <span>{api.responseTime}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <FaServer />
                    <span>{api.uptime}</span>
                  </div>
                </div>

                {/* Endpoint */}
                <div className="bg-dark-200/50 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <code className="text-sm text-primary-400 font-mono break-all">
                      {api.endpoint}
                    </code>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => copyToClipboard(api.endpoint, api.id)}
                      className="ml-3 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      {copiedEndpoint === api.id ? <FaCheck className="text-green-400" /> : <FaCopy />}
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* API Content */}
              <div className="p-6">
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {api.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Pricing</h4>
                  <p className="text-gray-300 text-sm">{api.pricing}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={api.documentation}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaCode className="text-sm" />
                    <span>View Docs</span>
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-dark-200 hover:bg-primary-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <FaRocket className="text-sm" />
                    <span>Try API</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* API Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">6</div>
            <div className="text-gray-400">Active APIs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">99.8%</div>
            <div className="text-gray-400">Average Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">250ms</div>
            <div className="text-gray-400">Avg Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">10K+</div>
            <div className="text-gray-400">Monthly Requests</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Need a custom API or want to integrate with existing services?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Get Custom API
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default APIs;
