import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'AI Models': [
      { name: 'NLP Models', href: '#ai-models' },
      { name: 'Computer Vision', href: '#ai-models' },
      { name: 'Predictive Analytics', href: '#ai-models' },
      { name: 'Generative AI', href: '#ai-models' },
    ],
    'Projects': [
      { name: 'Web Applications', href: '#projects' },
      { name: 'Mobile Apps', href: '#projects' },
      { name: 'AI Solutions', href: '#projects' },
      { name: 'Open Source', href: '#projects' },
    ],
    'Services': [
      { name: 'Custom AI Models', href: '#contact' },
      { name: 'API Development', href: '#apis' },
      { name: 'Consulting', href: '#contact' },
      { name: 'Training', href: '#contact' },
    ],
    'Company': [
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Contact', href: '#contact' },
      { name: 'Blog', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:text-cyan-400' },
    { icon: FaEnvelope, href: 'mailto:hello@aiportfolio.com', label: 'Email', color: 'hover:text-primary-400' },
  ];

  return (
    <footer className="bg-dark-200/50 border-t border-primary-500/20">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <FaBrain className="text-3xl text-primary-500" />
                  <span className="text-2xl font-bold text-white">AI Portfolio</span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Transforming ideas into intelligent solutions through cutting-edge AI models, 
                  innovative projects, and powerful APIs that drive the future of technology.
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex space-x-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-dark-100/50 border border-primary-500/30 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (categoryIndex + 1) }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-8 border-t border-primary-500/20"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-3">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get the latest updates on new AI models, projects, and industry insights.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-dark-100/50 border border-primary-500/30 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-r-lg font-medium transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="py-6 border-t border-primary-500/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} AI Portfolio. All rights reserved. Built with ❤️ and React.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-40"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={18} />
      </motion.button>
    </footer>
  );
};

export default Footer;
