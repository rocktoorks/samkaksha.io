import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { toast } from '@/components/ui/use-toast';

const PolicyModal = ({ triggerText, title, children }) => (
  <Dialog>
    <DialogTrigger asChild>
      <button className="text-gray-300 hover:text-white transition-colors">{triggerText}</button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[625px]">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold gradient-text">{title}</DialogTitle>
        <DialogDescription>
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </DialogDescription>
      </DialogHeader>
      <div className="prose prose-sm max-h-[60vh] overflow-y-auto pr-4 text-gray-600">
        {children}
      </div>
    </DialogContent>
  </Dialog>
);

const Footer = () => {
    const logoUrl = 'https://horizons-cdn.hostinger.com/2bd608ca-1826-4fa8-947d-e9cc2eae5f69/a397c500be93cfb8a09d2a75a5bda983.png';
  const handleSocialClick = (platform) => {
    toast({
      title: `🚧 ${platform} integration isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
      duration: 4000,
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
                <Link to="/">
                    <img src={logoUrl} alt="SAMKAKSHA FOUNDATION Logo" className="h-14 w-14" />
                </Link>
              <div>
                <a href="https://www.samkaksha.org" target="_blank" rel="noopener noreferrer" className="text-xl font-bold">SAMKAKSHA</a>
                <p className="text-sm text-gray-300">FOUNDATION</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A non-profit organisation registered under Section 8 of the Companies Act, 2013.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, name: 'Facebook' },
                { icon: Twitter, name: 'Twitter' },
                { icon: Instagram, name: 'Instagram' },
                { icon: Linkedin, name: 'LinkedIn' }
              ].map((social) => (
                <button
                  key={social.name}
                  onClick={() => handleSocialClick(social.name)}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold mb-6 block">Quick Links</span>
            <ul className="space-y-3">
                <li><Link to="/#about" onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/#programs" onClick={() => scrollToSection('programs')} className="text-gray-300 hover:text-white transition-colors">Our Programs</Link></li>
                <li><Link to="/#impact" onClick={() => scrollToSection('impact')} className="text-gray-300 hover:text-white transition-colors">Impact Stories</Link></li>
                <li><Link to="/#contact" onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/annual-reports" className="text-gray-300 hover:text-white transition-colors">Annual Reports</Link></li>
               <li>
                <a href="https://horizons-cdn.hostinger.com/2bd608ca-1826-4fa8-947d-e9cc2eae5f69/a812597d90c321994eb18d08eaf55481.png" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" /> NGO DARPAN
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold mb-6 block">Get Involved</span>
            <ul className="space-y-3">
              <li><Link to="/volunteer" className="text-gray-300 hover:text-white transition-colors">Volunteer</Link></li>
              <li><Link to="/partner-with-us" className="text-gray-300 hover:text-white transition-colors">Partner with Us</Link></li>
              <li><Link to="/donate" className="text-gray-300 hover:text-white transition-colors">Donate</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold mb-6 block">Contact Info</span>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Sector-17, Rohini</p>
                  <p>New Delhi-110089, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">+91-93133 72162</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300">samkaksha.org@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/20 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} SAMKAKSHA FOUNDATION. Website: <a href="https://www.samkaksha.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">www.samkaksha.org</a>
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <PolicyModal triggerText="Privacy Policy" title="Privacy Policy">
                <p>Your privacy is important to us. It is Samkaksha Foundation's policy to respect your privacy regarding any information we may collect from you across our website, https://www.samkaksha.org, and other sites we own and operate.</p>
                <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
                <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
                <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
              </PolicyModal>
              <PolicyModal triggerText="Terms of Service" title="Terms of Service">
                <p>By accessing the website at https://www.samkaksha.org, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
                <p>Permission is granted to temporarily download one copy of the materials (information or software) on Samkaksha Foundation's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
                <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Samkaksha Foundation at any time.</p>
              </PolicyModal>
              <PolicyModal triggerText="Cookie Policy" title="Cookie Policy">
                <p>We use cookies to help improve your experience of our website at https://www.samkaksha.org. This cookie policy is part of Samkaksha Foundation's privacy policy, and covers the use of cookies between your device and our site.</p>
                <p>We also use third-party services which may also use cookies as part of their service, though they are not covered by our policy.</p>
                <p>If you do not wish to accept cookies from us, you should instruct your browser to refuse cookies from our website, with the understanding that we may be unable to provide you with some of your desired content and services.</p>
              </PolicyModal>
              <PolicyModal triggerText="Transparency" title="Transparency">
                <p>Samkaksha Foundation is committed to transparency and accountability. As a non-profit organisation registered under Section 8 of the Companies Act, 2013, we believe in being open about our operations, funding, and impact.</p>
                <p>Our financial records and annual reports are available for public review to ensure our donors and partners are fully informed about how their contributions are making a difference.</p>
                <p>We are registered on the NGO DARPAN portal of the Government of India. Our Unique ID is DL/2024/0463849. This registration ensures our compliance with government regulations and enhances our credibility.</p>
              </PolicyModal>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;