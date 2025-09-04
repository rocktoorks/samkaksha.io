import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/PageTransition';

const NotFound = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>404 - Page Not Found | SAMKAKSHA FOUNDATION</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>
      <div className="flex items-center justify-center min-h-[70vh] text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-9xl font-extrabold gradient-text mb-4">404</h1>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for seems to have taken a day off.
          </p>
          <Link to="/">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90">
              Return to Homepage
            </Button>
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default NotFound;