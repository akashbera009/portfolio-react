import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../assets/ThemeContext';
import { motion } from 'framer-motion';
import './contact.css';

const SocialContactCard = ({ activeTheme }) => {
  const socials = [
    { icon: 'github', link: 'https://github.com/akashbera009', color: activeTheme.primary },
    { icon: 'mail', link: 'mailto:akashbera102003@gmail.com', color: activeTheme.primary },
    { icon: 'leetcode', link: 'https://leetcode.com/u/AKASH_BERA/', color: activeTheme.primary },
    { icon: 'gfg', link: 'https://www.geeksforgeeks.org/user/akashbers59y/', color: activeTheme.primary },
  ];

  return (
    <div className="social-card-container">
      <div className="social-card-inner">
        <span className="social-card-title">Socials</span>
        <div className="social-icons-grid">
          {socials.map((soc, idx) => (
            <a key={idx} href={soc.link} target="_blank" rel="noopener noreferrer" className="social-icon-link">
              {/* Icons will be handled by CSS or simple SVG placeholders for now to keep it clean */}
              <div className="icon-placeholder" style={{ backgroundColor: soc.color }}></div>
            </a>
          ))}
        </div>
        <div className="social-card-footer">
          Doors open, inbox ready — let’s talk
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const { activeTheme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{ color: activeTheme.textPrimary }}
        >
          Get in Touch
        </motion.h2>

        <div className="contact-grid">
          <div className="contact-form-wrapper">
            <motion.form
              className="glass-form"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              onSubmit={handleSubmit}
            >
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
                <span className="input-glow"></span>
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
                <span className="input-glow"></span>
              </div>
              <div className="input-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                />
                <span className="input-glow"></span>
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={status === 'sending'}
                style={{ backgroundColor: activeTheme.primary, color: activeTheme.background }}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </motion.button>

              {status === 'success' && (
                <motion.p
                  className="success-msg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ color: activeTheme.primary }}
                >
                  Message sent successfully! 🚀
                </motion.p>
              )}
            </motion.form>
          </div>

          <div className="contact-social-wrapper">
            <SocialContactCard activeTheme={activeTheme} />
            <div className="contact-cta">
              <p style={{ color: activeTheme.textSecondary }}>
                Have a project idea? Let's turn it into reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
