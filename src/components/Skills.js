import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaCode, FaDatabase, FaCloud, FaTools, FaRocket, FaStar } from 'react-icons/fa';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('ai');

  const categories = [
    { id: 'ai', name: 'AI/ML', icon: FaBrain, color: 'from-purple-500 to-pink-500' },
    { id: 'programming', name: 'Programming', icon: FaCode, color: 'from-blue-500 to-cyan-500' },
    { id: 'databases', name: 'Databases', icon: FaDatabase, color: 'from-green-500 to-emerald-500' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: FaCloud, color: 'from-orange-500 to-red-500' },
    { id: 'tools', name: 'Tools & Frameworks', icon: FaTools, color: 'from-indigo-500 to-purple-500' },
  ];

  const skills = {
    ai: [
      { name: 'Machine Learning', level: 95, description: 'Deep learning, neural networks, supervised/unsupervised learning' },
      { name: 'Natural Language Processing', level: 90, description: 'BERT, GPT, transformers, text analysis' },
      { name: 'Computer Vision', level: 88, description: 'OpenCV, YOLO, image processing, object detection' },
      { name: 'Deep Learning', level: 92, description: 'TensorFlow, PyTorch, CNN, RNN, LSTM' },
      { name: 'Data Science', level: 85, description: 'Statistical analysis, data visualization, predictive modeling' },
      { name: 'AI Ethics', level: 80, description: 'Bias detection, fairness, responsible AI development' },
    ],
    programming: [
      { name: 'Python', level: 95, description: 'Advanced Python programming, data structures, algorithms' },
      { name: 'JavaScript/TypeScript', level: 88, description: 'Modern JS, React, Node.js, full-stack development' },
      { name: 'Java', level: 82, description: 'Enterprise applications, Spring framework, microservices' },
      { name: 'C++', level: 78, description: 'System programming, performance optimization, algorithms' },
      { name: 'R', level: 75, description: 'Statistical computing, data analysis, visualization' },
      { name: 'Go', level: 70, description: 'Cloud-native development, microservices, concurrency' },
    ],
    databases: [
      { name: 'PostgreSQL', level: 90, description: 'Advanced SQL, optimization, data modeling' },
      { name: 'MongoDB', level: 85, description: 'NoSQL, document databases, aggregation pipelines' },
      { name: 'Redis', level: 80, description: 'In-memory databases, caching, session management' },
      { name: 'Elasticsearch', level: 75, description: 'Search engines, log analysis, data indexing' },
      { name: 'InfluxDB', level: 70, description: 'Time series databases, IoT data, monitoring' },
      { name: 'Neo4j', level: 65, description: 'Graph databases, relationship modeling, graph algorithms' },
    ],
    cloud: [
      { name: 'AWS', level: 88, description: 'EC2, S3, Lambda, SageMaker, cloud architecture' },
      { name: 'Docker', level: 85, description: 'Containerization, microservices, deployment' },
      { name: 'Kubernetes', level: 80, description: 'Container orchestration, scaling, management' },
      { name: 'Terraform', level: 75, description: 'Infrastructure as code, automation, cloud provisioning' },
      { name: 'CI/CD', level: 82, description: 'GitHub Actions, Jenkins, automated deployment' },
      { name: 'Monitoring', level: 78, description: 'Prometheus, Grafana, logging, alerting' },
    ],
    tools: [
      { name: 'Git', level: 92, description: 'Version control, branching strategies, collaboration' },
      { name: 'Jupyter', level: 90, description: 'Data analysis, notebooks, interactive development' },
      { name: 'VS Code', level: 88, description: 'Development environment, extensions, debugging' },
      { name: 'Tableau', level: 75, description: 'Data visualization, business intelligence, dashboards' },
      { name: 'Apache Spark', level: 70, description: 'Big data processing, distributed computing' },
      { name: 'Streamlit', level: 80, description: 'Web applications, data apps, rapid prototyping' },
    ],
  };

  const getLevelColor = (level) => {
    if (level >= 90) return 'from-green-400 to-emerald-500';
    if (level >= 80) return 'from-blue-400 to-cyan-500';
    if (level >= 70) return 'from-yellow-400 to-orange-500';
    return 'from-gray-400 to-gray-500';
  };

  const getLevelText = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains, 
            from cutting-edge AI technologies to robust software development practices.
          </p>
        </motion.div>

        {/* Category Tabs */}
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
              className={`flex items-center space-x-3 px-6 py-3 rounded-full border transition-all duration-300 ${
                activeCategory === category.id
                  ? 'border-primary-500 bg-primary-500 text-white'
                  : 'border-primary-500/30 text-primary-400 hover:border-primary-500 hover:bg-primary-500/10'
              }`}
            >
              <category.icon className="text-lg" />
              <span className="font-medium">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skills[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-100/50 backdrop-blur-sm rounded-xl border border-primary-500/30 p-6 card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-primary-400 font-medium">{skill.level}%</span>
                  <FaStar className="text-yellow-400" />
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {skill.description}
              </p>

              {/* Progress Bar */}
              <div className="mb-3">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Proficiency</span>
                  <span>{getLevelText(skill.level)}</span>
                </div>
                <div className="w-full bg-dark-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`h-2 rounded-full bg-gradient-to-r ${getLevelColor(skill.level)}`}
                  ></motion.div>
                </div>
              </div>

              {/* Skill Level Indicator */}
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getLevelColor(skill.level)}`}></div>
                <span className="text-xs text-gray-400">{getLevelText(skill.level)} Level</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-dark-100/50 rounded-xl border border-primary-500/30">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaRocket className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Fast Learning</h3>
            <p className="text-gray-400 text-sm">
              Quick to adapt to new technologies and frameworks, always staying current with industry trends.
            </p>
          </div>

          <div className="text-center p-6 bg-dark-100/50 rounded-xl border border-primary-500/30">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaBrain className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Problem Solving</h3>
            <p className="text-gray-400 text-sm">
              Strong analytical skills with a proven track record of solving complex technical challenges.
            </p>
          </div>

          <div className="text-center p-6 bg-dark-100/50 rounded-xl border border-primary-500/30">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCode className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Clean Code</h3>
            <p className="text-gray-400 text-sm">
              Writing maintainable, scalable, and well-documented code following best practices.
            </p>
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
            Looking for someone with specific technical skills for your project?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Discuss
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
