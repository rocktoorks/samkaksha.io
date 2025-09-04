import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const logoUrl = 'https://horizons-cdn.hostinger.com/2bd608ca-1826-4fa8-947d-e9cc2eae5f69/a397c500be93cfb8a09d2a75a5bda983.png';
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Programs', path: '/#programs' },
    { name: 'Volunteer', path: '/volunteer' },
    { name: 'Contact', path: '/#contact' },
  ];

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    //
    setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
  };
  
  const handleNavClick = (path) => {
      if (path.startsWith('/#')) {
          if (location.pathname !== '/') {
              window.location.href = path;
          } else {
              scrollToSection(path.substring(2));
          }
      }
      setIsMenuOpen(false);
  };


  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <img src={logoUrl} alt="SAMKAKSHA FOUNDATION Logo" className="h-14 w-14" />
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
                <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                    {item.name}
                </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/donate">
              <Button
                className="hidden md:flex bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white shadow-lg"
              >
                Donate Now
              </Button>
            </Link>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-4 border-t border-gray-200"
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                  <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => handleNavClick(item.path)}
                      className="text-left text-gray-700 hover:text-purple-600 transition-colors font-medium"
                  >
                      {item.name}
                  </Link>
              ))}
              <Link to="/donate" onClick={() => setIsMenuOpen(false)}>
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white"
                >
                  Donate Now
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;