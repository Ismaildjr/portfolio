import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaCode, FaGraduationCap, FaAward, FaUsers, FaGlobe } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: FaBrain, number: '5+', label: 'AI Models', delay: 0.2 },
    { icon: FaCode, number: '15+', label: 'Projects', delay: 0.4 },
    { icon: FaUsers, number: '100+', label: 'Happy Clients', delay: 0.6 },
    { icon: FaAward, number: '3+', label: 'Years Experience', delay: 0.8 },
  ];

  const highlights = [
    'Specialized in Natural Language Processing and Computer Vision',
    'Built scalable AI solutions for enterprise applications',
    'Expert in Python, TensorFlow, PyTorch, and cloud deployment',
    'Passionate about democratizing AI technology',
    'Active contributor to open-source AI projects',
    'Speaker at AI conferences and tech meetups',
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate AI Engineer dedicated to pushing the boundaries of artificial intelligence 
            and creating innovative solutions that make a real impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                <FaBrain className="text-8xl text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-dark-100 rounded-full border-4 border-primary-500 flex items-center justify-center">
                <FaCode className="text-3xl text-primary-400" />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: stat.delay }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-dark-100/50 rounded-lg border border-primary-500/30"
                >
                  <stat.icon className="text-3xl text-primary-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Passionate About <span className="gradient-text">AI Innovation</span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                With over 3 years of experience in artificial intelligence, I've dedicated my career 
                to developing cutting-edge AI models and solutions that solve real-world problems. 
                My expertise spans across machine learning, deep learning, and AI system architecture.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe in the transformative power of AI and work tirelessly to create solutions 
                that are not only technically advanced but also ethically sound and accessible to everyone.
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Key Highlights</h4>
              <div className="grid gap-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-dark-100/50 p-4 rounded-lg border border-primary-500/30">
                <div className="flex items-center space-x-3 mb-3">
                  <FaGraduationCap className="text-primary-400 text-xl" />
                  <h5 className="text-white font-semibold">Education</h5>
                </div>
                <p className="text-gray-300 text-sm">
                  Master's in Computer Science<br />
                  Specialization in AI & ML
                </p>
              </div>
              
              <div className="bg-dark-100/50 p-4 rounded-lg border border-primary-500/30">
                <div className="flex items-center space-x-3 mb-3">
                  <FaGlobe className="text-primary-400 text-xl" />
                  <h5 className="text-white font-semibold">Location</h5>
                </div>
                <p className="text-gray-300 text-sm">
                  Remote & Worldwide<br />
                  Available for global projects
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
